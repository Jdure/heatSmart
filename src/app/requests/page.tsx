/**
 * TODO:
 * 1. Integrate AWS SES for emails
 */

import React from "react";
import RequestForm from "../components/RequestForm";

export default async function Requests() {
  return (
    <>
      <h1 className="pt-12 font-bold phone:text-xl tablet:text-2xl laptop:text-4xl desktop:text-6xl phone:text-center laptop:text-start laptop:ml-3">
        Free Quote
      </h1>
      <div className="flex flex-col items-center justify-start laptop:justify-evenly phone:max-h-fit laptop:h-screen z-40 tablet:flex-row tablet:min-w-fit ">
        <div className="flex flex-col items-center laptop:items-start laptop:justify-evenly phone:basis-1/2 space-y-6 tablet:basis-3/5 phone:w-11/12 tablet:m-1.5  phone:text-center laptop:text-justify text-base tablet:text-lg laptop:text-xl desktop:text-2xl">
          <p>
            To get started, please fill out the form below with your contact
            details and project requirements.
          </p>
          <p>
            Our team will review your information and get back to you promptly.
          </p>
          <p className="tablet:pb-12">
            We look forward to working with you and providing a tailored
            solution to meet your needs.
          </p>
          <div className="bg-[url('https://dummyimage.com/720x720')] hidden tablet:block bg-cover bg-center h-72 w-full rounded-md"></div>
        </div>
        <div className="flex flex-col items-center w-4/6 min-w-xs phone:pt-6 tablet:pt-0 phone:basis-2/5 tablet:basis-1/4 tablet:h-screen laptop:h-fit tablet:justify-center laptop:justify-start">
          <RequestForm />
        </div>
      </div>
    </>
  );
}
