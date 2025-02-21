import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
    enabled: true,
    animation: splashAnimation,
    duration: 500
};

// Greeting Section
const illustration = {
    animated: true
};

export const greeting = {
    displayGreeting: true,
    username: "Manish Shinde", // For top display as <Manish Shinde/>
    title: "Hi, I'm Manish", // For introduction tile
    briefIntro: `
        Dynamic Software Engineer with over 3 years of experience in backend, cloud, and AI, delivering innovative solutions at AWS, Walmart, and HPE. Enthusiastically advancing Applied AI and Machine Learning breakthroughs throught research while excelling in Software Development.
    `,
    detailedIntro: `
        Manish Shinde is a highly skilled Software Engineer with over 3 years of experience in software development, specializing in backend systems, cloud services, and applied artificial intelligence (AI). He has a proven track record of contributing to impactful projects at top-tier companies such as Amazon Web Services (AWS), Walmart, Hewlett Packard Enterprise (HPE), and a startup VibeSea Inc.

        Currently, Manish is focused on Applied AI research and Software Development, where he is gaining hands-on experience with the latest advancements in AI and machine learning and applications. His expertise spans backend development, frontend development, machine learning engineering, data science, and product management, making him a versatile professional capable of tackling complex technical challenges.

        Throughout his career, Manish has demonstrated a strong ability to design and implement scalable, efficient, and user-centric solutions. His work includes developing automation scripts, building payment APIs, optimizing cloud infrastructure, and creating AI-driven applications. He is passionate about leveraging technology to solve real-world problems and is always eager to explore new tools and methodologies.

        Manish is a PhD Student at the University of Utah. He holds a Master of Science in Computer Science from North Carolina State University and a Bachelor’s in Computer Engineering from the University of Mumbai (VESIT).

        Connect with Manish to explore collaborations, discuss innovative projects, or learn more about his work.
    `,
    resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Social Media Links (unchanged)
const socialMediaLinks = {
    github: "https://github.com/smanishs175",
    linkedin: "https://www.linkedin.com/in/manishshinde175/",
    kaggle: "https://www.kaggle.com/smanishs175",
    gmail: "smanishs175@gmail.com",
    gitlab: "https://gitlab.com/smanishs175",
    facebook: "https://www.facebook.com/manish.shinde.56614",
    medium: "https://medium.com/@smanishs175",
    stackoverflow: "https://stackoverflow.com/users/10183788/manish-shinde?tab=profile",
    display: true
};

// Skills Section (unchanged)
const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
        emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
    ],
    softwareSkills: [
        { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
        { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
        { skillName: "sass", fontAwesomeClassname: "fab fa-sass" },
        { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
        { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
        { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
        { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
        { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
        { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
        { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
        { skillName: "python", fontAwesomeClassname: "fab fa-python" },
        { skillName: "docker", fontAwesomeClassname: "fab fa-docker" }
    ],
    display: true
};

// Education Section (unchanged)
const educationInfo = {
    display: true,
    schools: [
        {
            schoolName: "North Carolina State University",
            logo: require("./assets/images/ncsuLogo.png"),
            subHeader: "Master of Science in Computer Science",
            duration: "August 2021 - Dec 2022",
            desc: "Participated in research and published papers.",
            descBullets: ["Coursework: Software Engineering, Distributed Systems, Algorithms"]
        },
        {
            schoolName: "University of Mumbai (VESIT)",
            logo: require("./assets/images/vesitLogo.png"),
            subHeader: "Bachelor of Engineering in Computer Engineering",
            duration: "July 2017 - May 2021",
            desc: "Ranked top 10% in the program.",
            descBullets: ["Relevant coursework: Operating Systems, Web Development"]
        }
    ]
};

// Tech Stack Section (unchanged)
const techStack = {
    viewSkillBars: true,
    experience: [
        { Stack: "Frontend/Design", progressPercentage: "90%" },
        { Stack: "Backend", progressPercentage: "90%" },
        { Stack: "Programming", progressPercentage: "90%" }
    ],
    displayCodersrank: false
};

// Work Experience Section (unchanged)
const workExperiences = {
    display: true,
    experience: [
        {
            role: "Software Engineer",
            company: "VibeSea Inc",
            companylogo: require("./assets/images/vibeseaLogo.png"),
            date: "Mar 2024 – Present",
            desc: "Leading development of scalable web and mobile applications.",
            descBullets: ["Tech stack: TypeScript, React Native, Node.js, AWS"]
        },
        {
            role: "Software Development Engineer",
            company: "Amazon Web Services",
            companylogo: require("./assets/images/awsLogo.png"),
            date: "Jul 2023 – Feb 2024",
            desc: "Automated EC2 VPC API database management.",
            descBullets: ["Tools: Python, Ruby on Rails, Jenkins, AWS CodePipeline"]
        }
    ]
};

// Open Source Section (unchanged)
const openSource = {
    showGithubProfile: "true",
    display: true
};

// Big Projects Section (unchanged)
const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
        {
            image: require("./assets/images/project1.png"),
            projectName: "Project One",
            projectDesc: "Description of project one.",
            footerLink: [{ name: "Visit Website", url: "http://example.com/" }]
        }
    ],
    display: true
};

// Achievement Section (unchanged)
const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",
    achievementsCards: [
        {
            title: "Certification 1",
            subtitle: "Description of certification 1.",
            image: require("./assets/images/cert1.png"),
            footerLink: [{ name: "Certification", url: "http://example.com/" }]
        }
    ],
    display: true
};

// Blogs Section (unchanged)
const blogSection = {
    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "true",
    blogs: [
        {
            url: "https://medium.com/@smanishs175",
            title: "Blog Title 1",
            description: "Blog description 1"
        }
    ],
    display: true
};

// Talks Section (unchanged)
const talkSection = {
    title: "TALKS",
    subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
    talks: [
        {
            title: "Talk Title",
            subtitle: "Talk Subtitle",
            slides_url: "http://example.com/",
            event_url: "http://example.com/"
        }
    ],
    display: true
};

// Podcast Section (unchanged)
const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
    podcast: ["http://example.com/"],
    display: true
};

// Resume Section (unchanged)
const resumeSection = {
    title: "Resume",
    subtitle: "Feel free to download my resume",
    display: true
};

// Contact Info (unchanged)
const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+1-341-500-2325",
    email_address: "smanishs175@gmail.com"
};

// Twitter Section (unchanged)
const twitterDetails = {
    userName: "twitter",
    display: true
};

const isHireable = true;

export {
    illustration,
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