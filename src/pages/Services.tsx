const Services = () => {
  return (
    <div className="pt-24 container mx-auto px-4">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg opacity-90">Discover what we offer</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 py-8">
        {['Fast Shipping', 'Quality Products', 'Customer Support'].map((service) => (
          <div key={service} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{service}</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;