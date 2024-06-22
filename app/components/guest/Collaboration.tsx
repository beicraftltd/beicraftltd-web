import React from "react";
// import "./App.css"; // You can add any additional styling here

const Collaboration: React.FC = () => {
  const integrations = [
    { name: "Bitbucket", src: "./assets/bitbucket.svg" },
    { name: "Asana", src: "../../../assets/asana.svg" },
    { name: "Slack", src: "../../../assets/slack.svg" },
    { name: "GitLab", src: "../../../assets/gitlab.svg" },
    { name: "Trello", src: "../../../assets/trello.svg" },
    { name: "Jenkins", src: "../../../assets/jenkins.svg" },
    { name: "GitHub", src: "../../../assets/github.svg" },
    { name: "CircleCI", src: "../../../assets/circle-ci-svg.svg" },
    { name: "JIRA", src: "../../../assets/jira-svg.svg" },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-96">
      <div className="text-center mb-10">
        <h2 className="text-gray-700 text-3xl md:text-4xl font-extrabold mb-4">
          Seamless Collaboration
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Integrate LambdaTest with your favorite tool and save yourself from
          manually managing bugs and tasks. Also fits with your CI/CD pipeline.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center mb-10">
        {integrations.map((integration, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full h-28"
          >
            <img
              src={integration.src}
              alt={integration.name}
              className="max-w-full max-h-full"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="#"
          className="text-gray-700 font-bold text-md uppercase flex items-center justify-center space-x-2"
        >
          <span>See All Integrations</span>
          <img
            src="../../../assets/right-arrow-circle-black-svg.svg"
            alt="Arrow"
            className="w-4 h-4"
          />
        </a>
      </div>
    </section>
  );
};

export default Collaboration;
