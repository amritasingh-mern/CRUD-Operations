import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => setUsers(res.data));
  }, []);

  const deleteUser = id => {
    axios.delete(`http://localhost:5000/users/${id}`)
      .then(() => setUsers(users.filter(user => user._id !== id)));
  };

  return (
    <div className="d-flex v-100 bg-white justify-content-center align-items-center">
      <h2>User List</h2>
      <Link to="/create" className="btn btn-success mb-2">Create User</Link>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} - {user.email} - {user.age}
            <Link to={`/update/${user._id}`} className="ms-3">Edit</Link>
            <button onClick={() => deleteUser(user._id)} className="ms-3">Delete</button>
          </li>
        ))}
      </ul>
  </div>
  );
};

export default Users;
