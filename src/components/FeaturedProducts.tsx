
import React from 'react';
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
}

interface FeaturedProductsProps {
  products: Product[];
  onPurchase: (product: Product) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products, onPurchase }) => {
  return (
    <section id="products" className="py-16 px-4 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Featured Collection</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked eyewear that combines cutting-edge technology with timeless design
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onPurchase={onPurchase}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
