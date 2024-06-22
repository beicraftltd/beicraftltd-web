import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-10 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-8">
          <img src="/assets/logo-svg.svg" alt="Logo" className="h-6" />
          <nav className="hidden md:flex space-x-4">
            {[
              "Platform",
              "Enterprise",
              "Resources",
              "Developers",
              "Pricing",
            ].map((item, index) => (
              <div key={index} className="relative group">
                <button className="text-gray-800 text-sm lg:text-base font-medium hover:text-blue-700 hover:font-semibold">
                  {item}
                  <img
                    src={`/assets/border-${index % 2 === 0 ? "2" : "3"}.svg`}
                    alt={`${item} icon`}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-in-out origin-center"
                  />
                </button>
              </div>
            ))}
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-800 text-sm lg:text-base font-medium hover:font-semibold">
            Login
          </button>
          <button className="border border-black text-gray-800 text-sm lg:text-base font-medium px-4 py-2 rounded-md transition hover:bg-black hover:text-white">
            Book a Demo
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm lg:text-base font-medium px-4 py-2 rounded-md">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
