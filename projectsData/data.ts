import finder from "..//public/assets/projectImgs/finder/finder.png";

import grinMarket from "../public/assets/projectImgs/grinMarket/grinMarket.png";

import removie from "../public/assets/projectImgs/removie/removie.png";

import starFlix from "../public/assets/projectImgs/starFlix/starflix.png";

const projects = [
  {
    title: "Finder",
    description: "About Beauty shops",
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
    img: [finder],
    id: "finder",
  },
  {
    title: "Grin Market",
    description: "물건 팔고 구매하기",
    skills: [
      "Typescript",
      "Next JS",
      "Tailwind CSS",
      "Framer-motion",
      "CloudFlare",
      "Prisma",
      "Planet Scale",
    ],
    img: [grinMarket],
    id: "grinMarket",
  },
  {
    title: "ReMovie",
    description: "영화 TV쇼 프로그램 추천 사이트",
    skills: ["React", "styled-components", "Framer-motion, Graphql"],
    img: [removie],
    id: "removie",
  },
  {
    title: "StarFlix",
    description: "넷플릭스 클론코딩",
    skills: ["React", "styled-components", "Framer-motion"],
    img: [starFlix],
    id: "starFlix",
  },
];

export default projects;
