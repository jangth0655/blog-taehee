import finder from "../../public/assets/projectImgs/finder.png";
import grinMarket from "../../public/assets/projectImgs/grinMarket.png";
import removie from "../../public/assets/projectImgs/removie.png";
import starflix from "../../public/assets/projectImgs/starflix.png";

const projects = [
  {
    title: "Finder",
    description: "미용실 일자리 찾기",
    skills: [
      "Typescript",
      "React",
      "styled-components",
      "Framer-motion",
      "Apollo",
      "Graphql",
      "AWS",
      "Prisma",
      "Postgres",
    ],
    img: finder,
    id: 1,
  },
  {
    title: "Grin Market",
    description: "나의 물건을 팔아보자",
    skills: [
      "Typescript",
      "Next JS",
      "Tailwind CSS",
      "Framer-motion",
      "CloudFlare",
      "Prisma",
      "Planet Scale",
    ],
    img: grinMarket,
    id: 2,
  },
  {
    title: "ReMovie",
    description: "영화 TV쇼 프로그램 추천 사이트",
    skills: ["React", "styled-components", "Framer-motion, Graphql"],
    img: removie,
    id: 3,
  },
  {
    title: "Starflix",
    description: "넷플릭스 클론코딩",
    skills: ["React", "styled-components", "Framer-motion"],
    img: starflix,
    id: 4,
  },
];

export default projects;
