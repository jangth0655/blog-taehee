type Direction = "right" | "bottom";

interface ButtonProps {
  text: string;
  direction: Direction;
}

const Button: React.FC<ButtonProps> = ({ text, direction }) => {
  return (
    <button className="mt-0 sm:mt-4 flex items-center space-x-2 px-2 rounded-lg bg-teal-300 hover:bg-teal-500 transition-all text-zinc-800 focus:ring-2 focus:ring-teal-100  font-semibold shadow-black shadow-lg">
      <span className="">{text}</span>
      {direction === "bottom" ? (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      ) : null}
      {direction === "right" ? (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      ) : null}
    </button>
  );
};
export default Button;
