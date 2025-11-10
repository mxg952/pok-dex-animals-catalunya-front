import axios from 'axios';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface JwtResponse {
  token: string;
  role: 'USER' | 'ADMIN';
}

export const login = async (data: LoginRequest): Promise<JwtResponse> => {
  const response = await axios.post('/api/users/login', data);
  return response.data;
};