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
  username: "Ziyue Zhu",
  title: "Hi！ I'm Ziyue",
  subTitle: emoji(
    "Results-driven marketing specialist passionate about crafting strategies that connect, engage, and convert. Skilled in SEO, social media, and data-led campaigns. 📊💡"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Marketing strategies built on insight, creativity, and data 📈",
  skills: [
    emoji("⚡ SEO strategy, keyword research, and on-page optimization"),
    emoji("⚡ Social media content planning and cross-platform management"),
    emoji("⚡ Email marketing (Mailchimp), newsletter design & A/B testing"),
    emoji("⚡ Google Analytics & Search Console for campaign evaluation"),
    emoji("⚡ Content creation using Canva, Notion, and AI tools")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Google Analytics",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Google Sheets",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fas fa-pencil-ruler"
    },
    {
      skillName: "Salesforce",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Mailchimp",
      fontAwesomeClassname: "fas fa-envelope"
    },
    {
      skillName: "Instagram",
      fontAwesomeClassname: "fab fa-instagram"
    },
    {
      skillName: "Canva",
      fontAwesomeClassname: "fas fa-paint-brush"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Boston University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Journalism",
      duration: "September 2023 - May 2025",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "University of Nottingham",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Arts with Honours in International Studies",
      duration: "September 2019 - April 2023",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Marketing Manager",
      company: "Modex",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Sep 2020 – June 2023",
      descBullets: [
        "Collaborated with model and operation teams to develop and execute multi-channel marketing strategies, managing project lifecycles from initial planning through performance optimization",
        "Coordinated partnership initiatives with major brands (Peacebird, Boy London), managing relationship development, contract negotiations, and collaborative promotional activities to increase market visibility",
        "Supervised creation of 30+ marketing materials and brand communications, ensuring consistency with brand standards while achieving 20M+ cumulative reach and 640K+ engagements",
        "Monitored campaign effectiveness through analytics platforms, preparing comprehensive performance reports for leadership and adjusting strategies based on market response data"
      ]
    },
    {
      role: "Event Coordinator",
      company: "Nottingham Alumni Association",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Sep 2020 – June 2022",
      descBullets: [
        "Coordinated large-scale events including Alumni Homecoming and Alumni Wedding from concept to completion, managing logistics, vendor coordination, and attendee experience for 1000+ participants",
        "Secured corporate sponsorships generating 4000+ RMB in event funding, negotiated vendor contracts, and established partnerships with local businesses for exclusive alumni discount programs",
        "Facilitated cross-department communication and collaboration with university administration, students, alumni network, and PR teams to ensure seamless event execution"
      ]
    },
    {
      role: "Digital Marketing Intern",
      company: "Ruder Finn",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "June 2021 – Sep 2021",
      descBullets: [
        "Coordinated marketing proposal development for high-profile client engagements including China International Import Expo, supporting account teams with research and presentation preparation",
        "Conducted comprehensive competitive analysis and market research projects, collaborating with senior strategists to develop client positioning strategies and campaign recommendations",
        "Assisted with project management tasks including content calendar coordination and campaign execution support, maintaining client communication records and preparing presentation materials"
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

// Some big projects you have worked on

const bigProjects = {
  title: "Project",
  subtitle: "A weekly newsletter by myself",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Pink World",
      projectDesc: "A weekly newsletter focus on women empowerment",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mailchi.mp/752dcc397dbe/pink-world"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Ana",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection,
  bigProjects,
  blogSection,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  isHireable,
  openSource,
  podcastSection,
  resumeSection,
  skillsSection,
  socialMediaLinks,
  splashScreen,
  talkSection,
  techStack,
  twitterDetails,
  workExperiences
};
