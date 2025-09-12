import { FaLaptop, FaTshirt, FaHome, FaPaintBrush } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface CategoriesProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const categoryIcons = {
  Electronics: FaLaptop,
  Fashion: FaTshirt,
  Home: FaHome,
  Beauty: FaPaintBrush
};

export const Categories = ({ selectedCategory, setSelectedCategory }: CategoriesProps) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(categoryIcons).map(([category, Icon]) => (
          <motion.div
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
            className={`relative overflow-hidden rounded-xl p-6 cursor-pointer transform transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-blue-50 border-2 border-blue-500'
                : 'bg-white border-2 border-gray-100 hover:border-blue-200'
            }`}
          >
            <div className="flex flex-col items-center gap-4">
              <div className={`p-4 rounded-full ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100'
              }`}>
                <Icon size={30} />
              </div>
              <h3 className={`text-xl font-semibold ${
                selectedCategory === category ? 'text-blue-600' : 'text-gray-800'
              }`}>
                {category}
              </h3>
            </div>
            <motion.div
              initial={false}
              animate={{
                width: selectedCategory === category ? '100%' : '0%'
              }}
              className="absolute bottom-0 left-0 h-1 bg-blue-500"
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};