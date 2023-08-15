import React from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 left-0 z-20 ">
      <div className="container mx-auto py-4 flex items-center justify-between px-2">
        <div className="flex items-center gap-36 ">
          <HiMenuAlt1 className=" text-3xl sm:hidden cursor-pointer" />
          <div className="text-xl font-bold uppercase text-Teal tracking-wide mr-7">
            SKILLX
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>
          <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray ">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
