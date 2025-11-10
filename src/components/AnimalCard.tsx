import type { Animal } from '../types/Animal';import { useTranslation } from 'react-i18next';
import UnlockAnimalForm from './UnlockAnimalform';

interface Props {
  animal: Animal;
}

export default function AnimalCard({ animal }: Props) {
  const { t } = useTranslation();

  return (
    <div className="border rounded p-4 shadow-sm bg-white flex flex-col gap-2">
      <img
        src={animal.imageUrl || 'https://via.placeholder.com/150'}
        alt={animal.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-semibold">{animal.name}</h3>
      <p className="text-sm text-gray-600">{animal.species}</p>
      {animal.unlocked ? (
        <p className="text-green-600 font-medium">{t('unlocked')}</p>
      ) : (
        <div>
          <p className="text-red-500 font-medium">{t('locked')}</p>
          <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            {t('unlock')}
          </button>
        </div>
      )}
  <h3>{animal.name}</h3>
    {!animal.unlocked && (
      <UnlockAnimalForm
        animalId={animal.id}
        onSuccess={() => alert('Animal desbloquejat!')}
      />
    )}

    </div>
    
  );
}