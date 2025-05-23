
import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';

const FeedbackDialog = () => {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFeedback('');
      setName('');
    }, 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          className="fixed bottom-24 right-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full p-4 shadow-xl z-50"
          aria-label="Provide feedback"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
        <DialogHeader>
          <DialogTitle className="text-emerald-800 text-center">
            Share Your Feedback
          </DialogTitle>
        </DialogHeader>
        
        {!isSubmitted ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-emerald-700 mb-2" htmlFor="feedback-name">
                Your Name (Optional)
              </label>
              <Input
                id="feedback-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500/20"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-emerald-700 mb-2" htmlFor="feedback-text">
                Your Feedback
              </label>
              <textarea
                id="feedback-text"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Please share your thoughts on how we can improve our Islamic guidance platform..."
                className="w-full h-24 p-3 border border-emerald-300 rounded-lg focus:border-emerald-500 focus:ring-emerald-500/20 resize-none"
                rows={3}
              />
            </div>
            
            <Button
              onClick={handleSubmit}
              disabled={!feedback.trim()}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white disabled:opacity-50"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Feedback
            </Button>
          </div>
        ) : (
          <Card className="p-6 text-center bg-green-50 border-green-200">
            <div className="text-green-600">
              <MessageCircle className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold">Jazakallahu Khairan!</h3>
              <p className="text-sm mt-2">Your feedback is valuable for our Islamic community</p>
            </div>
          </Card>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackDialog;
