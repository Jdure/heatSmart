import Link from "next/link";
import React from "react";

export const LinkButton = ({
  btnTxt,
  path,
  btnColor,
  txtColor,
}: {
  btnTxt: string;
  path: string;
  btnColor: string;
  txtColor: string;
}) => {
  return (
    <Link
      className={`group relative inline-flex items-center overflow-hidden rounded ${btnColor} px-8 py-3 text-hue-inverted focus:outline-none focus:ring active:${btnColor}`}
      href={path}
    >
      <span
        className={`absolute ${txtColor} -end-full transition-all group-hover:end-4`}
      >
        <svg
          className="h-5 w-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>

      <span
        className={`text-sm ${txtColor} font-medium transition-all group-hover:me-4`}
      >
        {btnTxt}
      </span>
    </Link>
  );
};
