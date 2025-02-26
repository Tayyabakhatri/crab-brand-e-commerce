import React from "react";
import s1 from "../../assets/ourServices1.webp";
import { IoIosArrowForward } from "react-icons/io";

const Services = () => {
  return (
    <>
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="p-4 rounded-t-lg" src={s1} alt="product image" />
        </a>
        <a href="#" className="px-4 flex justify-between items-center">
          <p className="text-start text-[18px] font-[700]">
            Website Design && Development
          </p>{" "}
          <div>
            <IoIosArrowForward />
          </div>
        </a>
      </div>
    </>
  );
};

export default Services;
