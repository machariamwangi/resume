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
    "https://drive.google.com/file/d/1HM1lg1Il6GOwtI-PrL5TkKKuZnzWti7m/view?usp=sharing",
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
      title: "Frontend  Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using Javascript, React, bootstrap,Material-Ui, Antd design",
        "⚡ Creating application backend in Node, Express & Java Spring-Boot",
        "⚡ Creating the flow of application functionalities to optimize user experience"
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
    "I have worked with many evolving startups as  Developer",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Frontend Engineer",
          company: "Binary Limited",
          company_url: "https://binary.co.ke",
          // logo_path: "binary.png",
          duration: "October 2019 - PRESENT",
          location: "Nairobi, kenya",
          description:
            "I am working on Frontend web development on Financial and Banking products. The projects involve Developing Applications and website that server as payment tool to business in kenya,Africa and over-seas. I am currently working on Core Banking application, Final stage. Our goal is to make payment systems, streaming services and advertisement systems",
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
            "I have worked on Company websites, design Magazines for the company and Recording Keep for the financial activities of the company",
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
          // duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC Taita Taveta University",
          company_url:
            "https://www.meetup.com/DSC-TTU/",
          logo_path: "dsc_logo.png",
          duration: "Sept 2015 - April 2019",
          location: "Voi, Kenya",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Frontend Web Developers projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React-js",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Nairobi 1976- 00101",
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
