import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addObj, updateStatus } from '../RTK/UserSlice';
import authService from '../Appwrite/config';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
 
  const [em, setem] = useState("");
  const [pas, setpas] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  
 
  

  const handle = () => {
    navigate("/signin")
  }
  const loginn = async () => {

      try {
        setErr("");
        setLoading(true);

        // CRITICAL: Added 'await' here so the catch block can actually catch errors
        const session = await authService.login({
          email: em,
          password: pas
        });
        console.log(session)

        if (session) {
          // Here you would typically get user data and dispatch to Redux
          // const userData = await authService.getCurrentUser();
          // if(userData) dispatch(updateStatus(userData));
          navigate("/home");
          dispatch(updateStatus(true));
          dispatch(addObj(session));
        }
      } catch (error) {
        // Appwrite returns errors in the format: error.message
        setErr(error.message || "Invalid email or password");
      } finally {
        setLoading(false);
      }
  
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">

        {/* Branding/Header */}
        <div className="mb-10 text-center">
          <div className="mx-auto w-12 h-12 bg-blue-600 rounded-xl mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Welcome Back</h1>
          <p className="text-slate-500 mt-2">Enter your credentials to access your account</p>
        </div>

        {/* --- ERROR MESSAGE INJECTION --- */}
        {err && (
          <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-3 animate-shake">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-sm font-semibold text-red-600">{err}</p>
          </div>
        )}
        {/* ------------------------------- */}

        {/* Form UI */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address
            </label>
            <input
              value={em}
              onChange={(e) => (setem(e.target.value))}
              type="email"
              placeholder="name@company.com"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Password</label>
              <button
                onClick={() => navigate('/forget')}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Forgot?
              </button>
            </div>
            <input
              value={pas}
              onChange={(e) => (setpas(e.target.value))}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex items-center space-x-2 py-2">
            <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-blue-600" />
            <label htmlFor="remember" className="text-sm text-slate-600">Keep me signed in</label>
          </div>

          <button
            onClick={loginn}
            disabled={loading}
            className={`w-full flex justify-center items-center font-bold py-3 rounded-lg transition-all shadow-lg text-white ${loading ? "bg-slate-400 cursor-not-allowed" : "bg-slate-900 hover:bg-slate-800 active:scale-95"
              }`}>
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : "Sign In"}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600">
            Don't have an account?
            <button
              onClick={handle}
              className="ml-1 font-bold text-blue-600 hover:underline">Create one</button>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;