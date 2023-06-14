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
  ghrietn,
  kvs,
  jp,
  spark,
  procohat,
  grow,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "skill",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Natural Language Processing",
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

const education = [
  {
    title: "B.Tech in Artificial Intelligence",
    company_name: "G H Raisoni Institute of Engineering and Technology,Nagpur",
    icon: ghrietn,
    iconBg: "#383E56",
    date: "Feb 2023 - May 2023",
    points: [
      "As a Intern at Procohat, I actively contributed to the development",
      "of the company website while acquiring valuable skills in UI/UX design",
      "principles and successfully implementing them into the project .",
    ],
  },
  {
    title: "H.S.C",
    company_name: "Kendriya Vidyalaya Chirimiri",
    icon: kvs,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Nov 2021",
    points: [
      "Develop solutions for real-world financial scenarios. Collaborating",
      "with a team, I successfully completed tasks such as data visualization",
      "and analysis, algorithmic trading, and building a chatbot interface. ", 
    ],
  },
  {
    title: "S.S.C",
    company_name: "Kendriya Vidyalaya Chirimiri",
    icon: kvs,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "I actively contributed to various data-driven projects,",
      "gaining hands-on experience in data pre-processing,",
      "exploratory data analysis, machine learning, and predictive modelling. ",
      "I collaborated with the team to extract insights from data,",
      "develop statistical models.",
    ],
  },
  
];

const experiences = [
  {
    title: "Full-Stack Development",
    company_name: "Procohat",
    icon: procohat,
    iconBg: "#383E56",
    date: "Feb 2023 - May 2023",
    points: [
      "As a Intern at Procohat, I actively contributed to the development",
      "of the company website while acquiring valuable skills in UI/UX design",
      "principles and successfully implementing them into the project .",
    ],
  },
  {
    title: "Software Engineering Virtual Experience",
    company_name: "JPMorgan Chase &Co",
    icon: jp,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Nov 2021",
    points: [
      "Develop solutions for real-world financial scenarios. Collaborating",
      "with a team, I successfully completed tasks such as data visualization",
      "and analysis, algorithmic trading, and building a chatbot interface. ", 
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Letsgrowmore",
    icon: grow,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "I actively contributed to various data-driven projects,",
      "gaining hands-on experience in data pre-processing,",
      "exploratory data analysis, machine learning, and predictive modelling. ",
      "I collaborated with the team to extract insights from data,",
      "develop statistical models.",
    ],
  },
  {
    title: "Computer Vision & Iot Intern",
    company_name: "The Spark Foundation",
    icon: spark,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Sep 2021 ",
    points: [
      "I actively engaged in developing and implementing computer vision algorithms and IoT solutions."
    ,"I worked on projects involving image recognition, object detection, and real-time data integration,",
    "contributing to the advancement of computer vision and IoT technologies.",
    ],
  },
];

const Responsibilitys = [
  {
    Responsibility:
      "It is a great oppurtunity to me as Lead to work with a team. Got the chance to host various events.",
    name: "Ayush Namdeo",
    designation: "Chair",
    company: "IEEE CIS & ComSoc Chapter GHRIETN",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    Responsibility:
      "Being a Part of a MLSA community its a great exposure to Microsoft technologies.",
    name: "Ayush Namdeo",
    designation: "Beta Lead",
    company: "Microsoft Learn Student Ambassadors",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    Responsibility:
      "Teaching in High School and Fund collection ,provided support relief to Poor Family.",
    name: "Ayush Namdeo",
    designation: "Public Relation",
    company: "Suvidha Foundation",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce Data Analysis",
    description:
      "Use data analytics techniques to analyze user behavior, product popularity, and sales trends to provide insights for business decisions.     ",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Sklearn",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Social Media Analytics",
    description:
      "Provide features for sentiment analysis, popular hashtag identification, and user demographic analysis. Easy to identify the Scam comments. ",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Data Analytics",
        color: "green-text-gradient",
      },
      {
        name: "Numpy",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fraud Detection in Financial Transactions",
    description:
      "Dataset contain information about financial data, including transaction amount, location, and additional features.supervised learning (e.g., Random Forest, XGBoost).",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Sklearn",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies,education, experiences, Responsibilitys, projects };
