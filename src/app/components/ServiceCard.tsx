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
    <a className="flex flex-col items-center justify-center border-t-4 shadow-xl border-hue-secondary rounded-sm p-4 motion-safe:animate-fadeIn">
      <div className="flex items-center gap-4 mb-4 rounded-md">
        <span className="h-6 w-6 text-hue-secondary tablet:h-8 tablet:w-8">
          {icon}
        </span>

        <h3 className="font-medium phone:text-lg tablet:text-xl">{title}</h3>
      </div>

      <p className=" font-medium text-hue-base">{desc}</p>
    </a>
  );
};