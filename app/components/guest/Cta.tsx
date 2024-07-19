import React from "react";
import Image from "next/image";
import Link from "next/link";

import ArrowImage from "/assets/partner-blue_right_section.svg";
import AutomationPreviewImage from "/assets/images-selenium-parallel-testing-index.png";

const Cta: React.FC = () => {
  return (
    <div className="bg-gray-100 w-full p-8 md:p-16">
      <div className="max-w-7xl mx-auto px-4 md:px-15">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 md:pr-20 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 leading-[30px] md:leading-[45px]">
              Online Selenium Test
              <br />
              Automation on Desktop,
              <br />
              Android, and iOS Mobile
              <br />
              Browsers
            </h2>
            <p className="text-lg text-gray-600 leading-[25px] md:leading-[30px] mt-4 md:mt-6">
              Run your Selenium test automation scripts across
              <br />
              online Selenium Grid of desktop, Android and iOS
              <br />
              mobile browsers. Develop, test, and deliver faster every
              <br />
              time with automated cross-browser testing using
              <br />
              LambdaTest online Automation Browser Testing Grid.
            </p>
            <div className="mt-4 md:mt-6 flex items-center">
              <Link legacyBehavior href="#">
                <a className="font-semibold text-blue-600 text-lg leading-[30px]">
                  Get Started
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
          <div className="md:w-2/3">
            <Image
              src={AutomationPreviewImage}
              alt="Automation Preview"
              layout="responsive"
              loading="lazy"
              width={700}
              height={475}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
