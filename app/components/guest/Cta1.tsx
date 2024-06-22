import React from "react";
// import "./App.css"; // You can add any additional styling here

const Cta1: React.FC = () => {
  return (
    <div className="py-16 px-8 md:px-36">
      <div className="max-w-full mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-2/3 pr-6">
            <img
              src="./assets/mobile-app-testing-png.svg"
              alt="Mobile App Testing"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/3 pl-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-[45px]">
              Real Device Cloud for
              <br />
              Reliable Mobile App Testing
            </h2>
            <p className="text-lg text-gray-600 leading-[30px] mt-6">
              Test your native hybrid of web mobile apps using
              <br />
              LambdaTest’s online real device cloud and virtual
              <br />
              mobile device platform of emulators and simulators.
              <br />
              Eliminating your in-house device labs and bring high
              <br />
              scalability to your mobile app testing.
            </p>
            <div className="mt-6 flex items-center">
              <a
                href="#"
                className="font-semibold text-blue-600 text-lg leading-[30px]"
              >
                See More
              </a>
              <span className="ml-3">
                <img src="./assets/blue-right-section-svg.svg" alt="Arrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta1;
