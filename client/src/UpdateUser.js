import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', email: '', age: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`)
      .then(res => setForm(res.data));
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:5000/users/${id}`, form)
      .then(() => navigate('/'));
  };

  return (
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <form onSubmit={handleSubmit}>
      <h2>Update User</h2>
      <input name="name" value={form.name} onChange={handleChange} required />
      <input name="email" value={form.email} onChange={handleChange} required />
      <input name="age" type="number" value={form.age} onChange={handleChange} required />
      <button type="submit">Update</button>
    </form>
    </div>
  );
};

export default UpdateUser;
