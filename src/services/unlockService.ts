import axios from 'axios';

export const unlockAnimal = async (
  animalId: number,
  name: string,
  file: File
): Promise<any> => {
  const formData = new FormData();
  formData.append('animalId', animalId.toString());
  formData.append('name', name);
  formData.append('file', file);

  const response = await axios.post('/api/user-animals/unlock', formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};