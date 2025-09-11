const About = () => {
  return (
    <div className="pt-24 container mx-auto px-4">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg opacity-90">Learn more about our company and mission</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 py-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Our Story</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-600">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;