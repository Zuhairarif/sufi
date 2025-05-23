
import React from 'react';
import { MessageCircle, BookOpen, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">S</span>
            </div>
            <h1 className="text-xl font-bold text-white">Sufi Wisdom</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/90 hover:text-white transition-colors flex items-center space-x-2">
              <span>Home</span>
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors flex items-center space-x-2">
              <BookOpen size={16} />
              <span>About</span>
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors flex items-center space-x-2">
              <MessageCircle size={16} />
              <span>Chat</span>
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors flex items-center space-x-2">
              <User size={16} />
              <span>Profile</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
