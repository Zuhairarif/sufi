
import React, { useState } from 'react';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import ChatInterface from '@/components/ChatInterface';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, MessageCircle, User } from 'lucide-react';

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Seek Divine
              <span className="gradient-text block">Wisdom</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with spiritual guides and explore the profound depths of Sufi teachings. 
              Find enlightenment through timeless wisdom and mystical understanding.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={() => setShowChat(true)}
                className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-glow"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Begin Spiritual Journey
              </Button>
              
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Learn About Sufism
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 text-white hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personal Guidance</h3>
                <p className="text-white/80">Receive personalized spiritual counsel from experienced guides on your mystical journey.</p>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 text-white hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Ancient Wisdom</h3>
                <p className="text-white/80">Explore centuries of Sufi teachings, poetry, and mystical insights from great masters.</p>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 text-white hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Interactive Learning</h3>
                <p className="text-white/80">Engage in meaningful conversations and deepen your understanding through guided dialogue.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      {showChat && (
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Spiritual Guidance Session</h2>
              <p className="text-white/80 text-lg">Connect with your spiritual guide and seek divine wisdom</p>
            </div>
            <ChatInterface />
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">About Sufism</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Sufism is the mystical dimension of Islam, focused on the inward search for God and the purification of the heart. 
              Mureeds (disciples) seek guidance from their Peers (spiritual guides) to walk the path of divine love, truth, and enlightenment. 
              Through contemplation, remembrance, and spiritual practices, Sufis aim to experience direct communion with the Divine.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
