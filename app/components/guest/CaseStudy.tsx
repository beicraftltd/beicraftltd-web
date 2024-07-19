import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import treppCustomer from "/assets/customer-trepp-customer.svg";
import edurekaCustomer from "/assets/customer-edureka-customer.svg";
import innovativeCustomer from "/assets/customer-innovative-customer.svg";
import noibuCustomer from "/assets/customer-noibu-customer.svg";
import emburseCustomer from "/assets/customer-emburse-customer.svg";
import blueRightArrow from "/assets/partner-blue_right_section.svg";
import { Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface Customer {
  name: string;
  src: StaticImageData;
  backgroundColor: string;
}

const CaseStudy: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<string>("Trepp");

  const customers: Customer[] = [
    { name: "Trepp", src: treppCustomer, backgroundColor: "#0569ff" },
    { name: "Edureka", src: edurekaCustomer, backgroundColor: "#2b5cab" },
    { name: "Emburse", src: emburseCustomer, backgroundColor: "#2b5cab" },
    { name: "Noibu", src: noibuCustomer, backgroundColor: "#6ada74" },
    { name: "Innovative", src: innovativeCustomer, backgroundColor: "#ffd0c6" },
  ];

  const handleCustomerClick = (name: string) => {
    setSelectedCustomer(name);
  };
  // Helper function to get background color for selected customer
  const getCustomerBackgroundColor = (name: string | null) => {
    const customer = customers.find((customer) => customer.name === name);
    return customer && customer.backgroundColor; // Default color if no customer selected
  };

  return (
    <section className="flex flex-wrap bg-white mb-20">
      <div className="w-full md:w-1/4 px-6">
        <Carousel className="flex flex-wrap md:flex-col justify-center md:justify-start">
          {customers.map((customer, index) => (
            <li
              key={index}
              onClick={() => handleCustomerClick(customer.name)}
              className={`flex items-center p-4 mb-4 rounded cursor-pointer ${
                selectedCustomer === customer.name ? "bg-gray-200" : ""
              }`}
            >
              <Image
                src={customer.src}
                alt={customer.name}
                loading="lazy"
                width={75}
                height={26}
                className={`mr-2 transition-filter duration-300 ${
                  selectedCustomer === customer.name ? "" : "filter grayscale"
                }`}
              />
            </li>
          ))}
        </Carousel>

        <a
          href="#"
          className="text-sm text-blue-600 font-medium flex items-center sm:justify-center md:justify-start space-x-2 mt-6"
        >
          <span>All Stories</span>
          <Image
            src={blueRightArrow}
            alt="Arrow"
            loading="lazy"
            width={14}
            height={12}
          />
        </a>
      </div>
      <div
        className="w-full md:w-3/4 rounded-lg flex flex-wrap"
        style={{
          backgroundColor: getCustomerBackgroundColor(selectedCustomer),
        }}
      >
        <div className="w-full md:w-1/2 p-10 rounded-l-lg text-white">
          <p className="text-lg mb-8">
            {selectedCustomer === "Trepp" &&
              "By being able to run our Selenium scripts on the legacy and latest browsers on LambdaTest helped us save significant time in test execution with zero hassle to maintain the infra."}
            {selectedCustomer === "Edureka" &&
              "By using LambdaTest, the team was able to execute up to 200 tests concurrently through parallel testing. Test suites that used to take 60 minutes now take not more than 5 minutes."}
            {selectedCustomer === "Emburse" &&
              "Using LambdaTest cross browser automation on the cloud has allowed Emburse to reduce test execution time up to 20% and achieve better code quality."}
            {selectedCustomer === "Noibu" &&
              "LambdaTest has reduced the time taken to reproduce and debug the problem. It has helped us identify browser specific problems and increase developer feedback time by 400% and increase efficiency by 100%."}
            {selectedCustomer === "Innovative" &&
              "With LambdaTest, we were able to increase our test coverage by 70% and reduced our test execution time from average 1 minute per test to 20 seconds, a 66% reduction in test execution time."}
          </p>
          <hr className="border-white mb-6" />
          <p className="text-lg italic mb-2">Anish Ohri</p>
          <p className="text-base">
            Head of Testing and Performance Engineering
          </p>
        </div>
        <div className="w-full md:w-1/2 bg-white p-10 rounded-r-lg">
          <h2 className="text-4xl font-bold mb-4">
            {selectedCustomer === "Trepp"
              ? "45X"
              : selectedCustomer === "Edureka"
              ? "70%"
              : selectedCustomer === "Emburse"
              ? "50%"
              : selectedCustomer === "Noibu"
              ? "400%"
              : selectedCustomer === "Innovative"
              ? "66%"
              : ""}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {selectedCustomer === "Trepp" && "Increased Browser Coverage"}
            {selectedCustomer === "Edureka" &&
              "Reduction in Test Execution Time"}
            {selectedCustomer === "Emburse" &&
              "Reduce test execution and infrastructure costs"}
            {selectedCustomer === "Noibu" &&
              "Increased developer feedback time"}
            {selectedCustomer === "Innovative" && "Reduced Test Execution Time"}
          </p>
          <Button className="bg-black border border-black hover:text-black hover:bg-transparent text-white py-2 px-4 rounded">
            Read Case Study
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
