import React from "react";

export const ServiceCard = ({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) => {
  return (
    <a
      href="#"
      className="relative block rounded-sm border-t-4 border-hue-secondary p-4 shadow-xl w-11/12 sm:p-6 lg:p-8 motion-safe:animate-fadeIn"
    >
      <div className="flex items-center gap-4 rounded-md">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-hue-secondary sm:h-8 sm:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg> */}
        <span className="h-6 w-6 text-hue-secondary sm:h-8 sm:w-8">{icon}</span>

        <h3 className="text-2xl font-medium sm:text-4xl">{title}</h3>
      </div>

      <p className="mt-4 font-medium text-hue-base">{desc}</p>
    </a>
  );
};
