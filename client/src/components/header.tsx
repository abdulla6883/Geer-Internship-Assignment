import { Link } from "wouter";
import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-geer-primary cursor-pointer">
                Geer Store
              </h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-geer-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-geer-primary font-medium">
              Products
            </Link>
            <a href="#" className="text-gray-700 hover:text-geer-primary transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-geer-primary transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
