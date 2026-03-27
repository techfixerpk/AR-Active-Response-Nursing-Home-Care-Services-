
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Swal from 'sweetalert2';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

    const user = login({ email, pass });

    Swal.fire('Success', user.isAdmin ? 'Welcome Admin Awais Babar' : 'Login Successful', 'success');
    if (user.isAdmin) navigate('/admin');
    else navigate('/');
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-50'>
      <form onSubmit={handleLogin} className='bg-white p-8 rounded-xl shadow-xl w-96 border'>
        <h2 className='text-2xl font-bold text-center mb-6 text-primary'>AR Login</h2>
        <input name='email' type='email' placeholder='Email' required className='w-full mb-4 p-3 border rounded' />
        <input name='password' type='password' placeholder='Password' required className='w-full mb-6 p-3 border rounded' />
        <button className='w-full bg-primary text-white py-3 rounded-lg font-bold'>Sign In</button>
        <p className='text-center mt-4 text-sm text-gray-500'>Founder: Awais Babar | 0347-2241304</p>
      </form>
    </div>
  );
}
