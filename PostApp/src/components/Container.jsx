
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus } from '../RTK/UserSlice';
import { useNavigate } from 'react-router-dom';

function Container() {
  const navigate=useNavigate();
  const isactive=useSelector((state)=>(state.user.status))
  if(isactive) navigate('/home')

  const switchToLogin=()=>{
    navigate('/login');
  }
  const switchToSignin=()=>{
    navigate('/signin');
  }
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm md:max-w-md text-center">
        {/* Icon */}
        <div className="bg-indigo-50 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-slate-800">Please Sign In</h2>
        <p className="text-sm md:text-base text-slate-500 mt-3 mb-8">
          You need an account to view and interact with community posts.
        </p>

        {/* Buttons: Stacked on mobile, side-by-side on tablet/desktop */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
          onClick={switchToLogin}
          className="w-full sm:flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl text-sm transition-transform active:scale-95">
            Log In
          </button>
          <button
          onClick={switchToSignin}
          className="w-full sm:flex-1 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl text-sm transition-transform active:scale-95">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Container;