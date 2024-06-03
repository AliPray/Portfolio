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
  name: 'Ali Missaoui',
  title: "Greetings all, I'm Ali",
  description:
    "I am a Python developer passionate about machine learning & Data.",
  resumeLink:
    'https://drive.google.com/file/d/1TxMcug5xVfjUvb-2TbnNc2a6S45kkrnF/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'AliPray',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
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
      skills: [
        emoji("⚡ Training and Building Machine Learning  Models"),
        emoji("⚡ building Fast APIS using Django & Flask"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "Flask",
          iconifyTag: "logos:flask",
        },
        {
          skillName: "Tensor Flow",
          iconifyTag: "logos:tensorflow",
        },
        {
          skillName: "Pandas",
          iconifyTag: "logos:pandas",
        },
        {
          skillName: "Matplotlib",
          iconifyTag: "logos:matplotlib",
        },
        {
          skillName: "numpy",
          iconifyTag: "logos:numpy",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Data Engineer', //Insert stack or technology you have experience in
    progressPercentage: '70', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Machine Learning', //Insert stack or technology you have experience in
    progressPercentage: '60', //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: 'Algorithm',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
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
    subHeader: 'Baccalaureate Diploma in Technical Science.',
    duration: '2013 - 2014',
    desc: '',
    grade: 'Fairly Good',
    descBullets: [
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Data Integration Trainee',
    company: 'Flextronics Malaysia, Penang',
    companyLogo: '/img/icons/common/flextronics.png',
    date: 'May 2022 – Aug 2022',
    desc: 'I worked as a data integration trainee in my internship at Flextronics Malaysia. To qualify for this role, I took Denodo Developer courses which provided a solid foundation in data virtualization. During my internship, I worked with a team to develop data integration solutions for clients, focusing primarily on ETL processes. I utilized Denodo Virtual DataPort to integrate and transform diverse data sources, ensuring seamless data flow and consistency. My responsibilities included creating virtual models to provide unified views of the data, which were then deployed to the QA environment for testing and validation. Additionally, I designed insightful reports to help clients make data-driven decisions. This experience allowed me to collaborate closely with a data integration team, enhancing my technical skills and teamwork abilities.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'E-TASWeeT blockhain voting',
    desc: 'FYP: NextJs ⚛️ web Application for Election purposes. Uses Blockchain ⛓️ Technology: Solidity & Sepolia Ethereum test net.',
    github: 'https://github.com/AliPray/E-TASWeeT-blockhain-voting.git',
  },
  {
    name: 'Customer Front App',
    desc: 'Built and integrated customer app with a Django server, enabling OAuth2 authentication for user access with time-bound tokens.',
    github: 'https://github.com/AliPray/customer_front_app.git',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Private Client',
    feedback: 'I am extremely pleased with the system delivered by your team. The project was completed on time, communication was excellent throughout, and post-delivery support has been exceptional. Looking forward with you again in the future!',
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
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
  ],
};
