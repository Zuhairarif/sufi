
import React from 'react';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Play, Pause } from 'lucide-react';

const Dhikr = () => {
  const dhikrPractices = [
    {
      arabic: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ",
      transliteration: "La ilaha illa Allah",
      meaning: "There is no god but Allah",
      count: "100 times",
      benefits: "Purifies the heart and strengthens faith"
    },
    {
      arabic: "ٱللَّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ",
      transliteration: "Allahumma salli ala Muhammad",
      meaning: "O Allah, send blessings upon Muhammad",
      count: "100 times",
      benefits: "Brings closeness to Prophet Muhammad (PBUH)"
    },
    {
      arabic: "سُبْحَانَ ٱللَّٰهِ",
      transliteration: "Subhan Allah",
      meaning: "Glory be to Allah",
      count: "33 times",
      benefits: "Glorifies Allah and increases spirituality"
    },
    {
      arabic: "ٱلْحَمْدُ لِلَّٰهِ",
      transliteration: "Alhamdulillah",
      meaning: "All praise is for Allah",
      count: "33 times",
      benefits: "Expresses gratitude and contentment"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <AnimatedBackground />
      <Header />
      
      <div className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-4">
              Dhikr Practice
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Remembrance of Allah
              </span>
            </h1>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Engage in the beautiful practice of dhikr - the remembrance of Allah that brings peace to the heart
            </p>
          </div>

          {/* Dhikr Practices */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-emerald-700 text-center mb-12">
              Essential Dhikr Practices
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {dhikrPractices.map((dhikr, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-lg border border-emerald-200/50 p-8 text-emerald-800 hover:bg-white/90 transition-all duration-300 rounded-2xl shadow-lg">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-emerald-800 mb-2 arabic-text">{dhikr.arabic}</h3>
                    <p className="text-lg text-emerald-600 italic mb-1">{dhikr.transliteration}</p>
                    <p className="text-emerald-700 font-medium">{dhikr.meaning}</p>
                  </div>
                  
                  <div className="border-t border-emerald-200 pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-emerald-600 font-medium">Recommended: {dhikr.count}</span>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        <Play className="w-4 h-4 mr-2" />
                        Start Counter
                      </Button>
                    </div>
                    <p className="text-emerald-600 text-sm">{dhikr.benefits}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section>
            <h2 className="text-3xl font-bold text-emerald-700 text-center mb-12">
              Benefits of Dhikr
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/80 backdrop-blur-lg border border-emerald-200/50 p-6 text-center rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">Spiritual Purification</h3>
                <p className="text-emerald-600">Cleanses the heart from spiritual impurities and brings inner peace</p>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur-lg border border-emerald-200/50 p-6 text-center rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">Divine Connection</h3>
                <p className="text-emerald-600">Strengthens the bond between the believer and Allah</p>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur-lg border border-emerald-200/50 p-6 text-center rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-emerald-700 mb-3">Mental Tranquility</h3>
                <p className="text-emerald-600">Brings calmness and reduces anxiety through constant remembrance</p>
              </Card>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dhikr;
