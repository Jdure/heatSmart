"use client";

import { useState } from "react";
import { Pagination } from "../components/Pagination";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Services() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <h1 className="text-2xl text-center pt-12">Our Services</h1>
      <div className="container flex flex-col relative h-screen">
        <div
          className={`flex flex-col p-2 items-center justify-center ${
            hovered ? "h-1/2" : "h-1/3"
          } z-40 rounded-b-xl absolute inset-0 bg-hue-primary space-y-10 transition-all`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h2 className="text-xl font-medium">
            Driveway Heating System Installation
          </h2>
          <p
            className={`text-lg text-justify w-11/12 ${
              hovered ? "opacity-100 " : "opacity-0 hidden"
            } transition-opacity duration-1000 delay-500 ease-in-out `}
          >
            Experience the ultimate solution for a hassle-free winter with our
            cutting-edge driveway heating systems. Say goodbye to snow and ice,
            as our innovative technology keeps your driveway warm and clear.
            Embrace convenience and safety with our reliable and efficient
            solutions for a seamless winter experience.
          </p>
          <div className={`${hovered ? "block" : "hidden"}`}>
            <Pagination pageIdx={"1"} maxLength={"1"} />
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
