import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";

const Home = () => {
  return (
    <div className="section" id="home">
      <div className=" md:flex items-center justify-center">
        <div>
          <div className=" font-bold text-xs text-Teal mb-4 ">
            Your e-learning partner
          </div>
          <div className=" sm:text-[2.5rem] text-[1.825rem] font-bold">
            {" "}
            This is <br /> the new way <br /> to learn online
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            similique itaque maiores commodi praesentium.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 rounded-lg font-bold text-sm text-white mr-4 bg-Teal">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-lg border border-solid border-gray font-bold text-sm  mr-4">
              Discover
            </button>
          </div>
        </div>
        <div className="md:w-[60%]">
          <img src={hero} alt="" />
        </div>
      </div>
      <p className=" text-center text-xl">
        We collaborate wiht{" "}
        <span className=" text-Teal">
          {" "}
          100+ leading universities ans companies
        </span>
      </p>
      <div className=" flex items-center justify-center gap-5 p-2">
        {logos.map((logo, i) => (
          <div key={i}>
            <img src={logo} alt="" className="w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
