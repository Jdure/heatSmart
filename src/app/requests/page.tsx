import React from "react";

export default function Requests() {
    const today = new Date().toISOString().split("T")[0];

    return (
      <>
        <h1 className="text-2xl text-center font-bold pt-12">
          Start Your Project with a Quote!
        </h1>
        <div className="flex flex-col items-center justify-start h-screen z-40">
          <div className="flex flex-col items-center h-2/5 w-11/12 text-justify text-lg space-y-6">
            <p>
              To get started, please fill out the form below with your contact
              details and project requirements.
            </p>
            <p>
              Our team will review your information and get back to you
              promptly.
            </p>
            <p>
              We look forward to working with you and providing a tailored
              solution to meet your needs.
            </p>
            {/* <div className="bg-[url('https://dummyimage.com/720x720')] bg-cover bg-center h-12 w-full rounded-md"></div> */}
          </div>
          <div className="flex flex-col items-center w-11/12 min-w-xs pt-6">
            <h2 className="text-xl font-bold pb-4">
              Get in Contact with Our Experts!
            </h2>
            <form className="flex flex-col space-y-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-lg">
              <div className="flex flex-col space-y-2">
                <label>Full Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-hue-base leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label>Email</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-hue-base leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-center" htmlFor="service-type">
                  Choose Service
                </label>
                <select
                  className="text-center"
                  name="services"
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-hue-base leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  name="start-date"
                  defaultValue={today}
                />
              </div>
              <button className="bg-hue-secondary w-1/2 mx-auto rounded-md hover:bg-slate-500 text-hue-inverted transition-all hover:animate-pulse">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
}
