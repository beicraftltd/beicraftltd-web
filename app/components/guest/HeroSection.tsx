import Image from "next/image";

import microsoftLogo from "/assets/main-Microsoft.svg";
import vimeoLogo from "/assets/collabs-Vimeo.svg";
import nvidiaLogo from "/assets/collabs-Nvidia.svg";
import telstraLogo from "/assets/collabs-Telstra.svg";
import rubrikLogo from "/assets/collabs-rubrik.svg";
import homeBanner from "/assets/main-home_banner_callouts.png";
import HeroButtons from "@/app/SHADCN/HeroButtons";

const Hero: React.FC = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center p-8 bg-[#f8f9fc]"
      style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
    >
      <div className="lg:w-1/2 w-full flex flex-col space-y-6">
        <h1 className="text-4xl font-bold text-black leading-tight">
          Next-Generation Mobile
          <br />
          Apps and Cross Browser
          <br />
          <span className="text-[#6f33f2]">Testing Cloud</span>
        </h1>
        <hr className="w-24 border-t-2 border-black my-6" />
        <p className="text-lg font-light text-black leading-relaxed">
          Deliver unparalleled digital experience with our next-gen
          <br />
          AI-powered testing cloud platform. Ensure exceptional user
          <br />
          experience across all devices and browsers.
        </p>
        <div className="flex space-x-4">
          <HeroButtons />
        </div>
        <p className="text-lg font-light text-gray-600">
          Trusted by 2M+ users globally
        </p>
        <div className="flex space-x-4 py-4">
          <Image
            src={microsoftLogo}
            loading="eager"
            alt="Microsoft"
            width={120}
            height={60}
          />
          <Image
            src={vimeoLogo}
            alt="Vimeo"
            loading="eager"
            width={120}
            height={60}
          />
          <Image
            src={nvidiaLogo}
            alt="Nvidia"
            loading="eager"
            width={120}
            height={60}
          />
          <Image
            src={telstraLogo}
            alt="Telstra"
            loading="eager"
            width={120}
            height={60}
          />
          <Image
            src={rubrikLogo}
            alt="Rubrik"
            loading="eager"
            width={120}
            height={60}
          />
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative mt-8 lg:mt-0">
        <Image
          src={homeBanner}
          alt="Banner"
          loading="eager"
          width={1492}
          height={936}
          className="w-full h-auto max-w-md lg:max-w-xl"
        />
        {/* <div className="absolute top-4 left-4">
          <Image
            src="/assets/background-border-shadow.svg"
            alt="Background Border"
            width={71}
            height={71}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
