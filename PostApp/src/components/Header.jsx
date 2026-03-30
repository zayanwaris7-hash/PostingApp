import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'

function Header() {
    const isLogged = useSelector((state) => (state.user.status));
    const user = useSelector((state) => (state.user.obj));
   // console.log(user)
    // Common styles for the NavLinks to keep code clean
    const navLinkStyles = ({ isActive }) =>
        `px-3 md:px-4 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${isActive
            ? "bg-white text-indigo-600 shadow-sm"  // Active Styles
            : "text-slate-700 hover:bg-white/50"    // Inactive Styles
        }`;

    return (
        <>
            {!isLogged ? (
                <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-50">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md">
                            <span className="font-bold text-lg italic">D</span>
                        </div>
                        <span className="font-bold text-slate-800 text-xl tracking-tight">devConnect</span>
                    </div>

                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full border-2 border-slate-100 p-0.5 hover:border-indigo-400 cursor-pointer transition-all">
                            <img
                                src="https://ui-avatars.com/api/?name=User&background=6366f1&color=fff"
                                alt="Profile"
                                className="rounded-full w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </header>
            ) : (
                <header className="h-16 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between sticky top-0 z-50">
                    {/* Left: Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 md:w-9 md:h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md">
                            <span className="font-bold text-base md:text-lg italic">D</span>
                        </div>
                        <span className="font-bold text-slate-800 text-sm md:text-lg tracking-tight">DevConnect</span>
                    </div>

                    {/* Middle: Navigation */}
                    <nav className="flex items-center bg-slate-100 p-1 rounded-xl overflow-x-auto no-scrollbar mx-2">
                        <NavLink to="/home" className={navLinkStyles}>
                            Home
                        </NavLink>
                        <NavLink to="/posts" className={navLinkStyles}>
                            Your Posts
                        </NavLink>
                        <NavLink to="/profile" className={navLinkStyles}>
                            Profile
                        </NavLink>
                    </nav>

                    {/* Right: Actions & Profile */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="hidden xs:block h-8 w-[1px] bg-slate-200 mx-1"></div>
                        <Link to="/profile">
                            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white ring-2 ring-slate-100 cursor-pointer overflow-hidden shrink-0 hover:ring-indigo-300 transition-all">
                                <img
                                    src={`https://ui-avatars.com/api/?name=${user?.name
                                        || 'User'}&background=6366f1&color=fff&size=128`}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </Link>
                    </div>
                </header>
            )}
        </>
    )
}

export default Header