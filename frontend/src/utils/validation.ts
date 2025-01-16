export const validateUser = (username: string, age: number | string) => {
  if (!username.trim()) return "Username is required.";
  if (!age || isNaN(Number(age)) || Number(age) <= 0)
    return "Age must be a positive number.";
  return null;
};
