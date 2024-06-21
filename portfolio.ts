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
    'https://drive.google.com/file/d/1Md5Ttxy967sU4W3hbHtIejWwkommK6A_/view?usp=sharing',
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
  subTitle: 'Machine Learning, Data Engineering, Backend, Web-Scrapping',
  data: [
    {
      title: 'Python Developer',
      lottieAnimationFile: '/lottie/skills/data_engineer.json', // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Training and Building Machine Learning  Models"),
        emoji("⚡ ETL Operations & Data cleaning"),
        emoji("⚡ Web-Scrapping Data from the Internet"),
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
          skillName: "Docker",
          iconifyTag: "vscode-icons:file-type-docker",
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
      'Final year Project: Blockchain-based Election Web-App.',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Data Integration Trainee',
    company: 'Flextronics Malaysia, Penang',
    companyLogo: '/img/icons/common/flextronics.png',
    date: 'May 2022 – Aug 2022',
    desc: 'Took Denodo Developer courses as a qualification. Worked with a team to develop data integration solutions for clients (ETL). Data integration using Denodo Virtual data port. Connecting and transforming diverse data sources. Creating virtual models for unified views. Deploy virtual models to QA environment. Designing insightful reports. Collaborating with a data integration team..',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'ML & Data Engineer ',
    company: 'IT GEEKS Consultancy, Tunisia (Remote)',
    companyLogo: '',
    date: 'Jan 2024 – Present',
    desc: 'I work as an ML & Data Engineer in IT GEEKS Consultancy. I implement machine learning models using TensorFlow and Keras for anomaly detection in manufacturing plants (In Progress). I develop both desktop apps for offline edge devices and web API-based apps for local network users. I create Python software to efficiently process and transform large CSV datasets. I optimize for accuracy and performance, tailor solutions to client requirements, and provide comprehensive documentation and support. I employ web scraping techniques to extract data from various booking service websites. ',
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
    github: 'https://github.com/AliPray/E-TASweeT-Bockchain-Voting.git',
  },
  {
    name: 'Customer-Front-App',
    desc: 'Built and integrated customer app with a Django server, enabling OAuth2 authentication for user access with time-bound tokens.',
    github: 'https://github.com/AliPray/customer_front_app.git',
  },
  {
    name: 'Edge-Detection-Image-Processing',
    desc: 'explore various edge detection techniques in image processing. The primary objective is to apply different edge detection filters on an image and observe the results.',
    github: 'https://github.com/AliPray/Edge-Detection-Image-Processing.git',
  },
  {
    name: 'Object-Detection-template-sub-image',
    desc: 'captures a template object image and then detects and compares this object in test images. The detection is based on contour analysis and corner detection.',
    github: 'https://github.com/AliPray/Object-Detection-template-sub-image.git',
  },
  {
    name: 'Depression-Prediction-Bayes-Naive',
    desc: 'developing a Naive Bayes model from scratch to predict the presence of depression based on emotion inputs.',
    github: 'https://github.com/AliPray/Depression-Prediction-Bayes-Naive.git',
  },
  {
    name: 'Neural-Network-Fashion-Mnist',
    desc: 'Machine Learning Models Trained on Fashion-MNIST Dataset. Single-Layer & Multilayer Model',
    github: 'https://github.com/AliPray/Neural-Network-Fashion-Mnist.git',
  },
  {
    name: 'Web-Scrapping-Booking.com',
    desc: 'Web Scrapping Booking.com (Static), Dynamic => (In Progress...)',
    github: 'https://github.com/AliPray/Web-Scrapping-Booking.com.git',
  },
  {
    name: 'Django-e-commerce-project',
    desc: 'Building a Django E-Commerce Website (In Progress...)',
    github: 'https://github.com/AliPray/Django-e-commerce-project.git',
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
