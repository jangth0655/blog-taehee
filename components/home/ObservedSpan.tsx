import React from "react";
import { motion } from "framer-motion";
import { imageVar } from "./ObservedImage";

interface ObservedSpanProps {
  text: string;
}

const ObservedSpan: React.FC<ObservedSpanProps> = ({ text }) => {
  return (
    <motion.div
      variants={imageVar}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-[80%] sm:w-[70%] rounded-xl flex justify-center items-center shadow-black shadow-md bg-[#252737]"
    >
      <span className="inline-block p-2 leading-10">{text}</span>
    </motion.div>
  );
};
export default ObservedSpan;
