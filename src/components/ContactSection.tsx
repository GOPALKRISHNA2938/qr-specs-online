
import React from 'react';
import { Phone, Mail, MessageSquare, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold mb-8">Get in Touch</h3>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Have questions about our eyewear or need help choosing the perfect pair? We're here to help!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Phone className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Call Us</h4>
            <p className="text-gray-300">+1 (555) 123-4567</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Mail className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Email Us</h4>
            <p className="text-gray-300">hello@visioncraft.com</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MessageSquare className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold mb-2">WhatsApp</h4>
            <p className="text-gray-300">+1 (555) 987-6543</p>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
