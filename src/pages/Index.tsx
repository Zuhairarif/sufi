
import React, { useState } from 'react';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import SpiritualChatbot from '@/components/SpiritualChatbot';
import FeedbackDialog from '@/components/FeedbackDialog';
import DonationDialog from '@/components/DonationDialog';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Moon, User, Star, Sparkles } from 'lucide-react';

const Index = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <AnimatedBackground />
      
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fadeInUp">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-emerald-500 animate-pulse mr-3" />
                <h1 className="text-6xl md:text-8xl font-bold text-emerald-800 leading-tight">
                  Islamic
                  <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-glow">
                    Guidance
                  </span>
                </h1>
                <Star className="w-8 h-8 text-teal-500 animate-pulse ml-3" />
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full opacity-80"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-emerald-700 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Experience the profound wisdom of Islamic Sufism through authentic teachings and guided dhikr practices.
              <br />
              <span className="text-lg text-emerald-600/90">
                Connect with Allah through traditional Islamic spiritual journey with modern guidance.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                onClick={() => setIsChatbotOpen(true)}
                className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-6 text-lg rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-emerald-400/30 hover:border-emerald-500/50"
                aria-label="Start your Islamic spiritual journey"
              >
                <Moon className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                Begin Spiritual Journey
                <Sparkles className="w-5 h-5 ml-2 opacity-70" />
              </Button>
              
              <Button
                onClick={() => setIsChatbotOpen(true)}
                variant="outline"
                className="group border-2 border-emerald-400 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-500 hover:text-emerald-800 px-10 py-6 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300 shadow-lg"
                aria-label="Seek Islamic guidance"
              >
                <BookOpen className="w-6 h-6 mr-3 group-hover:text-emerald-600 transition-colors" />
                Seek Islamic Guidance
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <Card className="group bg-white/80 backdrop-blur-lg border border-emerald-200/50 p-8 text-emerald-800 hover:bg-white/90 transition-all duration-500 transform hover:scale-105 hover:border-emerald-300/60 rounded-3xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-emerald-700">Personal Islamic Guide</h3>
                <p className="text-emerald-600 leading-relaxed">Receive personalized spiritual guidance inspired by traditional Islamic scholars and Sufi masters.</p>
              </Card>

              <Card className="group bg-white/80 backdrop-blur-lg border border-emerald-200/50 p-8 text-emerald-800 hover:bg-white/90 transition-all duration-500 transform hover:scale-105 hover:border-emerald-300/60 rounded-3xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-teal-700">Sacred Islamic Teachings</h3>
                <p className="text-emerald-600 leading-relaxed">Discover timeless wisdom from great Islamic scholars like Rumi, Ibn Arabi, and Al-Ghazali.</p>
              </Card>

              <Card className="group bg-white/80 backdrop-blur-lg border border-emerald-200/50 p-8 text-emerald-800 hover:bg-white/90 transition-all duration-500 transform hover:scale-105 hover:border-emerald-300/60 rounded-3xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse">
                  <Moon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-700">Islamic Spiritual Dialogue</h3>
                <p className="text-emerald-600 leading-relaxed">Engage in deep conversations about dhikr, Islamic spirituality, and the path to Allah.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Card className="bg-white/80 backdrop-blur-lg border border-emerald-200/50 p-12 text-emerald-800 rounded-3xl shadow-xl">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                The Path of Islamic Spirituality
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
            </div>
            <p className="text-lg text-emerald-700 leading-relaxed max-w-4xl mx-auto">
              Islamic Sufism represents the inner, spiritual dimension of Islam, dedicated to purifying the heart and experiencing divine love directly. 
              Through our AI-guided platform, seekers can explore deep teachings of spiritual masters, practice dhikr (remembrance), 
              and walk the sacred path toward fana (self-annihilation) and baqa (subsistence in Allah). 
              Experience authentic Islamic spirituality with modern guidance tools.
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
