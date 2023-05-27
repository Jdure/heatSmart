import React from "react";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="text-hue-base body-font">
      <div className="container px-5 py-8 mx-auto flex justify-between items-end flex-row">
        <a className="flex items-center md:justify-start justify-center">
          <Image src={"/fake-logo.svg"} height={75} width={75} alt="logo" />
        </a>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 HeatSmart Solutions
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <AiOutlineInstagram className="h-6 w-6" />
        </span>
      </div>
    </footer>
  );
};
