"use client";

import React from "react";
import { MdOutlineMenuOpen, MdClose } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";

export const NavBar = () => {
  const [open, isOpen] = useState(false);

  const openMenu = () => {
    isOpen(!open);
  };

  const pages = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Request", "/requests"],
  ];

  return (
    <>
      <div
        className={`absolute inset-0 ${open ? "z-50" : "z-40"} text-hue-base`}
      >
        <Transition
          show={open}
          enter="transition-opacity duration-300 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300 ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {(ref) => (
            <div
              ref={ref}
              className="absolute inset-0 opacity-50"
              onClick={() => isOpen(false)}
            ></div>
          )}
        </Transition>
        <div className="relative z-10 flex flex-row justify-between py-4 px-4 bg-gradient-to-b from-hue-accent to-hue-primary">
          <Image src={"/fake-logo.svg"} height={75} width={75} alt="logo" />
          <button
            onClick={openMenu}
            className={`text-2xl transform-icon ${open ? "rotate-180" : ""}`}
          >
            {open ? <MdClose /> : <MdOutlineMenuOpen />}
          </button>
        </div>
        <Transition
          show={open}
          enter="transition-transform duration-500 ease-in-out"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform duration-0 ease-in-out"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          {(ref) => (
            <nav
              ref={ref}
              className={`fixed inset-y-0 right-0 ${
                open ? "z-50" : "z-40"
              } flex flex-col items-center justify-start pt-10 space-y-12 min-h-screen w-64 bg-gradient-to-b from-hue-primary to-hue-transparent`}
            >
              {pages.map(([title, url]) => (
                <Link
                  key={title}
                  className="text-xl font-medium uppercase hover:animate-pulse"
                  href={url}
                  onClick={() => isOpen(false)}
                >
                  {title}
                </Link>
              ))}
            </nav>
          )}
        </Transition>
      </div>
    </>
  );
};
