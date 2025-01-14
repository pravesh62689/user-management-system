import axios from 'axios';
import { User } from '../types/user';

const API_URL = 'http://localhost:5000/api/users';

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createUser = async (user: User): Promise<User> => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

export const updateUser = async (userId: string, user: User): Promise<User> => {
  const response = await axios.put(`${API_URL}/${userId}`, user);
  return response.data;
};

export const deleteUser = async (userId: string): Promise<void> => {
  await axios.delete(`${API_URL}/${userId}`);
};
