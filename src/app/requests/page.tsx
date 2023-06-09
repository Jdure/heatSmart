import React from "react";

export default function Requests() {
  return (
    <>
      <h1 className="text-2xl text-center font-bold pt-12">
        Start Your Project with a Quote!
      </h1>
      <div className="flex flex-col items-center justify-start h-screen">
        <div className="flex flex-col items-center h-1/2 w-11/12 text-justify text-lg space-y-6">
          <p>
            To get started, please fill out the form below with your contact
            details and project requirements.
          </p>
          <p>
            Our team will review your information and get back to you promptly.
          </p>
          <p>
            We look forward to working with you and providing a tailored
            solution to meet your needs.
          </p>
          {/* <div className="bg-[url('https://dummyimage.com/720x720')] bg-cover bg-center h-12 w-full rounded-md"></div> */}
        </div>
        <div className="flex flex-col items-center justify-center space-y-6 bg-hue-accent h-1/2">
          <form>
            <label>
              Full Name:
              <input type="text" name="name" />
            </label>

            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label htmlFor="service-type">Choose a service:</label>
            <select name="services" id="service-type">
              <option value="">--Please choose a service--</option>
              <option value="driveway">
                Driveway Heating System Installation
              </option>
              <option value="maintenance">
                Maintenance and Repair Services
              </option>
              <option value="upgrades">Retrofitting and Upgrades</option>
              <option value="consultation">Design Consultation</option>
              <option value="custom">Customized Controls and Automation</option>
              <option value="emergency">Emergency Repair Services</option>
              <option value="planning">Consulting and Planning</option>
              <option value="analysis">Energy Savings Analysis</option>
              <option value="education">Educational Resources</option>
            </select>
            <button>
              <input type="submit" value="submit" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
