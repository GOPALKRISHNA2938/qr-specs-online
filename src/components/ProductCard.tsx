
import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
}

interface ProductCardProps {
  product: Product;
  onPurchase: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPurchase }) => {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-red-500 hover:bg-red-600 text-white">
              {discount}% OFF
            </Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl font-bold text-gray-900">{product.name}</CardTitle>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>
        </div>
        
        <CardDescription className="text-gray-600 mb-4">
          {product.description}
        </CardDescription>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {product.features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
            <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
          </div>
        </div>
        
        <Button 
          onClick={() => onPurchase(product)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          size="lg"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Buy via WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
