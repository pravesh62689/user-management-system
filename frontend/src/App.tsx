import React, { useState, useEffect } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from './services/api';
import { User } from './types/user';
import NodeVisualization from './components/NodeVisualization';
import Sidebar from './components/Sidebar';
import UserForm from './components/UserForm';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleCreateUser = async (user: User) => {
    try {
      const newUser = await createUser(user);
      setUsers([...users, newUser]);
    } catch (err) {
      setError('Failed to create user');
    }
  };

  const handleUpdateUser = async (userId: string, updatedUser: User) => {
    try {
      const updated = await updateUser(userId, updatedUser);
      setUsers(users.map((user) => (user.id === userId ? updated : user)));
    } catch (err) {
      setError('Failed to update user');
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (err) {
      setError('Failed to delete user');
    }
  };

  return (
    <div className="App">
      <h1>User Management System</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <NodeVisualization users={users} onDelete={handleDeleteUser} onUpdate={handleUpdateUser} />
      <Sidebar onCreateUser={handleCreateUser} />
      <UserForm onSubmit={handleCreateUser} />
    </div>
  );
};

export default App;
