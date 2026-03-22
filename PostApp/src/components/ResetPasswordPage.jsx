import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import authService from '../Appwrite/config';

function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    const userId = String(searchParams.get('userId'));
    const secret = String(searchParams.get('secret'));

    try {
      await authService.ConfirmedResetPassword(userId, secret, String(password));
      setStatus("Success! Redirecting to login...");
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      setStatus(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-[2rem] shadow-xl text-center">
        <h2 className="text-2xl font-black text-slate-800 mb-6">New Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <input 
            type="password" 
            placeholder="Enter new password"
            className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold">
            Update Password
          </button>
        </form>
        {status && <p className="mt-4 text-indigo-600 font-medium">{status}</p>}
      </div>
    </div>
  );
}

export default ResetPasswordPage