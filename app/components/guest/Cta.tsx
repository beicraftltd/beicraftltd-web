import React from "react";
// import "./App.css"; // You can add any additional styling here

const Cta: React.FC = () => {
  return (
    <div className="bg-gray-100 w-full p-16">
      <div className="max-w-7xl mx-auto px-15">
        <div className="flex">
          <div className="w-1/3 pr-20">
            <h2 className="text-2xl font-semibold text-gray-800 leading-[45px]">
              Online Selenium Test
              <br />
              Automation on Desktop,
              <br />
              Android, and iOS Mobile
              <br />
              Browsers
            </h2>
            <p className="text-lg text-gray-600 leading-[30px] mt-6">
              Run your Selenium test automation scripts across
              <br />
              online Selenium Grid of desktop, Android and iOS
              <br />
              mobile browsers. Develop, test, and deliver faster every
              <br />
              time with automated cross browser testing using
              <br />
              LambdaTest online Automation Browser Testing Grid.
            </p>
            <div className="mt-6 flex items-center">
              <a
                href="#"
                className="font-semibold text-blue-600 text-lg leading-[30px]"
              >
                Get Started
              </a>
              <span className="ml-3">
                <img src="./assets/blue-right-section-svg.svg" alt="Arrow" />
              </span>
            </div>
          </div>
          <div className="w-2/3">
            <img
              src="./assets/selenium-parallel-testing-index-png.svg"
              alt="Automation Preview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
