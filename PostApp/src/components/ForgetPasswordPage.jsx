import React, { useState } from 'react';
import authService from '../Appwrite/config';
import { Link } from 'react-router-dom';

// We define the reset link here. 
// Since you are using HashRouter, we must include the '/#/ '
export const resetUrl = `${window.location.origin}/#/reset-password`;

function ForgetPasswordPage() {
  const [emaill, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr('');
    setMessage('');

    try {
      // Pass both the email and the redirect URL to your service
      await authService.CreatePasswordReset({
        email:emaill,
         url:Url});
      setMessage("Verification sent! Please check your inbox (and spam folder).");
      setEmail(''); // Clear input on success
    } catch (error) {
      // Appwrite errors are descriptive, let's show them or a fallback
      setErr(error.message || "Failed to send reset link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 text-center">
        
        {/* Icon Suggestion */}
        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
          🔑
        </div>

        <h2 className="text-2xl font-black text-slate-800 mb-2">Forgot Password?</h2>
        <p className="text-slate-500 mb-8 text-sm px-4">
          No worries! Enter your email below and we'll send you a secure link to reset it.
        </p>
         
        {message && (
          <div className="mb-6 p-4 bg-green-50 border border-green-100 rounded-2xl text-green-700 text-sm font-semibold animate-pulse">
            {message}
          </div>
        )}

        {err && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-semibold">
            {err}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" 
            value={emaill}
            placeholder="name@company.com"
            className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:bg-white focus:ring-0 transition-all text-slate-700 outline-none"
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-100"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <div className="mt-8">
          <Link to="/login" className="text-sm font-bold text-slate-400 hover:text-indigo-600 transition-colors">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;

export const Url=String(`${window.location.origin}/#/reset`);