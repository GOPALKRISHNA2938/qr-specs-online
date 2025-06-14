
import React, { useState } from 'react';
import { MessageSquare, X, User, Phone, MapPin, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

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

interface WhatsAppPaymentProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppPayment: React.FC<WhatsAppPaymentProps> = ({ product, isOpen, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(`
🛍️ *New Order from VisionCraft*

👓 *Product:* ${product.name}
💰 *Price:* $${product.price} (Save $${product.originalPrice - product.price}!)

👤 *Customer Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Address: ${formData.address}

📝 *Notes:* ${formData.notes || 'None'}

Please confirm this order and provide payment instructions. Thank you!

#VisionCraft #Spectacles #Order
    `.trim());
  };

  const handleWhatsAppOrder = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const message = generateWhatsAppMessage();
    const whatsappNumber = "1234567890"; // Replace with actual business WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your order details have been prepared. Complete your purchase on WhatsApp!",
    });
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-green-600" />
            WhatsApp Checkout
          </DialogTitle>
          <DialogDescription>
            Complete your purchase through WhatsApp for a personalized shopping experience
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-semibold">{product.name}</h4>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
              
              <div className="space-y-2 border-t pt-4">
                <div className="flex justify-between">
                  <span>Original Price:</span>
                  <span className="line-through text-gray-500">${product.originalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount:</span>
                  <span className="text-green-600">-${product.originalPrice - product.price}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span className="text-blue-600">${product.price}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Delivery Address *
                </Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your complete delivery address"
                  required
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Any special requests or notes"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleWhatsAppOrder}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Continue on WhatsApp
          </Button>
        </div>

        <div className="text-center text-sm text-gray-500 pt-4 border-t">
          <CreditCard className="h-4 w-4 inline mr-1" />
          Payment methods and final details will be confirmed via WhatsApp
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppPayment;
