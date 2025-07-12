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
  username: "Umair Ahmad",
  title: "Hi there, I'm Umair",
  subTitle: emoji(
    "An experienced DevOps Engineer 🚀 specialized in AWS cloud services, Terraform IaC, Kubernetes orchestration, and Jenkins/GitHub Actions CI/CD pipelines. Proven track record in automating deployments and optimizing cloud infrastructure for scalability and cost efficiency."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1pOSwshfiq2oG4dLkRMr_yRvsA1ozSMr5/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/UmairAhmadMumtaz",
  linkedin: "https://www.linkedin.com/in/umair-ahmad-mumtaz",
  gmail: "umairahmadmumtaz@gmail.com",
  gitlab: "https://gitlab.com/umairahmad11",
  //facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/20995018/umair-ahmad-mumtaz",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "EXPERIENCED DEVOPS ENGINEER WHO STREAMLINES INFRASTRUCTURE AND AUTOMATES CLOUD OPERATIONS",
  skills: [
    emoji(
      "⚡ Design and implement scalable cloud infrastructure on AWS using Infrastructure as Code (IaC) principles"
    ),
    emoji(
      "⚡ Build robust CI/CD pipelines with Jenkins, GitHub Actions, and AWS CodePipeline for seamless deployment automation"
    ),
    emoji(
      "⚡ Orchestrate containerized applications using Docker and Kubernetes for high availability and scalability"
    ),
    emoji(
      "⚡ Implement comprehensive monitoring solutions with CloudWatch, Grafana, and Zabbix for proactive system management"
    ),
    emoji(
      "⚡ Automate security compliance and patch management across cloud environments following AWS and CIS standards"
    ),
    emoji(
      "⚡ Optimize cloud costs and performance through strategic resource allocation and infrastructure right-sizing"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "ansible",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "nginx",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "monitoring",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "cloud",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "grafana",
      fontAwesomeClassname: "fas fa-chart-bar"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
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
  display: true,
  experience: [
    {
      role: "Devops Engineer",
      company: "Cloudvisor",
      companylogo: require("./assets/images/cloudvisorLogo.png"),
      date: "April 2025 – Present",
      desc: "Leading cloud infrastructure automation and DevOps practices to streamline deployment processes and enhance system reliability across multiple client environments.",
      descBullets: [
        "Utilizing Terraform for infrastructure provisioning, adopting Infrastructure as Code (IaC) principles",
        "Establishing robust CI/CD pipelines through AWS CodePipeline and Jenkins",
        "Implementing automation solutions with Python and Bash scripting",
        "Monitoring system health and performance through AWS CloudWatch and Zabbix",
        "Proficiently managing databases and executing data manipulation tasks",
        "Proactively troubleshooting issues and optimizing resource allocation for cost efficiency"
      ]
    },
    {
      role: "Devops Engineer",
      company: "Systems Limited",
      companylogo: require("./assets/images/systemsLimitedLogo.png"),
      date: "Sept 2022 – April 2025",
      desc: "Orchestrating enterprise-level AWS applications and implementing comprehensive CI/CD solutions while achieving recognition as Employee of the Quarter Q2 2023.",
      descBullets: [
        "Orchestrating enterprise applications on AWS using S3, CloudFront, ECS, ECR, RDS, and Lambda services",
        "Developing CI/CD pipelines leveraging GitHub Actions and Jenkins for automated deployment orchestration",
        "Streamlining operational efficiency by automating repetitive tasks through Jenkins job implementations",
        "Establishing Grafana alerts for AWS infrastructure monitoring with seamless Slack integration",
        "Overseeing production deployments and releases using Jenkins and GitHub Actions workflows",
        "Achieved Employee of the Quarter Q2 2023 and Employee of the Month January 2023"
      ]
    },
    {
      role: "Cloud Infrastructure Engineer",
      company: "GoSaaS Labs",
      companylogo: require("./assets/images/gosaasLabsLogo.png"),
      date: "July 2021 – Sep 2022",
      desc: "Providing strategic project supervision and designing resilient AWS architectures while facilitating cloud migrations and implementing comprehensive security standards.",
      descBullets: [
        "Providing strategic supervision for cloud migration projects and infrastructure modernization initiatives",
        "Collaborating in design and implementation of highly available and resilient AWS architectures",
        "Facilitating application migrations from private cloud infrastructures to AWS Cloud environments",
        "Enforcing AWS and CIS security standards to safeguard cloud environments from threats",
        "Implementing application-level security using AWS Inspector and automated patching processes",
        "Educating employees on security best practices to mitigate potential cyber security threats"
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
      title: "Google Code-In Finalist",
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
  number: "+92-3154995037",
  email_address: "umairahmadmumtaz@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "UmairAhmad039", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
