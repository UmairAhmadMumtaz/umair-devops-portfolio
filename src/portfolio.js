/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tanuj Vishnoi",
  title: "Hi All, I'm Tanuj Vishnoi",
  subTitle: emoji(
    "I am a Full Stack QA Engineer with expertise in designing scalable test architectures, building automation frameworks, and performing comprehensive testing across frontend, backend, APIs, and databases. I actively contribute to Agile development processes, ensuring continuous quality through every stage of the software development lifecycle."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1rgXDmLw_cxquipvbdrvTvVOvbWyoNXBAdPHXgvHwy5I/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tanuj-vishnoi",
  linkedin: "https://www.linkedin.com/in/tanuj-vishnoi-4976568a/",
  gmail: "tanuj.vishnoi@gmail.com",
  facebook: "https://www.facebook.com/tanuj.vishnoi.7",
  stackoverflow: "https://stackoverflow.com/users/4378647/tanuj-vishnoi",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I’m an out-of-the-box thinker who ensures the product is built right, focusing on quality, usability, and long-term reliability.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end & Back end automated testing solutions for your web, desktop, api and mobile applications"
    ),
    emoji("⚡ Expertise in micro service architecture application testing"),
    emoji("⚡ Any time testing by introducing test process in CI/CD")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "webdriverio",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "playwright",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "salesforce",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "fa-thin fa-typewriter"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fa-brands fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "postman",
      fontAwesomeClassname: "fas fa-signs-post"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "restassured",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Birla institue of applied science",
      logo: require("./assets/images/birla-logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "June 2011 - June 2014",
      descBullets: [
        "Developed the university student and mess management system",
        "Participated in college hackathons"
      ]
    },
    {
      schoolName: "Kumaon University",
      logo: require("./assets/images/Kumaun_University_logo.png"),
      subHeader: "Bachelor of Science",
      duration: "June 2009 - June 2011",
      desc: "Ranked top 5% in the program. Studied Maths, Physics and chemistry",
      descBullets: ["Amongest top 3 students in the class"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web UI Automation", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Testing & Automation",
      progressPercentage: "100%"
    },
    {
      Stack: "Mobile APP Testing & Automation",
      progressPercentage: "100%"
    },
    {
      Stack: "CI/CD",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Automation Engineer",
      company: "Bullhorn",
      companylogo: require("./assets/images/bull.png"),
      date: "July 2022 – Present",
      desc: "Working as full stack qa and collaborating with different teams for functional, automation, and non-functional testing",
      descBullets: [
        "Develop automation solutions tailored to each testing level, enhancing coverage and reducing release time.",
        "Manage DevOps tasks, automating the configuration of test environments for smooth deployment and integration"
      ]
    },
    {
      role: "Test Specialist",
      company: "Accenture",
      companylogo: require("./assets/images/accenture.png"),
      date: "Sep 2021 – June 2022",
      desc: "Develop distributable automation frameworks for microservices and E2E testing, enhancing efficiency of testing team",
      descBullets: [
        "Utilize mocking and stubbing for isolated UI testing, ensuring independent validation of components",
        "Conduct automated testing of Android apps using Appium, ensuring reliable behavior across devices"
      ]
    },
    {
      role: "Senior Lead Test Automation",
      company: "QualiTest",
      companylogo: require("./assets/images/qualitest.jpeg"),
      date: "June 2014 – July 2022",
      desc: "Lead testing efforts and supervise AQA team members across various project modules.",
      descBullets: [
        "Mentor fresher and mid-level QA engineers, guiding testing practices and methodologies",
        "Design test automation frameworks for ecommerce, elearning and cms applications"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ISQTB Foundation Level",
      subtitle:
        "It's fundamental knowledge of software testing principles, terminology, and concepts ",
      image: require("./assets/images/istqb-ctfl-4-logo.jpg"),
      imageAlt: "ISTQB Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1fksqZJCRBHV3hFjnrOsCbFLKIEVQVtkk/view?usp=sharing"
        }
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Certified aws foundation level engineer having basic knowelege of most of the aws services",
      image: require("./assets/images/aws_prac_.png"),
      imageAlt: "AWS logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.credly.com/badges/ee466142-99a0-4dc6-85f1-c3a80b62cd77/public_url"
        }
      ]
    },
    {
      title: "AWS Partner: Technical Accredited",
      subtitle:
        "AWS Partners who have developed fundamental, technical knowledge of AWS cloud computing, global infrastructure, services, solutions, migration and security.",
      image: require("./assets/images/aws_prac_.png"),
      imageAlt: "AWS Partner Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/35fac17d-16cd-4ba5-8021-49bf0516c759/public_url"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "I love to share knowledge as a instructor & colleague",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.youtube.com/watch?v=r9eR4QY5WUI&t=17s",
      title: "QA instructor",
      description:
        "Test Automation session delivered as part of the qualitest instructor"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+31-684564776",
  email_address: "tanuj.vishnoi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
