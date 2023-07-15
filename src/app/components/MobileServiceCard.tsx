"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Pagination } from "./Pagination";

type Record = {
  title?: string;
  description?: string;
  id: string;
};

export default function MobileServiceCard({
  serviceData,
}: {
  serviceData: Record[];
}) {
  const [hovered, setHovered] = useState(false);
  const [currService, setCurrService] = useState(0);
  return (
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
          className={`text-3xl animate-bounce ${hovered ? "hidden" : "block"}`}
        />
      </div>
      <div className="bg-[url('https://dummyimage.com/720x720')] bg-cover bg-center h-2/3 w-full absolute inset-x-0 bottom-2"></div>
    </div>
  );
}
