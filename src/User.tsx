import { IconBrandGithub, IconBrandInstagram, IconBrandYoutube, IconBrandFacebook, IconBrandX } from "@tabler/icons-react";


const Info = {
    name: "Amna Qasmi",
    stack: ['Web Developer', 'Freelancer', 'Front-End Developer', "Web App Developer"],
    bio: "I'm a passionate web developer specializing in crafting efficient, scalable, and fast websites. I deliver top-notch applications and provide freelance services that exceed client expectations. I help startups attract clients, boost their businesses, and gain more customers through highly convertible and responsive websites that help scale their operations. Let's connect and create something amazing together!"
}

const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
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
        title: "Ekart E-comm App",
        desc: "Ekart is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Heroicons, and HeadlessUI, offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Ekart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
        image: "Ekart.png",
        live: true,
        technologies: ["React", "Tailwind", "Redux", "Heroicons", "HeadlessUI"],
        link: "https://code-mars.github.io/Ekart/",
        github: "https://github.com/Code-Mars/Ekart/"
    },
    {
        title: "Spotify Clone",
        desc: "Spotify Clone is a full-stack web application that replicates the core features of Spotify, including user authentication, music playback, and playlist creation. The front end is built with React, TailwindCSS, Heroicons, and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, search for songs, and create playlists. The app features real-time updates, so users can see new songs as they are added. Spotify Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Spotify.png",
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Tabler-Icons", "MongoDB", "Firebase"],
        link: "https://github.com/Code-Mars/Spotify-Clone",
        github: "https://github.com/Code-Mars/Spotify-Clone"
    },
    {
        title: "Travel Tracker",
        desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
        image: "Travel.png",
        live: false,
        technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
        link: "https://github.com/Code-Mars/Travel-Tracker",
        github: "https://github.com/Code-Mars/Travel-Tracker"
    },
    {
        title: "Instagram Clone",
        desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Instagram.png",
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Heroicons", "Firebase", "MongoDB"],
        link: "https://github.com/Code-Mars/Instagram-Clone",
        github: "https://github.com/Code-Mars/Instagram-Clone"
    },
    {
        title: "CodeX Code Editor",
        desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, offering a seamless coding experience across all devices. It features syntax highlighting for popular programming languages, including HTML, CSS, JavaScript, Python, and Java. Users can create, edit, and save code files, with the option to download them as text files. CodeX combines robust functionality with a sleek, intuitive design, making coding effortless and enjoyable.",
        image: "CodeX.png",
        live: false,
        technologies: ["React", "Tailwind", "Ace Editor"],
        link: "https://github.com/Code-Mars/CodeX",
        github: "https://github.com/Code-Mars/CodeX"
    }
]

const socialLinks = [
    { link: "https://github.com/AmnaQasmi", icon: IconBrandGithub },
    { link: "https://www.instagram.com/amnaaltaf360", icon: IconBrandInstagram },
    { link: "https://www.facebook.com/profile.php?id=61564648795671", icon: IconBrandFacebook }, 
    { link: "https://www.youtube.com/@CodeG.KwithAmna", icon: IconBrandYoutube },
    { link: "x.com/AmnaQasmi360", icon: IconBrandX }
];



export { Info, ProjectInfo, skillInfo, ExperienceInfo, Slugs, socialLinks }