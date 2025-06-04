import { IconBrandGithub, IconBrandInstagram, IconBrandYoutube, IconBrandFacebook, IconBrandX } from "@tabler/icons-react";


const Info = {
    name: "Amna Qasmi",
    stack: ['UI/UX Designer', 'Freelancer', 'Front-End Developer', "Website Developer"],
    bio: "I'm a passionate web developer specializing in crafting efficient, scalable, and fast websites. I deliver top-notch applications and provide freelance services that exceed client expectations. I help startups attract clients, boost their businesses, and gain more customers through highly convertible and responsive websites that help scale their operations. Let's connect and create something amazing together!"
}

 
const Slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const skillInfo = [
    {
        title: "Front-End",
        skills: ["HTML", "CSS", "Next JS", "JavaScript", "React JS", "Redux", "Tailwind CSS", "Shadcn UI", "Bootstrap", "Mantine UI", "Sanity"]
    },
    {
        title: "Back-End",
        skills: ["Node JS"]
    },
    {
        title: "Languages",
        skills: ["Python", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Github", "VS Code", "ThunderClient"]
    }
]

const ExperienceInfo = [{
    role: "Skills Learner",
    company: "PIAIC",
    date: "Oct 2023 - Q1, Q2 Completed",
    desc: "I utilized my skills in JavaScript, TypeScript, and React.js to develop and optimize applications using Next.js, which enhanced website performance and loading speeds. I also improved database performance with Sanity, ensuring greater data reliability and application scalability.",
    skills: ["Next JS", "Javascript", "React JS", "Typescript", "Node Js", "Web Development"],
    field: "Certified Cloud Applied Generative AI Engineer"
},
{
    role: "Web-Developer",
    company: "PIAIC",
    date: "Aug 2024 - Q3 Present",
    desc: "I expanded my skill set by learning Python for scripting and automation, and explored Docker and DockerHub for containerizing applications to ensure consistent environments across development and production. I also delved into creating Custom GPTs for advanced AI-driven solutions and used Zapier to automate workflows, integrating multiple services seamlessly.",
    skills: ["Python", "Docker", "DockerHub", "Custom GPTs", "Zapier"],
    field: "Certified Cloud Applied Generative AI Engineer"
}
]

const ProjectInfo = [
    {
        title: "VMOTOR E-comm App",
        desc: "VMOTOR is a modern, fully responsive e-commerce platform built using Next.js, TailwindCSS, ReactIcons, and Sanity as a HeadlessCMS, offering a seamless shopping experience across all devices. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. VMOTOR combines functionality of stripe for payment Gateway, making online shopping and full of ease.",
        image: "VMOTOR.png",
        live: true,
        technologies: ["Next.Js", "Tailwind", "Redux", "Heroicons", "HeadlessCMS", "Stripe", "React-Redux Toolkit"],
        link: "https://v-motor.vercel.app/",
        github: "https://github.com/AmnaQasmi/next18-deploy"
    },
    {
        title: "Casino Roulette Game",
        desc: "Casino Royal Roulette Game is an immersive online casino experience built using React, TailwindCSS, and Firebase. It features a realistic roulette wheel, user authentication, and real-time betting functionality.🎰 Casino Royale - Roulette Game 🎰 Enjoy the thrill of a Roulette Game with smooth animations and interactive betting. Inspired by Casino Royale, this project brings a real casino vibe to your screen. 🔹 Features: ✔️ Real-time betting system ✔️ Dynamic UI & animations ✔️ Easy-to-play mechanics 📺 Watch the tutorial: Code G.K with Amna YOUTUBE .",
        image: "Casino Royal Roulette.png",
        live: false,
        technologies: ["React", "Tailwind", "Redux", "Heroicons", "HeadlessUI"],
        link: "https://youtu.be/nJpL48J9Exg?si=Tk4LBnlh94ivDIqy",
        github:"https://github.com/AmnaQasmi/ROULETTE_by_Casino-Royal"
    },
    {
        title: "Spotify Clone",
        desc: "Spotify Clone is a full-stack web application that replicates the core features of Spotify, including user authentication, music playback, and playlist creation. The front end is built with React, TailwindCSS, Heroicons, and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, search for songs, and create playlists. The app features real-time updates, so users can see new songs as they are added. Spotify Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Spotify.png",
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Tabler-Icons", "MongoDB", "Firebase"],
        link: null,
        github:null
    },
    {
        title: "Facebook Clone",
        desc: "Facebook Clone is a full-stack web application that replicates the core features of Facebook, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Facebook Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Facebook.png",
        live: false,
        technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
        link: "https://www.facebook.com/profile.php?id=61564648795671",
        github:null
    },
    {
        title: "Instagram Clone",
        desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Instagram.png",
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Heroicons", "Firebase", "MongoDB"],
        link: "https://www.instagram.com/amnaaltaf360",
        github:null
    },
    {
        title: "Twitter X",
        desc: "Twitter X ek modern, fully responsive social media platform hai jo React aur Tailwind CSS par based hai. Ye platform users ko real-time mein posts create, edit, aur share karne ki suvidha deta hai. Users apne thoughts, images, aur videos ko tweets ke roop mein share kar sakte hain, dusre users ke tweets ko like, comment, aur retweet kar sakte hain. Platform mein live updates, notifications, aur trending topics jaise features shamil hain, jo ek engaging aur seamless experience provide karte hain. Twitter X sleek design ke saath performance-oriented hai, jismein security aur scalability bhi ensured hai, making it an ideal platform for connecting with friends, following influencers, aur latest news se updated rehne ke liye.",
        image: "twitterX.png",
        live: true,
        technologies: ["React", "Tailwind", "Ace Editor"],
        link: "https://x.com/AmnaQasmi360",
        github:null
    }
]

const socialLinks = [
    { link: "https://github.com/AmnaQasmi", icon: IconBrandGithub },
    { link: "https://www.instagram.com/amnaaltaf360", icon: IconBrandInstagram },
    { link: "https://www.facebook.com/profile.php?id=61564648795671", icon: IconBrandFacebook }, 
    { link: "https://www.youtube.com/@CodeG.KwithAmna", icon: IconBrandYoutube },
    { link: "https://x.com/AmnaQasmi360", icon: IconBrandX }
];



export { Info, ProjectInfo, skillInfo, ExperienceInfo, Slugs, socialLinks }