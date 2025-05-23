
import React from 'react';
import { MessageCircle, BookOpen, User, Star } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-50 bg-white/5 backdrop-blur-md border-b border-emerald-400/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <Star className="text-white text-lg font-bold w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                Divine Guidance
              </h1>
              <p className="text-xs text-emerald-200/70">AI-Powered Spiritual Wisdom</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-emerald-200/90 hover:text-emerald-100 transition-colors flex items-center space-x-2 group">
              <span className="group-hover:text-emerald-300">Home</span>
            </a>
            <a href="#" className="text-emerald-200/90 hover:text-emerald-100 transition-colors flex items-center space-x-2 group">
              <BookOpen size={16} className="group-hover:text-emerald-300" />
              <span className="group-hover:text-emerald-300">Teachings</span>
            </a>
            <a href="#" className="text-emerald-200/90 hover:text-emerald-100 transition-colors flex items-center space-x-2 group">
              <MessageCircle size={16} className="group-hover:text-emerald-300" />
              <span className="group-hover:text-emerald-300">Guidance</span>
            </a>
            <a href="#" className="text-emerald-200/90 hover:text-emerald-100 transition-colors flex items-center space-x-2 group">
              <User size={16} className="group-hover:text-emerald-300" />
              <span className="group-hover:text-emerald-300">Profile</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
