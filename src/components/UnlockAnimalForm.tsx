import { useState } from 'react';
import { unlockAnimal } from '../services/unlockService';
import { useTranslation } from 'react-i18next';

interface Props {
  animalId: number;
  onSuccess?: () => void;
}

export default function UnlockAnimalForm({ animalId, onSuccess }: Props) {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !name) {
      setError(t('form_error'));
      return;
    }

    setLoading(true);
    try {
      await unlockAnimal(animalId, name, file);
      setName('');
      setFile(null);
      setError('');
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(t('unlock_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md flex flex-col gap-4">
      <h2 className="text-lg font-bold">{t('unlock_animal')}</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder={t('animal_name')}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="border p-2 rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {loading ? t('loading') : t('unlock')}
      </button>
    </form>
  );
}