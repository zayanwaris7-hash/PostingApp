import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-auto py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Navigation Links Section */}
        <nav className="flex flex-wrap justify-center gap-x-3 gap-y-2 sm:gap-x-6">
          {[
            'About', 'Help', 'Press', 'API', 'Jobs', 
            'Privacy', 'Terms', 'Locations', 'Language'
          ].map((link) => (
            <a 
              key={link}
              href="#" 
              className="text-[11px] sm:text-xs font-normal text-slate-400 hover:underline decoration-slate-300 underline-offset-4 transition-all whitespace-nowrap"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Bottom Branding Section */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Optional: Add a small logo or dropdown here to match IG's "English" selector */}
          <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-widest text-center">
            © 2026 DevConnect from yourName
          </span>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;