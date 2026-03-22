import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { updateStatus } from '../RTK/UserSlice'; // Update path as needed
import authService from '../Appwrite/config'; // Update path as needed
import TextEditor from './TextEditor';

function Home() {
  const user =  useSelector((state) => (state.UserData));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [err, seterr] = useState("");

  const handleLogout = async () => {
    seterr("");
    try {
      setIsLoggingOut(true);
      await authService.logout(); // Appwrite call
      dispatch(updateStatus(false)); // Redux call
      navigate('/container');
    } catch (error) {
      console.error("Logout failed:", error.message);
      seterr(error.message);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    /* p-4 on mobile, p-6 or p-8 on larger screens to give breathing room */
    <div className="max-w-2xl mx-auto w-full space-y-6 sm:space-y-8 px-4 sm:px-6 py-4 sm:py-8">

      {/* 0. Top Navigation / Logout Bar */}
      <div className="flex justify-between items-center mb-2 px-2">
        <h2 className="text-xl font-black text-slate-800 tracking-tight">Feed</h2>
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-red-600 hover:bg-red-50 hover:border-red-100 transition-all active:scale-95 disabled:opacity-50 shadow-sm group"
        >
          {isLoggingOut ? (
            <svg className="animate-spin h-4 w-4 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
         )}
          <span>{isLoggingOut ? 'Leaving...' : 'Sign Out'}</span>
        </button>
      </div>
       
          {err && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
              <p className="text-sm font-semibold">{err}</p>
              </div>
              )}

      {/* 1. Create Post Section */}
      <div className="bg-white rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 shadow-sm border border-slate-100">
        <div className="flex gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-100 flex-shrink-0 border-2 border-white shadow-sm overflow-hidden">
            <img src={`https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=6366f1&color=fff&size=128`} alt="avatar" />
          </div>

          <div className="flex-1">
            <TextEditor/>

            <div className="flex justify-between items-center mt-3 sm:mt-4">
              <div className="flex gap-1 sm:gap-2">
                <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors">
                  <span className="text-lg sm:text-xl">🖼️</span>
                </button>
                <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors">
                  <span className="text-lg sm:text-xl">🔗</span>
                </button>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 sm:px-8 py-2 sm:py-2.5 rounded-xl shadow-lg shadow-indigo-100 transition-all active:scale-95 text-sm sm:text-base">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Empty Feed / Follow Suggestion Section */}
      <div className="bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 text-center border-2 border-dashed border-slate-200">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-2xl sm:text-3xl">
          👋
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-800 mb-2 sm:mb-3">Your feed is quiet</h3>
        <p className="text-xs sm:text-sm text-slate-500 mb-6 sm:mb-8 max-w-[250px] sm:max-w-xs mx-auto font-medium">
          Follow other developers and creators to start seeing what they're building!
        </p>

        {/* Suggestion List */}
        <div className="space-y-3 sm:space-y-4 max-w-sm mx-auto">
          <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl hover:bg-indigo-50 transition-colors">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Alex+Dev" alt="user" />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-800 text-xs sm:text-sm">Alex_Dev</p>
                <p className="hidden xs:block text-[10px] sm:text-xs text-slate-400">React Specialist</p>
              </div>
            </div>
            <button className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-indigo-600 hover:text-indigo-800 px-2">
              Follow
            </button>
          </div>

          <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl hover:bg-indigo-50 transition-colors">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Sara+JS" alt="user" />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-800 text-xs sm:text-sm">Sara_JS</p>
                <p className="hidden xs:block text-[10px] sm:text-xs text-slate-400">UI/UX Designer</p>
              </div>
            </div>
            <button className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-indigo-600 hover:text-indigo-800 px-2">
              Follow
            </button>
          </div>
        </div>

        <button className="mt-6 sm:mt-8 text-slate-400 text-[10px] sm:text-sm font-bold hover:text-slate-600 transition-colors">
          View more suggestions →
        </button>
      </div>
    </div>
  );
}

export default Home;