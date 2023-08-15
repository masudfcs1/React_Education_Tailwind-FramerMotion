import React, { useState } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import MobileNavLinks from "./MobileNavLinks";

const Navbar = () => {
  const [Tonggle, setTonggle] = useState(false);
  return (
    <div className="fixed w-full top-0 left-0 z-20 ">
      <div className="container mx-auto py-4 flex items-center justify-between px-2">
        <div className="flex items-center ">
          <HiMenuAlt1
            className=" text-3xl sm:hidden cursor-pointer"
            onClick={() => setTonggle(true)}
          />
          <div className="text-xl font-bold uppercase text-Teal tracking-wide mr-7">
            SKILLX
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
            <div>
              {navLinks.map((navLink) => {
                <MobileNavLinks key={navLink.id} {...navLink} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
