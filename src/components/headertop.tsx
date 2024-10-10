import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function HeaderTop() {
  return (
    <div className="border-b border-pink-800 hidden sm:block mx-4">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper  bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-pink-500 hover:text-white">
              <FaFacebook />
            </div>
            <div className="header_top__icon_wrapper  bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-pink-500 hover:text-white">
              <FaTwitter />
            </div>
            <div className="header_top__icon_wrapper  bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-pink-500 hover:text-white">
              <FaInstagram />
            </div>
            <div className="header_top__icon_wrapper  bg-gray-200 rounded-md p-[6px] text-[14px] cursor-pointer hover:bg-pink-500 hover:text-white">
              <FaLinkedin />
            </div>
          </div>

          <div className="text-pink-900 text-[12px] font-serif-">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
          </div>

          <div className="flex gap-4">
            <select
              className="text-pink-700 text-[12px] w-[70px] font-serif"
              name="currency"
              id="currency"
            >
              <option value="USD $">USD $</option>
              <option value="ERU">ERU</option>
              <option value="PAk">PAK</option>
              <option value="IND">IND</option>
            </select>

            <select
              className="text-pink-700 text-[12px] w-[80px] font-serif"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
