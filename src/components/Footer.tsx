
import React from 'react';
import { Eye } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Eye className="h-6 w-6 text-blue-400" />
          <span className="text-xl font-bold">VisionCraft</span>
        </div>
        <p className="text-gray-400 mb-4">© 2024 VisionCraft. All rights reserved.</p>
        <p className="text-sm text-gray-500">Crafting Vision, Perfecting Style</p>
      </div>
    </footer>
  );
};

export default Footer;
