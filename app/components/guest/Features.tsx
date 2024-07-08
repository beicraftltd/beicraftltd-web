import React from "react";
import Image from "next/image";
import headsetSvg from "/assets/images-headset.svg";
import integrationLogoSvg from "/assets/images-Integration-logo.svg";
import documentationSvg from "/assets/header-LambdaTest-Documentation.svg";

const Features: React.FC = () => {
  return (
    <div className="bg-blue-100 py-24 px-6 md:px-36 lg:px-72">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          More Reasons To Love LambdaTest
        </h2>
        <p className="text-lg text-gray-700">
          Along with 3000+ browsers and devices combinations to test we provide
          you additional features to make sure you give your users a perfect
          experience.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <Image
            src={headsetSvg}
            alt="24/7 Support"
            width={52}
            height={52}
            loading="lazy"
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-medium mb-2">24/7 Support</h3>
          <p className="text-gray-600 mb-4">
            Got questions? Throw them to our 24/7 in-app customer
            <a href="#" className="text-blue-600 ml-1">
              chat support
            </a>{" "}
            or email us on
            <a
              href="mailto:support@lambdatest.com"
              className="text-blue-600 ml-1"
            >
              support@lambdatest.com
            </a>
            .
          </p>
        </div>
        <div className="bg-white p-8 rounded shadow-md text-center">
          <Image
            src={integrationLogoSvg}
            alt="Third-Party Integrations"
            width={52}
            height={52}
            loading="lazy"
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-medium mb-2">Third-Party Integrations</h3>
          <p className="text-gray-600">
            With a single click, push bugs in your choice of project management
            tools, directly from LambdaTest platform.
          </p>
        </div>
        <div className="bg-white p-8 rounded shadow-md text-center">
          <Image
            src={documentationSvg}
            alt="Documentation"
            width={52}
            height={52}
            loading="lazy"
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-medium mb-2">Documentation</h3>
          <p className="text-gray-600 mb-4">
            Step-by-step
            <a href="#" className="text-blue-600 mx-1">
              documentation
            </a>
            for various test automation frameworks to help you run your first
            Selenium script.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
