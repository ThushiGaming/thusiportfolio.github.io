import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  unreal,
  wp,
  uitemp,
  carvid,
  webesports,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "3D Animations",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Photographer & Cinematographer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Intermediate",
    icon: reactjs,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "3D Animation & Game Dev",
    company_name: "Intermediate",
    icon: unreal,
    iconBg: "#E6DEDD",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "Making 3d videos & animations using Unreal Engine.",
      "Making 3d & 2d games using Unreal Engine.",
      "Creating 3d environment (landscape,architecture) in Unreal Engine.",
      "Collaborating with cross-functional teams including UI/UX designers, editors and other developers to create high-quality videos and games.",
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "Intermediate",
    icon: figma,
    iconBg: "#383E56",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "Designing user interface for web applications and Websites.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality UI/UX.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Wordpress Developper",
    company_name: "Intermediate",
    icon: wp,
    iconBg: "#E6DEDD",
    // date: "Jan 2023 - Present",
    points: [
      "Creating e-commerce websites using Wordpress.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality e-commerce websites.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He mad a good looking UI for our social media app project.",
    name: "Bubbles",
    designation: "Founder",
    company: "Bubble iT",
    image: "https://cdn.discordapp.com/attachments/876467337975463936/1121458489500389418/bala_love_naziriya.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients. I love his work for our Esports Organisation.",
    name: "Reni",
    designation: "Founder",
    company: "HxH Official",
    image: "https://cdn.discordapp.com/attachments/963104633071484998/1122912545439748208/CIrY2E1LLRXiiVNm2tUnDzEhqxHx-bUcLi8ndU0JPG.jpg",
  },
  {
    testimonial:
      "Thushi made a good e-commerce website with lot of funcitons, that was very amazing. ",
    name: "Ajay",
    designation: "CTO",
    company: "ApexSolutions",
    image: "https://cdn.discordapp.com/attachments/963104633071484998/1123684350836363415/Snapchat-153129051-02-01.jpeg",
  },
];

const projects = [
  {
    name: "Social Media App UI",
    description:
      "A UI for a social media application for gamers",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: uitemp,
    // source_code_link: "https://github.com/",
  },
  {
    name: "3d Animated Video For Car",
    description:
      "Lamborgini Urus Triler Video Created using Unreal Engine 5.2.",
    tags: [
      {
        name: "unrealengine",
        color: "blue-text-gradient",
      },
      {
        name: "blender",
        color: "green-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: carvid,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Esports Tournament Organisatio Platform",
    description:
      "A website for hosting esports tournaments and joining esports tournament.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: webesports,
    // source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
