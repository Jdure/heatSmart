"use client";

import { ServiceCard } from "../components/ServiceCard";
import data from "../../../data/customers.json";
import { useRef } from "react";
import useOnScreen from "../../../utils/useIntersectionObserver";
import { LinkButton } from "../components/LinkButton";

// TODO: Add IntersectionObserver

export default function About() {
  // const [arrIdx, setArrIdx] = useState(3);
  const divRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(divRef);

  console.log({ isOnScreen });

  let arrIdx = 2;
  const serviceData = data.customerBase.slice(0, arrIdx);

  const loadMoreData = () => {
    arrIdx++;
  };

  return (
    <>
      <h1 className="text-2xl text-center pt-12 font-bold">Our Approach</h1>
      <div className="container flex flex-col items-center justify-evenly text-justify text-lg w-11/12 space-y-6 z-40">
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
          path={"/"}
          btnColor={"bg-hue-secondary"}
          txtColor={"text-hue-base"}
        />
      </div>
      <h2 className="text-xl text-center font-medium">Who we serve</h2>
      <div
        ref={divRef}
        className="flex flex-col items-center justify-center space-y-10"
      >
        {serviceData.map((value, index) => (
          <ServiceCard
            key={index}
            title={value.title}
            desc={value.description}
            icon={value.icon}
          />
        ))}
      </div>
    </>
  );
}
