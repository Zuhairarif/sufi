
import React, { useState } from 'react';
import { MessageCircle, Send, User, Bot, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface SpiritualChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const SpiritualChatbot: React.FC<SpiritualChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Assalamu alaikum, dear seeker. I am your spiritual guide on this sacred journey. How may I assist you in finding divine wisdom today?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const spiritualResponses = [
    "The path to the Divine is through purification of the heart. What burdens your soul today, beloved seeker?",
    "In Sufism, we learn that Allah is closer to you than your jugular vein. Turn inward and listen to the silence within.",
    "Remember the words of Rumi: 'Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.' What calls to your spirit?",
    "The greatest jihad is the struggle against the nafs (ego). What aspects of yourself are you working to transcend?",
    "In our tradition, we say 'Die before you die.' This means to let go of worldly attachments and find your true essence. What prevents you from this surrender?",
    "The Beloved speaks to us through every experience. What signs have you noticed in your life recently?",
    "Dhikr (remembrance of Allah) is the polish of the heart. How do you maintain your connection to the Divine throughout your day?",
    "Every difficulty contains within it the seeds of spiritual growth. What challenges are teaching you about yourself?",
    "The mystic sees unity where others see separation. How can you cultivate this vision of wahdat (oneness) in your daily life?",
    "Patience (sabr) is the companion of wisdom. In what areas of your life are you being called to practice deeper patience?"
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response with spiritual guidance
    setTimeout(() => {
      const randomResponse = spiritualResponses[Math.floor(Math.random() * spiritualResponses.length)];
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200">
        <DialogHeader className="border-b border-emerald-200 pb-4">
          <DialogTitle className="flex items-center space-x-3 text-emerald-800">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Spiritual AI Guide</h3>
              <p className="text-sm text-emerald-600 font-normal">Seeking divine wisdom through sacred dialogue</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto px-2 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-br from-cyan-500 to-teal-500' 
                    : 'bg-gradient-to-br from-emerald-500 to-cyan-500'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <Card className={`p-3 ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-br from-cyan-100 to-teal-100 text-cyan-900 border-cyan-200' 
                    : 'bg-white/80 text-emerald-900 border-emerald-200'
                }`}>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <span className="text-xs opacity-60 mt-2 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </Card>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <Card className="p-3 bg-white/80 border-emerald-200">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="border-t border-emerald-200 pt-4">
          <div className="flex space-x-3">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask for spiritual guidance..."
              className="flex-1 bg-white/70 border-emerald-300 text-emerald-900 placeholder-emerald-600 focus:border-emerald-500 focus:ring-emerald-500/20"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-6"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SpiritualChatbot;
