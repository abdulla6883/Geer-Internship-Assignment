import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Minus, Plus } from "lucide-react";
import { Product } from "@shared/schema";
import { useState } from "react";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleQuantityChange = (increment: boolean) => {
    setQuantity(prev => increment ? prev + 1 : Math.max(1, prev - 1));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Product Details
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          <div>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-6">
              {product.description}
            </p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-geer-primary">
                ${product.price}
              </span>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Category:</h4>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm capitalize">
                {product.category}
              </span>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity:
              </label>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(false)}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 border border-gray-300 rounded-lg min-w-[60px] text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(true)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button className="flex-1 bg-geer-primary hover:bg-blue-700 text-white font-medium">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
