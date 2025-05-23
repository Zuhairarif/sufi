
import React from 'react';
import { Moon, BookOpen, User, Star, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="relative z-50 bg-white/90 backdrop-blur-md border-b border-emerald-200/50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
              <Moon className="text-white text-lg font-bold w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Hidayat-e-Ruhani
              </h1>
              <p className="text-xs text-emerald-600/80">Islamic Spiritual Guidance</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-emerald-700 hover:text-emerald-800 transition-colors flex items-center space-x-2 group font-medium">
              <span className="group-hover:text-emerald-600">Home</span>
            </Link>
            <Link to="/teachings" className="text-emerald-700 hover:text-emerald-800 transition-colors flex items-center space-x-2 group font-medium">
              <BookOpen size={16} className="group-hover:text-emerald-600" />
              <span className="group-hover:text-emerald-600">Islamic Teachings</span>
            </Link>
            <Link to="/guidance" className="text-emerald-700 hover:text-emerald-800 transition-colors flex items-center space-x-2 group font-medium">
              <Moon size={16} className="group-hover:text-emerald-600" />
              <span className="group-hover:text-emerald-600">Spiritual Guidance</span>
            </Link>
            <Link to="/dhikr" className="text-emerald-700 hover:text-emerald-800 transition-colors flex items-center space-x-2 group font-medium">
              <Star size={16} className="group-hover:text-emerald-600" />
              <span className="group-hover:text-emerald-600">Dhikr Practice</span>
            </Link>
            <Link to="/duas" className="text-emerald-700 hover:text-emerald-800 transition-colors flex items-center space-x-2 group font-medium">
              <BookOpen size={16} className="group-hover:text-emerald-600" />
              <span className="group-hover:text-emerald-600">Duas & Prayers</span>
            </Link>
            <Link to="/profile" className="text-emerald-700 hover:text-emerald-800 transition-colors flex items-center space-x-2 group font-medium">
              <User size={16} className="group-hover:text-emerald-600" />
              <span className="group-hover:text-emerald-600">Profile</span>
            </Link>
          </nav>

          <button className="md:hidden text-emerald-700">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
