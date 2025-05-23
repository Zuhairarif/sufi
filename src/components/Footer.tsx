import React from 'react';
import { Moon, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const whatsappNumber = "9557407268";
  const whatsappMessage = "السلام علیکم! I need help with Hidayat-e-Ruhani platform";
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="relative z-10 bg-emerald-900/20 backdrop-blur-lg border-t border-emerald-400/20 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center">
                <Moon className="text-white w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-300">Hidayat-e-Ruhani</h3>
                <p className="text-sm text-emerald-200/70">روحانی رہنمائی</p>
              </div>
            </div>
            <p className="text-emerald-100/80 leading-relaxed mb-4">
              اسلامی تصوف کی روشنی میں روحانی ترقی کا سفر۔ AI کے ذریعے صوفی تعلیمات اور ذکر کی رہنمائی۔
            </p>
            <p className="text-emerald-200/70 text-sm">
              Spiritual growth through Islamic Sufism with AI-guided wisdom and dhikr practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-emerald-300 mb-4">فوری رسائی</h4>
            <div className="space-y-2">
              <a href="/" className="block text-emerald-200/80 hover:text-emerald-100 transition-colors">
                خانہ (Home)
              </a>
              <a href="/teachings" className="block text-emerald-200/80 hover:text-emerald-100 transition-colors">
                تعلیمات (Teachings)
              </a>
              <a href="/guidance" className="block text-emerald-200/80 hover:text-emerald-100 transition-colors">
                رہنمائی (Guidance)
              </a>
              <a href="/profile" className="block text-emerald-200/80 hover:text-emerald-100 transition-colors">
                پروفائل (Profile)
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-emerald-300 mb-4">رابطہ</h4>
            <div className="space-y-3">
              <Button
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white justify-start"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp: {whatsappNumber}
              </Button>
              
              <div className="flex items-center text-emerald-200/80">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">contact@hidayatruhani.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-400/20 mt-8 pt-6 text-center">
          <p className="text-emerald-200/70 text-sm">
            © 2024 Hidayat-e-Ruhani. تمام حقوق محفوظ ہیں - All rights reserved. 
            <br />
            <span className="text-emerald-300">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
