
import React from 'react';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { BookOpen, Star } from 'lucide-react';

const Duas = () => {
  const essentialDuas = [
    {
      title: "Morning Dua",
      arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ",
      transliteration: "Asbahna wa asbahal mulku lillah",
      meaning: "We have reached the morning and at this very time the whole kingdom belongs to Allah",
      time: "After Fajr"
    },
    {
      title: "Evening Dua", 
      arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ",
      transliteration: "Amsayna wa amsal mulku lillah",
      meaning: "We have reached the evening and at this very time the whole kingdom belongs to Allah",
      time: "After Maghrib"
    },
    {
      title: "Before Sleep",
      arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
      transliteration: "Bismika Allahumma amutu wa ahya",
      meaning: "In Your name O Allah, I die and I live",
      time: "Before sleeping"
    },
    {
      title: "Upon Waking",
      arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا",
      transliteration: "Alhamdulillahil-ladhi ahyana ba'da ma amatana",
      meaning: "All praise is for Allah who gave us life after having taken it from us",
      time: "Upon waking up"
    }
  ];

  const specialDuas = [
    {
      title: "Seeking Forgiveness",
      arabic: "رَبِّ اغْفِرْ لِي ذَنْبِي وَخَطَئِي وَجَهْلِي",
      transliteration: "Rabbi ghfir li dhanbi wa khata'i wa jahli",
      meaning: "My Lord, forgive my sins, my errors, and my ignorance"
    },
    {
      title: "For Guidance",
      arabic: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ",
      transliteration: "Allahumma hdini fiman hadayt",
      meaning: "O Allah, guide me among those You have guided"
    },
    {
      title: "For Protection",
      arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
      transliteration: "A'udhu billahi min ash-shaytani'r-rajim",
      meaning: "I seek refuge in Allah from Satan, the accursed"
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
              Islamic Duas
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Prayers & Supplications
              </span>
            </h1>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Beautiful supplications from the Quran and Sunnah for daily spiritual nourishment
            </p>
          </div>

          {/* Essential Daily Duas */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-emerald-700 text-center mb-12">
              Daily Essential Duas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {essentialDuas.map((dua, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-lg border border-emerald-200/50 p-8 text-emerald-800 hover:bg-white/90 transition-all duration-300 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-emerald-700">{dua.title}</h3>
                      <p className="text-sm text-emerald-600">{dua.time}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-2xl text-emerald-800 mb-2 arabic-text leading-relaxed">{dua.arabic}</p>
                    <p className="text-emerald-600 italic mb-2">{dua.transliteration}</p>
                    <p className="text-emerald-700 font-medium">{dua.meaning}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Special Occasion Duas */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-emerald-700 text-center mb-12">
              Special Supplications
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {specialDuas.map((dua, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-lg border border-emerald-200/50 p-6 text-emerald-800 hover:bg-white/90 transition-all duration-300 rounded-2xl shadow-lg">
                  <div className="text-center mb-4">
                    <BookOpen className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <h3 className="text-lg font-bold text-emerald-700 mb-3">{dua.title}</h3>
                  </div>
                  
                  <div>
                    <p className="text-xl text-emerald-800 mb-2 arabic-text text-center leading-relaxed">{dua.arabic}</p>
                    <p className="text-emerald-600 italic text-center mb-2 text-sm">{dua.transliteration}</p>
                    <p className="text-emerald-700 text-center text-sm">{dua.meaning}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section>
            <Card className="bg-white/80 backdrop-blur-lg border border-emerald-200/50 p-12 text-center rounded-3xl shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  The Power of Dua
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
              </div>
              <p className="text-lg text-emerald-700 leading-relaxed max-w-4xl mx-auto">
                "And when My servants ask you concerning Me, indeed I am near. I respond to the invocation of the supplicant when he calls upon Me." 
                - Quran 2:186. Regular dua strengthens our connection with Allah, brings peace to the heart, 
                and serves as a source of guidance and protection in all aspects of life.
              </p>
            </Card>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Duas;
