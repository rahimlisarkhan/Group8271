import React from "react";
import MenuItem from "../Menu/MenuItem";
import MenuList from "../Menu/MenuList";

function Header() {
  const isAboutPage = false;

  return (
    <header
      className={` h-24 flex justify-between p-6 ${
        isAboutPage ? "lg:bg-yellow-600" : "lg:bg-green-600"
      } border-b-2 border-green-900  md:bg-red-600 bg-slate-600`}
    >
      {/* <h1 className=" text-my_main-400  text-3xl text-green-50 text-f">Logo</h1> */}
      {/* <h1 className=" text-base md:text-xl lg:text-3xl text-green-50 text-f bg-red-300 w-[133px] top-[24px]"> */}
      <h1 className=" text-base md:text-xl lg:text-3xl text-green-50">Logo</h1>

      <MenuList>
        <MenuItem onClick={() => {}}>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
        <MenuItem>Blog</MenuItem>
      </MenuList>

      {/* <li className="text-base text-green-50 font-semibold transition-all hover:text-orange-300 cursor-pointer">
          Home
        </li>
        <li className="text-base text-green-50 font-semibold transition-all hover:text-orange-300 cursor-pointer">
          About
        </li>
        <li className="text-base text-green-50 font-semibold transition-all hover:text-orange-300 cursor-pointer">
          Contact
        </li> */}

      <button
        // disabled
        className="btn animate-pulse px-8 py-4 rounded transition-all hover:bg-green-100 disabled:opacity-50 active:bg-red-500   bg-white text-green-800 flex justify-center items-center text-base"
      >
        Sign
      </button>
    </header>
  );
}

export default Header;
