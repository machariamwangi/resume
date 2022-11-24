/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Elijah Macharia",
  logo_name: "Elijah Mwangi",
  nickname: "MachariaMwangi",
  subTitle:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1e9RnjnTKeM3EOG6rrfXv2rCcabenQFFE/view?usp=sharing",
  portfolio_repository: "https://github.com/machariamwangi",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/machariamwangi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/elijah-mwangi-531943121/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:elijahmacharia54@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ElimaxMachez",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100009542643009",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/elimaxmwangi/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Backend  Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building applications (Backend ) using .NET CORE, C#, ASP.NET,OData, ADO.NET",
        "⚡ Writing  Unit Tests and Integration Tests using XUnit, NUnit and Serenium",
        "⚡ Developing  and maintaining  documentation related to software processes and systems,     including requirements and design documentation on Jira.",
      ],
      softwareSkills: [
        {
          skillName: ".NET",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#003B57",
          },
        },
        {
          skillName: "JQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769AD",
          },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: {
            color: "#FF6600",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Kibana",
          fontAwesomeClassname: "simple-icons:kibana",
          style: {
            backgroundColor: "transparent",
            color: "#005571",
          },
        },
        {
          skillName: "Swagger",
          fontAwesomeClassname: "simple-icons:swagger",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "OpenID",
          fontAwesomeClassname: "simple-icons:openid",
          style: {
            color: "#F78C40",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Frontend  Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using Javascript, React, bootstrap,Material-Ui, Antd design",
        "⚡ Creating application backend in Node, Express & Java Spring-Boot",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups and developed companie as a Developer",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "DOTNET Developer",
          company: "Stöbich Holding GmbH",
          company_url: "https://www.stoebich.com/en/",
          // logo_path: "binary.png",
          duration: "June 2021 - PRESENT",
          location: "Goslar, Germany",
          description:
            "I am working as .NET Developer on Fire protection solutions. The projects involves developing Applications and website that serve as fire mitigation tool to business in Germany  and over-seas. I am currently working on Machine Learning (ML.NET) application, Final stage. Our goal is to analyse data, run machine learning pipelines to detect incidents of fire and smoke before they happen ",
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company: "Kamsware LTD",
          company_url: "http://kamsware.com/",
          // logo_path: "binary.png",
          duration: "February 2021 - May 2021",
          location: "Nairobi, Kenya",
          description:
            "I worked On different applications  Such as Rapid Response system, Kamsware Distribution system, Company Website, Taxi hailing app. I also Developed new and customization of existing features for high-volume single page application (.NET Core, ASP.NET and LINQ) ,Conducted  requirements gathering and validation as a part of collaboration for critical single page application that helped to address important UI/UX parts of system's user interface before active phase of development and • Introduced automation tools, including Jira and CircleCI that reduced redundancy by 50% and enhance workflow by 20% ",
          color: "#0879bf",
        },
        {
          title: "Frontend Developer",
          company: "Jambo Pay Ltd",
          company_url: "https://jambopay.com",
          // logo_path: "binary.png",
          duration: "October 2020 - January 2021",
          location: "Nairobi, Kenya",
          description:
            "I worked  as a React Frontend Developer on payment systems, Management systems, Card based systems and systems integrations. I actively participated the Nairobi(Capital City of Kenya) Revenue collection System. This was a 4 mmonths contract where we finished the project , deployed and  it's still on Operation. We also worked on the new Jambopay Portal that included all payments plans for the Company ",
          color: "#0879bf",
        },
        {
          title: "Frontend Engineer",
          company: "Binary Limited",
          company_url: "https://binary.co.ke",
          // logo_path: "binary.png",
          duration: "October 2019 - October 2020",
          location: "Nairobi, kenya",
          description:
            "I Worked  as  Frontend web development on Financial and Banking products. The projects involved Developing Applications and website that serve as payment tool to business in kenya,Africa and over-seas. I worked  on Core Banking application, Bonfire Adventure Holiday application, Internet Banking , Waterfall, Alpha Hr Management system, Mifos Core banking. Final stage. Our goal was to make payment systems, streaming services and advertisement systems",
          color: "#0879bf",
        },
        {
          title: "Assistant Web Developer",
          company: "Banking and Machine Services(BMSK)",
          company_url: "http://bmsk.co.ke/",
          // logo_path: "muffito_logo.png",
          duration: "Jully 2019 - September 2019",
          location: "Nairobi, Kenya",
          description:
            "Worked as an assistant web Developer, where we developed various websites and applications for the company use",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "ICT Intern",
          company: "Safety-plus consulting Ltd.",
          company_url: "https://safetyplus.co.ke/",
          // logo_path: "delhivery_logo.png",
          duration: "April 2019 - June 2019",
          location: "Rongai, Kenya",
          description:
            "I worked on Company websites, design Magazines for the company and Recording Keeping system for the financial activities of the company",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2018 - May 2019",
          location: "Voi, Taita Taveta, kenya",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC Taita Taveta University",
          company_url: "https://www.meetup.com/DSC-TTU/",
          logo_path: "dsc_logo.png",
          duration: "Sept 2015 - April 2019",
          location: "Voi, Kenya",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to Develope Backend solutions/Applications,  Frontend-end UIs  and deploy them as web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with .NET CORE, C#, ASP.NET, Microservices and Monolith architecture, AMQP(Advance Messaging Queue Protocals such as ( MQTT, RabbitMQ) , Jira ,Angular and React-js",
  },
  addressSection: {
    title: "Address",
    subtitle: "Nairobi 1976- 00101",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+254 711281280",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  // degrees,
  // certifications,
  experience,
  projectsHeader,
  contactPageData,
};
