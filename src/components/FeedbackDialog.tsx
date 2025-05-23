
import React, { useState } from 'react';
import { Heart, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';

const FeedbackDialog = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Here you would typically send the feedback to your backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFeedback('');
      setEmail('');
    }, 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          className="fixed bottom-24 right-6 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-full p-4 shadow-2xl z-50"
        >
          <Heart className="w-6 h-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200">
        <DialogHeader>
          <DialogTitle className="text-rose-800 text-center">
            رائے اور تجاویز - Feedback
          </DialogTitle>
        </DialogHeader>
        
        {!isSubmitted ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-rose-700 mb-2">
                آپ کی رائے (Your Feedback)
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="ہمیں بتائیں کہ ہم کیسے بہتر خدمات فراہم کر سکتے ہیں..."
                className="w-full h-24 p-3 border border-rose-300 rounded-lg focus:border-rose-500 focus:ring-rose-500/20 resize-none"
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-rose-700 mb-2">
                ای میل (Email) - اختیاری
              </label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="border-rose-300 focus:border-rose-500 focus:ring-rose-500/20"
              />
            </div>
            
            <Button
              onClick={handleSubmit}
              disabled={!feedback.trim()}
              className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
            >
              <Send className="w-4 h-4 mr-2" />
              بھیجیں (Submit)
            </Button>
          </div>
        ) : (
          <Card className="p-6 text-center bg-green-50 border-green-200">
            <div className="text-green-600">
              <Heart className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold">شکریہ! Thank you!</h3>
              <p className="text-sm mt-2">آپ کی رائے ہمارے لیے بہت اہم ہے</p>
            </div>
          </Card>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackDialog;
