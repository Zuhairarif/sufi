
import React, { useState } from 'react';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Crescent, Star, BookOpen, Heart, Edit } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    spiritualName: '',
    email: '',
    joinDate: '2024',
    dhikrCount: 0,
    sessionsCompleted: 0,
    favoriteTeaching: ''
  });

  const spiritualProgress = [
    { level: "مبتدی - Beginner", completed: true, description: "روحانی سفر کا آغاز" },
    { level: "طالب - Seeker", completed: true, description: "ذکر کی مشق" },
    { level: "سالک - Traveler", completed: false, description: "نفس پر قابو" },
    { level: "واصل - Arrived", completed: false, description: "فنا فی اللہ" }
  ];

  const achievements = [
    { icon: Crescent, title: "پہلا ذکر", subtitle: "First Dhikr", earned: true },
    { icon: BookOpen, title: "طالب علم", subtitle: "Student", earned: true },
    { icon: Heart, title: "محبت", subtitle: "Love", earned: false },
    { icon: Star, title: "ہدایت", subtitle: "Guidance", earned: false }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      
      <div className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              پروفائل
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Profile
              </span>
            </h1>
            <p className="text-xl text-emerald-100/90">
              آپ کا روحانی سفر - Your Spiritual Journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="md:col-span-2 space-y-6">
              <Card className="bg-white/5 backdrop-blur-lg border border-emerald-400/20 p-8 text-white rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-emerald-300">ذاتی معلومات</h2>
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    variant="outline"
                    className="border-emerald-400 text-emerald-300 hover:bg-emerald-400/10"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    تبدیل کریں
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-emerald-200 mb-2">نام (Name)</label>
                    <Input
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                      disabled={!isEditing}
                      placeholder="آپ کا نام درج کریں"
                      className="bg-white/10 border-emerald-400/30 text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-emerald-200 mb-2">روحانی نام (Spiritual Name)</label>
                    <Input
                      value={profile.spiritualName}
                      onChange={(e) => setProfile({...profile, spiritualName: e.target.value})}
                      disabled={!isEditing}
                      placeholder="آپ کا روحانی نام"
                      className="bg-white/10 border-emerald-400/30 text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-emerald-200 mb-2">ای میل (Email)</label>
                    <Input
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                      disabled={!isEditing}
                      placeholder="your.email@example.com"
                      className="bg-white/10 border-emerald-400/30 text-white"
                    />
                  </div>
                </div>
                
                {isEditing && (
                  <Button
                    onClick={() => setIsEditing(false)}
                    className="mt-6 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"
                  >
                    محفوظ کریں (Save)
                  </Button>
                )}
              </Card>

              {/* Spiritual Progress */}
              <Card className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 p-8 text-white rounded-2xl">
                <h2 className="text-2xl font-bold text-cyan-300 mb-6">روحانی ترقی</h2>
                <div className="space-y-4">
                  {spiritualProgress.map((level, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        level.completed ? 'bg-emerald-500' : 'bg-gray-600'
                      }`}>
                        {level.completed ? (
                          <Star className="w-4 h-4 text-white" />
                        ) : (
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${level.completed ? 'text-emerald-300' : 'text-gray-400'}`}>
                          {level.level}
                        </h3>
                        <p className="text-sm text-emerald-200/70">{level.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Stats & Achievements */}
            <div className="space-y-6">
              {/* Stats */}
              <Card className="bg-white/5 backdrop-blur-lg border border-emerald-400/20 p-6 text-white rounded-2xl">
                <h3 className="text-lg font-bold text-emerald-300 mb-4">احصائیات</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-300">{profile.dhikrCount}</div>
                    <div className="text-sm text-emerald-200/70">اذکار</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-300">{profile.sessionsCompleted}</div>
                    <div className="text-sm text-emerald-200/70">نشستیں</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-300">{profile.joinDate}</div>
                    <div className="text-sm text-emerald-200/70">سے ممبر</div>
                  </div>
                </div>
              </Card>

              {/* Achievements */}
              <Card className="bg-white/5 backdrop-blur-lg border border-teal-400/20 p-6 text-white rounded-2xl">
                <h3 className="text-lg font-bold text-teal-300 mb-4">کامیابیاں</h3>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`text-center p-3 rounded-xl ${
                      achievement.earned ? 'bg-emerald-500/20 border border-emerald-400/30' : 'bg-gray-600/20 border border-gray-500/30'
                    }`}>
                      <achievement.icon className={`w-8 h-8 mx-auto mb-2 ${
                        achievement.earned ? 'text-emerald-400' : 'text-gray-400'
                      }`} />
                      <div className={`text-xs font-semibold ${
                        achievement.earned ? 'text-emerald-300' : 'text-gray-400'
                      }`}>
                        {achievement.title}
                      </div>
                      <div className={`text-xs ${
                        achievement.earned ? 'text-emerald-200/70' : 'text-gray-500'
                      }`}>
                        {achievement.subtitle}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;
