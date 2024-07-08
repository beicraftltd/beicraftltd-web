import React from "react";
import Image from "next/image";

import epCertifiedPng from "/assets/images-ep_certified.png";

const Trust: React.FC = () => {
  return (
    <div className="bg-white py-24 px-6 md:px-36">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
            The LambdaTest Trust
          </h2>
          <p className="mt-10 xxxxl:text-size-24 xxxl:text-size-20 text-size-18 smtablet:text-size-16 text-black font-light">
            Helping you build trust with your customers is important to us and
            so is building trust with you. Having all the essential security,
            compliance and legal matters in place is critical in protecting the
            work we share.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-wrap justify-center md:justify-start">
          <Image
            src={epCertifiedPng}
            alt="Certifications"
            width={1123}
            height={634}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Trust;
