import { User } from '../types/user';

export const validateUser = (user: User): string | null => {
  if (!user.username || !user.age) {
    return 'Username and Age are required.';
  }
  if (user.age <= 0) {
    return 'Age must be a positive number.';
  }
  return null;
};
