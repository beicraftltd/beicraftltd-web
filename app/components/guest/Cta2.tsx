import React from "react";
import Image from "next/image";
import Link from "next/link";

import RealTimeBrowsersImage from "/assets/images-real-time-browsers-index.png";
import ArrowImage from "/assets/partner-blue_right_section.svg";

const Cta2: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-36">
        <div className="flex flex-wrap lg:flex-nowrap items-center">
          <div className="w-full lg:w-1/2 order-last lg:order-first pr-0 lg:pr-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-[30px] md:leading-[45px]">
              Cross Browser Testing On Desktop And Mobile Browsers
            </h2>
            <p className="text-lg text-gray-600 leading-[25px] md:leading-[30px] mt-4 md:mt-6">
              You can choose from a wide range of Windows and Mac operating
              systems, along with all legacy and latest browsers. Also test your
              website or web app on latest mobile browsers with Android and iOS
              mobile operating systems.
            </p>
            <div className="mt-4 md:mt-6 flex items-center">
              <Link legacyBehavior href="#">
                <a className="font-semibold text-blue-600 text-lg leading-[30px]">
                  All Browser and Devices
                </a>
              </Link>
              <span className="ml-2 transition-transform duration-300 transform hover:translate-x-1">
                <Image
                  src={ArrowImage}
                  loading="lazy"
                  alt="Arrow"
                  width={18}
                  height={12}
                />
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src={RealTimeBrowsersImage}
              alt="Real-Time Browser Testing"
              layout="responsive"
              width={700}
              height={475}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta2;
