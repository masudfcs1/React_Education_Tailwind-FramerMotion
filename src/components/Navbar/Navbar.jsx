import React, { useState } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import MobileNavLinks from "./MobileNavLinks";

const Navbar = () => {
  const [Tonggle, setTonggle] = useState(false);
  return (
    <div className=" fixed w-full top-0 left-0 z-20 ">
      <div>
        <div className=" container py-4 mx-auto flex items-center justify-between px-2 ">
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className=" text-3xl sm:hidden cursor-pointer"
              onClick={() => setTonggle(true)}
            />
            <div className="text-xl font-bold uppercase text-Teal tracking-wide">
              SKILLX
            </div>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>
          <button className="py-3 px-6 font-bold text-sm border rounded-md border-solid border-gray ">
            Sign Up
          </button>
          {Tonggle && (
            <div className="fixed w-96 top-0 left-0 h-full bg-teal-700 flex flex-col justify-center items-center shadow-lg gap-8 py-8">
              {navLinks.map((navLink) => {
                return <MobileNavLinks key={navLink.id} {...navLink} />;
              })}
              <HiX
                size={25}
                className=" absolute right-12 top-12 right-13 text-3xl"
                onClick={() => setTonggle(false)}
                // onClick={(prev) => setTonggle(!prev)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
