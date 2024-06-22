import React from "react";

const FOOTER_LINKS = [
  {
    title: "Products & Features",
    links: [
      "Automation Testing Cloud",
      "Cross Browser Testing",
      "Real Device Cloud",
      "Test Manager",
      "Mobile App Testing",
      "AI-Powered Testing 🔥",
      "Smart TV testing 🔥",
      "HyperExecute",
      "LT Browser",
      "LT Debug",
      "Local Page Testing",
      "Automated Screenshots",
      "Geo-Location Testing",
      "Accessibility Testing",
      "Responsive Testing",
      "Localization Testing",
      "Visual Regression Testing",
      "Integrations",
      "Test Analytics 🔥",
    ],
  },
  {
    title: "Test on",
    links: [
      "iPhone 15 🔥",
      "List of Browsers",
      "Internet Explorer",
      "Firefox",
      "Chrome",
      "Safari Browser Online",
      "Microsoft Edge",
      "Opera",
      "Yandex",
      "Mac OS",
      "Mobile Devices",
      "iOS Simulator",
      "Android Emulator",
      "Browser Emulator",
    ],
  },
  {
    title: "Browser Automation",
    links: [
      "Selenium Testing",
      "Selenium Grid",
      "Cypress Testing",
      "Playwright Testing",
      "Puppeteer Testing",
      "Taiko Testing",
    ],
  },
  {
    title: "Mobile App Automation",
    links: ["Appium Testing", "Espresso Testing", "XCUITest Testing"],
  },
  {
    title: "Resources",
    links: [
      "TestMu Conf 2024 🔥",
      "Blogs",
      "Community",
      "Certifications",
      "Product Updates",
      "Newsletter",
      "Webinars",
      "Videos",
      "FAQ",
      "Web Technologies Compatibility",
      "Automation Testing Advisor",
      "Software Testing [Glossary]",
      "Free Online Tools",
      "Mobile Testing Advisor",
      "Sitemap",
      "Status",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Careers 💼",
      "Customers",
      "Press",
      "Reviews",
      "Community & Support",
      "Partners",
      "Open Source",
      "Write for Us",
      "Become an Affiliate",
      "Terms of service",
      "Privacy Policy",
      "Trust",
      "Team",
      "Contact Us",
    ],
  },
  {
    title: "Learning Hub",
    links: [
      "Selenium Tutorial",
      "Cypress Tutorial",
      "Playwright Tutorial",
      "Appium Tutorial",
      "Jest Tutorial",
      "More Learning Hubs",
    ],
  },
  {
    title: "What's New",
    links: [
      "Changelog",
      "Future of QA Survey Report",
      "Test on iPhone 15 🔥",
      "Test on Samsung Galaxy S24 Series",
      "May'24 Updates",
      "Coding Jag - Issue 195",
      "Kayak [Case Study]",
      "Get Element by Tag Name In Selenium [Blog]",
      "Crowdtesting Tutorial [Hub]",
      "Appium 101 [Certification]",
    ],
  },
];

const AWARDS = [
  "./assets/award1.svg",
  "./assets/award2.svg",
  "./assets/award3.svg",
  "./assets/award4.svg",
  "./assets/award5.svg",
];

const CERTIFICATIONS = [
  "./assets/cert1.svg",
  "./assets/cert2.svg",
  "./assets/cert3.svg",
  "./assets/cert4.svg",
  "./assets/cert5.svg",
  "./assets/cert6.svg",
  "./assets/cert7.svg",
];

const SOCIAL_MEDIA = [
  "./assets/facebook.svg",
  "./assets/twitter.svg",
  "./assets/linkedin.svg",
  "./assets/youtube.svg",
  "./assets/github.svg",
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FOOTER_LINKS.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link, subIndex) => (
                  <li key={subIndex} className="text-gray-700">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="my-8 border-t-2 border-gray-300"></div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex flex-col items-start">
            <img
              src="./assets/lambdatest-logo.svg"
              alt="LambdaTest Logo"
              className="mb-4"
            />
            <p className="text-gray-700 mb-4">
              Deliver unparalleled digital experience with our Next-Gen,
              AI-powered testing cloud platform. Ensure exceptional user
              experience across all devices and browsers.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white border-2 border-gray-300 px-4 py-2 rounded-md flex items-center">
                <img
                  src="./assets/google-icon.svg"
                  alt="Google Icon"
                  className="w-6 h-6 mr-2"
                />
                Start free with Google
              </button>
              <button className="bg-white border-2 border-gray-300 px-4 py-2 rounded-md">
                Start free with Email
              </button>
            </div>
          </div>
          <div className="text-left md:text-right">
            <p className="font-semibold">
              LambdaTest is #1 choice for SMBs and Enterprises across the globe.
            </p>
            <div className="flex justify-start md:justify-end space-x-2 mt-2">
              {AWARDS.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Award ${index + 1}`}
                  className="w-12 h-12"
                />
              ))}
            </div>
            <p className="mt-4 text-gray-700">
              LambdaTest has formal standards certification and comply in line
              with acts and regulations across the globe.
            </p>
            <div className="flex justify-start md:justify-end space-x-2 mt-4">
              {CERTIFICATIONS.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Certification ${index + 1}`}
                  className="w-12 h-12"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t-2 border-gray-300"></div>
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">
          <p>© 2024 LambdaTest. All rights reserved</p>
          <p>Cross Browser Testing Cloud Built With ❤️ For Testers</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {SOCIAL_MEDIA.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Social Media ${index + 1}`}
                className="w-6 h-6"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
