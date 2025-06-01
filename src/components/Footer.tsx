
import React from 'react';
import { Moon, BookOpen, User, Star, Menu, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const email = "lifeh4345@gmail.com";
  
  const openEmail = () => {
    const subject = "Spiritual Consultation Inquiry";
    const body = "Assalamu Alaikum! I would like to inquire about Islamic spiritual guidance services.";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <footer className="relative z-10 bg-emerald-50/80 backdrop-blur-lg border-t border-emerald-200/50 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Moon className="text-white w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-800">Hidayat-e-Ruhani</h3>
                <p className="text-sm text-emerald-600">Islamic Spiritual Guidance</p>
              </div>
            </div>
            <p className="text-emerald-700 leading-relaxed mb-4">
              Experience spiritual growth through authentic Islamic Sufism with AI-guided wisdom and dhikr practices. 
              Connect with Allah through traditional Islamic teachings and guided remembrance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-emerald-800 mb-4">Quick Access</h4>
            <div className="space-y-2">
              <a href="/" className="block text-emerald-600 hover:text-emerald-800 transition-colors font-medium">
                Home
              </a>
              <a href="/teachings" className="block text-emerald-600 hover:text-emerald-800 transition-colors font-medium">
                Islamic Teachings
              </a>
              <a href="/guidance" className="block text-emerald-600 hover:text-emerald-800 transition-colors font-medium">
                Spiritual Guidance
              </a>
              <a href="/dhikr" className="block text-emerald-600 hover:text-emerald-800 transition-colors font-medium">
                Dhikr Practice
              </a>
              <a href="/duas" className="block text-emerald-600 hover:text-emerald-800 transition-colors font-medium">
                Duas & Prayers
              </a>
              <a href="/profile" className="block text-emerald-600 hover:text-emerald-800 transition-colors font-medium">
                Profile
              </a>
            </div>
          </div>

          {/* Professional Contact - Redesigned */}
          <div>
            <div className="relative">
              {/* Subtle Islamic geometric pattern background */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-emerald-800">
                  <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="2" fill="currentColor"/>
                    <path d="M10 5 L15 10 L10 15 L5 10 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#islamic-pattern)"/>
                </svg>
              </div>
              
              <div className="relative bg-gradient-to-br from-white/90 to-mint-50/80 backdrop-blur-sm p-6 rounded-2xl border border-emerald-100/60 shadow-lg">
                <div className="text-center space-y-4">
                  {/* Title with soft serif font */}
                  <h4 className="text-xl font-serif font-semibold text-emerald-800 tracking-wide">
                    Spiritual Consultation
                  </h4>
                  
                  {/* Decorative divider */}
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400/60"></div>
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
                  </div>
                  
                  {/* Subtext with clean sans-serif */}
                  <p className="text-sm text-emerald-700/90 leading-relaxed font-sans">
                    Professional Islamic guidance and spiritual counseling services available.
                  </p>
                  
                  {/* Email button with hover animation */}
                  <Button
                    onClick={openEmail}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium py-3 px-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                  >
                    <Mail className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                    Email Us
                  </Button>
                  
                  {/* Email address with gold accent */}
                  <p className="text-xs text-emerald-600/80 font-mono bg-emerald-50/50 px-3 py-1 rounded-full border border-emerald-200/50">
                    {email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-200/50 mt-8 pt-6 text-center">
          <p className="text-emerald-600 text-sm">
            © 2024 Hidayat-e-Ruhani. All rights reserved for Islamic spiritual guidance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
