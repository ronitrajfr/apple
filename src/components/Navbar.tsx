import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

export const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex items-center justify-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} width={14} height={18} alt="" />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((item, i) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={i}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="" width={18} height={18} />
          <img src={bagImg} alt="" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};
