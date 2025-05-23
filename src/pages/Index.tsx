
import React, { useState } from 'react';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import ChatInterface from '@/components/ChatInterface';
import SpiritualChatbot from '@/components/SpiritualChatbot';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, MessageCircle, User, Heart, Star, Sparkles } from 'lucide-react';

const Index = () => {
  const [showChat, setShowChat] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fadeInUp">
            {/* Enhanced spiritual title */}
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-emerald-400 animate-pulse mr-3" />
                <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
                  Divine
                  <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-glow">
                    Guidance
                  </span>
                </h1>
                <Star className="w-8 h-8 text-cyan-400 animate-pulse ml-3" />
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full opacity-80"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Experience the profound wisdom of Islamic mysticism through AI-powered spiritual guidance. 
              Connect with centuries of Sufi teachings and find your path to divine enlightenment.
            </p>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                onClick={() => setIsChatbotOpen(true)}
                className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-6 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-emerald-400/30 hover:border-emerald-300/50"
              >
                <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                Begin Sacred Journey
                <Sparkles className="w-5 h-5 ml-2 opacity-70" />
              </Button>
              
              <Button
                onClick={() => setIsChatbotOpen(true)}
                variant="outline"
                className="group border-2 border-cyan-400/50 text-cyan-100 hover:bg-cyan-400/10 hover:border-cyan-300 px-10 py-6 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300"
              >
                <Heart className="w-6 h-6 mr-3 group-hover:text-rose-300 transition-colors" />
                Seek Divine Wisdom
              </Button>
            </div>

            {/* Enhanced feature cards with spiritual theme */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <Card className="group bg-white/5 backdrop-blur-lg border border-emerald-400/20 p-8 text-white hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:border-emerald-300/40 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-emerald-200">Personal Murshid</h3>
                <p className="text-emerald-100/90 leading-relaxed">Connect with AI-powered spiritual guidance inspired by traditional Sufi masters for your personal mystical journey.</p>
              </Card>

              <Card className="group bg-white/5 backdrop-blur-lg border border-cyan-400/20 p-8 text-white hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:border-cyan-300/40 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-200">Sacred Teachings</h3>
                <p className="text-cyan-100/90 leading-relaxed">Explore timeless wisdom from great Sufi masters like Rumi, Ibn Arabi, and Al-Ghazali through interactive dialogue.</p>
              </Card>

              <Card className="group bg-white/5 backdrop-blur-lg border border-teal-400/20 p-8 text-white hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:border-teal-300/40 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-teal-200">Mystical Dialogue</h3>
                <p className="text-teal-100/90 leading-relaxed">Engage in profound conversations about dhikr, fana, baqa, and the path to divine union through guided spiritual practice.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Card className="bg-white/5 backdrop-blur-lg border border-emerald-400/20 p-12 text-white rounded-3xl">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                The Path of Tasawwuf
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
            </div>
            <p className="text-lg text-emerald-100/90 leading-relaxed max-w-4xl mx-auto">
              Sufism (Tasawwuf) represents the inner, mystical dimension of Islam, dedicated to the purification of the heart 
              and the direct experience of divine love. Through our AI-guided platform, seekers can explore the profound 
              teachings of spiritual masters, practice dhikr (remembrance), and walk the sacred path toward fana 
              (self-annihilation) and baqa (subsistence in Allah). Experience the transformative power of mystical 
              dialogue and find your way to the Divine Beloved.
            </p>
          </Card>
        </div>
      </section>

      {/* Legacy Chat Section */}
      {showChat && (
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Spiritual Guidance Session</h2>
              <p className="text-emerald-100/80 text-lg">Connect with your spiritual guide and seek divine wisdom</p>
            </div>
            <ChatInterface />
          </div>
        </section>
      )}

      {/* Spiritual Chatbot Dialog */}
      <SpiritualChatbot 
        isOpen={isChatbotOpen} 
        onClose={() => setIsChatbotOpen(false)} 
      />
    </div>
  );
};

export default Index;
