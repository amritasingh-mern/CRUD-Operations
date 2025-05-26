import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [form, setForm] = useState({ name: '', email: '', age: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/users', form).then(() => navigate('/'));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
      <button type="submit" className="btn btn-warning btn-sm me-2">Create</button>
    </form>
    </div>
    </div>
  );
};

export default CreateUser;
