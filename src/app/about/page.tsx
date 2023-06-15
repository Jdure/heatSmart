/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { CostomerCard } from "../components/CostomerCard";
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

  const customerData = data.customerBase;

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

  const visibleCustomerData = customerData.slice(0, arrIdx);

  return (
    <>
      <h1 className="pt-12 font-bold phone:text-xl tablet:text-2xl laptop:text-4xl desktop:text-6xl phone:text-center laptop:text-start laptop:ml-3">
        Our Approach
      </h1>
      <div className="flex flex-col phone:items-center phone:justify-evenly phone:text-justify laptop:items-start phone:text-base tablet:text-lg laptop:text-xl laptop:ml-3 desktop:text-2xl phone:w-11/12 phone:space-y-6 z-40">
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
      </div>
      <div className="text-hue-base bg-hue-accent z-40">
        <div className="container px-5 py-24 mx-auto">
          <div className="laptop:w-full flex flex-col tablet:flex-row tablet:items-center items-start mx-auto">
            <h1 className="flex-grow tablet:pr-16 phone:text-base tablet:text-lg laptop:text-2xl font-medium title-font">
              Join us on this journey as we revolutionize winter comfort and
              safety, one driveway at a time.
            </h1>
            <div className="flex-shrink-0 phone:mt-10 tablet:mt-0">
              <LinkButton
                btnTxt={"Get a Quote"}
                path={"/requests"}
                btnColor={"bg-hue-secondary"}
                txtColor={"text-hue-base"}
              />
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-medium phone:text-xl tablet:text-2xl laptop:text-3xl desktop:text-5xl phone:text-center laptop:text-start laptop:ml-3">
        Who we serve
      </h2>
      <div className="container grid grid-cols-1 gap-4 tablet:grid-cols-2 laptop:grid-cols-3 laptop:mx-auto">
        {visibleCustomerData.map((value, index) => (
          <CostomerCard
            key={index}
            title={value.title}
            desc={value.description}
            icon={value.icon}
          />
        ))}
      </div>
      {arrIdx <= customerData.length ? (
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
