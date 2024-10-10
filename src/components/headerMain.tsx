import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiHeart, FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
  return (
    <div className="border-b border-pink-400 py-6 mx-4">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-pink-700">
          Portfolio
        </div>

        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-pink-500 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Enter Your Product Name..."
          />
          <FaSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-pink-700"
            size={20}
          />
        </div>

        <div className="hidden lg:flex gap-4 text-pink-800 text-[30px]">
          <FiUser />
          <div className="relative">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>

          <div className="relative">
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
