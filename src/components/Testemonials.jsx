import React from "react";
import testemonialImage from "../assets/images/testemonial.png";
import personImage from "../assets/images/person.png";
import personImage2 from "../assets/images/person2.png";
import personImage3 from "../assets/images/person3.png";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Avatar, AvatarGroup } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Testemonials = () => {
  return (
    <div className="w-full flex items-center justify-between mt-28" id="testemonials">
      <div className="w-[45%] h-screen flex items-center justify-center relative">
        <div className="w-full h-auto relative">
          <img
            src={testemonialImage}
            alt="test image"
            className="w-full h-auto max-h-[90vh] relative"
          />
          <div className="absolute bg-white -bottom-16 px-6 pb-5 pt-8 rounded-xl right-0 shadow-xl">
            <div className="mb-3 text-xl font-semibold ml-2">Our Reviewers</div>
            <ThemeProvider
              theme={createTheme({
                components: {
                  MuiAvatarGroup: {
                    styleOverrides: {
                      root: ({ ownerState: { max } }) => ({
                        ...[...Array(max)].reduce(
                          (result, curr, index) => ({
                            ...result,
                            [`& > .MuiAvatar-root:nth-child(${index + 1})`]: {
                              zIndex: max - index,
                            },
                          }),
                          {}
                        ),
                      }),
                    },
                  },
                },
              })}
            >
              <AvatarGroup max={4} spacing={10}>
                <Avatar
                  sx={{ width: "64px", height: "64px" }}
                  src={personImage}
                />
                <Avatar
                  sx={{ width: "64px", height: "64px" }}
                  src={personImage2}
                />
                <Avatar
                  sx={{ width: "64px", height: "64px" }}
                  src={personImage3}
                />
                <Avatar sx={{ width: "64px", height: "64px" , color: "white", backgroundColor: "#EB5757", fontSize: "1rem", fontWeight: "600"}}> 12k+ </Avatar>
              </AvatarGroup>
            </ThemeProvider>
          </div>
        </div>
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
          <div className="ml-4">4.5</div>
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
