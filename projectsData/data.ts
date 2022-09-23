import finder from "..//public/assets/projectImgs/finder/finder.png";

import grinMarket from "../public/assets/projectImgs/grinMarket/grinMarket.png";

import removie from "../public/assets/projectImgs/removie/removie.png";

import starFlix from "../public/assets/projectImgs/starFlix/starflix.png";

import wetube from "../public/assets/projectImgs/wetube/wetube-image.png";

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
    main: "Apollo-Graphql-React",
  },
  {
    title: "Grin Market",
    description: "물건 팔고 구매하기",
    skills: [
      "Typescript",
      "Nextjs",
      "tailwindcss",
      "Framer-motion",
      "CloudFlare",
      "Prisma",
      "Planet Scale",
    ],
    img: [grinMarket],
    id: "grinMarket",
    main: "Next JS",
  },
  {
    title: "ReMovie",
    description: "영화 TV쇼 프로그램 추천 사이트",
    skills: ["React", "styled-components", "Framer-motion, Graphql"],
    img: [removie],
    id: "removie",
    main: "Graphql-React",
  },
  {
    title: "StarFlix",
    description: "넷플릭스 클론코딩",
    skills: ["React", "styled-components", "Framer-motion"],
    img: [starFlix],
    id: "starFlix",
    main: "React",
  },
  {
    title: "Wetube",
    description: "비디오 영상 나눠보기",
    skills: [
      "Nextjs",
      "Framer-motion",
      "tailwindcss",
      "MongoDB",
      "Mongoose",
      "FFmpeg",
      "aws",
    ],
    img: [wetube],
    id: "wetube",
    main: "React",
  },
];

export default projects;
