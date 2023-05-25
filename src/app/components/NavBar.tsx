"use client";

import React from "react";
import { MdOutlineMenuOpen, MdClose } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
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
    ["Request", "/request"],
  ];

  return (
    <>
      <div className="fixed inset-0 z-50 text-hue-inverted">
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
        <div className="relative z-10 flex flex-row justify-between py-4 px-4 bg-secondary">
          <p className="text-lg">Logo</p>
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
          leave="transition-transform duration-500 ease-in-out"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          {(ref) => (
            <div
              ref={ref}
              className="fixed inset-y-0 right-0 z-50 flex flex-col items-center justify-start pt-10 space-y-12 min-h-screen w-64 bg-secondary"
            >
              {pages.map(([title, url]) => (
                <Link key={title} className="text-2xl font-bold" href={url}>
                  {title}
                </Link>
              ))}
            </div>
          )}
        </Transition>
      </div>
    </>
  );
};
