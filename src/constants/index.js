import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import ibm from "../assets/certificates/IBM_logo.svg";
import nptel from "../assets/certificates/nptel.jpeg";
import postman from "../assets/certificates/postman.png";
import udemy from "../assets/certificates/udemy.jpg";
import hackerrank from "../assets/certificates/hackerrank.jpg";
import sololearn from "../assets/certificates/sololearn.png";

export const HERO_CONTENT = `Final year Computer Science Engineering student passionate about software development and solving real-world problems.
Proficient in building responsive, user-friendly web applications using technologies like React, Tailwind CSS, and Node.js. I've worked on real-world projects including an event management platform and an internship focused on real-time web apps. Comfortable across the full stack, I enjoy collaborating on forward-thinking projects that combine clean code with meaningful impact.`;

export const ABOUT_TEXT = `I’m a final year CSE student at PERI Institute of Technology with a passion for software development and continuous learning. I’ve gained hands-on experience through internships and freelance work, building real-time applications using React, React Router, useState, useEffect, and WebSockets. My backend knowledge spans Node.js, Express, MySQL, and MongoDB, complemented by skills in Docker, Git, and Linux. I’ve also explored Python, Java, and YAML in various academic and personal projects. Participating in hackathons and a Java internship has helped strengthen both my technical and problem-solving abilities. Outside coding, I enjoy PC gaming and keeping up with the latest tech trends. I’m always eager to contribute to collaborative, impactful projects.`;

export const CERTIFICATES = [
  {
    icon: ibm,
    name: "IBM Full Stack Software Developer",
    url: "https://www.coursera.org/account/accomplishments/specialization/2RLIGMWNOLQT",
  },
  {
    icon: nptel,
    name: "Data Structure and Algorithms using Java",
    url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS96S35250756204246553",
  },
  {
    icon: hackerrank,
    name: "Python Basics",
    url: "https://www.hackerrank.com/certificates/4e71ec64646f",
  },
  {
    icon: udemy,
    name: "Java Data Structures & Algorithms + LEETCODE Exercises",
    url: "https://www.udemy.com/certificate/UC-c0e58f84-c97a-4334-9b90-90822e01440d/",
  },
  {
    icon: sololearn,
    name: "Python for Beginners",
    url: "https://www.sololearn.com/Certificate/CT-AIBAKFSB/png",
  },
  {
    icon: postman,
    name: "Postman API Fundamentals Student Expert",
    url: "https://badgr.com/public/assertions/inEldQJ3T02EUs_lAQEiVw",
  },
];

export const EXPERIENCES = [
  {
    year: "Feb 2025 - Mar 2025",
    role: "Developer",
    company: "The Great Galala",
    description: `Led the development of a dynamic event website to streamline registration and attendee management. Designed a clean, user-friendly interface to simplify the entire event sign-up process. Maintained and optimized the platform based on real user feedback. Adapted features to meet evolving event needs and ensure a seamless experience. Focused on performance, usability, and responsive design throughout the project.`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "React Router",
      "TailwindCSS",
      "Figma",
    ],
  },
  {
    year: "Oct 2024 - Dec 2024",
    role: "React Developer Intern",
    company: "Xenosis IT Solutions",
    description: `Built responsive web apps using React.js and Tailwind CSS, focusing on clean design and user experience. Implemented dynamic components, animations, and handled routing, state management, and API integration. Explored advanced React features like useEffect, useState, React Router, and WebSockets for real-time updates. Contributed to collaborative tools with live notifications and task management features. Used Firebase, Node.js, and modern CSS to build scalable, maintainable projects.`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "TailwindCSS",
      "Figma",
    ],
  },
  {
    year: "Jul 2024 - Aug 2024",
    role: "Web Developer Intern",
    company: "Prodigy InfoTech",
    description: `During my internship, I developed and maintained web applications using React.js, Tailwind CSS, and Next.js. I gained experience with various React UI libraries and implemented RESTful APIs for data communication. I successfully completed five projects and collaborated with cross-functional teams to deliver high-quality software on time.`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "TailwindCSS",
      "Framer",
    ],
  },
  {
    year: "Apr 2024 - Present",
    role: "Member",
    company: "Descience Open Source Club",
    description: `Engaged actively in the DOS Club, a hub of innovation and collaboration. Worked closely with peers to solve complex problems, contributing to industry-focused projects. Focused on implementing effective solutions and optimizing processes, ensuring our efforts aligned with the club’s mission of driving research and development.`,
    technologies: [],
  },
  {
    year: "Feb 2024 - Mar 2024",
    role: "Java Programmer Intern",
    company: "Pantechelearning",
    description: `Utilized knowledge from a Java course completed through an LMS, focusing on Java, OOP concepts, and JavaFX. Developed projects that demonstrated a strong understanding of these technologies and collaborated effectively with product managers to prioritize and enhance key features.`,
    technologies: ["Java", "OOPS", "JavaSpringBoot"],
  },
];

export const PROJECTS = [
  {
    title: "Romdev",
    site: "https://github.com/therohit15/Romdev",
    image: project6,
    description:
      "Developed a full-stack Tinder Clone with user auth, profile editing, connection management, real-time chat via Socket.io, and Razorpay integration on a scalable AWS setup",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Tailwind CSS",
      "Socket.IO",
      "Razorpay",
      "AWS",
    ],
  },
  {
    title: "Devplayer",
    site: "https://devplayer.onrender.com/",
    image: project5,
    description:
      "Built and deployed a full-stack music player that streams audio via the YouTube API, enabling users to search, play, and manage tracks in real time.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Tailwind CSS",
      "Replit AI",
      "Render",
      "Youtube API",
    ],
  },
  {
    title: "A Landing Page",
    site: "https://github.com/therohit15/PRODIGY_WD_01",
    image: project1,
    description: "I built a landing page using React and Tailwind CSS.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Stopwatch",
    site: "https://github.com/therohit15/PRODIGY_WD_02",
    image: project2,
    description:
      " The application features intuitive functionalities for starting, pausing, and resetting the stopwatch, as well as tracking and displaying lap times.",
    technologies: ["HTML", "CSS", "Javascript", "React", "Tailwind"],
  },
  {
    title: "Tic Tac Toe",
    site: "https://github.com/therohit15/PRODIGY_WD_03",
    image: project3,
    description:
      "An interactive tic-tac-toe web application with functions to handle user clicks, track game state, and check for winning conditions. Users can play against each other or against an AI opponent, aiming to get three markers in a row to win the game",
    technologies: ["HTML", "CSS", "Javascript", "React", "Tailwind"],
  },
  {
    title: "Weather App",
    site: "https://github.com/therohit15/PRODIGY_WD_05",
    image: project4,
    description:
      "A web page that fetches weather data from a weather API based on the user's location or a user-inputted location. Display the current weather conditions, temperature, and other relevant information.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "1007 Mountain Drive 48122 Gotham City",
  phoneNo: "+91 7550189004 ",
  email: "therohit15official@gmail.com",
};
