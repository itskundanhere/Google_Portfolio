import { AiOutlineSearch } from "react-icons/ai";
import { BiMedal, BiPencil } from "react-icons/bi";
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
  name: "Achievements",
  path: "/achievements",
  icon: BiMedal,
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
    answer: `Kundan is well-versed in Dart, Flutter, Node Js, Express Js, MongoDb, Firebase, Git & GitHub.`,
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
    heading: "AstroJet 'A game using Flutter + Flame' ",
    platform: `Linkedin.`,
    author: `Kundan Singh`,
    image: `/assets/astrojet.png`,
    date: `1-Mar-2022`,
    link: `https://www.linkedin.com/posts/kundansingh17_flutter-flameengine-gamedev-activity-7348646969763954692-lM4e?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx4sUMBgSVKVisEa-FcygKhVWR5dwjBOo0`,
  },
  {
    heading: "VoteNet 'Voting with secure verification' ",
    platform: `Linkedin.`,
    author: `Kundan Singh`,
    image: `/assets/votenet.png`,
    date: `10-Jan-2022`,
    link: `https://www.youtube.com/watch?v=XBJV_4JfYMU`,
  },
  {
    heading: "HourlyVibes 'A regular used news app' ",
    platform: `Linkedin.`,
    author: `Kundan Singh`,
    image: `/assets/hourlyvibes.png`,
    date: `26-Mar-2022`,
    link: `https://www.linkedin.com/posts/kundansingh17_flutter-mobileappdevelopment-hourlyvibes-activity-7418643907674128385-PGmv?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx4sUMBgSVKVisEa-FcygKhVWR5dwjBOo0`,
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
  name: "Kundan Singh",
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
  info: "Kundan loves to develop innovative Mobile apps using new technologies, He is keen to gain experience, enhance and upgrade his skills, He enjoys building everything from small sites and landing pages to rich interactive web apps. He loves creating visually stunning, unique and responsive mobile apps.",
  skills: [
    {
      title: "Frontend Skills",
      description:
        "Dart, Flutter, Html5, Css3, Tailwind Css, Flame.",
    },
    {
      title: "Backend Skills",
      description:
        "Firebase, Node Js, Express Js, Mongo Db, Next Js, Postman and Jwt-Authorization.",
    },
  ],

  skillsIcons: [
    {
      title: "Dart",
      href: "https://dart.dev/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      shadowColor: "#0175C2",
    },
    {
      title: "Flutter",
      href: "https://flutter.dev/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      shadowColor: "#02569B",
    },
{
      title: "Html 5",
      href: "https://www.w3.org/html/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      shadowColor: "#f97316",
    },
    
    {
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      shadowColor: "#F0DB4F",
    },

    {
      title: "Css 3",
      href: "https://www.w3schools.com/css/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      shadowColor: "#3b82f6",
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
      title: "Flame",
      href: "https://flame-engine.org/",
      src: "https://flame-engine.org/assets/images/corner-logo.png",
      shadowColor: "#FF4500",
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
      title: "Firebase",
      href: "https://firebase.google.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
      shadowColor: "#fde005",
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
    title: "AstroJet 'A game using Flutter + Flame'",
    image: "/assets/astrojet.png",
    description: [
      "Developed AstroJet, an arcade-style space shooter game with a <b>color-customizable airplane</b>, smooth controls, responsive movement, and accurate collision detection to ensure engaging and balanced gameplay.",
      "Implemented <b>laser-based asteroid combat mechanics</b> with progressive difficulty and dynamic <b>power-ups</b> including Bombs for area damage, Shields for temporary protection, and Laser Boosters for enhanced firepower.",
      "Enhanced user experience by integrating <b>immersive background music and real-time sound effects</b>, creating an engaging and polished gaming environment."
    ],
    videoDemo:
      "https://www.linkedin.com/posts/kundansingh17_flutter-flameengine-gamedev-activity-7348646969763954692-lM4e?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx4sUMBgSVKVisEa-FcygKhVWR5dwjBOo0",
    liveDemo: "https://astro-jet-two.vercel.app/",
    sourceCode: "https://github.com/itskundanhere/AstroJet",
  },
  {
    title: "VoteNet 'Voting with secure verification'",
    image: "/assets/votenet.png",
    description: [
      "Developed VoteNet, a secure and fast digital voting verification system aimed at modernizing elections by reducing queues, eliminating manual errors, and preventing voter fraud through <b>Aadhaar-based authentication</b>.",
      "Implemented instant <b>QR-code verification</b> with real-time duplicate vote prevention using Firebase, achieving <b>voter verification in under 5 seconds</b> and ensuring one voter, one vote",
      "Built a cross-platform Flutter application with Firebase (Auth, Firestore, Realtime DB) support, featuring offline-ready functionality for low-connectivity areas and enabling transparent, scalable, and trustworthy voting processes.",
    ],
    videoDemo:
      "https://www.youtube.com/watch?v=XBJV_4JfYMU",
    //liveDemo: "https://Kundan2906.github.io/My-house.github.io/house.html",
    sourceCode: "https://github.com/itskundanhere/VoteNet/tree/my-new-branch",
  },
  {
    title: "HourlyVibes 'A regular used news app'",
    image: "/assets/hourlyvibes.png",
    description: [
      "Developed HourlyVibes, a <b>Flutter-based mobile news application</b> delivering a smooth, responsive, and engaging reading experience with <b>category-wise</b> news including Business, Entertainment, General, Science, and Sports.",
      "Implemented breaking news with smooth sliding views and automatically updated trending news displayed through a <b>clean, card-based UI</b>, enabling seamless access to full articles on tap.",
      "Strengthened expertise in Flutter UI/UX design, API integration, state management, and <b>real-time content handling</b>, resulting in a <b>user-friendly and scalable news application</b>.",
      // "Deployed it to Netlify.",
      // "Technologies used: <b>JavaScript</b>, <b>React JS</b>, <b>CSS 3</b>, <b>Material Ui</b>, <b>Local Storage</b>.",
    ],
    videoDemo:
      "https://www.linkedin.com/posts/kundansingh17_flutter-mobileappdevelopment-hourlyvibes-activity-7418643907674128385-PGmv?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx4sUMBgSVKVisEa-FcygKhVWR5dwjBOo0",
    //liveDemo: "https://ipl-2022.netlify.app/",
    sourceCode: "https://github.com/itskundanhere/HourlyVibes",
  },
  // {
  //   title: "Full E-Commerce Web Application",
  //   image: "/assets/iconstore.png",
  //   description: [
  //     "Designed and developed a Full E-Commerce web application with MERN Stack that can be used by users, sellers, and Admin.",
  //     "Uses json web token for security ( Authorization ), Uses Geo-location for auto-filling shipping address of user.",
  //     "Uses Twilio message notification to registered mobile number on confirmation of orders.",
  //     "Uses Paypal payment gateway integration for demo virtual payment of orders.",
  //     "Technologies used: <b>JavaScript</b>, <b>React JS</b>, <b>Redux Thunk</b>, <b>Node Js</b>, <b>Express Js</b>, <b>Html</b>, <b>CSS</b>, <b>Bootstrap 5</b>, <b>MongoDB</b>.",
  //   ],
  //   videoDemo:
  //     "https://www.linkedin.com/feed/update/urn:li:activity:6842941644195672064/",
  //   liveDemo: "",
  //   sourceCode: "https://github.com/Kundan2906/Final-Ecommerce-Project",
  // },
  // {
  //   title: "Ice Mart Mobile Application",
  //   image: "/assets/icemart.png",
  //   description: [
  //     "Designed and developed an Ice Mart Mobile App with MERNN Stack that can be used by users, and Admin.",
  //     "Uses json web token for security, Authorization.",
  //     "Uses Google-maps for location of user.",
  //     "Uses Google pay payment gateway integration for demo virtual payment of orders.",
  //     "Technologies used: <b>JavaScript</b>, <b>React Native</b>, <b>Redux Toolkit</b>, <b>Node Js</b>, <b>Express Js</b>, <b>MongoDB</b>.",
  //   ],
  //   videoDemo:
  //     "https://www.linkedin.com/feed/update/urn:li:activity:6941967333682737152/",
  //   liveDemo: "",
  //   sourceCode: "https://github.com/Kundan2906/Ice-Mart",
  // },
  // {
  //   title: "Real-time Online Chat Application",
  //   image: "/assets/chatapp.png",
  //   description: [
  //     "Designed and developed a Real-time Online Chat Application with react and stream that can be used for online communication.",
  //     "Server deployed to Heroku and Client deployed to Netlify.",
  //     "Responsive and converted into PWA(Native app).",
  //     "Technologies used: <b>JavaScript</b>, <b>React JS</b>, <b>Stream</b>, <b>Node Js</b>, <b>Express Js</b>, <b>Html</b>, <b>CSS</b>.",
  //   ],
  //   videoDemo:
  //     "https://www.linkedin.com/feed/update/urn:li:activity:6877141876273762304/",
  //   liveDemo: "",
  //   sourceCode: "https://github.com/Kundan2906/Lets-Chat-app",
  // },
  // {
  //   title: "Movie Info Application",
  //   image: "/assets/movieapp.png",
  //   description: [
  //     "Designed and developed a Movie info app with MERN Stack with third-party APIs for fetching movies record, Uses <b>OMDb RESTful</b> web service.",
  //     "Technologies used: <b>JavaScript</b>, <b>React JS</b>, <b>Node Js</b>, <b>Express Js</b>, <b>Html</b>, <b>CSS</b>, <b>Bootstrap 5</b>, <b>MongoDB</b>.",
  //   ],
  //   videoDemo:
  //     "https://www.linkedin.com/feed/update/urn:li:activity:6842939354764201984/",
  //   liveDemo: "",
  //   sourceCode: "",
  // },
  // {
  //   title: "All Projects Compilation",
  //   image: "/assets/allProjects.png",
  //   description: [
  //     "Check here my all projects in one video compilation.",
  //     "Technologies used: <b>JavaScript</b>, <b>React Js</b>, <b>Redux</b>, <b>React Native</b>, <b>Next Js</b>, <b>Html5</b>, <b>CSS3</b>, <b>Tailwind Css</b>, <b>Material Ui</b>, <b>Bootstrap5</b>, <b>Sass</b>, <b>Styled Components</b>, <b>Node Js</b>, <b>Express Js</b>, <b>Mongo Db</b>, <b>Postman</b> and <b>Jwt-Authorization</b>.",
  //   ],
  //   videoDemo:
  //     "https://www.linkedin.com/feed/update/urn:li:activity:6962305778502254592/",
  //   liveDemo: "",
  //   sourceCode: "",
  // },
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
  info: "Kundan has pursued and completed the following educational qualifications, reflecting his continuous dedication to learning and growth.",
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

export const achievementsData = [
  {
    title: "TCS CodeVita (Season 13)",
    description:
      "Achieved Rank 312 (Round 2) and Rank 5100 (Round 1) in an international coding competition, showcasing algorithmic thinking and coding proficiency on a global platform.",
    year: "2025",
  },
  {
    title: "Chips to Startup (C2S) Hackathon Challenge",
    description:
      "Secured AIR 10 in the Digital India RISC-V (DIR-V) Grand Challenge, demonstrating excellence in processor architecture, embedded systems, and innovative hardware solutions at a national level.",
    year: "2025",
  },
  {
    title: "Smart India Hackathon",
    description:
      "Won 3× college-level internal hackathons for the Smart India Hackathon, demonstrating strong problem-solving skills, innovation, and effective team collaboration.",
    year: "2023, 24, 25",
  },
];

export const volunteeringData = [
  {
    title: "Training & Placement Cell - REC Sonbhadra",
    position: "Student Coordinator",
    description:
      "Successfully organized 15+ technical events engaging 350+ participants and handled company management during campus placement activities.",
    year: "2023 - Present",
  },
  {
    title: "Institute of Electrical and Electronics Engineers (IEEE) - REC Sonbhadra",
    position: "Vice Chairperson",
    description:
      "Held the role of Vice Chairperson, IEEE, driving hackathons and seminars, managing member coordination, and mentoring teams for successful event delivery.",
    year: "Nov, 2024 - Jan, 2026",
  },
  {
    title: "Google Developer Groups On Campus (GDGOC) - REC Sonbhadra",
    position: "Co-Lead",
    description:
      "Conducted 10+ structured workshops on networking and cloud technologies, driving practical learning initiatives, and participated in tech fests and DevFests to expand technical exposure and professional networking.",
    year: "Sep, 2024 - Oct, 2025",
  },
   {
    title: "Atal Tinkering Lab (ATL) - S.S.M Sr. Sec. School, Gorakhpur",
    position: "Student Volunteer",
    description:
      "Contributed as an ATL Volunteer during Class 11th and 12th, working on project development and showcasing innovations at district-level events, including Gorakhpur Mahotsav and school exhibitions.",
    year: "2019 - 2021",
  },
];




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
