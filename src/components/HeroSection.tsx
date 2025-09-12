export const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">Discover Amazing Products</h1>
          <p className="text-base md:text-xl mb-6 md:mb-8">Find the best deals on premium items shipped directly to you.</p>
          <button className="bg-white text-blue-600 px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all text-sm md:text-base">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};