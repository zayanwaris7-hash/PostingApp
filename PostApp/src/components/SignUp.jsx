import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateStatus } from '../RTK/UserSlice';
import authService from '../Appwrite/config';
function SignUp() {
  const dispatch=useDispatch();
  const [UserName, setUserName] = useState('');
  const [emaill, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const submit = async () => {
    if (!emaill || !pass || !UserName) {
      setErr("Please fill in all fields");
      return;
    }
    setIsLoading(true);
    setErr("");
    try {
      // Assuming authservice is imported from your config
      const signup = await authService.createAccount({
        email: emaill,
        password: pass,
        name: UserName
      });
      if (signup) {
        navigate('/home')
        dispatch(updateStatus(true))

      };
    } catch (error) {
      setErr(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-blue-100 flex items-center justify-center p-4 font-sans text-slate-900">
      
      <div className="w-full max-w-[480px] bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(79,_70,_229,_0.1)] p-8 sm:p-12 border border-white">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="relative inline-flex mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl blur opacity-30"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-xl">
              D
            </div>
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight mb-2">Create Account</h1>
          <p className="text-slate-500 font-medium">Join the devConnect community today</p>
        </div>

        {/* Error Message */}
        {err && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
            <p className="text-sm font-semibold">{err}</p>
          </div>
        )}

        {/* Form Area */}
        <div className="space-y-5">
          {/* Username */}
          <div className="relative">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 mb-2 block">Username</label>
            <div className="relative group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <input
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="dev_master"
                className="w-full bg-slate-100/50 border-2 border-transparent rounded-2xl pl-12 pr-6 py-4 text-slate-700 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 mb-2 block">Email Address</label>
            <div className="relative group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <input
                value={emaill}
                onChange={(e) => setemail(e.target.value)}
                type="email"
                placeholder="hello@world.com"
                className="w-full bg-slate-100/50 border-2 border-transparent rounded-2xl pl-12 pr-6 py-4 text-slate-700 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 mb-2 block">Password</label>
            <div className="relative group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              <input
                value={pass}
                onChange={(e) => setpass(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="w-full bg-slate-100/50 border-2 border-transparent rounded-2xl pl-12 pr-6 py-4 text-slate-700 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-sm"
              />
            </div>
          </div>

          <button
            onClick={submit}
            disabled={isLoading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2 group overflow-hidden relative"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <>
                <span>Create Account</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </>
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 font-medium">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors underline decoration-2 underline-offset-4"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;