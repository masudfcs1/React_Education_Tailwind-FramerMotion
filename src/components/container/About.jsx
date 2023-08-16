import React from "react";
import about from "../../assets/About.jpg";
const About = () => {
  return (
    <div className="section" id="about">
      <div className=" grid md:grid-cols-2 gap-8 place-items-center">
        <div className=" border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
      </div>
    </div>
  );
};

export default About;
