import { motion, Variants } from "framer-motion";
import Image from "next/image";
import reactCodeImage from "../../public/assets/headerImage/react.png";
import writeCodingImage from "../../public/assets/headerImage/coding.jpg";

export const imageVar: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "linear",
    },
  },
  exit: {
    opacity: 0,
  },
};

type ImageOrderString = "first" | "second";

interface ObservedImageProps {
  imageOrder: ImageOrderString;
}

const ObservedImage: React.FC<ObservedImageProps> = ({ imageOrder }) => {
  return (
    <motion.div
      variants={imageVar}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-[80%] sm:w-[70%] h-full relative shadow-black shadow-md rounded-xl transition-all"
    >
      <Image
        className="rounded-xl"
        src={imageOrder === "first" ? reactCodeImage : writeCodingImage}
        layout="fill"
        objectFit="cover"
        alt=""
        placeholder="blur"
      />
    </motion.div>
  );
};

export default ObservedImage;
