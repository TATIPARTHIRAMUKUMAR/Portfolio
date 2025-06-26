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
  ATandT,
  dell,
  boston,
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
    title: "SDE 2 - Senior Frontend Developer",
    company_name: "AT&T",
    position:"Team Lead",
    iconBg: "#E6DEDD",
    image: ATandT,
    date: "June 2023 - present",
    points: [
  "Led the development of modular UI Engine using React.js and Webpack Module Federation to centralize and expose shared components across applications.",
  "Built high-performance React applications using Vite.js, leveraging its fast bundling and hot module replacement.",
  "Refactored legacy UI components to align with AT&T’s design system, improving usability and reducing maintenance complexity.",
  "Implemented micro-frontend architecture supporting independent deployment, improving code maintainability and release flexibility.",
  "Collaborated with designers and backend teams to build scalable and reusable components that improved turnaround by 35%.",
  "Applied React patterns like Hooks, Context API, and HOCs, and integrated RESTful and GraphQL APIs for dynamic data rendering."
],

  },
  {
    title: "Frontend Engineer",
    company_name: "Dell",
    position:"Software Developer",
    iconBg: "#E6DEDD",
    image: dell,
    date: "Oct 2020 - Dec 2022",
    points: [
  "Built scalable and reusable frontend components using Angular and React.js, with custom hooks, services, and directives.",
  "Styled responsive UIs using Tailwind CSS and Material UI to ensure consistent and accessible cross-device layouts.",
  "Led a team of 5 developers in Agile sprints, integrating CI/CD with GitHub Actions and Jenkins for faster deployments.",
  "Utilized AWS services like EC2, S3, Lambda, and RDS to scale features securely and efficiently in the cloud.",
  "Developed cross-platform mobile apps with Flutter, integrating third-party libraries and native features seamlessly.",
  "Implemented lazy loading, dynamic rendering, React Suspense, and modular architecture for performance optimization."
],

  },
  {
    title: "UI Developer",
    company_name: "Boston Scientific",
    position:"Software Developer Intern",
    iconBg: "#E6DEDD",
    image: boston,
    date: "Feb 2020 - Sep 2020",
   points: [
  "Contributed to UI development using React, Angular, and Next.js with scalable and maintainable design patterns.",
  "Designed dynamic, cross-browser pages using HTML5, CSS3, jQuery, Bootstrap, AngularJS, and modern JavaScript.",
  "Built forms and data views using Angular 2.0’s template and reactive forms, integrating with REST APIs and validation.",
  "Leveraged Next.js features like SSR and SSG to optimize SEO and performance for medical application tools.",
  "Managed state and side effects using Redux Toolkit, React Context, and RxJS to ensure consistent data flow.",
  "Worked closely with QA to fix bugs, resolve production issues, and build pixel-perfect UI from wireframes and Figma."
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
      "Our interview prep platform connects students and colleges. Students gain real interview experience, get detailed feedback, and track progress. College admins can monitor and guide student performance effectively, helping them build both soft and hard skills for career success through structured mentoring and skill development tools.",

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
