import { useState } from "react";
import { HeroSection } from '../components/HeroSection';
import { SearchBar } from '../components/SearchBar';
import { Categories } from '../components/Categories';
import { ProductList } from '../components/ProductList';
import { Newsletter } from '../components/Newsletter';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

const products: Product[] = [
  { id: 1, name: "Smartphone", price: 599.99, category: "Electronics", description: "Latest smartphone with amazing features" },
  { id: 2, name: "Laptop", price: 999.99, category: "Electronics", description: "Powerful laptop for all your needs" },
  { id: 3, name: "T-Shirt", price: 29.99, category: "Fashion", description: "Comfortable cotton t-shirt" },
  { id: 4, name: "Jeans", price: 59.99, category: "Fashion", description: "Classic blue jeans" },
  { id: 5, name: "Coffee Maker", price: 79.99, category: "Home", description: "Automatic coffee maker" },
  { id: 6, name: "Bed Sheets", price: 49.99, category: "Home", description: "Soft cotton bed sheets" },
  { id: 7, name: "Face Cream", price: 24.99, category: "Beauty", description: "Moisturizing face cream" },
  { id: 8, name: "Lipstick", price: 19.99, category: "Beauty", description: "Long-lasting lipstick" },
];

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products
    .filter(product => !selectedCategory || product.category === selectedCategory)
    .filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="pt-20">
      <HeroSection />
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductList products={filteredProducts} selectedCategory={selectedCategory} searchQuery={searchQuery} />
      <Newsletter />
    </div>
  );
};

export default MainPage;
