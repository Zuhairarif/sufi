
import React, { useState } from 'react';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import SpiritualChatbot from '@/components/SpiritualChatbot';
import FeedbackDialog from '@/components/FeedbackDialog';
import DonationDialog from '@/components/DonationDialog';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Moon, User, Heart, Star, Sparkles } from 'lucide-react';

const Index = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fadeInUp">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-emerald-400 animate-pulse mr-3" />
                <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
                  ہدایت
                  <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-glow">
                    رُوحانی
                  </span>
                </h1>
                <Star className="w-8 h-8 text-cyan-400 animate-pulse ml-3" />
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full opacity-80"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              اسلامی تصوف کی گہری حکمت کا تجربہ کریں۔ صوفی تعلیمات اور ذکر کے ذریعے اللہ سے قربت حاصل کریں۔
              <br />
              <span className="text-lg text-emerald-200/80">
                Experience the profound wisdom of Islamic Sufism through AI-guided spiritual journey.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                onClick={() => setIsChatbotOpen(true)}
                className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-6 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-emerald-400/30 hover:border-emerald-300/50"
              >
                <Moon className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                روحانی سفر شروع کریں
                <Sparkles className="w-5 h-5 ml-2 opacity-70" />
              </Button>
              
              <Button
                onClick={() => setIsChatbotOpen(true)}
                variant="outline"
                className="group border-2 border-cyan-400/50 text-cyan-100 hover:bg-cyan-400/10 hover:border-cyan-300 px-10 py-6 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300"
              >
                <Heart className="w-6 h-6 mr-3 group-hover:text-rose-300 transition-colors" />
                ہدایت طلب کریں
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <Card className="group bg-white/5 backdrop-blur-lg border border-emerald-400/20 p-8 text-white hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:border-emerald-300/40 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-emerald-200">ذاتی مرشد</h3>
                <p className="text-emerald-100/90 leading-relaxed">روایتی صوفی اساتذہ سے متاثر AI پر مبنی روحانی رہنمائی حاصل کریں۔</p>
              </Card>

              <Card className="group bg-white/5 backdrop-blur-lg border border-cyan-400/20 p-8 text-white hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:border-cyan-300/40 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-200">مقدس تعلیمات</h3>
                <p className="text-cyan-100/90 leading-relaxed">رومی، ابن عربی، اور الغزالی جیسے عظیم صوفی اساتذہ کی لازوال حکمت دریافت کریں۔</p>
              </Card>

              <Card className="group bg-white/5 backdrop-blur-lg border border-teal-400/20 p-8 text-white hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:border-teal-300/40 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse">
                  <Moon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-teal-200">صوفیانہ مکالمہ</h3>
                <p className="text-teal-100/90 leading-relaxed">ذکر، فنا، بقا، اور وحدت کے راستے پر گہری گفتگو میں شامل ہوں۔</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Card className="bg-white/5 backdrop-blur-lg border border-emerald-400/20 p-12 text-white rounded-3xl">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                تصوف کا راستہ
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
            </div>
            <p className="text-lg text-emerald-100/90 leading-relaxed max-w-4xl mx-auto">
              تصوف اسلام کی باطنی، روحانی جہت ہے، جو دل کی پاکیزگی اور الٰہی محبت کے براہ راست تجربے کے لیے وقف ہے۔ 
              ہمارے AI رہنما پلیٹ فارم کے ذریعے، طالبان روحانی اساتذہ کی گہری تعلیمات کو دریافت کر سکتے ہیں، 
              ذکر (یاد) کی مشق کر سکتے ہیں، اور فنا (خود فنائی) اور بقا (اللہ میں بقا) کی طرف مقدس راستے پر چل سکتے ہیں۔
            </p>
          </Card>
        </div>
      </section>

      <SpiritualChatbot 
        isOpen={isChatbotOpen} 
        onClose={() => setIsChatbotOpen(false)} 
      />

      <FeedbackDialog />
      <DonationDialog />
      <Footer />
    </div>
  );
};

export default Index;
