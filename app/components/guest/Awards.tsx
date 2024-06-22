import React from "react";
// import "./App.css"; // Assuming you have a CSS file for additional custom styles

const awards = [
  { src: "path-to-image1.png", alt: "Award 1" },
  { src: "path-to-image2.png", alt: "Award 2" },
  { src: "path-to-image3.png", alt: "Award 3" },
  { src: "path-to-image4.png", alt: "Award 4" },
  { src: "path-to-image5.png", alt: "Award 5" },
  { src: "path-to-image6.png", alt: "Award 6" },
  { src: "path-to-image7.png", alt: "Award 7" },
  { src: "path-to-image8.png", alt: "Award 8" },
];

const Award: React.FC = () => {
  return (
    <section className="flex flex-col items-center pt-12 px-36">
      <div className="flex flex-col md:flex-row gap-12 justify-center items-center w-full">
        <div className="flex flex-col justify-center items-start text-left w-full md:w-1/3">
          <p className="font-light text-2xl leading-9 mb-8">
            {
              "LambdaTest is #1 choice for SMBs and\nEnterprises across the globe."
            }
          </p>
          <h1 className="font-extrabold text-6xl leading-tight">
            Wall of Fame
          </h1>
        </div>
        {/* <div className="pt-12 flex justify-center items-center">
          <img
            src="./assets/wall-of-fame-png.svg"
            alt="Wall of Fame"
            className="max-w-full h-auto"
          />
        </div> */}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-2/3">
        {awards.map((award, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 border rounded-lg shadow-lg bg-white"
          >
            <img
              src={award.src}
              alt={award.alt}
              className="max-w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Award;
