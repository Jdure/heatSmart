"use client";

import { useState } from "react";
import { Pagination } from "../components/Pagination";
import { MdKeyboardArrowDown } from "react-icons/md";
import data from "../../../data/services.json";

export default function Services() {
  const [hovered, setHovered] = useState(false);
  const [currService, setCurrService] = useState(0);

  const serviceData = data.serviceOfferings;

  return (
    <>
      <h1 className="pt-12 font-bold phone:text-xl tablet:text-2xl laptop:text-4xl desktop:text-6xl phone:text-center laptop:text-start laptop:ml-3">
        Our Services
      </h1>
      <div className="container flex flex-col relative h-screen tablet:hidden">
        <div
          className={`flex flex-col p-2 items-center justify-center ${
            hovered ? "h-1/2" : "h-1/3"
          } z-40 rounded-b-xl absolute inset-0 bg-hue-accent space-y-10 transition-all`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h2 className="phone:text-hue-base text-lg font-medium">
            {serviceData[currService].title}
          </h2>
          <p
            className={`text-base text-hue-base text-center w-11/12 ${
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
      <div className="hidden tablet:flex flex-row h-screen z-40">
        <div className="hidden tablet:flex tablet:px-4 tablet:flex-col tablet:items-center laptop:items-start tablet:justify-around laptop:justify-evenly tablet:basis-3/5 laptop:basis-1/2 bg-hue-accent">
          <h2 className="hidden tablet:block  tablet:text-xl laptop:text-3xl desktop:text-4xl font-bold text-hue-base">
            {serviceData[currService].title}
          </h2>
          <p className="hidden tablet:block tablet:text-center laptop:text-start tablet:text-lg laptop:text-2xl desktop:text-3xl laptop:leading-loose desktop:leading-10 text-hue-base">
            {serviceData[currService].description}
          </p>
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
        <div className="bg-[url('https://dummyimage.com/720x720')] bg-cover bg-center tablet:basis-2/5 laptop:basis-1/2"></div>
      </div>
    </>
  );
}
