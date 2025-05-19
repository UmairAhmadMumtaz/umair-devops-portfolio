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
  username: "Aditya Jadhav",
  title: "Hi, I'm Aditya",
  subTitle: emoji(
    "A passionate 🚀 Mechatronics Engineering student blending control theory, embedded systems, and CAD to build real-world solutions—from underwater sensing to electric vehicle cooling systems."
  ),
  resumeLink:
    "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-globalnav-goto", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jadhavaditya738",
  linkedin: "https://www.linkedin.com/in/adityapravinjadhav",
  gmail: "adityapravin.jadhav@study.thws.de",
  gitlab: "https://gitlab.com/jadhavaditya738-group",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "As a Mechatronics student, I work across mechanical, electrical, and software domains to develop integrated systems",
  skills: [
    emoji(
      "⚡  Experience in embedded systems development using ATmega2560, BNO055 IMU, turbidity, and ultrasonic sensors"
    ),
    emoji(
      "⚡Skilled in MATLAB, Simulink, Autodesk Inventor, Altium Designer, and Pyleecan for simulations and system design"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "Simulink",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Altium Designer",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Autodesk Inventor",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Pyleecan",
      fontAwesomeClassname: "fas fa-magnet"
    },
    {
      skillName: "Word",
      fontAwesomeClassname: "fas fa-file-word"
    },

    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Technische Hochschule Würzburg-Schweinfurt",
      logo: require("./assets/images/thws1.png"),
      subHeader: "Bachelor's of Engineering in Mechatronics",
      duration: "October 2022 - Present",
      desc: "In my sixth semester with the following specializations",
      descBullets: [
        "Automation and Robotics",
        "Electric Drives and Power electronics"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "3D CAD", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Electronics",
      progressPercentage: "70%"
    },
    {
      Stack: "Matlab coding",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I HAVE DONE THROUGHOUT MY COURSE",
  projects: [
    {
      image: require("./assets/images/detection.png"),
      projectName: "Detection of Seafloor Contact",
      projectDesc:
        "Is an integrated project with Leibniz-Institut für Ostseeforschung Warnemünde (IOW)",
      footerLink: [
        {
          name: "More details",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ball.png"),
      projectName: "Ball on a beam",
      projectDesc:
        "Balancing Ball on Beam system using Lagrange's equations and linearizing it with MATLAB Simulink ",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Member E-technik",
      company: "MainFranken Racing",
      companylogo: require("./assets/images/MFF.jpg"),
      date: "October 2024 – Present",
      desc: "I have been a part of this team for over 8 months, gaining hands-on experience in how a Formula Student race car is designed, built, and functions. ",
      descBullets: [
        "Designed a cooling system for the accumulator container by creating CAD models for intake and exhaust ducts with latches, ensuring optimal thermal management to prevent overheating during race conditions.",
        "Developed the CAD model of the steering wheel and integrated it into the complete car assembly, ensuring accurate fit and functionality within the vehicle model."
      ]
    },
    {
      role: "Engineering Intern",
      company: "Alkem Laboratories Ltd.",
      companylogo: require("./assets/images/alkem.jpg"),
      date: "Jun 2022 – July 2022",
      descBullets: [
        "Studied the working of Capsule filling, Strip packing, Induction packing and Glatt coating machines which are many used in the production of medical technology.",
        "Assessed the team with assembly, maintenance and repair of machinery.",
        "Tested the efficiency of a Variable frequency drive (VFD) through measuring the input-output powers across the VFD and the motor, evaluated its performance across various load conditions and the rotor speed to ensure optimal frequency."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),

  achievementsCards: [  
    {
      title: "Ford EV Engineering Job Simulation on Forage ",
      subtitle:
        "Reviewing battery testing protocols, Comparing battery performance, Build a ROS package, Integrate ROS components",
      image: require("./assets/images/ford.jpg"),
      imageAlt: "Ford",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1jE5zjoqOyOm7pqqDv3HbG51t1hB4QzsM/view?usp=sharing"
        },
          
      ]
    },
    {
      title: "Programming in C++",
      subtitle:
        "Participation in a lecture of the “Virtuelle Hochschule Bayern” (vhb) at the Deggendorf Institute of Technology (DIT) and passed the exam",
      image: require("./assets/images/DIT.webp"),
      imageAlt: "Programming in C++",
      footerLink: [
        {
          name: "Programming in C++",
          url: "https://drive.google.com/file/d/1NEdNJF6jrQkZWg94YkEYbWU53esYBs35/view?usp=sharing"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  number: "+49 1784609706",
  email_address: "adityapravin.jadhav@study.thws.de"

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
