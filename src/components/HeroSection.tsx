
import React from 'react';
import { QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import QRCodeComponent from '@/components/QRCodeComponent';

interface HeroSectionProps {
  onShopClick: () => void;
  onQRScan: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onShopClick, onQRScan }) => {
  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Crafting Vision,
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Perfecting Style
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Welcome to VisionCraft - Where premium eyewear meets exceptional craftsmanship. 
            Discover our curated collection of spectacles designed for style, comfort, and clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-3 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              onClick={onShopClick}
            >
              Shop Collection
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-2 hover:bg-gray-50 transition-all duration-300">
                  <QrCode className="mr-2 h-5 w-5" />
                  Generate QR Code
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Store Access QR Code</DialogTitle>
                  <DialogDescription>
                    Scan this code to access VisionCraft instantly
                  </DialogDescription>
                </DialogHeader>
                <QRCodeComponent onScan={onQRScan} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
