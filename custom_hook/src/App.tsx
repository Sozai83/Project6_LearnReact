import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserCard } from './components/UserCard';
import axios from 'axios'
import { User } from "./types/api/user"
import { UserProfile } from './types/userProfile';

const user = {
  id: 1,
  name: 'Shiori',
  email: 'email@email.com',
  address: 'address'
}

function App() {

  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchUsers = () => {
    setLoading(true);

    axios
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name} (${user.username})`,
          email: user.email,
          address: `${user.address.city} ${user.address.suite} ${user.address.street}`
        }))
        setUserProfiles(data)

      })
      .catch(() => setError(true))
      .finally(() => setTimeout(() => setLoading(false), 5000))
  }
  return (
    <div className="App">
      <button onClick={fetchUsers}>Fetch Users</button>
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
