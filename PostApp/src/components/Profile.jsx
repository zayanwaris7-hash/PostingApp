import React from 'react';
import { useSelector } from 'react-redux';
import authService from '../Appwrite/config';

function Profile() {
  // Pulling the user data we stored in Redux earlier
  const user = useSelector((state) => state.user.obj);
  

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* 1. Cover Photo Header */}
      <div className="h-48 md:h-64 bg-gradient-to-r from-indigo-600 to-blue-500 w-full"></div>

      {/* 2. Profile Section Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">

          {/* Avatar */}
          <div className="relative">
            <img
              className="h-24 w-24 sm:h-32 sm:w-32 rounded-3xl ring-4 ring-white bg-white object-cover shadow-lg"
              src={`https://ui-avatars.com/api/?name=${user?.name
                || 'User'}&background=6366f1&color=fff&size=128`}
              alt="Profile"
            />
            <span className="absolute bottom-1 right-1 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white"></span>
          </div>

          {/* User Basic Info & Action Button */}
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-black text-slate-900 truncate">
                {user?.name || "Developer Name"}
              </h1>
              <p className="text-slate-500 font-medium">Full-stack Developer</p>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button className="inline-flex justify-center px-6 py-2.5 border border-slate-200 shadow-sm text-sm font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-all">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* 3. Stats Bar */}
        <div className="mt-8 grid grid-cols-3 gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center">
          <div>
            <p className="text-xl font-black text-indigo-600">12</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Posts</p>
          </div>
          <div className="border-x border-slate-100">
            <p className="text-xl font-black text-indigo-600">450</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Followers</p>
          </div>
          <div>
            <p className="text-xl font-black text-indigo-600">28</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Following</p>
          </div>
        </div>

        {/* 4. Details & Content Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Left Side: About Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">About</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <span>📧</span> {user?.email || "email@example.com"}
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span> Pakistan
                </div>
                <div className="flex items-center gap-2">
                  <span>🔗</span> <span className="text-indigo-600 font-medium">github.com/dev</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Feed/Posts Placeholder */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-white p-12 rounded-2xl shadow-sm border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center text-xl mb-3">
                📄
              </div>
              <h4 className="text-slate-900 font-bold">No posts yet</h4>
              <p className="text-slate-500 text-sm max-w-xs">When you share your first developer insight, it will appear here!</p>
              <button className="mt-4 text-indigo-600 font-bold text-sm hover:underline">Create your first post</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;