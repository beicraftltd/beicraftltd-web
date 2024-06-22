import React from "react";
// import "./App.css"; // You can add any additional styling here

const Trust: React.FC = () => {
  return (
    <div className="bg-white py-24 px-6 md:px-36">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            The LambdaTest Trust
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Helping you build trust with your customers is important to us and
            so is building trust with you. Having all the essential security,
            compliance and legal matters in place is critical in protecting the
            work we share.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-wrap justify-center md:justify-start">
          <img
            src="../../.././assets/ep-certified-png.svg"
            alt="Certifications"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Trust;
