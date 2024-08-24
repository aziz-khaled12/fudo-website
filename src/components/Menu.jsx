import React, { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { menuItems } from "../data/Menu";
import { menuContent } from "../data/Menu";

const Menu = () => {
  const swiperRef = useRef(null);
  const [selected, setSelected] = useState("burger");

  const filteredContent = useMemo(() => {
    return menuContent.filter((item) => item.name === selected);
  }, [menuContent, selected]);

  return (
    <>
      <div className="w-full flex items-center flex-col mt-28" id="menu">
        <div className="w-full flex items-end justify-between  mb-12">
          <div className="w-[50%] text-start">
            <div className="font-semibold text-lg text-primary tracking-[0.2em] mb-3">
              OUR MENU
            </div>
            <div className="font-bold text-[3.25rem] text-gray1 tracking-wide leading-snug">
              Menu That Always Makes You Fall In Love
            </div>
          </div>
          <div className="flex gap-6">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-3 w-16 h-16 rounded-full bg-gray2 hover:bg-primary hover:text-white flex items-center justify-center"
            >
              {" "}
              <MdOutlineArrowBackIos className="text-2xl" />{" "}
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-3 w-16 h-16 rounded-full bg-gray2 hover:bg-primary hover:text-white flex items-center justify-center"
            >
              {" "}
              <MdOutlineArrowForwardIos className="text-2xl" />{" "}
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-[30%] h-[65vh] overflow-auto custom-scrollbar mr-10">
            <div className="flex flex-col items-center">
              <div className="w-full pr-20">
                {menuItems.map((item, index) => {
                  return (
                    <>
                      <div
                        className={`p-4 cursor-pointer flex items-center w-[95%] mb-3 rounded-full ${
                          selected === item.name
                            ? `bg-primary`
                            : `bg-transparent hover:bg-accent`
                        }`}
                        onClick={() => {
                          setSelected(item.name);
                        }}
                      >
                        <div
                          className={`w-[50px] h-[50px] flex items-center justify-center ${
                            selected === item.name
                              ? `bg-white`
                              : `bg-transparent`
                          } rounded-full mr-5`}
                        >
                          <img
                            src={item.image}
                            alt="item-icon"
                            className="w-[30px] h-auto"
                          />
                        </div>
                        <div
                          className={`font-medium text-xl ${
                            selected === item.name ? `text-white` : `text-black`
                          }`}
                        >
                          {item.title}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-[60%] h-[68vh]">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              slidesPerView={1.75}
              spaceBetween={40}
              navigation={false}
            >
              {filteredContent.map((item) => (
               <SwiperSlide key={item.id}>
               <div className="relative rounded-2xl cursor-pointer">
                 <img
                   src={item.image}
                   alt={item.title}
                   className="w-full h-auto max-h-[68vh] rounded-2xl"
                 />
                 <div className="absolute inset-0 flex flex-col justify-end px-6 py-4 bg-gradient-to-t rounded-2xl from-black via-transparent to-transparent text-start">
                   <h2 className="text-3xl font-medium text-white ">{item.title}</h2>
                   <p className="text-2xl text-white mt-5">$ <span className="text-4xl font-bold">{item.price}</span> </p> 
                   <h1 className="text-white text-lg font-medium flex items-center mt-5 cursor-pointer">order now <MdOutlineArrowForwardIos className="ml-3 text-1xl"/></h1>
                 </div>
               </div>
             </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
