"use client";

import React from "react";
import { MdOutlineMenuOpen, MdClose } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

export const NavBar = () => {
  const [open, isOpen] = useState(false);
  const linkStyles = "text-xl font-bold";

  const openMenu = () => {
    isOpen(!open);
  };

  return (
    <>
      <div className="fixed inset-0 z-50">
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
              className="absolute inset-0 bg-black opacity-50"
              onClick={() => isOpen(false)}
            ></div>
          )}
        </Transition>
        <div className="relative z-10 flex flex-row justify-between py-4 px-4">
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
          enter="transition-transform duration-300 ease-in-out"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform duration-300 ease-in-out"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          {(ref) => (
            <div
              ref={ref}
              className="fixed inset-y-0 right-0 z-50 flex flex-col items-center justify-start space-y-16 min-h-screen w-64 bg-black"
            >
              <Link className={linkStyles} href={"/"}>
                Home
              </Link>
              <Link className={linkStyles} href={"/about"}>
                About
              </Link>
              <Link className={linkStyles} href={"/about"}>
                Services
              </Link>
              <Link className={linkStyles} href={"/about"}>
                Request
              </Link>
            </div>
          )}
        </Transition>
      </div>
    </>
  );
};
