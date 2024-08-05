import React from "react";
import {
  FaFan,
  FaCar,
  FaClockRotateLeft,
  FaWifi,
  FaBowlFood,
  FaGlassWaterDroplet,
} from "react-icons/fa6";
import "./Section3.css";

const Section3 = () => {
  const array = [
    {
      icon: FaFan,
      title: "AC Facility",
      desc: "Lorem Ipsum",
    },
    {
      icon: FaGlassWaterDroplet,
      title: "24 Hours Water Facility",
      desc: "Lorem Ipsum",
    },
    {
      icon: FaCar,
      title: "Plenty Parking Facility",
      desc: "Lorem Ipsum",
    },
    {
      icon: FaClockRotateLeft,
      title: "24 Hours Support",
      desc: "Lorem Ipsum",
    },
    {
      icon: FaWifi,
      title: "Wifi Facility",
      desc: "Lorem Ipsum",
    },
    {
      icon: FaBowlFood,
      title: "Quality Food",
      desc: "Lorem Ipsum",
    },
  ];

  return (
    <div className=" bg-[#fffaf1] py-8 px-5 flex flex-col  gap-14">
      {/* top section */}
      <section className="flex flex-col gap-4">
        <h1 className="text-5xl font-marcellus text-center leading-tight">
          Facilities & Highlights of the Hotel
        </h1>
        <p className="text-greyColor text-center">
          Designed for the discerning traveler, a tailored retreat providing
          exceptional experiences.
        </p>
      </section>

      {/* bottom section */}
      <section>
        <div className="flex  flex-wrap  py-9 px-5 md:px-0 justify-center container mx-auto gap-8 main">
          {array.map((item) => {
            const IconComponent = item.icon;
            return (
              <div className="w-[100%] shadow-2xl">
                <div
                  key={item.title}
                  className="text-center flex flex-col h-[30vh]  flex-1 gap-4 items-center justify-center"
                >
                  <IconComponent size={40} className="mb-2" />
                  <h1 className="text-lg font-bold text-primary">
                    {item.title}
                  </h1>
                  <p className="text-sm text-gray-600 text-[0.95vmax]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Section3;
