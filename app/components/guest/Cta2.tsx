import React from "react";
// import "./App.css"; // You can add any additional styling here

const Cta2: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-36">
        <div className="flex flex-wrap lg:flex-nowrap items-center">
          <div className="w-full lg:w-1/2 order-last lg:order-first pr-0 lg:pr-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-[45px]">
              Cross Browser Testing On
              <br />
              Desktop And Mobile
              <br />
              Browsers
            </h2>
            <p className="text-lg text-gray-600 leading-[30px] mt-6">
              You can choose from a wide range of Windows and
              <br />
              Mac operating systems, along with all legacy and latest
              <br />
              browsers. Also test your website or web app on latest
              <br />
              mobile browsers with Android and iOS mobile operating
              <br />
              systems.
            </p>
            <div className="mt-6 flex items-center">
              <a
                href="#"
                className="font-semibold text-blue-600 text-lg leading-[30px]"
              >
                All Browser and Devices
              </a>
              <span className="ml-3">
                <img src="./assets/blue-right-section-svg.svg" alt="Arrow" />
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="./assets/real-time-browsers-index-png.svg"
              alt="Real-Time Browser Testing"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta2;
