

import { useCart } from "../context/CartContext";
import { useState } from "react";

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
  const { addToCart } = useCart();
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
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Amazing Products</h1>
            <p className="text-xl mb-8">Find the best deals on premium items shipped directly to you.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="container mx-auto px-4 py-16">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="absolute left-4 top-4 h-5 w-5 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Electronics', 'Fashion', 'Home', 'Beauty'].map((category) => (
            <div 
              key={category} 
              className={`bg-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition-all cursor-pointer ${
                selectedCategory === category ? 'ring-2 ring-blue-500 bg-blue-50' : ''
              }`}
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
            >
              <h3 className="text-xl font-semibold">{category}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            {selectedCategory ? `${selectedCategory} Products` : searchQuery ? 'Search Results' : 'All Products'}
            {searchQuery && <span className="text-lg font-normal ml-2 text-gray-600">for "{searchQuery}"</span>}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => {
                        addToCart({ 
                          id: product.id, 
                          name: product.name, 
                          price: product.price,
                          quantity: 1
                        });
                      }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest products and deals.</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
