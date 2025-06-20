import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onFilter: (category: string, priceRange: string) => void;
}

export default function SearchFilters({ onSearch, onFilter }: SearchFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleFilter = () => {
    const category = categoryFilter === "all" ? "" : categoryFilter;
    const price = priceFilter === "all" ? "" : priceFilter;
    onFilter(category, price);
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchInput}
                className="pl-10 py-3 border-gray-300 focus:ring-2 focus:ring-geer-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px] border-gray-300 focus:ring-2 focus:ring-geer-primary">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="books">Books</SelectItem>
                <SelectItem value="home">Home & Garden</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-[150px] border-gray-300 focus:ring-2 focus:ring-geer-primary">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-50">$0 - $50</SelectItem>
                <SelectItem value="50-100">$50 - $100</SelectItem>
                <SelectItem value="100-200">$100 - $200</SelectItem>
                <SelectItem value="200+">$200+</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              onClick={handleFilter}
              className="bg-geer-primary hover:bg-blue-700 text-white font-medium"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
