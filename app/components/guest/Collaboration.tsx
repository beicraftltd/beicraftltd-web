import React from "react";
import Image from "next/image"; // Assuming you are using Next.js for optimized images
import bitbucketIcon from "/assets/collabs-bitbucket.svg";
import asanaIcon from "/assets/collabs-asana.svg";
import slackIcon from "/assets/collabs-slack.svg";
import gitlabIcon from "/assets/collabs-gitlab.svg";
import trelloIcon from "/assets/collabs-trello.svg";
import jenkinsIcon from "/assets/collabs-jenkins.svg";
import githubIcon from "/assets/collabs-github.svg";
import circleCiIcon from "/assets/collabs-CircleCI.svg";
import jiraIcon from "/assets/collabs-jira.svg";
import rightArrowIcon from "/assets/icons-right-arrow-circle-black.svg";
import { Button } from "@/components/ui/button";
import { link } from "fs";

const Collaboration: React.FC = () => {
  const integrations = [
    { name: "Bitbucket", src: bitbucketIcon },
    { name: "Asana", src: asanaIcon },
    { name: "Slack", src: slackIcon },
    { name: "GitLab", src: gitlabIcon },
    { name: "Trello", src: trelloIcon },
    { name: "Jenkins", src: jenkinsIcon },
    { name: "GitHub", src: githubIcon },
    { name: "CircleCI", src: circleCiIcon },
    { name: "JIRA", src: jiraIcon },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24 xl:px-48">
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
            <Image
              src={integration.src}
              alt={integration.name}
              loading="lazy"
              width={200} // Adjust width as per your design needs
              height={80} // Adjust height as per your design needs
              className="max-w-full max-h-full"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="#"
          className="flex items-center justify-center"
        >
          <Button
            className="text-gray-700 font-bold text-md uppercase"
            variant={"link"}
          >
            See All Integrations
          </Button>
          <Image
            src={rightArrowIcon}
            alt="Arrow"
            loading="lazy"
            width={18} // Adjust width as per your design needs
            height={15}
            className="w-4 h-4"
          />
        </a>
      </div>
    </section>
  );
};

export default Collaboration;
