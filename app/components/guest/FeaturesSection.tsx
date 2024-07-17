import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./FeatureSection.module.css"; // Adjust path to your CSS file
import live from "/assets/live-index.png";
import visual from "/assets/visual-index.png";
import ai from "/assets/ai-index.png";
import smart from "/assets/smart-index.png"; // Adjust path to your image file
import hyperexecute from "/assets/hyperexecute-index.png"; // Adjust path to your image file
import automation from "/assets/automation-index.png"; // Adjust path to your image file
import mobile from "/assets/mobile-app-index.png";

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
    link: "https://www.lambdatest.com/online-browser-testing",
    bg: live,
  },
  {
    title: "Automated Testing",
    description:
      "Perform automated browser tests on a scalable, secure, and reliable automation cloud. Run Selenium, Cypress, Appium, Hyperexecute, Playwright and Puppeteer tests at scale on 3000+ browsers and devices.",
    link: "https://www.lambdatest.com/automation-testing",
    bg: automation,
  },
  {
    title: "Mobile App Testing",
    description:
      "Perform live interactive testing of your mobile apps on a multitude of Android and iOS devices. Test and debug your mobile apps faster on both Emulators/Simulators or online real device cloud.",
    link: "https://www.lambdatest.com/mobile-app-testing",
    bg: mobile,
  },
  {
    title: "HyperExecute",
    description:
      "Blazing fast AI-powered test execution & orchestration on cloud that will beat your local test execution speeds. A LambdaTest exclusive platform that is guaranteed faster than any other cloud grid offering.",
    link: "https://www.lambdatest.com/hyperexecute",
    bg: hyperexecute,
  },
  {
    title: "Visual Regression Cloud",
    description:
      "Perform AI-powered Visual regression testing to prevent costly visual bugs from escaping into production. Get insights, spot bugs into visual changes on every code change.",
    link: "https://www.lambdatest.com/smart-visual-ui-testing",
    bg: visual,
  },
  {
    title: "AI-Powered Test Analytics",
    description:
      "Make informed decisions with detailed Test Analytics & Observability Suite. Access vital information including test inconsistencies, number of tests, and tests categorised by their status and environments.",
    link: "https://www.lambdatest.com/test-analytics",
    bg: ai,
  },
  {
    title: "Smart TV Testing",
    description:
      "Execute automation testing for OTT applications on Apple TV, Roku TV and Amazon Fire TV with LambdaTest cloud. Test and release your Smart TV apps with confidence using real device cloud.",
    link: "https://www.lambdatest.com/test-on-smart-tv",
    bg: smart,
  },
];

const FeatureSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Start with the first feature
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
    let interval: NodeJS.Timeout;
    if (inView) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === features.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // change slide every 5 seconds
    }
    return () => {
      clearInterval(interval);
    };
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative pt-20 md:pt-32 pb-20 md:pb-32 bg-white"
    >
      <div className="container mx-auto px-6 lg:px-24">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
          Unified Digital Experience Testing Cloud to Accelerate Your
          Go-To-Market
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Secure, Reliable, and High Performance Test Execution Cloud Built For
          Scale
        </p>
        <div className="flex flex-col md:flex-row items-start relative">
          <div className="relative w-full md:w-5/12">
            <div className={`${styles["progress-bar"]}`}>
              <div
                className={styles["progress-bar__inner"]}
                style={{
                  height: `${((activeIndex + 1) / features.length) * 100}%`,
                }}
              ></div>
            </div>
            {features.map((feature, idx) => (
              <div key={idx} className={`mb-4 pl-8 relative`}>
                <span className={styles["progress-bar_slide"]}>
                  <span
                    className={styles["progress-bar__inner"]}
                    style={{
                      transform: `scaleY(${activeIndex === idx ? 1 : 0})`,
                    }}
                  ></span>
                </span>
                <div className="p-4">
                  <div
                    className={`text-lg font-medium text-left w-full focus:outline-none ${
                      activeIndex === idx ? "expanded" : ""
                    }`}
                  >
                    {feature.title}
                  </div>
                  {activeIndex === idx && (
                    <div className="mt-2 text-gray-700">
                      <p>{feature.description}</p>
                      <a
                        href={feature.link}
                        className="inline-block mt-2 text-blue-600 hover:underline"
                      >
                        More about {feature.title} &rarr;
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-7/12 mt-8 md:mt-0 md:ml-8">
            <Image
              src={features[activeIndex].bg}
              alt={features[activeIndex].title}
              width={1388}
              height={801}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

// import React, { useEffect, useRef, useState } from "react";
// import Image, { StaticImageData } from "next/image";
// import styles from "./FeatureSection.module.css"; // Adjust path to your CSS file
// import live from "/assets/live-index.png";
// import visual from "/assets/visual-index.png";
// import ai from "/assets/ai-index.png";
// import smart from  "/assets/smart-index.png"; // Adjust path to your image file
// import hyperexecute from "/assets/hyperexecute-index.png"; // Adjust path to your image file
// import automation from "/assets/automation-index.png"; // Adjust path to your image file
// import mobile from "/assets/mobile-app-index.png";

// interface Feature {
//   title: string;
//   description: string;
//   link: string;
//   bg: StaticImageData;
// }

// const features: Feature[] = [
//   {
//     title: "Live Testing",
//     description:
//       "Perform live interactive cross browser testing of your public or locally hosted websites and web apps on 3000+ real mobile and desktop browsers running on real operating system.",
//     link: "https://www.lambdatest.com/online-browser-testing",
//     bg: live,
//   },
//   {
//     title: "Automated Testing",
//     description:
//       "Perform automated browser tests on a scalable, secure, and reliable automation cloud. Run Selenium, Cypress, Appium, Hyperexecute, Playwright and Puppeteer tests at scale on 3000+ browsers and devices.",
//     link: "https://www.lambdatest.com/automation-testing",
//     bg: automation,
//   },
//   {
//     title: "Mobile App Testing",
//     description:
//       "Perform live interactive testing of your mobile apps on a multitude of Android and iOS devices. Test and debug your mobile apps faster on both Emulators/Simulators or online real device cloud.",
//     link: "https://www.lambdatest.com/mobile-app-testing",
//     bg: mobile,
//   },
//   {
//     title: "HyperExecute",
//     description:
//       "Blazing fast AI-powered test execution & orchestration on cloud that will beat your local test execution speeds. A LambdaTest exclusive platform that is guaranteed faster than any other cloud grid offering.",
//     link: "https://www.lambdatest.com/hyperexecute",
//     bg: hyperexecute,
//   },
//   {
//     title: "Visual Regression Cloud",
//     description:
//       "Perform AI-powered Visual regression testing to prevent costly visual bugs from escaping into production. Get insights, spot bugs into visual changes on every code change.",
//     link: "https://www.lambdatest.com/smart-visual-ui-testing",
//     bg: visual,
//   },
//   {
//     title: "AI-Powered Test Analytics",
//     description:
//       "Make informed decisions with detailed Test Analytics & Observability Suite. Access vital information including test inconsistencies, number of tests, and tests categorised by their status and environments.",
//     link: "https://www.lambdatest.com/test-analytics",
//     bg: ai,
//   },
//   {
//     title: "Smart TV Testing",
//     description:
//       "Execute automation testing for OTT applications on Apple TV, Roku TV and Amazon Fire TV with LambdaTest cloud. Test and release your Smart TV apps with confidence using real device cloud.",
//     link: "https://www.lambdatest.com/test-on-smart-tv",
//     bg: smart,
//   },
// ];

// const FeatureSection: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number>(0); // Start with the first feature
//   const [inView, setInView] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setInView(entry.isIntersecting);
//       },
//       { threshold: 0.5 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     let interval: NodeJS.Timeout;
//     if (inView) {
//       interval = setInterval(() => {
//         setActiveIndex((prevIndex) =>
//           prevIndex === features.length - 1 ? 0 : prevIndex + 1
//         );
//       }, 5000); // change slide every 5 seconds
//     }
//     return () => {
//       clearInterval(interval);
//     };
//   }, [inView]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative pt-20 md:pt-32 pb-20 md:pb-32 bg-white"
//     >
//       <div className="container mx-auto px-6 lg:px-24">
//         <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
//           Unified Digital Experience Testing Cloud to Accelerate Your
//           Go-To-Market
//         </h2>
//         <p className="text-gray-600 text-center mb-12">
//           Secure, Reliable, and High Performance Test Execution Cloud Built For
//           Scale
//         </p>
//         <div className="flex flex-col md:flex-row items-start relative">
//           <div className="relative w-full md:w-5/12">
//             <div className={`${styles["progress-bar"]}`}>
//               <div
//                 className={styles["progress-bar__inner"]}
//                 style={{
//                   height: `${((activeIndex + 1) / features.length) * 100}%`,
//                 }}
//               ></div>
//             </div>
//             {features.map((feature, idx) => (
//               <div key={idx} className={`mb-4 pl-8 relative`}>
//                 <span className={styles["progress-bar_slide"]}>
//                   <span
//                     className={styles["progress-bar__inner"]}
//                     style={{
//                       transform: `scaleY(${activeIndex === idx ? 1 : 0})`,
//                     }}
//                   ></span>
//                 </span>
//                 <div className="p-4">
//                   <div
//                     className={`text-lg font-medium text-left w-full focus:outline-none ${
//                       activeIndex === idx ? "expanded" : ""
//                     }`}
//                   >
//                     {feature.title}
//                   </div>
//                   {activeIndex === idx && (
//                     <div className="mt-2 text-gray-700">
//                       <p>{feature.description}</p>
//                       <a
//                         href={feature.link}
//                         className="inline-block mt-2 text-blue-600 hover:underline"
//                       >
//                         More about {feature.title} &rarr;
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="w-full md:w-7/12 mt-8 md:mt-0 md:ml-8">
//             <Image
//               src={features[activeIndex].bg}
//               alt={features[activeIndex].title}
//               width={1388}
//               height={801}
//               className="rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;
