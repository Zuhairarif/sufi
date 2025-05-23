
import React, { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';

const DonationDialog = () => {
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  const upiId = "islamicrouhani@paytm";
  const accountDetails = "Account: 123456789, IFSC: BANK001";

  const copyToClipboard = (text: string, type: 'upi' | 'account') => {
    navigator.clipboard.writeText(text);
    if (type === 'upi') {
      setCopiedUPI(true);
      setTimeout(() => setCopiedUPI(false), 2000);
    } else {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          className="fixed bottom-6 right-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full p-4 shadow-xl z-50"
          aria-label="Make a donation"
        >
          <Sparkles className="w-6 h-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
        <DialogHeader>
          <DialogTitle className="text-amber-800 text-center">
            Support Islamic Education
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <Card className="p-4 bg-white/70 border-amber-200">
            <div className="text-center">
              <Sparkles className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-amber-800 mb-2">
                Support This Noble Cause
              </h3>
              <p className="text-sm text-amber-700">
                Your sadaqah helps maintain this Islamic spiritual guidance platform
              </p>
            </div>
          </Card>

          <div className="space-y-4">
            <Card className="p-4 border-emerald-200 bg-emerald-50">
              <h4 className="font-medium text-emerald-800 mb-2">UPI Payment</h4>
              <div className="flex items-center justify-between bg-white p-2 rounded border">
                <span className="text-sm font-mono">{upiId}</span>
                <Button
                  size="sm"
                  onClick={() => copyToClipboard(upiId, 'upi')}
                  className="bg-emerald-500 hover:bg-emerald-600"
                  aria-label="Copy UPI ID"
                >
                  {copiedUPI ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </Card>

            <Card className="p-4 border-blue-200 bg-blue-50">
              <h4 className="font-medium text-blue-800 mb-2">Bank Transfer</h4>
              <div className="flex items-center justify-between bg-white p-2 rounded border">
                <span className="text-xs font-mono">{accountDetails}</span>
                <Button
                  size="sm"
                  onClick={() => copyToClipboard(accountDetails, 'account')}
                  className="bg-blue-500 hover:bg-blue-600"
                  aria-label="Copy bank details"
                >
                  {copiedAccount ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </Card>
          </div>

          <Card className="p-4 bg-green-50 border-green-200 text-center">
            <p className="text-sm text-green-700">
              <strong>Jazakallahu Khairan</strong><br />
              May Allah reward you for your generosity
            </p>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationDialog;
