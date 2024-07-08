import React from "react";
import Image from "next/image"; // Assuming you are using Next.js for optimized images
import wallOfFameImage from "/assets/images-wall_of_fame.png"; // Import your optimized image here


const Award: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-5/12 lg:w-4/12 xl:w-4/12 mb-8 md:mb-0">
            <h2 className="text-6xl lg:text-5xl xl:text-4xl font-extrabold leading-tight text-black mb-4 sm:mb-2">
              Wall of Fame
            </h2>
            <p className="text-xl lg:text-lg xl:text-base text-black font-light mb-8 sm:mb-4">
              LambdaTest is #1 choice for SMBs and Enterprises across the globe.
            </p>
          </div>
          <div className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12">
            <Image
              src={wallOfFameImage}
              alt="Wall of Fame"
              className="mt-8 sm:mt-0"
              width={1262} // Adjust width as per your design needs
              height={623} // Adjust height as per your design needs
              loading="lazy" // Lazy loading attribute
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
