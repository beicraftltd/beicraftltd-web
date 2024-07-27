import React from "react";
import Image from "next/image";

import lambdatestLogo from "/assets/images-footer_lambdatest_logo.svg";
import googleIcon from "/assets/images-google_favicon.svg";
import award1 from "/assets/ltbrowser-G2-2023.png";
import award2 from "/assets/ltbrowser-Getapp.png";
import award3 from "/assets/ltbrowser-leader.png";
import award4 from "/assets/ltbrowser-softwareadvice.png";
import award5 from "/assets/ltbrowser-crozdesk-2.png";
import award6 from "/assets/images-product-of-the-day.png";
import cert1 from "/assets/images-hippa.png";
import cert2 from "/assets/images-gdpr.png";
import cert3 from "/assets/images-aicpa.png";
import cert4 from "/assets/images-csa.png";
import cert5 from "/assets/images-ccpa.png";
import cert6 from "/assets/images-bsii.png";
import cert7 from "/assets/images-bsii1.png";
import cert8 from "/assets/images-bsii2.png";
import facebookIcon from "/assets/icons-facebook-logo.png";
import twitterIcon from "/assets/icons-twitter-logo.png";
import linkedinIcon from "/assets/icons-linkedin-logo.png";
import youtubeIcon from "/assets/icons-youtube-logo.png";
import githubIcon from "/assets/icons-github_icon.png";
import glassDoorIcon from "/assets/icons-glassdoor.svg";
import HeroButtons from "@/app/SHADCN/HeroButtons";

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
            <Image
              src={lambdatestLogo}
              alt="LambdaTest Logo"
              className="mb-4"
            />
            <p className="text-gray-700 mb-4">
              Deliver unparalleled digital experience with our Next-Gen,
              AI-powered testing cloud platform. Ensure exceptional user
              experience across all devices and browsers.
            </p>
            <div className="flex space-x-4">
              <HeroButtons/>
              {/* <button className="bg-white border-2 border-gray-300 px-4 py-2 rounded-md flex items-center">
                <Image
                  src={googleIcon}
                  alt="Google Icon"
                  className="w-6 h-6 mr-2"
                />
                Start free with Google
              </button>
              <button className="bg-white border-2 border-gray-300 px-4 py-2 rounded-md">
                Start free with Email
              </button> */}
            </div>
          </div>
          <div className="text-left md:text-right">
            <p className="text-gray-800 font-normal">
              LambdaTest is #1 choice for SMBs and Enterprises across the globe.
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-center mt-4">
              {[award1, award2, award3, award4, award5, award6].map(
                (award, index) => (
                  <Image
                    key={index}
                    src={award}
                    alt={`Award ${index + 1}`}
                    // className="w-12 h-12"
                    height={93}
                    width={81}
                  />
                )
              )}
            </div>
            <p className="mt-4 text-gray-800 font-normal">
              LambdaTest has formal standards certification and comply in line
              with acts and regulations across the globe.
            </p>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 justify-center mt-4">
              {[cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8].map(
                (cert, index) => (
                  <Image
                    key={index}
                    src={cert}
                    alt={`Certification ${index + 1}`}
                    // className="w-12 h-12"
                    height={89}
                    width={88}
                  />
                )
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t-2 border-gray-300"></div>
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">
          <p>© 2024 LambdaTest. All rights reserved</p>
          <p>Cross Browser Testing Cloud Built With ❤️ For Testers</p>
          <div className="mt-4 flex justify-center text-gray-700 text-sm space-x-4">
            {[
              facebookIcon,
              twitterIcon,
              linkedinIcon,
              youtubeIcon,
              githubIcon,
              glassDoorIcon,
            ].map((social, index) => (
              <Image
                key={index}
                src={social}
                alt={`Social Media ${index + 1}`}
                className="w-auto h-auto"
                // height={24}
                // width={24}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
