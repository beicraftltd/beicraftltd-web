import React from "react";
import Image from "next/image";
import Link from "next/link";

import MobileAppTestingImage from "/assets/images-mobile-app-testing.png";
import ArrowImage from "/assets/partner-blue_right_section.svg";

const Cta1: React.FC = () => {
  return (
    <div className="py-16 px-8 md:px-36">
      <div className="max-w-full mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-2/3 pr-0 lg:pr-6 mb-6 lg:mb-0">
            <Image
              src={MobileAppTestingImage}
              alt="Mobile App Testing"
              layout="responsive"
              loading="lazy"
              width={700}
              height={475}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/3 pl-0 lg:pl-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-[30px] md:leading-[45px]">
              Real Device Cloud for
              <br />
              Reliable Mobile App Testing
            </h2>
            <p className="text-lg text-gray-600 leading-[25px] md:leading-[30px] mt-4 md:mt-6">
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
            <div className="mt-4 md:mt-6 flex items-center">
              <Link legacyBehavior href="#">
                <a className="font-semibold text-blue-600 text-lg leading-[30px]">
                  See More
                </a>
              </Link>
              <span className="ml-3">
                <Image
                  src={ArrowImage}
                  alt="Arrow"
                  loading="lazy"
                  width={24}
                  height={24}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta1;
