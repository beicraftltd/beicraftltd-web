import React from "react";

const features = [
  { title: "Live Testing", bg: "/assets/background.svg" },
  { title: "Automated Testing", bg: "/assets/background-2.svg" },
  {
    title: "Mobile App Testing",
    bg: "/assets/background-3.svg",
    detailed: true,
  },
  { title: "HyperExecute", bg: "/assets/background-4.svg" },
  { title: "Visual Regression Cloud", bg: "/assets/background-5.svg" },
  { title: "AI-Powered Test Analytics", bg: "/assets/background-6.svg" },
  { title: "Smart TV Testing", bg: "/assets/background-7.svg" },
];

const FeatureSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white py-10 px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-2">
          Unified Digital Experience Testing Cloud to Accelerate Your
          Go-To-Market
        </h2>
        <p className="text-lg text-gray-600">
          Secure, Reliable, and High Performance Test Execution Cloud Built For
          Scale
        </p>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3 w-full flex flex-col space-y-2">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative flex flex-col"
              style={{ background: `url(${feature.bg}) no-repeat left center` }}
            >
              <div className="pl-10 pr-4 py-4">
                <h3 className="text-xl font-medium text-gray-700">
                  {feature.title}
                </h3>
                {feature.detailed && (
                  <div className="mt-2 text-sm text-gray-600">
                    <p>
                      Perform live interactive testing of your mobile apps on a
                      multitude of Android and iOS devices. Test and debug your
                      mobile apps faster on both Emulators/Simulators or online
                      real device cloud.
                    </p>
                    <a href="#" className="mt-1 text-blue-500">
                      More about Mobile App Testing{" "}
                      <img
                        className="inline-block ml-1"
                        src="/assets/blue-right-section-svg.svg"
                        alt="arrow"
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-2/3 w-full flex justify-center items-center mt-8 lg:mt-0">
          <img
            src="/assets/hyperexecute-index-png.svg"
            alt="HyperExecute Dashboard"
            className="w-full max-w-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
