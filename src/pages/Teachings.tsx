import React from 'react';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { BookOpen, Star, Heart, Moon } from 'lucide-react';

const Teachings = () => {
  const sufiMasters = [
    {
      name: "حضرت رومی",
      title: "Hazrat Rumi",
      period: "1207-1273",
      teaching: "Love is the bridge between you and everything",
      urdu: "محبت آپ اور ہر چیز کے درمیان پل ہے",
      icon: Heart
    },
    {
      name: "ابن عربی",
      title: "Ibn Arabi",
      period: "1165-1240",
      teaching: "Wheresoever you turn, there is the Face of Allah",
      urdu: "جدھر بھی آپ منہ کریں، وہاں اللہ کا چہرہ ہے",
      icon: Star
    },
    {
      name: "امام غزالی",
      title: "Imam Al-Ghazali",
      period: "1058-1111",
      teaching: "Knowledge without action is madness",
      urdu: "عمل کے بغیر علم دیوانگی ہے",
      icon: BookOpen
    }
  ];

  const concepts = [
    {
      arabic: "فَنَاء",
      term: "Fana",
      urdu: "فنا",
      meaning: "Self-annihilation in the Divine",
      urduMeaning: "الٰہی ذات میں خود کی فنائی"
    },
    {
      arabic: "بَقَاء",
      term: "Baqa",
      urdu: "بقا",
      meaning: "Subsistence after annihilation",
      urduMeaning: "فنا کے بعد باقی رہنا"
    },
    {
      arabic: "ذِکْر",
      term: "Dhikr",
      urdu: "ذکر",
      meaning: "Remembrance of Allah",
      urduMeaning: "اللہ کی یاد"
    },
    {
      arabic: "حَال",
      term: "Hal",
      urdu: "حال",
      meaning: "Spiritual state",
      urduMeaning: "روحانی کیفیت"
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
              تعلیمات
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Teachings
              </span>
            </h1>
            <p className="text-xl text-emerald-100/90 max-w-3xl mx-auto">
              صوفی اساتذہ کی عظیم تعلیمات اور اسلامی تصوف کے بنیادی تصورات
            </p>
          </div>

          {/* Sufi Masters */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-emerald-300 text-center mb-12">
              عظیم صوفی اساتذہ - Great Sufi Masters
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {sufiMasters.map((master, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-lg border border-emerald-400/20 p-6 text-white hover:bg-white/10 transition-all duration-300 rounded-2xl">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <master.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-300 mb-1">{master.name}</h3>
                    <h4 className="text-lg text-cyan-300 mb-2">{master.title}</h4>
                    <p className="text-emerald-200/70 text-sm mb-4">{master.period}</p>
                    <blockquote className="text-emerald-100 italic border-l-4 border-emerald-400 pl-4 mb-2">
                      "{master.teaching}"
                    </blockquote>
                    <p className="text-cyan-200 text-sm">{master.urdu}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Key Concepts */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-emerald-300 text-center mb-12">
              بنیادی تصورات - Key Concepts
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {concepts.map((concept, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 p-6 text-white hover:bg-white/10 transition-all duration-300 rounded-2xl text-center">
                  <div className="mb-4">
                    <Moon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-emerald-300 mb-1">{concept.arabic}</h3>
                    <h4 className="text-lg text-cyan-300">{concept.term}</h4>
                    <p className="text-emerald-200 text-sm">{concept.urdu}</p>
                  </div>
                  <div className="border-t border-emerald-400/20 pt-4">
                    <p className="text-emerald-100/90 text-sm mb-2">{concept.meaning}</p>
                    <p className="text-cyan-200/80 text-sm">{concept.urduMeaning}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Spiritual Practices */}
          <section>
            <h2 className="text-3xl font-bold text-emerald-300 text-center mb-12">
              روحانی مشقیں - Spiritual Practices
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/5 backdrop-blur-lg border border-emerald-400/20 p-8 text-white rounded-2xl">
                <h3 className="text-xl font-bold text-emerald-300 mb-4">ذکر - Dhikr (Remembrance)</h3>
                <p className="text-emerald-100/90 leading-relaxed">
                  اللہ کی یاد دل کا جلا ہے۔ مسلسل ذکر سے دل میں نور اور روح میں سکون آتا ہے۔ 
                  سب سے افضل ذکر "لا الہ الا اللہ" ہے جو توحید کا اعلان ہے۔
                </p>
              </Card>
              
              <Card className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 p-8 text-white rounded-2xl">
                <h3 className="text-xl font-bold text-cyan-300 mb-4">مراقبہ - Muraqaba (Meditation)</h3>
                <p className="text-cyan-100/90 leading-relaxed">
                  مراقبہ میں دل کو دنیاوی خیالات سے پاک کر کے صرف اللہ کی طرف متوجہ کیا جاتا ہے۔ 
                  یہ باطنی سفارت اور روحانی ترقی کا ذریعہ ہے۔
                </p>
              </Card>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Teachings;
