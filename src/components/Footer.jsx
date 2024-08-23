import React from "react";
import logoImage from "../assets/images/logo.png";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const About = ["About Us", "Features", "News", "Menu"];
const Company = ["Why Fudo", "Partner With Us", "FAQ", "Blog"];
const Support = [
  "Account",
  "Support Center",
  "Feedback",
  "Contact Us",
  "Accessibility",
];

const Footer = () => {
  return (
    <div className="w-full mt-28">
      <div className="flex items-start w-full gap-24">


        <div className="flex-1">
          <div className="flex gap-5 mb-8">
            <div className="w-11 h-11">
              <img src={logoImage} alt="logo" className="w-full h-full" />
            </div>
            <div className="text-2xl font-semibold">Fudo</div>
          </div>

          <div className="text-base font-medium text-gray1 leading-[30px] mb-9">
            Our job is to filling your tummy with delicious food and with fast
            and free delivery.
          </div>
          <div className="flex gap-10">
            <SiInstagram className="w-6 h-6 text-primary" />
            <SiFacebook className="w-6 h-6 text-primary" />
            <SiX className="w-6 h-6 text-primary" />
          </div>
        </div>

        <div className="flex justify-between flex-2">
          <ul>
            <li className="text-xl font-semibold mb-6">About</li>
            {About.map((item, index) => {
              return (
                <li className="text-gray font-medium text-base mb-4 hover:text-primary cursor-pointer duration-200 text-gray1">
                  {item}
                </li>
              );
            })}
          </ul>
          <ul>
            <li className="text-xl font-semibold mb-6">Company</li>
            {Company.map((item, index) => {
              return (
                <li className="text-gray font-medium text-base mb-4 hover:text-primary cursor-pointer duration-200 text-gray1">
                  {item}
                </li>
              );
            })}
          </ul>
          <ul>
            <li className="text-xl font-semibold mb-6">Support</li>
            {Support.map((item, index) => {
              return (
                <li className="text-gray font-medium text-base mb-4 hover:text-primary cursor-pointer duration-200 text-gray1">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex-1">
          <h1 className="text-xl font-semibold mb-6">Get in Touch</h1>
          <p className="text-gray1 text-lg font-medium mb-3">
            Question or feedback?
          </p>
          <p className="text-gray1 text-lg font-medium">
            We’d love to hear from you
          </p>
        </div>


      </div>
    </div>
  );
};

export default Footer;
