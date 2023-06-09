import React from "react";

export default function Requests() {
  return (
    <>
      <h1 className="text-2xl text-center font-bold pt-12">
        Start Your Project with a Quote!
      </h1>
      <div className="flex flex-col items-center justify-start h-screen">
        <div className="flex flex-col items-center h-2/5 w-11/12 text-justify text-lg space-y-6">
          <p>
            To get started, please fill out the form below with your contact
            details and project requirements.
          </p>
          <p className="pb-12">
            Our team will review your information and get back to you promptly.
          </p>
          <div className="bg-[url('https://dummyimage.com/720x720')] bg-cover bg-center h-48 w-full rounded-lg"></div>
        </div>
        <div className="flex flex-col items-center bg-indigo-500 h-3/5"></div>
      </div>
    </>
  );
}