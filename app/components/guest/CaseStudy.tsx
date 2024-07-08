import React from "react";
import Image from "next/image"; // Assuming you are using Next.js for optimized images
import treppCustomer from "/assets/customer-trepp-customer.svg";
import edurekaCustomer from "/assets/customer-edureka-customer.svg";
import innovativeCustomer from "/assets/customer-innovative-customer.svg";
import noibuCustomer from "/assets/customer-noibu-customer.svg";
import emburseCustomer from "/assets/customer-emburse-customer.svg";
import blueRightArrow from "/assets/partner-blue_right_section.svg";

const CaseStudy: React.FC = () => {
  const customers = [
    { name: "Trepp", src: treppCustomer, highlighted: true },
    { name: "Edureka", src: edurekaCustomer, highlighted: false },
    { name: "Emburse", src: emburseCustomer, highlighted: false },
    { name: "Noibu", src: noibuCustomer, highlighted: false },
    { name: "Innovative", src: innovativeCustomer, highlighted: false },
  ];

  return (
    <section className="flex bg-white py-10">
      <div className="w-full md:w-1/4 px-6">
        <div className="mb-8">
          {customers.map((customer, index) => (
            <div
              key={index}
              className={`flex items-center p-4 mb-4 rounded ${
                customer.highlighted ? "bg-gray-200" : ""
              }`}
            >
              <Image
                src={customer.src}
                alt={customer.name}
                loading="lazy"
                width={50} // Adjust width as per your design needs
                height={50} // Adjust height as per your design needs
                className="mr-2"
              />
              <span>{customer.name}</span>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="font-medium text-blue-600 flex items-center space-x-2"
        >
          <span>See more</span>{" "}
          <Image
            src={blueRightArrow}
            alt="Arrow"
            loading="lazy"
            width={16} // Adjust width as per your design needs
            height={16} // Adjust height as per your design needs
            className="w-4 h-4"
          />
        </a>
      </div>
      <div className="w-full md:w-3/4 flex">
        <div className="w-1/2 bg-blue-600 p-10 rounded-l-lg text-white">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Trepp</h2>
          <p className="text-lg mb-8">
            By being able to run our Selenium scripts on the legacy and latest
            browsers on LambdaTest helped us save significant time in test
            execution with zero hassle to maintain the infra.
          </p>
          <hr className="border-white mb-6" />
          <p className="text-lg italic mb-2">Anish Ohri</p>
          <p className="text-base">
            Head of Testing and Performance Engineering
          </p>
        </div>
        <div className="w-1/2 bg-white p-10 rounded-r-lg">
          <h2 className="text-4xl font-bold mb-4">45X</h2>
          <p className="text-lg text-gray-600 mb-8">
            Increased Browser Coverage
          </p>
          <a
            href="#"
            className="inline-block bg-black text-white py-2 px-4 rounded shadow"
          >
            Read Case Study
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
