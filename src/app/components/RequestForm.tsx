"use client";
import React, { useEffect } from "react";
import PocketBase from "pocketbase";
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

export default function RequestForm() {
  const pb = new PocketBase("http://127.0.0.1:8090"),
    today = new Date().toISOString().split("T")[0],
    onSubmit: SubmitHandler<Inputs> = async (data) =>
      await pb.collection("client_request").create(data);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<Inputs>({
    defaultValues: { fullname: "", email: "" },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-black text-hue-inverted shadow-md rounded phone:px-8 phone:pt-6 phone:pb-8 phone:mb-4 phone:text-base tablet:m-6 laptop:m-8 laptop:text-lg desktop:text-2xl phone:space-y-6"
    >
      <h2 className="text-xl font-bold">Enter your details</h2>

      <p className="text-sm font-thin text-hue-muted">
        Fill in the form to receive your complimentary quote
      </p>
      <div className="flex flex-col space-y-2">
        <label>Full Name</label>
        <input
          {...register("fullname", {
            required: true,
            minLength: 4,
            maxLength: 30,
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-hue-base leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="fullname"
          placeholder="John Smith"
        />
        {errors.fullname && errors.fullname.type === "required" && (
          <span className="text-red-500" role="alert">
            This is required
          </span>
        )}
        {errors.fullname && errors.fullname.type === "minLength" && (
          <span className="text-red-500" role="alert">
            Full name is too short
          </span>
        )}
        {errors.fullname && errors.fullname.type === "maxLength" && (
          <span className="text-red-500" role="alert">
            Full name is too long
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label>Email</label>
        <input
          {...register("email", { required: true, minLength: 4 })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-hue-base leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          name="email"
          placeholder="jsmith@example.com"
        />
        {errors.email && errors.email.type === "required" && (
          <span className="text-red-500" role="alert">
            This is required
          </span>
        )}
        {errors.email && errors.email.type === "minLength" && (
          <span className="text-red-500" role="alert">
            Email address is too short
          </span>
        )}
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
          <option value="driveway">Driveway Heating System Installation</option>
          <option value="maintenance">Maintenance and Repair Services</option>
          <option value="upgrades">Retrofitting and Upgrades</option>
          <option value="consultation">Design Consultation</option>
          <option value="custom">Customized Controls and Automation</option>
          <option value="emergency">Emergency Repair Services</option>
          <option value="planning">Consulting and Planning</option>
          <option value="analysis">Energy Savings Analysis</option>
          <option value="education">Educational Resources</option>
        </select>
        {errors.serviceType && errors.serviceType.type === "required" && (
          <span className="text-red-500" role="alert">
            This is required
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-center">Start Date</label>
        <input
          {...register("date", { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-hue-base leading-tight focus:outline-none focus:shadow-outline"
          type="date"
          name="date"
          defaultValue={today}
          min={today}
        />
        {errors.date && errors.date.type === "required" && (
          <span className="text-red-500" role="alert">
            This is required
          </span>
        )}
      </div>
      <button
        className="bg-hue-secondary w-1/2 mx-auto rounded-md hover:bg-slate-500 text-hue-inverted transition-all hover:animate-pulse"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
