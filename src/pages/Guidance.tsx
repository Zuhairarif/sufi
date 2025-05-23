import React, { useState } from 'react';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import SpiritualChatbot from '@/components/SpiritualChatbot';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Moon, Heart, Star, BookOpen, MessageCircle } from 'lucide-react';

const Guidance = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const guidanceTopics = [
    {
      title: "روحانی بیداری",
      subtitle: "Spiritual Awakening",
      description: "اپنی روحانی بیداری کا سفر شروع کریں اور باطنی نور کو دریافت کریں",
      icon: Star,
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "دل کی پاکیزگی",
      subtitle: "Purification of Heart",
      description: "نفسانی خواہشات سے پاک ہو کر دل کو اللہ کے لیے مخصوص کریں",
      icon: Heart,
      color: "from-rose-400 to-pink-500"
    },
    {
      title: "ذکر کی طاقت",
      subtitle: "Power of Dhikr",
      description: "اللہ کی یاد کے ذریعے دل میں سکون اور روح میں امن حاصل کریں",
      icon: Moon,
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "صوفی حکمت",
      subtitle: "Sufi Wisdom",
      description: "عظیم صوفی اساتذہ کی تعلیمات سے فیض حاصل کریں",
      icon: BookOpen,
      color: "from-amber-400 to-orange-500"
    }
  ];

  const dailyPractices = [
    {
      time: "فجر - Dawn",
      practice: "اذکار الصباح",
      description: "Morning remembrance and reflection"
    },
    {
      time: "ظہر - Noon", 
      practice: "استغفار",
      description: "Seeking forgiveness and purification"
    },
    {
      time: "عصر - Afternoon",
      practice: "درود شریف",
      description: "Sending blessings upon the Prophet ﷺ"
    },
    {
      time: "مغرب - Sunset",
      practice: "تلاوت قرآن",
      description: "Recitation of the Holy Quran"
    },
    {
      time: "عشاء - Night",
      practice: "اذکار المساء",
      description: "Evening remembrance and contemplation"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      
      <div className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              رہنمائی
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Guidance
              </span>
            </h1>
            <p className="text-xl text-emerald-100/90 max-w-3xl mx-auto mb-8">
              الٰہی رہنمائی حاصل کریں اور روحانی سفر میں قدم بڑھائیں
            </p>
            
            <Button
              onClick={() => setIsChatbotOpen(true)}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-2xl shadow-2xl"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              فوری رہنمائی حاصل کریں
            </Button>
          </div>

          {/* Guidance Topics */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-emerald-300 text-center mb-12">
              رہنمائی کے موضوعات - Guidance Topics
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {guidanceTopics.map((topic, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-lg border border-emerald-400/20 p-8 text-white hover:bg-white/10 transition-all duration-300 rounded-2xl group">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${topic.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <topic.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-emerald-300 mb-1">{topic.title}</h3>
                      <h4 className="text-lg text-cyan-300 mb-3">{topic.subtitle}</h4>
                      <p className="text-emerald-100/90 leading-relaxed">{topic.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Daily Spiritual Practices */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-emerald-300 text-center mb-12">
              روزانہ کے اعمال - Daily Spiritual Practices
            </h2>
            <div className="space-y-4">
              {dailyPractices.map((practice, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 p-6 text-white hover:bg-white/10 transition-all duration-300 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <Moon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-emerald-300">{practice.time}</h3>
                        <p className="text-cyan-300">{practice.practice}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-100/90">{practice.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Spiritual Consultation */}
          <section>
            <Card className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-lg border border-emerald-400/30 p-12 text-white rounded-3xl text-center">
              <div className="max-w-3xl mx-auto">
                <Moon className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-emerald-300 mb-4">
                  ذاتی مشاورت - Personal Consultation
                </h2>
                <p className="text-xl text-emerald-100/90 mb-8 leading-relaxed">
                  آپ کے روحانی سوالات اور مسائل کے لیے AI سے رہنمائی حاصل کریں۔ 
                  ہر سوال کا جواب اسلامی تعلیمات اور صوفی حکمت کی روشنی میں دیا جاتا ہے۔
                </p>
                <Button
                  onClick={() => setIsChatbotOpen(true)}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-10 py-6 text-lg rounded-2xl shadow-2xl"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  ابھی بات چیت شروع کریں
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </div>

      <SpiritualChatbot 
        isOpen={isChatbotOpen} 
        onClose={() => setIsChatbotOpen(false)} 
      />
      
      <Footer />
    </div>
  );
};

export default Guidance;
