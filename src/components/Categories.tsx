
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sun, Glasses, User, Users, Baby } from 'lucide-react';

interface CategoriesProps {
  isOpen: boolean;
  onClose: () => void;
  onCategorySelect: (category: string, subcategory: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ isOpen, onClose, onCategorySelect }) => {
  if (!isOpen) return null;

  const categories = [
    {
      id: 'him',
      title: 'For Him',
      icon: User,
      description: 'Stylish eyewear for men',
      image: 'https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400&q=80'
    },
    {
      id: 'her',
      title: 'For Her',
      icon: Users,
      description: 'Elegant frames for women',
      image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&q=80'
    },
    {
      id: 'kids',
      title: 'For Kids',
      icon: Baby,
      description: 'Fun and safe eyewear for children',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975e00f?w=400&q=80'
    }
  ];

  const subcategories = [
    {
      id: 'sunglasses',
      title: 'Sunglasses',
      icon: Sun,
      description: 'UV protection and style'
    },
    {
      id: 'eyewear',
      title: 'Eyewear',
      icon: Glasses,
      description: 'Prescription and reading glasses'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
            <Button variant="ghost" onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </Button>
          </div>

          <Tabs defaultValue="him" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  <category.icon className="h-4 w-4" />
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {subcategories.map((subcategory) => (
                    <Card 
                      key={subcategory.id}
                      className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                      onClick={() => {
                        onCategorySelect(category.id, subcategory.id);
                        onClose();
                      }}
                    >
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img 
                            src={category.image} 
                            alt={`${category.title} ${subcategory.title}`}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          <div className="absolute bottom-4 left-4 text-white">
                            <subcategory.icon className="h-8 w-8 mb-2" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                          {subcategory.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {subcategory.description}
                        </CardDescription>
                        <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          Shop {subcategory.title}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Categories;
