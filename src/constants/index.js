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
  carrent,
  jobit,
  threejs,
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
    title: "UI Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
];

const experiences = [
  {
    title: "UI Developer - { React.js Developer }",
    company_name: "Eunimart",
    position:"Team Lead",
    iconBg: "#E6DEDD",
    date: "January 2023 - June 2023",
    points: [
      "Responsible for creating a UI Engine that consolidates all accessible components within a single application, enabling the utilization of reusable components through remote access instead of duplicating code across various applications in React.",
      "Writing efficient, reusable and well-documented code using the latest frontend techniques to build cross-platform interfaces, working closely with designers and developers.",
      "Reviewing pull requests and providing constructive feedback on code design and implementation.",
      "Ensuring that front-end developers working in separate teams can effectively collaborate, and benefit from each others' experiences and techniques. Contributing to team activities forming part of the Agile product development process (e.g Planning sessions, product demos, and retrospectives).",
      "Participating in discussions with internal stakeholders and team members about technical good practices, and helping the team identify optimal solutions"
    ],
  },
  {
    title: "UI Developer - { React.js , Angular , Flutter }",
    company_name: "Eunimart",
    position:"Software Developer",
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Dec 2022",
    points: [

      "Responsible for Building Supply Chain Management System Modules and Integration with API's",
      "Building reusable components, Modules, Directives and Pipes",
      "Responsible for Developing Dynamic forms and Tables using angular material Responsible for Building Local warehouse and vendor management system",
      "Built supply chain management application (android and ios) using Flutter Responsible for integrating APIs for E-commerce platforms for managing orders, shipments and Payments",
      "Worked on platform which deals with API integration using type script. Mentoring team of 2 members for development of Supply chain management solutions"
    ],
  },
  {
    title: "UI Developer - { Angular }",
    company_name: "Eunimart",
    position:"Software Developer Intern",
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Sep 2020",
    points: [
      "Responsible for Building Retail module which consists products and orders", "Used programming capabilities in JavaScript and Angular libraries", "Strong experience and skills in API integration",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ram proved me wrong.",
    name: "Manoj",
    designation: "CFO",
    company: "ABC Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ram does.",
    name: "Santhosh",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ram optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Vinay",
    designation: "CTO",
    company: "XYZ Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "LearnPro : Your Path to Knowledge and Progress",
    description:
      "Introducing our interactive quiz app, where users embark on a learning journey with engaging lessons and quizzes. Admins curate content, while users complete lessons and test their knowledge. Track your progress with user-friendly dashboards, making learning and performance assessment a breeze.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vitejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://quiz-dq13w9yu6-tatiparthiramukumars-projects.vercel.app/",
  },
  {
    name: "SkillMentor: Elevating Interview Success and Beyond",
    description:
      "Introducing our comprehensive interview preparation platform that bridges the gap between students and colleges. Students can enhance their skills through real interview experiences, receive detailed feedback, and track their progress. College admins have a powerful tool at their disposal, allowing them to monitor and mentor students effectively, ensuring their success in both soft and hard skills.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "vitejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://munsow.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
