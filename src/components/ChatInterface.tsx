
import React, { useState } from 'react';
import { MessageCircle, Send, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'peer';
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Peace be upon you, seeker. I am here to guide you on your spiritual journey. What wisdom do you seek today?',
      sender: 'peer',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');

    // Simulate peer response
    setTimeout(() => {
      const responses = [
        "The path to the Divine is through the heart, not the mind. What troubles your heart today?",
        "Remember, beloved seeker, that every difficulty contains within it the seeds of spiritual growth.",
        "In Sufism, we say 'Die before you die.' This means to let go of the ego and find your true self.",
        "The Beloved is closer to you than your jugular vein. Turn inward and you will find what you seek.",
        "Patience is the companion of wisdom. What aspect of patience do you wish to cultivate?"
      ];

      const peerResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        sender: 'peer',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, peerResponse]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-6 border-b border-white/10">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Spiritual Guidance Session</h3>
            <p className="text-white/70">Connect with your spiritual guide</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.sender === 'user' 
                  ? 'bg-blue-500' 
                  : 'bg-gradient-to-br from-amber-400 to-orange-500'
              }`}>
                {message.sender === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              <Card className={`p-3 ${
                message.sender === 'user' 
                  ? 'bg-blue-600/20 text-white border-blue-500/30' 
                  : 'bg-white/10 text-white border-white/20'
              }`}>
                <p className="text-sm">{message.content}</p>
                <span className="text-xs opacity-60 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="p-6 border-t border-white/10">
        <div className="flex space-x-3">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask for spiritual guidance..."
            className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-amber-400 focus:ring-amber-400/20"
          />
          <Button
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-6"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
