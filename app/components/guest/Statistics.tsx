import React from "react";

const statistics = [
  {
    title: "Tests",
    value: "1.2B+",
    iconSrc: "./assets/ep-tests-svg.svg",
  },
  {
    title: "Users",
    value: "2M+",
    iconSrc: "./assets/ep-users-svg.svg",
  },
  {
    title: "Enterprises",
    value: "10000+",
    iconSrc: "./assets/ep-enterprises-svg.svg",
  },
  {
    title: "Countries",
    value: "132",
    iconSrc: "./assets/ep-countries-svg.svg",
  },
];

const Statistic: React.FC = () => {
  return (
    <section className="flex flex-col items-center pt-24 px-36">
      <div className="flex flex-col md:flex-row justify-center items-center w-full border-t border-b py-12">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center w-full md:w-1/4 text-center md:text-left p-8"
          >
            <img
              src={stat.iconSrc}
              alt={stat.title}
              className="w-14 h-14 mr-6 md:mr-0 md:mb-4 md:ml-6"
            />
            <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
              <h3 className="font-semibold text-4xl mb-2">{stat.value}</h3>
              <p className="font-light text-lg text-gray-600">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistic;
