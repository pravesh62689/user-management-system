
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slice';
import { toast } from 'react-toastify';

const UserForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [age, setAge] = useState<number | string>('');
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !age) {
      setError('All fields are required.');
      return;
    }
    if (isNaN(Number(age)) || Number(age) <= 0) {
      setError('Please enter a valid age.');
      return;
    }

    dispatch(addUser({ username, age: Number(age), hobbies: [] }));
    setUsername('');
    setAge('');
    setError('');
    toast.success("User created successfully!");
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', backgroundColor: '#f4f4f9', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <h3 style={{ textAlign: 'center', fontSize: '1.5rem', color: '#333', marginBottom: '20px' }}>Add User</h3>

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        <label style={{ color: '#555' }}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ padding: '10px', fontSize: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </label>

        <label style={{ color: '#555' }}>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            style={{ padding: '10px', fontSize: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: '10px',
            fontSize: '1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
