import React from "react";
import aboutImage1 from "../assets/images/5739256 1.png";
import aboutImage2 from "../assets/images/Take Away-rafiki 1.png";
import aboutImage3 from "../assets/images/Waiters-rafiki 1.png";

const aboutCards = [
  {
    id: 0,
    title: "Easy To Order",
    desc: "You only need a few steps in ordering food",
    image: aboutImage1,
  },
  {
    id: 1,
    title: "Fastest Delivery",
    desc: "Delivery that is always ontime even faster",
    image: aboutImage2,
  },
  {
    id: 2,
    title: "Best Quality",
    desc: "Not only fast for us quality is also number one",
    image: aboutImage3,
  },
];
const About = () => {
  return (
    <div className="w-full flex flex-col items-center mt-20">
      <div className="w-[50%] text-center mb-12">
        <div className="font-semibold text-lg text-primary tracking-[0.2em] mb-5">
          WHAT WE SERVE
        </div>
        <div className="font-bold text-5xl text-gray1 tracking-wide leading-snug">
          Your Favorite Food Delivery Partner
        </div>
      </div>

      <div className="w-full">
        <div className="w-full flex p-4 flex-wrap gap-28 items-center justify-between">
          {aboutCards.map((card, index) => {
            return (
              <>
                <div className="flex-1 flex flex-col gap-6 items-center">
                    <div className="w-[90%]">
                        <img src={card.image} alt="about image" className="w-full h-auto" />
                    </div>
                    <div className="text-center">
                        <h1 className="font-bold text-[1.75rem] mb-3">{card.title}</h1>
                        <p className="font-medium text-lg text-gray1">{card.desc}</p>
                    </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
