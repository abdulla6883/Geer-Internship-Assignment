import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Product } from "@shared/schema";
import Header from "@/components/header";
import SearchFilters from "@/components/search-filters";
import ProductCard from "@/components/product-card";
import ProductModal from "@/components/product-modal";
import Footer from "@/components/footer";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

export default function Products() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Build query parameters
  const buildQueryParams = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.append("search", searchQuery);
    if (categoryFilter) params.append("category", categoryFilter);
    if (priceFilter) params.append("priceRange", priceFilter);
    return params.toString();
  };

  const { data: products = [], isLoading, error } = useQuery<Product[]>({
    queryKey: [`/api/products?${buildQueryParams()}`],
    staleTime: 0, // Always refetch when filters change
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (category: string, priceRange: string) => {
    setCategoryFilter(category);
    setPriceFilter(priceRange);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Failed to load products
            </h2>
            <p className="text-gray-600">
              Please try again later or refresh the page.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <SearchFilters 
        onSearch={handleSearch}
        onFilter={handleFilter}
      />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Featured Products
          </h2>
          <p className="text-gray-600">
            Discover our latest collection of premium products
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-64 w-full rounded-lg" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
                onAddToCart={(e) => handleAddToCart(e, product)}
              />
            ))}
          </div>
        )}
      </main>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      
      <Footer />
    </div>
  );
}
