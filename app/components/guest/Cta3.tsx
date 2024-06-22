import React from "react";

const Cta3: React.FC = () => {
  return (
    <section className="flex flex-col items-center pt-12 px-36 bg-white">
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="flex flex-col">
          <h1 className="font-extrabold text-6xl md:text-8xl leading-tight mb-2 text-black">
            Ready To Elevate Your
          </h1>
          <h1 className="font-extrabold text-6xl md:text-8xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Digital Experience?
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a
            href="#"
            className="bg-black text-white px-6 py-3 text-lg md:text-xl font-medium rounded-lg"
          >
            Signup for free
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 text-lg md:text-xl font-medium rounded-lg"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta3;
