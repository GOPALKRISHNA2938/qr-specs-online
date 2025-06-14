
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import ScrollingCarousel from '@/components/ScrollingCarousel';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Categories from '@/components/Categories';
import ProductList from '@/components/ProductList';
import WhatsAppPayment from '@/components/WhatsAppPayment';

const Index = () => {
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCategories, setShowCategories] = useState(false);
  const [showProductList, setShowProductList] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

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
      description: "You've successfully accessed VisionCraft via QR code!",
    });
  };

  const handleCategorySelect = (category: string, subcategory: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    setShowCategories(false);
    setShowProductList(true);
    
    toast({
      title: "Category Selected",
      description: `Browsing ${subcategory} for ${category.replace('him', 'Men').replace('her', 'Women').replace('kids', 'Kids')}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header onQRScan={handleQRScan} />
      <ScrollingCarousel />
      <HeroSection onShopClick={() => setShowCategories(true)} onQRScan={handleQRScan} />
      <FeaturedProducts products={products} onPurchase={handlePurchase} />
      <AboutSection />
      <ContactSection />
      <Footer />

      {/* Categories Modal */}
      <Categories
        isOpen={showCategories}
        onClose={() => setShowCategories(false)}
        onCategorySelect={handleCategorySelect}
      />

      {/* Product List Modal */}
      <ProductList
        isOpen={showProductList}
        onClose={() => setShowProductList(false)}
        category={selectedCategory}
        subcategory={selectedSubcategory}
        onPurchase={handlePurchase}
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
