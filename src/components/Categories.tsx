interface CategoriesProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

export const Categories = ({ selectedCategory, setSelectedCategory }: CategoriesProps) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {['Electronics', 'Fashion', 'Home', 'Beauty'].map((category) => (
          <div 
            key={category} 
            className={`bg-gray-100 rounded-lg p-4 md:p-6 text-center hover:shadow-lg transition-all cursor-pointer ${
              selectedCategory === category ? 'ring-2 ring-blue-500 bg-blue-50' : ''
            }`}
            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
          >
            <h3 className="text-xl font-semibold">{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};