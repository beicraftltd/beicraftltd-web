import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Cta3: React.FC = () => {
  return (
    <section className="flex flex-col items-center pt-12 px-8 md:px-36 bg-white">
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
        <div className="flex flex-col text-center md:text-left">
          <h1 className="font-extrabold text-4xl md:text-6xl lg:text-8xl leading-tight mb-2 text-black">
            Ready To Elevate Your
          </h1>
          <h1 className="font-extrabold text-4xl md:text-6xl lg:text-8xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Digital Experience?
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link href="#" legacyBehavior>
            <Button
              asChild
              className="bg-black text-white px-6 py-3 text-lg md:text-xl font-medium rounded-lg hover:bg-transparent hover:text-black text-center border border-black"
            >
              <a>Signup for free</a>
            </Button>
          </Link>
          <Link href="#" legacyBehavior>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 text-lg md:text-xl font-medium rounded-lg text-center"
            >
              <a>Talk to us</a>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta3;
