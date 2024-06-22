import React from "react";
// import "./App.css"; // Include any additional styling here

const reviews = [
  {
    name: "Mohammad Faisal Khatri",
    handle: "@faisalkhatri",
    text: "Thank you @lambdatesting for providing free open source license to run the web and mobile tests of our open source projects for free on Lambdatest platform.",
    imageUrl: "./assets/user1.jpg",
  },
  {
    name: "Ben Pritchard",
    handle: "@yesiamben",
    text: "Super top notch customer support from @lambdatesting - just throwing it out there if you’re looking for a decent browser testing platform, they get my full double thumbs up. 👍👍",
    imageUrl: "./assets/user2.jpg",
  },
  {
    name: "Mat Gargano",
    handle: "@matgargano",
    text: "@lambdatesting is fantastic. Cross browser and device testing frustration is minimized. You can’t get rid of clients that need ie11 nor can you own every device but lambda test bridge that gap.",
    imageUrl: "./assets/user3.jpg",
  },
  {
    name: "Matthew Bryson",
    handle: "@mbrysonuk",
    text: "Second-day using @lambdatesting and it’s already proven itself a lot faster than Cross Browser Testing and BrowserStack, at half the price! bargain",
    imageUrl: "./assets/user4.jpg",
  },
  {
    name: "Michael (Mike) Horne",
    handle: "@recantha",
    text: "Really superb customer service from Arpit @lambdatesting tricky Automation problem using Selenium in Python and they talked me through it and got me up-and-running. Awesome. :-)",
    imageUrl: "./assets/user5.jpg",
  },
  {
    name: "Timothy Wintle",
    handle: "@timwintle1979",
    text: "@lambdatesting can I just say, your support team are first class. I had the pleasure of talking with Prateek Singh. He went the extra mile and nothing was too much trouble. Clearly your support are also very technically adept, something which I really value. Thank you!",
    imageUrl: "./assets/user6.jpg",
  },
];

const Reviews: React.FC = () => {
  return (
    <section className="bg-blue-50 py-16 px-12 md:px-36">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <div className="text-lg mb-2">4.8 out of 5 - G2 Crowd</div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            They talk about it better than us
          </h2>
          <a
            href="#"
            className="inline-block bg-black text-white py-3 px-6 rounded shadow"
          >
            Read All Reviews
          </a>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">{review.text}</p>
              <div className="flex items-center">
                <img
                  src={review.imageUrl}
                  alt={review.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <div className="font-medium text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
