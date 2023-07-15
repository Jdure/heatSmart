"use client";
import React, { useState } from "react";
import { Pagination } from "./Pagination";

type Record = {
  title?: string;
  description?: string;
  id: string;
};

export default function LaptopServiceCard({
  serviceData,
}: {
  serviceData: Record[];
}) {
  const [currService, setCurrService] = useState(0);
  return (
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
  );
}
