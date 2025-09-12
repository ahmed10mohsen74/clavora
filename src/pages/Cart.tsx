import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="pt-20 sm:pt-24 container mx-auto px-4">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 sm:p-8 rounded-lg mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">Your Shopping Cart</h1>
        <p className="text-base sm:text-lg opacity-90">You have {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
      </div>
      {cartItems.length === 0 ? (
        <div className="text-center py-12 sm:py-16">
          <p className="text-gray-500 text-xl sm:text-2xl mb-4">Your cart is empty</p>
          <Link to="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-lg"
              />
              <div className="flex-1 space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-blue-600 font-bold text-base sm:text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                <p className="text-sm text-gray-500">Price per item: ${item.price.toFixed(2)}</p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 sm:mt-0">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center text-gray-600 hover:text-white hover:bg-gray-600 rounded border border-gray-300 transition-all"
                  >
                    -
                  </button>
                  <span className="w-10 sm:w-8 text-center font-semibold text-lg sm:text-base">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center text-gray-600 hover:text-white hover:bg-gray-600 rounded border border-gray-300 transition-all"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="w-full sm:w-auto px-4 py-2 text-red-500 hover:text-white hover:bg-red-500 rounded-lg border border-red-500 transition-all duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg shadow-md max-w-xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 text-lg">Subtotal:</span>
              <span className="text-xl sm:text-2xl font-bold text-gray-800">${total.toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="block">
              <button className="w-full bg-blue-600 text-white py-4 sm:py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;