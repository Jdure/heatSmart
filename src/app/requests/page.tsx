"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

enum ServiceEnum {
  driveway = "Driveway Heating System Installation",
  maintenance = "Maintenance and Repair Services",
  upgrades = "Retrofitting and Upgrades",
  consultation = "Design Consultation",
  custom = "Customized Controls and Automation",
  emergency = "Emergency Repair Services",
  planning = "Consulting and Planning",
  analysis = "Energy Savings Analysis",
  education = "Educational Resources",
}

type Inputs = {
  fullname: string;
  email: string;
  serviceType: ServiceEnum;
  date: Date | string;
};

export default function Requests() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <h1 className="pt-12 font-bold phone:text-xl tablet:text-2xl laptop:text-4xl desktop:text-6xl phone:text-center laptop:text-start laptop:ml-3">
        Free Quote
      </h1>
      <div className="flex flex-col items-center justify-start phone:max-h-fit z-40 tablet:flex-row tablet:min-w-fit">
        <div className="flex flex-col items-center laptop:items-start phone:basis-1/2 space-y-6 tablet:basis-3/5 phone:w-11/12 tablet:m-1.5  phone:text-center laptop:text-justify text-base tablet:text-lg laptop:text-xl desktop:text-2xl">
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col bg-stone-600 text-hue-inverted shadow-md rounded phone:px-8 phone:pt-6 phone:pb-8 phone:mb-4 phone:text-base tablet:m-6 laptop:m-8 laptop:text-lg desktop:text-2xl phone:space-y-6"
          >
            <h2 className="text-xl font-bold">Enter your details</h2>

            <p className="text-sm font-thin text-hue-muted">
              Fill in the form to receive your complimentary quote
            </p>
            <div className="flex flex-col space-y-2">
              <label>Full Name</label>
              <input
                {...register("fullname", { required: true, minLength: 4 })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-hue-base leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="fullname"
                placeholder="John Smith"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Email</label>
              <input
                {...register("email", { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-hue-base leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="JSmith@example.com"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-center" htmlFor="service-type">
                Choose Service
              </label>
              <select
                {...register("serviceType", { required: true })}
                className="shadow appearance-none border rounded text-center py-2 px-3 text-hue-base leading-tight"
                name="serviceType"
                id="service-type"
              >
                <option value="">Select Service</option>
                <option value="driveway">
                  Driveway Heating System Installation
                </option>
                <option value="maintenance">
                  Maintenance and Repair Services
                </option>
                <option value="upgrades">Retrofitting and Upgrades</option>
                <option value="consultation">Design Consultation</option>
                <option value="custom">
                  Customized Controls and Automation
                </option>
                <option value="emergency">Emergency Repair Services</option>
                <option value="planning">Consulting and Planning</option>
                <option value="analysis">Energy Savings Analysis</option>
                <option value="education">Educational Resources</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-center">Start Date</label>
              <input
                {...register("date", { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-hue-base leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                name="date"
                defaultValue={today}
              />
            </div>
            <button
              className="bg-hue-secondary w-1/2 mx-auto rounded-md hover:bg-slate-500 text-hue-inverted transition-all hover:animate-pulse"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
