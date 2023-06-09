import React from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export const Pagination = ({
  pageIdx,
  maxLength,
  prevBtn,
  nextBtn,
}: {
  pageIdx: string | number;
  maxLength: string | number;
  prevBtn: () => void;
  nextBtn: () => void;
}) => {
  return (
    <div className="inline-flex items-center justify-center mx-auto gap-3">
      <button onClick={prevBtn}>
        <MdNavigateBefore className="text-2xl" />
      </button>

      <p className="text-lg text-hue-base">
        {pageIdx}
        <span className="mx-0.25">/</span>
        {maxLength}
      </p>

      <button onClick={nextBtn}>
        <MdNavigateNext className="text-2xl" />
      </button>
    </div>
  );
};
