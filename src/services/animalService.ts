import axios from 'axios';
import type { Animal } from '../types/Animal';

export const getUserAnimals = async (): Promise<Animal[]> => {
  const response = await axios.get('/api/user-animals/get', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};