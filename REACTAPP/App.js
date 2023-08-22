import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import { LoaderContainer } from './styles/AppStyles';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar onGetUsersClick={handleGetUsers} loading={loading} />
      {loading ? (
        <LoaderContainer>Loading...</LoaderContainer>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '20px' }}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
};

export default App;
