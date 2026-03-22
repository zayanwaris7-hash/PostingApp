import React from 'react';

function Home() {
  return (
    /* p-4 on mobile, p-6 or p-8 on larger screens to give breathing room */
    <div className="max-w-2xl mx-auto w-full space-y-6 sm:space-y-8 px-4 sm:px-6 py-4 sm:py-8">
      
      {/* 1. Create Post Section */}
      <div className="bg-white rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 shadow-sm border border-slate-100">
        <div className="flex gap-3 sm:gap-4">
          {/* Avatar: Hidden or smaller on very small screens if desired, but 10-12 is usually safe */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-100 flex-shrink-0 border-2 border-white shadow-sm overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=User&background=6366f1&color=fff" alt="avatar" />
          </div>
          
          <div className="flex-1">
            <textarea 
              placeholder="What's on your mind, dev?"
              className="w-full bg-slate-50 border-none rounded-xl sm:rounded-2xl p-3 sm:p-4 text-sm sm:text-base text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all resize-none h-20 sm:h-24"
            ></textarea>
            
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
          {/* Suggestion Item */}
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

          {/* Suggestion Item 2 */}
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