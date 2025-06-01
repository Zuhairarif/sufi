
import React from 'react';
import { Moon, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const whatsappNumber = "9557407268";
  const whatsappMessage = "Assalamu Alaikum! I need help with Islamic spiritual guidance";
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
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

          {/* Professional Contact */}
          <div>
            <h4 className="text-lg font-semibold text-emerald-800 mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="bg-white/60 p-4 rounded-lg border border-emerald-200/50">
                <h5 className="text-sm font-semibold text-emerald-800 mb-2">Professional Consultation</h5>
                <Button
                  onClick={openWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white justify-start shadow-sm text-sm h-auto py-3"
                >
                  <MessageCircle className="w-4 h-4 mr-3 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-medium">WhatsApp Support</div>
                    <div className="text-xs opacity-90">+91 {whatsappNumber}</div>
                  </div>
                </Button>
                <p className="text-xs text-emerald-600 mt-2">
                  Available for Islamic spiritual guidance and consultation
                </p>
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
