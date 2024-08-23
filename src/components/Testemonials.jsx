import React from "react";
import testemonialImage from "../assets/images/testemonial.png";
import personImage from "../assets/images/person.png";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const Testemonials = () => {
  return (
    <div className="w-full flex items-center justify-between mt-28">
      <div className="w-[45%] h-screen flex items-center justify-center">
        <img
          src={testemonialImage}
          alt="test image"
          className="w-full h-auto max-h-[90vh]"
        />
      </div>
      <div className="w-[45%] text-start">
        <div className="font-semibold text-lg text-primary tracking-[0.2em] mb-3">
          WHAT THEY SAY
        </div>
        <div className="font-bold text-[3.25rem] text-gray1 tracking-wide leading-snug mb-5">
          What Our Customers Say About Us
        </div>
        <div className="font-medium text-xl leading-loose text-gray1 mb-8">
          “Fudo is the best. Besides the many and delicious meals, the service
          is also very good, especially in the very fast delivery. I highly
          recommend Fudo to you”.
        </div>
        <div className="flex items-center mb-3">
          <div className="w-16 h-16 rounded-full mr-4">
            <img
              src={personImage}
              alt="person image"
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <div className="font-medium text-xl ">Theresa Jordan</div>
            <div className="font-medium text-base text-gray3">
              Food Enthusiast
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Rating
            size="large"
            icon={<StarIcon fontSize="inherite" sx={{ marginRight: "8px" }} />}
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#F2C94C", // Set active color
              },
            }}
            value={4.5}
            readOnly
            precision={0.5}
          />
          <div className="ml-4">
            4.5
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
