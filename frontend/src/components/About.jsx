import React from "react";
import { assets } from "../assets/assets"; // Assuming you have relevant images here

const AboutCard = ({ title, description, image }) => {
  return (
    <div className="w-full m-auto rounded-2xl shadow-2xl p-5 bg-white fade-in-bottom">
      <div className="flex flex-col items-center">
        <img className="w-24 h-24 mb-4" src={image} alt={title} />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const aboutPoints = [
    {
      title: "Our Mission",
      description:
        "To deliver fresh, high-quality meals to our customers, ensuring a delightful and satisfying dining experience every time.",
      image: assets.mission, // Replace with the actual path to your image
    },
    {
      title: "Our Vision",
      description:
        "To be the go-to food delivery service, known for our speed, reliability, and exceptional customer service.",
      image: assets.vision, // Replace with the actual path to your image
    },
    {
      title: "Our Values",
      description:
        "Quality, convenience, and customer satisfaction are at the core of everything we do.",
      image: assets.values, // Replace with the actual path to your image
    },
    {
      title: "Our Team",
      description:
        "A passionate team dedicated to bringing delicious meals to your doorstep, ensuring a seamless delivery experience.",
      image: assets.team, // Replace with the actual path to your image
    },
  ];

  return (
    <div id="about">
      <h2 className="font-bold lg:text-4xl mt-7 mb-5 text-[#49557e] xs:text-3xl">
        About Us
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-5">
        {aboutPoints.map((point, index) => (
          <AboutCard
            key={index}
            title={point.title}
            description={point.description}
            image={point.image}
          />
        ))}
      </div>
      <hr className="lg:mx-0 my-3 mt-16 h-1 rounded xs:w-[95%] lg:w-full xs:mx-auto bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default AboutUs;
