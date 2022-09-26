import { HiArrowSmDown } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";

type Direction = "right" | "bottom";

interface ButtonProps {
  text: string;
  direction?: Direction;
}

const Button: React.FC<ButtonProps> = ({ text, direction }) => {
  return (
    <button className="flex items-center space-x-2 px-2 rounded-lg bg-teal-300 hover:bg-teal-500 transition-all text-zinc-800 focus:ring-2 focus:ring-teal-100  font-semibold shadow-black shadow-lg">
      <span className="">{text}</span>
      {direction === "bottom" ? <HiArrowSmDown size={20} /> : null}
      {direction === "right" ? <HiArrowSmRight size={20} /> : null}
    </button>
  );
};
export default Button;
