
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  category: string;
  subcategory: string;
}

interface ProductListProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  subcategory: string;
  onPurchase: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ isOpen, onClose, category, subcategory, onPurchase }) => {
  if (!isOpen) return null;

  // Sample products for different categories and subcategories
  const allProducts: Product[] = [
    // For Him - Sunglasses
    {
      id: 1,
      name: "Classic Aviator",
      price: 129,
      originalPrice: 179,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80",
      rating: 4.8,
      reviews: 124,
      description: "Timeless aviator style with premium metal frame",
      features: ["UV Protection", "Anti-Glare", "Lightweight"],
      category: "him",
      subcategory: "sunglasses"
    },
    {
      id: 2,
      name: "Sport Shield",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&q=80",
      rating: 4.7,
      reviews: 203,
      description: "High-performance sports sunglasses",
      features: ["Polarized", "Impact Resistant", "Non-Slip Grip"],
      category: "him",
      subcategory: "sunglasses"
    },
    {
      id: 3,
      name: "Modern Wayframe",
      price: 149,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400&q=80",
      rating: 4.9,
      reviews: 156,
      description: "Contemporary wayframe design for modern men",
      features: ["Premium Acetate", "UV Protection", "Stylish Design"],
      category: "him",
      subcategory: "sunglasses"
    },
    // For Him - Eyewear
    {
      id: 4,
      name: "Executive Frame",
      price: 179,
      originalPrice: 229,
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&q=80",
      rating: 4.8,
      reviews: 167,
      description: "Professional look with sophisticated design",
      features: ["Titanium Frame", "Anti-Reflective", "Adjustable Nose Pads"],
      category: "him",
      subcategory: "eyewear"
    },
    {
      id: 5,
      name: "Modern Square",
      price: 89,
      originalPrice: 129,
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&q=80",
      rating: 4.6,
      reviews: 89,
      description: "Contemporary square frame perfect for daily wear",
      features: ["Blue Light Filter", "Scratch Resistant", "Comfortable Fit"],
      category: "him",
      subcategory: "eyewear"
    },
    // For Her - Sunglasses
    {
      id: 6,
      name: "Trendy Cat-Eye",
      price: 119,
      originalPrice: 159,
      image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&q=80",
      rating: 4.5,
      reviews: 98,
      description: "Stylish cat-eye frame for fashion-forward women",
      features: ["Fashion Forward", "UV Protection", "Multiple Colors"],
      category: "her",
      subcategory: "sunglasses"
    },
    {
      id: 7,
      name: "Glamour Oversized",
      price: 139,
      originalPrice: 189,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&q=80",
      rating: 4.7,
      reviews: 145,
      description: "Oversized glamour sunglasses for elegant style",
      features: ["UV Protection", "Gradient Lens", "Designer Frame"],
      category: "her",
      subcategory: "sunglasses"
    },
    // For Her - Eyewear
    {
      id: 8,
      name: "Vintage Round",
      price: 149,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
      rating: 4.9,
      reviews: 156,
      description: "Retro-inspired round glasses with modern comfort",
      features: ["Premium Acetate", "Spring Hinges", "Anti-Reflective"],
      category: "her",
      subcategory: "eyewear"
    },
    {
      id: 9,
      name: "Elegant Butterfly",
      price: 129,
      originalPrice: 169,
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400&q=80",
      rating: 4.6,
      reviews: 112,
      description: "Elegant butterfly frame for sophisticated women",
      features: ["Lightweight", "Blue Light Filter", "Stylish Design"],
      category: "her",
      subcategory: "eyewear"
    },
    // For Kids - Sunglasses
    {
      id: 10,
      name: "Fun Adventure",
      price: 49,
      originalPrice: 69,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&q=80",
      rating: 4.8,
      reviews: 89,
      description: "Colorful and durable sunglasses for active kids",
      features: ["Impact Resistant", "UV Protection", "Fun Colors"],
      category: "kids",
      subcategory: "sunglasses"
    },
    {
      id: 11,
      name: "Superhero Style",
      price: 59,
      originalPrice: 79,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
      rating: 4.7,
      reviews: 76,
      description: "Superhero-inspired sunglasses for little heroes",
      features: ["Safe Materials", "UV Protection", "Cool Design"],
      category: "kids",
      subcategory: "sunglasses"
    },
    // For Kids - Eyewear
    {
      id: 12,
      name: "Smart Student",
      price: 79,
      originalPrice: 99,
      image: "https://images.unsplash.com/photo-1628618219222-791a2b8b7c2a?w=400&q=80",
      rating: 4.6,
      reviews: 65,
      description: "Comfortable and durable eyewear for studying",
      features: ["Blue Light Filter", "Flexible Frame", "Kid-Safe"],
      category: "kids",
      subcategory: "eyewear"
    },
    {
      id: 13,
      name: "Playful Round",
      price: 69,
      originalPrice: 89,
      image: "https://images.unsplash.com/photo-1594736797933-d0f9b3d2fd69?w=400&q=80",
      rating: 4.5,
      reviews: 54,
      description: "Playful round frames perfect for everyday wear",
      features: ["Lightweight", "Scratch Resistant", "Comfortable"],
      category: "kids",
      subcategory: "eyewear"
    }
  ];

  // Filter products based on category and subcategory
  const filteredProducts = allProducts.filter(
    product => product.category === category && product.subcategory === subcategory
  );

  const getCategoryTitle = (cat: string) => {
    switch (cat) {
      case 'him': return 'For Him';
      case 'her': return 'For Her';
      case 'kids': return 'For Kids';
      default: return cat;
    }
  };

  const getSubcategoryTitle = (subcat: string) => {
    switch (subcat) {
      case 'sunglasses': return 'Sunglasses';
      case 'eyewear': return 'Eyewear';
      default: return subcat;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onClose} className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {getCategoryTitle(category)} - {getSubcategoryTitle(subcategory)}
                </h2>
                <p className="text-gray-600">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} available
                </p>
              </div>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onPurchase={onPurchase}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No products available in this category yet.
              </p>
              <p className="text-gray-500 mt-2">
                Check back soon for new arrivals!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
