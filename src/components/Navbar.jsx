import React from "react";
import logoImage from "../assets/images/logo.png";
import { Search } from "akar-icons";


export function CaLogin(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 32 32" {...props}>
      <path
        fill="currentColor"
        d="M26 30H14a2 2 0 0 1-2-2v-3h2v3h12V4H14v3h-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2"
      ></path>
      <path
        fill="currentColor"
        d="M14.59 20.59L18.17 17H4v-2h14.17l-3.58-3.59L16 10l6 6l-6 6z"
      ></path>
    </svg>
  );
}

const Navbar = () => {
  const NavigationBar = [
    {
      id: 0,
      name: "Why Fudo?",
    },
    {
      id: 1,
      name: "Services",
      to: "about"
    },
    {
      id: 2,
      name: "Menu",
       to: "menu"
    },
    {
      id: 3,
      name: "Contact",
       to: "footer"
    },
  ];
  return (
    <div className="w-full flex items-center justify-between z-20">
      <div className="flex items-center font-semibold text-2xl">
        <div className="mr-5 w-11 h-11">
          <img src={logoImage} alt="logo" className="w-full h-full" />
        </div>
        Fudo
      </div>

      <div className="w-[420px]">
        <div className="flex w-full items-center justify-between text-sm font-medium">
          {NavigationBar.map((setting, index) => {
            return <div onClick={() => {document.getElementById(setting.to).scrollIntoView({behavior: "smooth"})}} className="hover:text-primary duration-200 cursor-pointer" key={index}>{setting.name}</div>;
          })}
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div>
          <Search strokeWidth={2} size={22} />
        </div>
        <div>
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.64528 9.02004C2.68215 8.56061 2.89072 8.13193 3.22945 7.81936C3.56818 7.50679 4.01221 7.33328 4.47311 7.33337H15.5263C15.9872 7.33328 16.4312 7.50679 16.7699 7.81936C17.1087 8.13193 17.3172 8.56061 17.3541 9.02004L18.0902 18.1867C18.1104 18.439 18.0782 18.6927 17.9956 18.9319C17.913 19.1711 17.7818 19.3906 17.6101 19.5766C17.4385 19.7626 17.2303 19.911 16.9985 20.0126C16.7667 20.1142 16.5164 20.1666 16.2633 20.1667H3.73611C3.48304 20.1666 3.23273 20.1142 3.00093 20.0126C2.76913 19.911 2.56087 19.7626 2.38925 19.5766C2.21764 19.3906 2.08639 19.1711 2.00377 18.9319C1.92115 18.6927 1.88895 18.439 1.9092 18.1867L2.64528 9.02004V9.02004Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.6663 10.0834V5.50004C13.6663 4.52758 13.28 3.59495 12.5924 2.90732C11.9048 2.21968 10.9721 1.83337 9.99967 1.83337C9.02721 1.83337 8.09458 2.21968 7.40695 2.90732C6.71932 3.59495 6.33301 4.52758 6.33301 5.50004V10.0834"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <button className="bg-primary text-white w-[120px] flex items-center p-4 text-sm rounded-full justify-center">
          {" "}
          <CaLogin  />
          <span className="ml-2">Login</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
