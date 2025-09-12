export const Newsletter = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest products and deals.</p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};