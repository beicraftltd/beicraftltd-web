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
          <span className="bg-white flex items-center rounded-lg border-2 border-black hover:border-gradient-to-r hover:border-gradient-start hover:border-gradient-end">
            <Image
              loading="eager"
              src={googleIcon}
              alt="Google Icon"
              width={15}
              height={10}
              className="ml-2"
            />
            <span className="bg-black flex-grow text-white text-center py-2 px-4 hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-end ml-2">
              Start free with Google
            </span>
          </span>
        </a>
      </Button>

      {/* Start free with Email button */}
      <div className="flex-shrink-0">
        <Button
          asChild
          className="text-base text-black inline-flex px-6 py-4 rounded-lg cursor-pointer items-center justify-center font-medium bg-white border-black hover:border-gradient-start hover:border-gradient-end"
          variant={"outline"}
        >
          <a href="https://accounts.lambdatest.com/register">
            Start free with Email
          </a>
        </Button>
      </div>
    </div>
  );
};

export default HeroButtons;
