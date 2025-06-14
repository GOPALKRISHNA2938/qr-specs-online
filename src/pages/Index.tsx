import React, { useState } from 'react';
import { Eye, ShoppingCart, Star, QrCode, MessageSquare, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import QRCodeComponent from '@/components/QRCodeComponent';
import ProductCard from '@/components/ProductCard';
import WhatsAppPayment from '@/components/WhatsAppPayment';
import Categories from '@/components/Categories';

const Index = () => {
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCategories, setShowCategories] = useState(false);

  const products = [
    {
      id: 1,
      name: "Classic Aviator",
      price: 129,
      originalPrice: 179,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80",
      rating: 4.8,
      reviews: 124,
      description: "Timeless aviator style with premium metal frame",
      features: ["UV Protection", "Anti-Glare", "Lightweight"]
    },
    {
      id: 2,
      name: "Modern Square",
      price: 89,
      originalPrice: 129,
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&q=80",
      rating: 4.6,
      reviews: 89,
      description: "Contemporary square frame perfect for daily wear",
      features: ["Blue Light Filter", "Scratch Resistant", "Comfortable Fit"]
    },
    {
      id: 3,
      name: "Vintage Round",
      price: 149,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&q=80",
      rating: 4.9,
      reviews: 156,
      description: "Retro-inspired round glasses with modern comfort",
      features: ["Premium Acetate", "Spring Hinges", "UV Protection"]
    },
    {
      id: 4,
      name: "Sport Shield",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&q=80",
      rating: 4.7,
      reviews: 203,
      description: "High-performance sports sunglasses",
      features: ["Polarized", "Impact Resistant", "Non-Slip Grip"]
    },
    {
      id: 5,
      name: "Executive Style",
      price: 179,
      originalPrice: 229,
      image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400&q=80",
      rating: 4.8,
      reviews: 167,
      description: "Professional look with sophisticated design",
      features: ["Titanium Frame", "Anti-Reflective", "Adjustable Nose Pads"]
    },
    {
      id: 6,
      name: "Trendy Cat-Eye",
      price: 119,
      originalPrice: 159,
      image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&q=80",
      rating: 4.5,
      reviews: 98,
      description: "Stylish cat-eye frame for fashion-forward individuals",
      features: ["Fashion Forward", "Lightweight", "Multiple Colors"]
    }
  ];

  const handlePurchase = (product) => {
    setSelectedProduct(product);
  };

  const handleQRScan = () => {
    toast({
      title: "Welcome!",
      description: "You've successfully accessed our spectacles store via QR code!",
    });
  };

  const handleCategorySelect = (category: string, subcategory: string) => {
    toast({
      title: "Category Selected",
      description: `Browsing ${subcategory} for ${category.replace('him', 'Men').replace('her', 'Women').replace('kids', 'Kids')}`,
    });
    // Here you would typically filter products or navigate to a category page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Eye className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                VisionCraft
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <QrCode className="h-4 w-4" />
                    QR Access
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Scan QR Code</DialogTitle>
                    <DialogDescription>
                      Share this QR code to let others access our store instantly
                    </DialogDescription>
                  </DialogHeader>
                  <QRCodeComponent onScan={handleQRScan} />
                </DialogContent>
              </Dialog>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              See the World
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Differently
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover our premium collection of spectacles designed for style, comfort, and clarity. 
              Experience seamless shopping with WhatsApp payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="px-8 py-3 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                onClick={() => setShowCategories(true)}
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
                      Scan this code to access VisionCraft store instantly
                    </DialogDescription>
                  </DialogHeader>
                  <QRCodeComponent onScan={handleQRScan} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Featured Collection</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked spectacles that combine cutting-edge technology with timeless design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onPurchase={handlePurchase}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Why Choose VisionCraft?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Premium Quality</h4>
                    <p className="text-gray-600">All our spectacles are crafted with the finest materials and cutting-edge technology.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">WhatsApp Payments</h4>
                    <p className="text-gray-600">Easy and secure payments through WhatsApp - no complicated checkout process.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <QrCode className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">QR Code Access</h4>
                    <p className="text-gray-600">Share our store instantly with friends and family using QR codes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" 
                alt="Spectacles Collection" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Get in Touch</h3>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Have questions about our products or need help choosing the perfect pair? We're here to help!
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

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Eye className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">VisionCraft</span>
          </div>
          <p className="text-gray-400 mb-4">© 2024 VisionCraft. All rights reserved.</p>
          <p className="text-sm text-gray-500">Premium spectacles for the modern world</p>
        </div>
      </footer>

      {/* Categories Modal */}
      <Categories
        isOpen={showCategories}
        onClose={() => setShowCategories(false)}
        onCategorySelect={handleCategorySelect}
      />

      {/* WhatsApp Payment Modal */}
      {selectedProduct && (
        <WhatsAppPayment
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Index;
