import React from "react";
import Image from "next/image";

import testsIcon from "/assets/images-ep_tests.svg";
import usersIcon from "/assets/images-ep_users.svg";
import enterprisesIcon from "/assets/images-ep_enterprises.svg";
import countriesIcon from "/assets/images-ep_countries.svg";

const statistics = [
  {
    title: "Tests",
    value: "1.2B+",
    iconSrc: testsIcon,
  },
  {
    title: "Users",
    value: "2M+",
    iconSrc: usersIcon,
  },
  {
    title: "Enterprises",
    value: "10000+",
    iconSrc: enterprisesIcon,
  },
  {
    title: "Countries",
    value: "132",
    iconSrc: countriesIcon,
  },
];

const Statistic: React.FC = () => {
  return (
    <section className="flex flex-col items-center pt-12 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center w-full border-black border-t border-b py-8 md:py-12">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 md:p-8"
          >
            <Image
              src={stat.iconSrc}
              alt={stat.title}
              width={56}
              height={56}
              className="mb-4"
            />
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-2xl md:text-4xl mb-2">
                {stat.value}
              </h3>
              <p className="font-light text-base md:text-lg text-gray-600">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistic;
