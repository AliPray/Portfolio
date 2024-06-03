import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
<<<<<<< HEAD
  name: 'Ali Missaoui',
  title: "Greetings all, I'm Ali",
  description:
    "I am a Python developer passionate about machine learning & Data.",
  resumeLink:
    'https://docs.google.com/document/d/1AFkD9kE4VEbdKj38uaxwBrCjS3B10--tKhBfg3RGd9E/edit?usp=sharing',
};

export const openSource = {
  githubUserName: 'AliPray',
=======
  name: "Hanzla Tauqeer",
  title: "Hi all, I'm Hanzla",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Python, Django, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "1hanzla100",
>>>>>>> 09bd4fd6f7018b17bf1d815da85918642ded0562
};

export const contact = {};

export const socialLinks: SocialLinksType = {
<<<<<<< HEAD
  whatsapp: 'https://wa.me/21650471361',
  linkedin: 'https://www.linkedin.com/in/ali-missaoui/',
  github: 'https://github.com/AliPray',

};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'Machine Learning, Data Engineer, Blockchain',
  data: [
    {
      title: 'Python Developer',
      lottieAnimationFile: '/lottie/skills/data_engineer.json', // Path of Lottie Animation JSON File
=======
  email: "mailto:hanzla.tauqeer123@gmail.com",
  linkedin: "https://www.linkedin.com/in/1hanzla100/",
  github: "https://github.com/1hanzla100",
  instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
>>>>>>> 09bd4fd6f7018b17bf1d815da85918642ded0562
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
<<<<<<< HEAD
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'Flask',
          iconifyTag: 'logos:flask',
        },
        {
          skillName: 'Numpy',
          iconifyTag: 'logos:numpy',
        },
        {
          skillName: 'Pandas',
          iconifyTag: 'logos:pandas',
        },
        {
          skillName: 'Matplotlib',
          iconifyTag: 'logos:matplotlib',
        },
        {
          skillName: 'Tensor Flow',
          iconifyTag: 'logos:tensorflow',
        },
        
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          iconifyTag: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          iconifyTag: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          iconifyTag: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          iconifyTag: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          iconifyTag: 'logos:ganache-icon',
=======
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
>>>>>>> 09bd4fd6f7018b17bf1d815da85918642ded0562
        },
        {
          skillName: 'Hardhat',
          iconifyTag: 'logos:hardhat',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
<<<<<<< HEAD
    Stack: 'Data Engineer', //Insert stack or technology you have experience in
    progressPercentage: '70', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Machine Learning', //Insert stack or technology you have experience in
    progressPercentage: '60', //Insert relative proficiency in percentage
=======
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
>>>>>>> 09bd4fd6f7018b17bf1d815da85918642ded0562
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
<<<<<<< HEAD
    Stack: 'Algorithm',
    progressPercentage: '70',
=======
    Stack: "Programming",
    progressPercentage: "95",
>>>>>>> 09bd4fd6f7018b17bf1d815da85918642ded0562
  },
];

export const educationInfo: EducationType[] = [
  {
<<<<<<< HEAD
    schoolName: 'UOW Malaysia KDU Penang University College',
    subHeader: 'Bachelor degree in Computer Science, Major in AI.',
    duration: 'October 2019 - May 2023',
    desc: '',
    grade: 'A-',
    descBullets: [
      'Final year Project: Blockchain based Election Web App.',
    ],
  },
  {
    schoolName: 'Secondary School of Jemmel, Monastir',
    subHeader: 'Baccalaureate Diploma in Technics Science.',
    duration: '2013 - 2014',
    desc: '',
    grade: 'B',
    descBullets: [
    ],
=======
    schoolName: "University of Central Punjab",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2017 - April 2020",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
>>>>>>> 09bd4fd6f7018b17bf1d815da85918642ded0562
  },
];

export const experience: ExperienceType[] = [
  {
<<<<<<< HEAD
    role: 'Data Integration Trainee',
    company: 'Flextronics Malaysia, Penang',
    companyLogo: '/img/icons/common/flextronics.png',
    date: 'May 2022 – Aug 2022',
    desc: 'I worked as a data integration trainee in my internship at Flextronics Malaysia. To qualify for this role, I took Denodo Developer courses which provided a solid foundation in data virtualization. During my internship, I worked with a team to develop data integration solutions for clients, focusing primarily on ETL processes. I utilized Denodo Virtual DataPort to integrate and transform diverse data sources, ensuring seamless data flow and consistency. My responsibilities included creating virtual models to provide unified views of the data, which were then deployed to the QA environment for testing and validation. Additionally, I designed insightful reports to help clients make data-driven decisions. This experience allowed me to collaborate closely with a data integration team, enhancing my technical skills and teamwork abilities.',
=======
    role: "Django Developer",
    company: "Meganos Software",
    companyLogo: "/img/icons/common/meganos.png",
    date: "Aug 2022 - Present",
    desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  },
  {
    role: "Full Stack Developer",
    company: "Duseca Software",
    companyLogo: "/img/icons/common/duseca_software_logo.jpeg",
    date: "Jan 2022 - Sept 2023",
    desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
>>>>>>> 09bd4fd6f7018b17bf1d815da85918642ded0562
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
<<<<<<< HEAD
=======
  {
    role: "Full Stack Developer",
    company: "ZRTechnologies",
    companyLogo: "/img/icons/common/zrtech.jpeg",
    date: "Aug 2022 - Jun 2023",
    desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
  {
    role: "Backend Developer",
    company: "Bleed-AI",
    companyLogo: "/img/icons/common/bleedAI.jpg",
    date: "Sept 2021 - Oct 2021",
    desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
  },
>>>>>>> 09bd4fd6f7018b17bf1d815da85918642ded0562
];

export const projects: ProjectType[] = [
  {
<<<<<<< HEAD
    name: 'E-TASWeeT blockhain voting',
    desc: 'FYP: NextJs ⚛️ web Application for Election purposes. Uses Blockchain ⛓️ Technology: Solidity & Sepolia Ethereum test net.',
    github: 'https://github.com/AliPray/E-TASWeeT-blockhain-voting.git',
  },
  {
    name: 'Customer Front App',
    desc: 'Built and integrated customer app with a Django server, enabling OAuth2 authentication for user access with time-bound tokens.',
    github: 'https://github.com/AliPray/customer_front_app.git',
=======
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
>>>>>>> 09bd4fd6f7018b17bf1d815da85918642ded0562
  },
];

export const feedbacks: FeedbackType[] = [
  {
<<<<<<< HEAD
    name: 'Private Client',
    feedback:
      'I am extremely pleased with the system delivered by your team. The project was completed on time, communication was excellent throughout, and post-delivery support has been exceptional. Looking forward with you again in the future!',
=======
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
>>>>>>> 09bd4fd6f7018b17bf1d815da85918642ded0562
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
<<<<<<< HEAD
  title: 'Ali Missaoui',
  description:
    'I am a ReactJS/Python developer passionate about machine learning & Data.',
  author: 'Missaoui Ali',
  keywords: [
    'Ali',
    'Ali Missaoui',
    'AliPray',
    'AliPray',
    'Portfolio',
    'Ali Portfolio ',
    'Ali Missaoui Portfolio',
=======
  title: "Hanzla Tauqeer",
  description: greetings.description,
  author: "Hanzla Tauqeer",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Hanzla Tauqeer",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Hanzla Tauqeer Portfolio",
>>>>>>> 09bd4fd6f7018b17bf1d815da85918642ded0562
  ],
};
