/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ServiceCard } from "../components/ServiceCard";
import data from "../../../data/customers.json";
import { useEffect, useRef, useState } from "react";

import { LinkButton } from "../components/LinkButton";
import { useIntersectionObserver, useScreen } from "usehooks-ts";

export default function About() {
  const [arrIdx, setArrIdx] = useState(3);
  const refDiv = useRef<HTMLDivElement | null>(null);
  const screen = useScreen();
  const entry = useIntersectionObserver(refDiv, {
    rootMargin: "0px 0px 200px 0px",
    threshold: 1,
  });
  const isVisible = !!entry?.isIntersecting;

  const serviceData = data.customerBase;

  const loadMoreData = () => {
    if (screen?.width !== undefined) {
      screen?.width >= 640 ? setArrIdx(arrIdx + 3) : setArrIdx(arrIdx + 1);
    }
  };

  useEffect(() => {
    if (isVisible) {
      loadMoreData();
    }
  }, [isVisible]);

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
        <div id="loading" className="mx-auto">
          <div
            ref={refDiv}
            className="w-12 h-12 rounded-full animate-spin
                    border-2 border-solid border-hue-secondary border-t-transparent"
          ></div>
        </div>
      ) : null}
    </>
  );
}
