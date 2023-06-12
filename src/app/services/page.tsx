"use client";

import { useState } from "react";
import { Pagination } from "../components/Pagination";
import { MdKeyboardArrowDown } from "react-icons/md";
import data from "../../../data/services.json";

export default function Services() {
  const [hovered, setHovered] = useState(false);
  const [currService, setCurrService] = useState(0);

  const serviceData = data.serviceOfferings;
  console.log(currService);

  return (
    <>
      <h1 className="text-2xl text-center font-bold pt-12">Our Services</h1>
      <div className="container flex flex-col relative h-screen">
        <div
          className={`flex flex-col p-2 items-center justify-center ${
            hovered ? "h-1/2" : "h-1/3"
          } z-40 rounded-b-xl absolute inset-0 bg-hue-primary space-y-10 transition-all`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h2 className="phone:text-base tablet:text-lg font-medium">
            {serviceData[currService].title}
          </h2>
          <p
            className={`text-lg text-justify w-11/12 ${
              hovered ? "opacity-100 " : "opacity-0 hidden"
            } transition-opacity duration-1000 delay-500 ease-in-out `}
          >
            {serviceData[currService].description}
          </p>
          <div className={`${hovered ? "block" : "hidden"}`}>
            <Pagination
              pageIdx={currService + 1}
              maxLength={serviceData.length}
              prevBtn={() =>
                currService != 0 ? setCurrService(currService - 1) : null
              }
              nextBtn={() =>
                currService === serviceData.length - 1
                  ? null
                  : setCurrService(currService + 1)
              }
            />
          </div>
          <MdKeyboardArrowDown
            className={`text-3xl animate-bounce ${
              hovered ? "hidden" : "block"
            }`}
          />
        </div>
        <div className="bg-[url('https://dummyimage.com/720x720')] bg-cover bg-center h-2/3 w-full absolute inset-x-0 bottom-2"></div>
      </div>
    </>
  );
}
