import { Link } from "wouter";
import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-geer-primary cursor-pointer">
                AS Store
              </h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-geer-primary dark:hover:text-geer-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-geer-primary font-medium">
              Products
            </Link>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-geer-primary dark:hover:text-geer-primary transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-geer-primary dark:hover:text-geer-primary transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
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
