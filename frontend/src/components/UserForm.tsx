import React, { useState } from 'react';
import { User } from '../types/user';
import { validateUser } from '../utils/validation';

interface UserFormProps {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState<string>('');
  const [age, setAge] = useState<number | string>('');
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newUser: User = { id: '', username, age: Number(age), hobbies };

    const validationError = validateUser(newUser);
    if (validationError) {
      setError(validationError);
    } else {
      onSubmit(newUser);
      setUsername('');
      setAge('');
      setHobbies([]);
      setError(null);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Hobbies:</label>
          <input
            type="text"
            value={hobbies.join(', ')}
            onChange={(e) => setHobbies(e.target.value.split(',').map((hobby) => hobby.trim()))}
          />
        </div>
        <button type="submit">Create User</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default UserForm;
