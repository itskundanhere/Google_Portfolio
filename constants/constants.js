import { AiOutlineSearch } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineLocationOn, MdSchool } from "react-icons/md";
import { calculateExperience } from "../helpers/getExperience";
import { GrMail } from "react-icons/gr";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { FaLinkedin, FaSchool } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";

export const accountDetails = {
  account: "Google Account",
  name: "Kundan Singh",
  gmail: "kundansingh170104@gmail.com",
};

export const navBar = [
  {
    name: "About",
    path: "/",
    icon: AiOutlineSearch,
  },
  {
    name: "Education",
    path: "/education",
    icon: MdSchool,

  },
  {
    name: "Skills",
    path: "/skills",
    icon: BiPencil,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: AiOutlineFundProjectionScreen,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: BiPhoneCall,
  },
  {
    name: "Map",
    path: "/map",
    icon: MdOutlineLocationOn,
  },
];

export const info = {
  heading: "Kundan Singh: Aspiring Software Engineer",
  mobileHeading: "Kundan Singh",
  description:
    "Passionate software engineer focused on building innovative, efficient, and impactful digital solutions that drive real organizational growth.",
  workExperience: "Work Experience",
  companies: [
    {
      designation: "Trainee (Internship)",
      name: "Solid State Physics Laboratory (DRDO)",
      timePeriod: "March, 2025 - May, 2025",
      workProjects: [
        {
          title: "Networked & Embedded Systems Optimization:",
          description:
            "Contributed to the design and optimization of high-performance video amplifier circuits, achieving a 15% latency reduction through advanced signal-processing techniques. Enhanced embedded system performance by 20% using hardware/software co-design, showcasing strong debugging and system-level optimization capabilities.",
        },
      ],
    },
    {
      designation: "Jr. Flutter Developer",
      name: "DigitalDose",
      timePeriod: "Oct, 2024 - Jan, 2025",
      workProjects: [
        {
          title: "Scalable Cross-Platform Mobile Application:",
          description:
            "Built a robust cross-platform mobile app using Flutter with a Firebase backend, applying GetX state management and OOP principles to ensure modular, maintainable, and scalable architecture. Achieved a 30% reduction in load time by optimizing data synchronization and API performance for a smoother user experience. : <b>Dart</b>, <b>Flutter</b>, <b>Firebase</b>, <b>GetX</b>.",
        },
      ],
    },
  ],
};

export const sideBarInfo = {
  about:
    "Final-year Electronics Engineering student with strong foundation in software development. Proficient in C++ programming and cross-platform mobile application development using Flutter. Experience building scalable systems with REST APIs and cloud integration. Recognized in national-level technical competitions including Smart India Hackathon and C2S challenge.",

  contactDetails: [
    {
      title: "kundansingh170104@gmail.com",
      href: "mailto:kundansingh170104@gmail.com",
      icon: GrMail,
    },
    {
      title: "+91 8303926492",
      href: "",
      icon: BsFillPhoneFill,
    },
    {
      title: "Linkedin Profile",
      href: "https://www.linkedin.com/in/kundansingh17/",
      icon: FaLinkedin,
    },
    {
      title: "Github Profile",
      href: "https://github.com/itskundanhere",
      icon: AiFillGithub,
    },
    {
      title: "Topmate Profile",
      href: "https://topmate.io/kundan_singh17/",
      icon: BiLinkAlt,
    },
    {
      title: "Google Portfolio",
      href: "https://google-portfolio-two.vercel.app/",
      icon: AiFillGoogleCircle,
    },
  ],
};

export const accordionData = [
  {
    question: "What skills does Kundan have?",
    answer: `Kundan is well-versed in Javascript, React Js, Redux, CSS 3, HTML 5, Tailwind, Next Js, React Native, Node Js, Express Js, MongoDb.`,
  },
  {
    question: "What services does Kundan provide?",
    answer: `Kundan provides fully responsive mobile applications using Flutter, along with backend development services using Node.js and Firebase. He builds scalable, cross-platform apps with clean architecture and seamless user experience.`,
  },
  {
    question: "Is Kundan frontend or backend developer?",
    answer: `Kundan is a full-stack mobile app developer, experienced in building cross-platform applications using Flutter and Firebase, along with backend services using Node.js.`,
  },
  {
    question: "How much experience does Kundan have?",
    answer: `Kundan is a fresher with strong foundational skills and hands-on project experience in software development.`,
  },
];

