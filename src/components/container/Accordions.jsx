import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Accordions = ({ title, id }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };

  return (
    <div className=" pb-8">
      <div className=" flex items-center justify-between">
        <div className=" sm:text-xl text-base font-bold"> {title} </div>
        <BsChevronDown
          className={`${
            id === activeIndex ? " rotate-180" : " rotate-0"
          } cursor-pointer transition-all duration-300`}
          onClick={() => handleClick(id)}
        />
      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
            className=" pt-4"
          >
            <p className=" text-sm leading-7 text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              quaerat in! Quaerat provident nobis aperiam sit rem earum minus
              accusamus?Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Possimus ad quidem sint iste ullam dignissimos, molestias
              iure cupiditate et? Non!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordions;
