import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  onAddToCart: (e: React.MouseEvent) => void;
}

export default function ProductCard({ product, onClick, onAddToCart }: ProductCardProps) {
  return (
    <Card 
      className="product-card bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors opacity-0 group-hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation();
            // TODO: Implement wishlist functionality
          }}
        >
          <Heart className="h-4 w-4 text-gray-400 dark:text-gray-500 hover:text-red-500" />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-geer-primary">
            ${product.price}
          </span>
          <Button
            onClick={onAddToCart}
            className="bg-geer-primary hover:bg-blue-700 text-white text-sm font-medium"
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
