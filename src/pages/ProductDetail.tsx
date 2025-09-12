import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

interface ProductDetailProps {
  products: Array<{
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    images?: string[];
    features?: string[];
    specs?: Record<string, string>;
    rating?: number;
    reviews?: number;
  }>;
}

export const ProductDetail = ({ products }: ProductDetailProps) => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="pt-24 container mx-auto px-4 text-center">Product not found</div>;
  }

  const images = product.images || [product.image];

  return (
    <div className="pt-24 container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div 
              className="relative aspect-square overflow-hidden rounded-xl bg-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <img 
                src={images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-blue-500' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-lg text-gray-500 mt-2">{product.category}</p>
            </div>

            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < (product.rating || 5) ? 'text-yellow-400' : 'text-gray-300'} />
              ))}
              <span className="text-gray-600">({product.reviews || 0} reviews)</span>
            </div>

            <p className="text-4xl font-bold text-blue-600">${product.price.toFixed(2)}</p>

            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>

            {product.features && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Key Features:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.specs && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Specifications:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600">{key}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
              })}
              className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <FaShoppingCart />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};