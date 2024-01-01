import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserCard } from './components/UserCard';
import axios from 'axios'
import { User } from "./types/api/user"
import { UserProfile } from './types/userProfile';
import { useAllUsers } from './hooks/useAllUsers';

const user = {
  id: 1,
  name: 'Shiori',
  email: 'email@email.com',
  address: 'address'
}

function App() {

  const {
    getUsers,
    userProfiles,
    loading,
    error
  } = useAllUsers();

  return (
    <div className="App">
      <button onClick={getUsers}>Fetch Users</button>
      {error ? (
        <p color="red">Failed to fetch data.</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
