"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent } from "./Collapsible"; // Adjust path to your Collapsible component
import live from "/assets/live-index.png";
import visual from "/assets/visual-index.png";
import ai from "/assets/ai-index.png";
import smart from "/assets/smart-index.png";
import hyperexecute from "/assets/hyperexecute-index.png";
import automation from "/assets/automation-index.png";
import mobile from "/assets/mobile-app-index.png";
import arrow from "/assets/partner-blue_right_section.svg";

interface Feature {
  title: string;
  description: string;
  link: string;
  bg: StaticImageData;
}

const features: Feature[] = [
  {
    title: "Live Testing",
    description:
      "Perform live interactive cross browser testing of your public or locally hosted websites and web apps on 3000+ real mobile and desktop browsers running on real operating system.",
    link: "/",
    bg: live,
  },
  {
    title: "Automated Testing",
    description:
      "Perform automated browser tests on a scalable, secure, and reliable automation cloud. Run Selenium, Cypress, Appium, Hyperexecute, Playwright and Puppeteer tests at scale on 3000+ browsers and devices.",
    link: "/",
    bg: automation,
  },
  {
    title: "Mobile App Testing",
    description:
      "Perform live interactive testing of your mobile apps on a multitude of Android and iOS devices. Test and debug your mobile apps faster on both Emulators/Simulators or online real device cloud.",
    link: "/",
    bg: mobile,
  },
  {
    title: "HyperExecute",
    description:
      "Blazing fast AI-powered test execution & orchestration on cloud that will beat your local test execution speeds. A LambdaTest exclusive platform that is guaranteed faster than any other cloud grid offering.",
    link: "/",
    bg: hyperexecute,
  },
  {
    title: "Visual Regression Cloud",
    description:
      "Perform AI-powered Visual regression testing to prevent costly visual bugs from escaping into production. Get insights, spot bugs into visual changes on every code change.",
    link: "/",
    bg: visual,
  },
  {
    title: "AI-Powered Test Analytics",
    description:
      "Make informed decisions with detailed Test Analytics & Observability Suite. Access vital information including test inconsistencies, number of tests, and tests categorised by their status and environments.",
    link: "/",
    bg: ai,
  },
  {
    title: "Smart TV Testing",
    description:
      "Execute automation testing for OTT applications on Apple TV, Roku TV and Amazon Fire TV with LambdaTest cloud. Test and release your Smart TV apps with confidence using real device cloud.",
    link: "/",
    bg: smart,
  },
];

const FeatureSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

   useEffect(() => {
     let timeout: NodeJS.Timeout;
     const updateProgress = () => {
       setActiveIndex((prevIndex) =>
         prevIndex === features.length - 1 ? 0 : prevIndex + 1
       );
       timeout = setTimeout(updateProgress, 5000); // Change slide every 5 seconds
     };

     if (inView) {
       timeout = setTimeout(updateProgress, 1000); // Start the progress cycle when in view
     }

     return () => {
       clearTimeout(timeout);
     };
   }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative pt-16 md:pt-20 pb-16 md:pb-24 bg-white"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="mb-6 md:mb-8 text-start text-3xl md:text-4xl font-semibold text-gray-800 leading-[30px] md:leading-[45px]">
          Unified Digital Experience Testing Cloud to Accelerate Your
          Go-To-Market
        </h2>
        <p className="text-gray-600 text-xl text-start mb-8 md:mb-12">
          Secure, Reliable, and High Performance Test Execution Cloud Built For
          Scale
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center relative">
          <div className=" w-full md:w-6/12 lg:w-5/12 xl:w-4/12 px-2">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`relative mb-1 px-12 py-4 transition-transform duration-500 ease-in-out ${
                  activeIndex === idx ? "relative z-10" : "absolute"
                }`}
              >
                {/* Individual progress bar for each feature */}
                <Progress
                  value={activeIndex === idx ? 100 : 0}
                  className="absolute top-0 left-0 h-full w-1"
                  style={{
                    transitionDuration: activeIndex === idx ? "2s" : "0.5s",
                  }}
                />
                <Collapsible>
                  <div
                    className={`text-lg font-medium text-left w-full focus:outline-none ${
                      activeIndex === idx ? "expanded" : ""
                    }`}
                  >
                    {feature.title}
                  </div>

                  <CollapsibleContent isOpen={activeIndex === idx}>
                    <div className="mt-2 text-gray-700">
                      <p>{feature.description}</p>
                      <a
                        href={feature.link}
                        className="flex flex-row mt-2 text-blue-600"
                      >
                        More about {feature.title}
                        <Image
                          src={arrow}
                          height={15}
                          width={15}
                          alt={"arrow"}
                          loading="lazy"
                          className="ml-2 transition-transform duration-300 transform hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
          </div>
          <div className="hidden md:block md:w-6/12 lg:w-7/12 xl:w8/12 px-3">
            <div className="relative">
              <Image
                src={features[activeIndex || 0].bg}
                alt={features[activeIndex || 0].title}
                width={1388}
                height={801}
                loading="eager"
                className="relative rounded-lg h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
