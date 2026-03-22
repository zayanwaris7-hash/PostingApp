import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Header() {
    const isLogged = useSelector((state) => (state.user.status));
    return (
        <>
            {
                !isLogged ?
                    (
                        <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-50" >

                            {/* Left: Brand Identity Only */}
                            < div className="flex items-center gap-3" >
                                <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md">
                                    <span className="font-bold text-lg italic">D</span>
                                </div>
                                <span className="font-bold text-slate-800 text-xl tracking-tight">
                                    devConnect
                                </span>
                            </div>

                            {/* Right: Simple Profile/Avatar Placeholder */}
                            < div className="flex items-center" >
                                <div className="w-10 h-10 rounded-full border-2 border-slate-100 p-0.5 hover:border-indigo-400 cursor-pointer transition-all">
                                    <img
                                        src="https://ui-avatars.com/api/?name=User&background=6366f1&color=fff"
                                        alt="Profile"
                                        className="rounded-full w-full h-full object-cover"
                                    />
                                </div>
                            </div >

                        </header >
                    ) :
                    (<header className="h-16 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between sticky top-0 z-50">
                        {/* Left: Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 md:w-9 md:h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md">
                                <span className="font-bold text-base md:text-lg italic">D</span>
                            </div>
                            <span className="font-bold text-slate-800 text-sm md:text-lg tracking-tight">
                                DevConnect
                            </span>
                        </div>

                        {/* Middle: Navigation - Scrollable on mobile */}
                        <nav className="flex items-center bg-slate-100 p-1 rounded-xl overflow-x-auto no-scrollbar mx-2">
                            <a href="/home" className="px-3 md:px-4 py-1.5 rounded-lg text-xs md:text-sm font-semibold text-slate-700 hover:bg-white transition-all whitespace-nowrap">
                                Home
                            </a>
                            <a href="/posts" className="px-3 md:px-4 py-1.5 rounded-lg text-xs md:text-sm font-semibold text-slate-700 hover:bg-white transition-all whitespace-nowrap">
                                Your Posts
                            </a>
                            <a href="/profile" className="px-3 md:px-4 py-1.5 rounded-lg text-xs md:text-sm font-semibold text-slate-700 hover:bg-white transition-all whitespace-nowrap">
                                Profile
                            </a>
                        </nav>

                        {/* Right: Actions & Profile */}
                        <div className="flex items-center gap-2 sm:gap-4">

                            {/* Create Post Button - Never Hidden */}
                            
                            <button className="flex items-center justify-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 md:px-5 md:py-2.5 rounded-xl text-sm font-bold transition-all shadow-md active:scale-95 shrink-0">
                                {/* Plus Icon - Always Visible */}
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                                </svg>

                                {/* Text - Hidden on very small phones, visible from 'sm' breakpoint up */}
                                <span className="hidden sm:inline">Create Post</span>
                            </button>
                            {/* Vertical Divider - Hidden on tiny screens */}
                            <div className="hidden xs:block h-8 w-[1px] bg-slate-200 mx-1"></div>
                            
                                {/* Profile Avatar */}
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white ring-2 ring-slate-100 cursor-pointer overflow-hidden shrink-0 hover:ring-indigo-300 transition-all">
                                    <img
                                        src="https://ui-avatars.com/api/?name=User&background=6366f1&color=fff"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            
                        </div>
                    </header>)
            }</>
    )
}

export default Header