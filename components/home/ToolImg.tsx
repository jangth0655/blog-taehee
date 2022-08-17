import Image from "next/image";
import javascript from "../../public/assets/myToolImg/javascript.png";
import css from "../../public/assets/myToolImg/css3.png";
import html from "../../public/assets/myToolImg/html.png";
import react from "../../public/assets/myToolImg/react.png";
import nextjs from "../../public/assets/myToolImg/nextjs.png";
import graphql from "../../public/assets/myToolImg/graphql.png";
import tailwind from "../../public/assets/myToolImg/tailwind.png";
import nodejs from "../../public/assets/myToolImg/nodejs.png";
import typescript from "../../public/assets/myToolImg/typescript.png";

type Tool =
  | "javascript"
  | "typescript"
  | "css"
  | "html"
  | "react"
  | "nextjs"
  | "graphql"
  | "nodejs"
  | "apollo"
  | "tailwind";

interface ToolImgProps {
  tool: Tool | string;
}

const ToolImg: React.FC<ToolImgProps> = ({ tool }) => {
  return (
    <>
      {tool === "html" && (
        <div className="w-16 h-16 relative rounded-md">
          <Image
            className="rounded-md bg-slate-700"
            src={html}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      )}
      {tool === "css" && (
        <div className="w-16 h-16 relative rounded-md">
          <Image
            className="rounded-md bg-slate-700"
            src={css}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      )}
      {tool === "javascript" && (
        <div className="w-16 h-16 relative rounded-md">
          <Image
            className="rounded-md bg-slate-700"
            src={javascript}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      )}
      {tool === "typescript" && (
        <div className="w-16 h-16 relative rounded-md">
          <Image
            className="rounded-md bg-slate-700"
            src={typescript}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      )}
      {tool === "react" && (
        <div className="w-16 h-16 relative rounded-md">
          <Image
            className="rounded-md bg-slate-700"
            src={react}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      )}
      {tool === "nextjs" && (
        <div className=" w-16 h-16 relative rounded-md">
          <Image
            className="rounded-md bg-slate-500"
            src={nextjs}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      )}
      {tool === "graphql" && (
        <div className=" w-16 h-16 relative rounded-md">
          <Image
            className="rounded-md bg-slate-700"
            src={graphql}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      )}

      {tool === "tailwind" && (
        <div className=" w-16 h-16 relative rounded-md">
          <Image
            className="rounded-md bg-slate-700"
            src={tailwind}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      )}
      {tool === "nodejs" && (
        <div className=" w-16 h-16 relative rounded-md">
          <Image
            className="rounded-md bg-slate-700"
            src={nodejs}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      )}
    </>
  );
};
export default ToolImg;
