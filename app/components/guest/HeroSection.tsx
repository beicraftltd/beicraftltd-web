import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center p-8 bg-[#f8f9fc]"
      style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
    >
      <div className="lg:w-1/2 w-full flex flex-col space-y-6">
        <h1 className="text-4xl font-bold text-black leading-tight">
          Next-Generation Mobile
          <br />
          Apps and Cross Browser
          <br />
          <span className="text-[#6f33f2]">Testing Cloud</span>
        </h1>
        <hr className="w-24 border-t-2 border-gray-200 my-6" />
        <p className="text-lg font-light text-black leading-relaxed">
          Deliver unparalleled digital experience with our next-gen
          <br />
          AI-powered testing cloud platform. Ensure exceptional user
          <br />
          experience across all devices and browsers.
        </p>
        <div className="flex space-x-4">
          <button className="flex items-center px-6 py-3 rounded-md font-medium text-lg transition transform hover:scale-105 bg-black text-white">
            <img
              src="/assets/google-favicon-svg.svg"
              alt="Google Icon"
              className="mr-3"
            />
            Start free with Google
          </button>
          <button className="flex items-center px-6 py-3 rounded-md font-medium text-lg transition transform hover:scale-105 bg-white text-black border border-black">
            Start free with Email
          </button>
        </div>
        <p className="text-lg font-light text-gray-600">
          Trusted by 2M+ users globally
        </p>
        <div className="flex space-x-4 py-4">
          <img
            src="/assets/microsoft-svg.svg"
            alt="Microsoft"
            className="h-10"
          />
          <img src="/assets/vimeo-svg.svg" alt="Vimeo" className="h-10" />
          <img src="/assets/nvidia-svg.svg" alt="Nvidia" className="h-10" />
          <img src="/assets/telstra-svg.svg" alt="Telstra" className="h-10" />
          <img src="/assets/rubrik-svg.svg" alt="Rubrik" className="h-10" />
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative mt-8 lg:mt-0">
        <img
          src="/assets/home-banner-webp.svg"
          alt="Banner"
          className="w-full h-auto max-w-md lg:max-w-xl"
        />
        <div className="absolute top-4 left-4">
          <img
            src="/assets/background-border-shadow.svg"
            alt="Background Border"
            width="71"
            height="71"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
