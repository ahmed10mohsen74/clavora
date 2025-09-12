import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface ProductListProps {
  products: Product[];
  selectedCategory: string | null;
  searchQuery: string;
}

export const ProductList = ({ products, selectedCategory, searchQuery }: ProductListProps) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          {selectedCategory ? `${selectedCategory} Products` : searchQuery ? 'Search Results' : 'All Products'}
          {searchQuery && <span className="text-lg font-normal ml-2 text-gray-600">for "{searchQuery}"</span>}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">{product.description}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                  <span className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                      addToCart({ 
                        id: product.id, 
                        name: product.name, 
                        price: product.price,
                        quantity: 1,
                        image: product.image
                      });
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};