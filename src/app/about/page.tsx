"use client";

import { ServiceCard } from "../components/ServiceCard";
import data from "../../../data/customers.json";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "../../../utils/useIntersectionObserver";
import { LinkButton } from "../components/LinkButton";

// FIXME: Intersection observer when loading more data 

export default function About() {
  const [arrIdx, setArrIdx] = useState(1); // Start with 1 card
  const divRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(divRef);
  const screenWidth = window.innerWidth;

  const serviceData = data.customerBase;

  console.log(isOnScreen);
  console.log(`Screen width: ${screenWidth}`);

  // NOTE: Look at this later
  const loadMoreData = () => {
    screenWidth >= 768 ? setArrIdx(arrIdx + 2) : setArrIdx(arrIdx + 1);
  };

  useEffect(() => {
    if (isOnScreen && arrIdx <= serviceData.length) {
      loadMoreData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnScreen]);

  const visibleServiceData = serviceData.slice(0, arrIdx);

  return (
    <>
      <h1 className="pt-12 font-bold phone:text-xl tablet:text-2xl laptop:text-4xl desktop:text-6xl phone:text-center ">
        Our Approach
      </h1>
      <div className="container flex flex-col phone:items-center phone:justify-evenly phone:text-justify laptop:items-start phone:text-base tablet:text-lg laptop:text-xl desktop:text-2xl phone:w-11/12 phone:space-y-6 z-40">
        <p>
          At HeatSmart Solutions, we are driven by our passion for providing
          innovative driveway heating solutions that transform winter
          experiences.
        </p>
        <p>
          With years of expertise and a dedicated team, we strive to deliver
          cutting-edge technology, exceptional customer service, and unmatched
          reliability. Our commitment to quality and customer satisfaction is at
          the core of everything we do.
        </p>
        <p>
          Join us on this journey as we revolutionize winter comfort and safety,
          one driveway at a time.
        </p>
        <LinkButton
          btnTxt={"Get a Quote"}
          path={"/requests"}
          btnColor={"bg-hue-secondary"}
          txtColor={"text-hue-base"}
        />
      </div>
      <h2 className="font-medium phone:text-xl tablet:text-2xl laptop:text-4xl desktop:text-6xl phone:text-center ">
        Who we serve
      </h2>
      <div className="container grid grid-cols-1 gap-4 tablet:grid-cols-2 laptop:grid-cols-3">
        {visibleServiceData.map((value, index) => (
          <ServiceCard
            key={index}
            title={value.title}
            desc={value.description}
            icon={value.icon}
          />
        ))}
      </div>
      {arrIdx <= serviceData.length ? (
        <div ref={divRef} className="mx-auto phone:pt-48">
          <div
            className="w-12 h-12 rounded-full animate-spin
                    border-2 border-solid border-hue-secondary border-t-transparent"
          ></div>
        </div>
      ) : null}
    </>
  );
}
