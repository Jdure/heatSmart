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

/**
 * 
 * TODO: Media Queries
 * 
 * 1. phone: "480px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
 * 3. 
 * 
 */

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
      <div className="container flex flex-col items-center justify-start phone:max-h-fit z-40 tablet:flex-row">
        <div className="flex flex-col items-center phone:basis-1/2 w-11/12 text-justify text-lg space-y-6 tablet:text-xl tablet:h-5/6 tablet:w-1/2 tablet:items-start tablet:justify-start tablet:space-y-8 tablet:text-justify">
          <h1 className="text-2xl text-center font-bold pt-12 tablet:text-4xl">
            Let&apos;s get to work!
          </h1>
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
        <div className="flex flex-col items-center w-4/6 min-w-xs pt-6 phone:basis-1/2 phone:pt-8 tablet:w-1/2 tablet:justify-center tablet:pt-0 tablet:h-5/6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col bg-stone-600 text-hue-inverted shadow-md rounded px-8 pt-6 pb-8 mb-4 phone:text-base tablet:text-lg phone:space-y-6 tablet:w-2/3"
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
