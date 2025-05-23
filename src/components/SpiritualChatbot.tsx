import React, { useState } from 'react';
import { Moon, Send, User, X } from 'lucide-react';
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
      content: 'السلام علیکم، عزیز طالب۔ میں آپ کے اس مقدس سفر میں آپ کا روحانی رہنما ہوں۔ آج آپ کو کس طرح کی الٰہی حکمت کی ضرورت ہے؟\n\nAssalamu alaikum, dear seeker. I am your spiritual guide on this sacred journey. What divine wisdom do you seek today?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const spiritualResponses = [
    "الٰہی سے قربت کا راستہ دل کی پاکیزگی سے گزرتا ہے۔ آج آپ کے دل پر کیا بوجھ ہے، عزیز طالب؟",
    "تصوف میں ہم سیکھتے ہیں کہ اللہ آپ کی رگ جان سے بھی زیادہ قریب ہے۔ اندر کی طرف متوجہ ہوں اور اپنے اندر کی خاموشی سنیں۔",
    "رومی کے الفاظ یاد رکھیں: 'اپنے آپ کو اس چیز کی عجیب کشش کے حوالے کر دو جس سے آپ واقعی محبت کرتے ہیں۔' آپ کی روح کو کیا پکارتا ہے؟",
    "سب سے بڑا جہاد نفس کے خلاف جدوجہد ہے۔ آپ اپنے کن پہلووں پر قابو پانے کی کوشش کر رہے ہیں؟",
    "ہماری روایت میں کہا گیا ہے 'مرنے سے پہلے مر جاؤ۔' اس کا مطلب دنیاوی تعلقات کو چھوڑ کر اپنی حقیقی ذات کو تلاش کرنا ہے۔",
    "محبوب ہمارے ہر تجربے کے ذریعے ہم سے بات کرتا ہے۔ آپ نے حال ہی میں اپنی زندگی میں کیا نشانیاں دیکھی ہیں؟",
    "ذکر (اللہ کی یاد) دل کا جلا ہے۔ آپ اپنے دن بھر میں الٰہی سے کیسے رابطہ برقرار رکھتے ہیں؟",
    "ہر مشکل اپنے اندر روحانی ترقی کے بیج رکھتی ہے۔ کون سے چیلنجز آپ کو اپنے بارے میں سکھا رہے ہیں؟",
    "صوفی وہاں وحدت دیکھتا ہے جہاں دوسرے تفریق دیکھتے ہیں۔ آپ اپنی روزمرہ زندگی میں اس وحدت کی نظر کیسے پیدا کر سکتے ہیں؟",
    "صبر حکمت کا ساتھی ہے۔ آپ کی زندگی کے کن علاقوں میں آپ کو گہرے صبر کی مشق کی ضرورت ہے؟"
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
              <Moon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">روحانی رہنما - Spiritual Guide</h3>
              <p className="text-sm text-emerald-600 font-normal">الٰہی حکمت کی تلاش میں مقدس مکالمہ</p>
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
                    <Moon className="w-4 h-4 text-white" />
                  )}
                </div>
                <Card className={`p-3 ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-br from-cyan-100 to-teal-100 text-cyan-900 border-cyan-200' 
                    : 'bg-white/80 text-emerald-900 border-emerald-200'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
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
                  <Moon className="w-4 h-4 text-white" />
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

        <div className="border-t border-emerald-200 pt-4">
          <div className="flex space-x-3">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="روحانی رہنمائی کے لیے سوال کریں..."
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