export const projectVideos = [
  {
    heading: "Mini Laptop Implementation using React Js.",
    platform: `Linkedin.`,
    author: `Kundan Singh`,
    image: `/assets/laptopdesign.png`,
    date: `1-Mar-2022`,
    link: `https://www.linkedin.com/feed/update/urn:li:ugcPost:6904281486057373696/`,
  },
  {
    heading: "House Design with pure CSS [2022].",
    platform: `Linkedin.`,
    author: `Kundan Singh`,
    image: `/assets/housedesign.png`,
    date: `10-Jan-2022`,
    link: `https://www.linkedin.com/posts/Kundan-choudhary-72444518b_css-animation-perspective3d-activity-6886298154199773184-C74d`,
  },
  {
    heading: "IPL-2022 Web Application using React Js.",
    platform: `Linkedin.`,
    author: `Kundan Singh`,
    image: `/assets/ipl2022.png`,
    date: `26-Mar-2022`,
    link: `https://www.linkedin.com/feed/update/urn:li:activity:6913334580070498304/`,
  },
];

export const relatedsearch = [
  {
    text: "Kundan's Skills",
    href: "/skills",
  },
  {
    text: "Kundan's Projects",
    href: "/projects",
  },
  {
    text: "Contact Kundan",
    href: "/contact",
  },
  {
    text: "Kundan's Location",
    href: "/map",
  },
];

export const footerData = {
  name: "Kundn Singh",
  year: new Date().getFullYear(),
  darkTheme: "Dark theme: ",
  socialLinks: [
    {
      href: "https://www.linkedin.com/in/kundansingh17/",
      icon: FaLinkedin,
    },
    // {
    //   href: "https://Kundan2906.github.io",
    //   icon: BiLinkAlt,
    // },
    {
      href: "https://github.com/itskundanhere",
      icon: FaGithub,
    },
    {
      href: "https://topmate.io/kundan_singh17/",
      icon: BiLinkAlt,
    },
  ],
};

export const skillsData = {
  info: "Kundan loves to develop innovative web apps using new technologies, He is keen to gain experience, enhance and upgrade his skills, He enjoys building everything from small sites and landing pages to rich interactive web apps. He loves creating visually stunning, unique and responsive web apps.",
  skills: [
    {
      title: "Frontend Skills",
      description:
        "JavaScript, React Js, Redux, React Native, Next Js, Html5, CSS3,Tailwind Css, Material Ui, Bootstrap5, Sass and Styled Component.",
    },
    {
      title: "Backend Skills",
      description:
        "Node Js, Express Js, Mongo Db, Next Js, Postman and Jwt-Authorization.",
    },
  ],

  skillsIcons: [
    {
      title: "React Js",
      href: "https://reactjs.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      shadowColor: "#61DAFB",
    },
    {
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      shadowColor: "#F0DB4F",
    },
    {
      title: "Redux",
      href: "https://redux.js.org",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      shadowColor: "#9B59B6",
    },
    {
      title: "Css 3",
      href: "https://www.w3schools.com/css/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      shadowColor: "#3b82f6",
    },
    {
      title: "Next Js",
      href: "https://nextjs.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      title: "React Native",
      href: "https://reactnative.dev/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      shadowColor: "#61DAFB",
    },
    {
      title: "Html 5",
      href: "https://www.w3.org/html/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      shadowColor: "#f97316",
    },
    {
      title: "Tailwind Css",
      href: "https://tailwindcss.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      shadowColor: "#38bdf8",
    },
    {
      title: "Material Ui",
      href: "https://mui.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      shadowColor: "#1C7FB6",
    },
    {
      title: "Bootstrap 5",
      href: "https://getbootstrap.com",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      shadowColor: "#7C12F8",
    },
    {
      title: "Sass",
      href: "https://sass-lang.com",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      shadowColor: "#CB6699",
    },
    {
      title: "Node Js",
      href: "https://nodejs.org",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      shadowColor: "#83CD29",
    },
    {
      title: "Express Js",
      href: "https://expressjs.com",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      title: "Mongo Db",
      href: "https://www.mongodb.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      shadowColor: "#75BB69",
    },
    {
      title: "Git",
      href: "https://git-scm.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      shadowColor: "#F34F29",
    },
    {
      title: "TypeScript",
      href: "https://www.typescriptlang.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      shadowColor: "#007ACC",
    },
    {
      title: "Styled Components",
      href: "https://styled-components.com/",
      src: "/assets/styledComponents.png",
      shadowColor: "#CB6699",
    },
    {
      title: "Postman",
      href: "https://www.postman.com/",
      src: "/assets/postman.png",
      shadowColor: "#f97316",
    },
  ],
};

