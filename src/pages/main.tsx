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
  image: string;
}

const products: Product[] = [
  // Electronics
  { id: 1, name: "Smartphone", price: 599.99, category: "Electronics", description: "Latest smartphone with amazing features and 5G connectivity", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80" },
  { id: 2, name: "Laptop", price: 999.99, category: "Electronics", description: "Powerful laptop with 16GB RAM and SSD", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80" },
  { id: 3, name: "Wireless Earbuds", price: 129.99, category: "Electronics", description: "Premium wireless earbuds with noise cancellation", image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&q=80" },
  { id: 4, name: "Smart Watch", price: 199.99, category: "Electronics", description: "Fitness tracking and notifications on your wrist", image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500&q=80" },

  // Fashion
  { id: 5, name: "T-Shirt", price: 29.99, category: "Fashion", description: "100% Organic cotton casual t-shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80" },
  { id: 6, name: "Jeans", price: 59.99, category: "Fashion", description: "Classic slim-fit blue jeans", image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=500&q=80" },
  { id: 7, name: "Sneakers", price: 89.99, category: "Fashion", description: "Comfortable everyday sneakers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80" },
  { id: 8, name: "Backpack", price: 49.99, category: "Fashion", description: "Stylish and durable everyday backpack", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80" },

  // Home
  { id: 9, name: "Coffee Maker", price: 79.99, category: "Home", description: "Premium Automatic Drip Coffee Maker with Built-in Grinder", image: "https://images.unsplash.com/photo-1592318730259-6c655b6b6cc8?w=500&q=80" },
  { id: 10, name: "Bed Sheets", price: 49.99, category: "Home", description: "100% Egyptian Cotton Luxury Bed Sheets Set", image: "https://images.unsplash.com/photo-1629949009765-40fc74c9ec41?w=500&q=80" },
  { id: 11, name: "Smart LED Light", price: 39.99, category: "Home", description: "WiFi-enabled color changing smart bulb", image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=500&q=80" },
  { id: 12, name: "Kitchen Mixer", price: 299.99, category: "Home", description: "Professional stand mixer for baking", image: "https://images.unsplash.com/photo-1558680488-656ad67623d9?w=500&q=80" },

  // Beauty
  { id: 13, name: "Face Cream", price: 24.99, category: "Beauty", description: "Hydrating face cream with vitamin E", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&q=80" },
  { id: 14, name: "Lipstick", price: 19.99, category: "Beauty", description: "Long-lasting matte lipstick", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80" },
  { id: 15, name: "Perfume", price: 89.99, category: "Beauty", description: "Luxury fragrance for women", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80" },
  { id: 16, name: "Makeup Brush Set", price: 34.99, category: "Beauty", description: "Professional makeup brush collection", image: "https://images.unsplash.com/photo-1596224584117-0a03c5512bcc?w=500&q=80" },
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
      <div className="bg-gray-50">
        <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="py-8">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ProductList products={filteredProducts} selectedCategory={selectedCategory} searchQuery={searchQuery} />
        <Newsletter />
      </div>
    </div>
  );
};

export default MainPage;
