import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import googleIcon from "/assets/images-google_favicon.svg"; // Adjust the path to your icon

const HeroButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center mt-20 justify-center space-y-5 sm:space-y-0 sm:space-x-5">
      {/* Start free with Google button */}
      <Button
        asChild
        className="flex items-center rounded-lg cursor-pointer p-0 hover:border-gradient-to-r hover:border-gradient-start hover:border-gradient-end"
      >
        <a
          href="https://accounts.lambdatest.com/login/google"
          className="flex items-center"
        >
          <span className="bg-white flex items-center rounded-lg border-2 border-black">
            <Image
              loading="eager"
              src={googleIcon}
              alt="Google Icon"
              width={15}
              height={10}
              className="ml-2"
            />
            <span className="bg-black flex-grow text-white text-center py-2 px-4 hover:bg-white hover:text-black ml-2">
              Start free with Google
            </span>
          </span>
        </a>
      </Button>

      {/* Start free with Email button */}
      <div className="relative p-0.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-blue-500/50 hover:shadow-xl rounded">
        <Button
          asChild
          className="relative w-full h-full text-base text-black inline-flex px-3 py-2 rounded cursor-pointer items-center justify-center font-medium bg-white border-none shadow-md transition-hover transition-all duration-400 ease-in-out hover:shadow-xl"
        >
          <a href="/">Start free with Email</a>
        </Button>
      </div>
    </div>
  );
};

export default HeroButtons;