export const projectsData = [
  {
    title: "Laptop with React Js and Tailwind CSS",
    image: "/assets/laptopdesign.png",
    description: [
      "Designed and developed a laptop with Power on, Sign In with password or finger scanner, Restart, Sleep and Shut down functionality using <b>React JS</b> and <b>Tailwind CSS</b>.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:6904281486057373696/",
    liveDemo: "https://Kundan2906.github.io/laptop-design/",
    sourceCode: "https://github.com/Kundan2906/laptop-design",
  },
  {
    title: "House Design with CSS",
    image: "/assets/housedesign.png",
    description: [
      "Designed and developed front-view of my house with pure <b>CSS 3</b>, <b>Html 5</b> and <b>JavaScript</b>.",
      "User can open and close Gate, Windows and Slide of a House, User can also rotate a house in 360°.",
    ],
    videoDemo:
      "https://www.linkedin.com/posts/Kundan-choudhary-72444518b_css-animation-perspective3d-activity-6886298154199773184-C74d",
    liveDemo: "https://Kundan2906.github.io/My-house.github.io/house.html",
    sourceCode: "https://github.com/Kundan2906/My-house.github.io",
  },
  {
    title: "IPL-2022 Web Application",
    image: "/assets/ipl2022.png",
    description: [
      "Designed and developed a web application that provides the live scorecard of IPL-2022 fetched from <b>RESTful Cricket API</b>.",
      "User can create his/her playing 11 team for each franchise, User can also watch the best of IPL highlights.",
      "Converted to PWA that can be installed and run on mobile as a native app.",
      "Deployed it to Netlify.",
      "Technologies used: <b>JavaScript</b>, <b>React JS</b>, <b>CSS 3</b>, <b>Material Ui</b>, <b>Local Storage</b>.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6913334580070498304/",
    liveDemo: "https://ipl-2022.netlify.app/",
    sourceCode: "https://github.com/Kundan2906/IPL-2022-App",
  },
  {
    title: "Full E-Commerce Web Application",
    image: "/assets/iconstore.png",
    description: [
      "Designed and developed a Full E-Commerce web application with MERN Stack that can be used by users, sellers, and Admin.",
      "Uses json web token for security ( Authorization ), Uses Geo-location for auto-filling shipping address of user.",
      "Uses Twilio message notification to registered mobile number on confirmation of orders.",
      "Uses Paypal payment gateway integration for demo virtual payment of orders.",
      "Technologies used: <b>JavaScript</b>, <b>React JS</b>, <b>Redux Thunk</b>, <b>Node Js</b>, <b>Express Js</b>, <b>Html</b>, <b>CSS</b>, <b>Bootstrap 5</b>, <b>MongoDB</b>.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6842941644195672064/",
    liveDemo: "",
    sourceCode: "https://github.com/Kundan2906/Final-Ecommerce-Project",
  },
  {
    title: "Ice Mart Mobile Application",
    image: "/assets/icemart.png",
    description: [
      "Designed and developed an Ice Mart Mobile App with MERNN Stack that can be used by users, and Admin.",
      "Uses json web token for security, Authorization.",
      "Uses Google-maps for location of user.",
      "Uses Google pay payment gateway integration for demo virtual payment of orders.",
      "Technologies used: <b>JavaScript</b>, <b>React Native</b>, <b>Redux Toolkit</b>, <b>Node Js</b>, <b>Express Js</b>, <b>MongoDB</b>.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6941967333682737152/",
    liveDemo: "",
    sourceCode: "https://github.com/Kundan2906/Ice-Mart",
  },
  {
    title: "Real-time Online Chat Application",
    image: "/assets/chatapp.png",
    description: [
      "Designed and developed a Real-time Online Chat Application with react and stream that can be used for online communication.",
      "Server deployed to Heroku and Client deployed to Netlify.",
      "Responsive and converted into PWA(Native app).",
      "Technologies used: <b>JavaScript</b>, <b>React JS</b>, <b>Stream</b>, <b>Node Js</b>, <b>Express Js</b>, <b>Html</b>, <b>CSS</b>.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6877141876273762304/",
    liveDemo: "",
    sourceCode: "https://github.com/Kundan2906/Lets-Chat-app",
  },
  {
    title: "Movie Info Application",
    image: "/assets/movieapp.png",
    description: [
      "Designed and developed a Movie info app with MERN Stack with third-party APIs for fetching movies record, Uses <b>OMDb RESTful</b> web service.",
      "Technologies used: <b>JavaScript</b>, <b>React JS</b>, <b>Node Js</b>, <b>Express Js</b>, <b>Html</b>, <b>CSS</b>, <b>Bootstrap 5</b>, <b>MongoDB</b>.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6842939354764201984/",
    liveDemo: "",
    sourceCode: "",
  },
  {
    title: "All Projects Compilation",
    image: "/assets/allProjects.png",
    description: [
      "Check here my all projects in one video compilation.",
      "Technologies used: <b>JavaScript</b>, <b>React Js</b>, <b>Redux</b>, <b>React Native</b>, <b>Next Js</b>, <b>Html5</b>, <b>CSS3</b>, <b>Tailwind Css</b>, <b>Material Ui</b>, <b>Bootstrap5</b>, <b>Sass</b>, <b>Styled Components</b>, <b>Node Js</b>, <b>Express Js</b>, <b>Mongo Db</b>, <b>Postman</b> and <b>Jwt-Authorization</b>.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6962305778502254592/",
    liveDemo: "",
    sourceCode: "",
  },
];

export const contactDetails = [
  {
    icon: MdCall,
    type: "Mobile",
    value: "+91 8303926492",
    href: "",
  },
  {
    icon: GrMail,
    type: "Email",
    value: "kundansingh170104@gmail.com",
    href: "mailto:kundansingh170104@gmail.com",
  },
  {
    icon: MdLocationOn,
    type: "Address",
    value: "Gorakhpur, Uttar Pradesh",
    href: "",
  },
  {
    icon: FaLinkedin,
    type: "Linkedin",
    value: "Contact through Linkedin",
    href: "https://www.linkedin.com/in/kundansingh17/",
  },
];


export const educationData = {
  info: "Here mentioned all the educational qualifications of Kundan.",
  educationList: [
    {
      degree: "B.Tech in Electronics Engineering",
      institute: "Rajkiya Engineering College Sonbhadra",
      year: "Nov, 2022 - June, 2026 (Expected)",
      specialization: "Data Structures and Algorithms, Operating Systems, Computer Networks, Digital System Design",
      marks: "CGPA: 7.78/10",
      logo: "/assets/rec.jpeg", // replace with your image path
    },
    {
      degree: "Intermediate (12th)",
      institute: "Saraswati Shishu Mandir Sr. Sec. School, Gorakhpur",
      year: "2020 - 2021",
      specialization: "Physics, Chemistry, Mathematics",
      marks: "Percentage: 79.33%",
      //achievements: "Top 5% of the batch",
      logo: "/assets/ssm.jpg",
    },
    {
      degree: "High School (10th)",
      institute: "SVM Public School, Gorakhpur",
      year: "2018 - 2019",
      specialization: "Science and Mathematics",
      marks: "Percentage: 80.50%",
      //achievements: "District level science fair winner",
      logo: "/assets/svm1.jpeg",
    },
  ],
};


export const contactData = {
  nameLabel: "Name *",
  emailLabel: "Email *",
  subjectLabel: "Subject *",
  messageLabel: "Message *",
  sendButton: "Send Message",
  errorMessage:
    "Your message could not be sent, Kindly contact directly over Email or Phone!",
  successMessage:
    "Your message has been sent successfully, I will contact you soon!",
};
