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
        skills: ["HTML", "CSS", "Next JS", "JavaScript", "React JS", "Redux", "Tailwind CSS", "Shadcnui", "Bootstrap", "Mantine UI", "Sanity", "Lucide-React", "Heroicons", "HeadlessUI", "FullCalendar.js"]
    },
    {
        title: "Back-End",
        skills: ["Node JS", "Firebase", "Supabase", "Stripe"]
    },
    {
        title: "Languages",
        skills: ["Python", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Figma", "Github", "VS Code", "ThunderClient", "CursorAI", "Bolt.New", "Openrouter.ai", "Zapier", "Custom GPTs", "Hostinger|Horizons", "Base44"]
    }
]

const ExperienceInfo = [{
    role: "Skills Learner",
    company: "PIAIC",
    date: "Oct 2023 - Q1, Q2, Q3, Q5 Completed",
    desc: "I utilized my skills in JavaScript, TypeScript, and React.js to develop and optimize applications using Next.js, which enhanced website performance and loading speeds. I also improved database performance with Sanity, ensuring greater data reliability and application scalability.",
    skills: ["Next JS", "Javascript", "React JS", "Typescript", "Node Js", "Web Development"],
    field: "Certified Cloud Applied Generative AI Engineer"
},
{
    role: "Web-Developer",
    company: "PIAIC",
    date: "Aug 2025 - Q5 Present",
    desc: "I expanded my skill set by learning Python for scripting and automation, and explored Docker and DockerHub for containerizing applications to ensure consistent environments across development and production. I also delved into creating Custom GPTs for advanced AI-driven solutions and used Zapier to automate workflows, integrating multiple services seamlessly.",
    skills: ["Python", "Docker", "DockerHub", "Custom GPTs", "Zapier"],
    field: "Certified Cloud Applied Generative AI Engineer"
}
]

const ProjectInfo = [
    {
        title: "Client-Website SheikhSahabBarberPoint ",
        desc: "This project is a client-side web application that provides a seamless booking experience for a barber shop. It allows users to schedule appointments, view services, and manage their bookings. The application is built using Next.js, Node.js, and Netlify, and features a clean, modern design with a focus on user experience. The project includes a booking system, a service catalog, and a user dashboard, all of which are designed to provide a smooth and efficient booking process.",
        image: "SSbarberpoint.png",
        live: true,
        technologies: ["Next.js", "Node.js", "Netlify", "Tailwind-Css", "CookiesPolicy", "Bolt.New"],
        link: "https://sheikhsahabbarberpoint.netlify.app/",
        github: "https://github.com/AmnaQasmi/SheikhSahabBarberPoint"
    },
    {
        title: "Soulove4U Voice & ChatBot",
        desc: "SouLove4U is chat and voice bot application which I've been made From Bolt Because this project of mine was for Bolt.New Hackathon In this I've use supbase for bettet scalability. Also using Openrouter.ai for better AI response for best reasoning and human like voice, In future I also add eleven Labs for and give my voice to the bot for more connectivity. This project is my first very emotionally connected project and I've learned a lot from it.",
        image: "Soulove4u.png",
        live: true,
        technologies: ["Next.Js", "Supabase", "Tailwind-Css", "Tabler-Icons", "Bolt.New", "Openrouter.ai"],
        link: "https://soulove4u.vercel.app/",
        github: "https://github.com/AmnaQasmi/Soulove4U"
    },
    {
        title: "Casino Royal Roulette Game",
        desc: "Casino Royal Roulette Game is an immersive online casino experience built using React, TailwindCSS, and Firebase. It features a realistic roulette wheel, user authentication, and real-time betting functionality.🎰 Casino Royale - Roulette Game 🎰 Enjoy the thrill of a Roulette Game with smooth animations and interactive betting. Inspired by Casino Royale, this project brings a real casino vibe to your screen. 🔹 Features: ✔️ Real-time betting system ✔️ Dynamic UI & animations ✔️ Easy-to-play mechanics 📺 Watch the tutorial: Code G.K with Amna YOUTUBE .",
        image: "Casino Royal Roulette.png",
        live: false,
        technologies: ["React", "Tailwind", "Redux", "Heroicons", "HeadlessUI"],
        link: "https://youtu.be/nJpL48J9Exg?si=Tk4LBnlh94ivDIqy",
        github: "https://github.com/AmnaQasmi/ROULETTE_by_Casino-Royal"
    },
    {
        title: "Pedi-Care Bot (Hackathon Project)",
        desc: "I,ve build this project with my team in an Hackathon yes you're right in another hackathon which was conducted by 'Build With AI Hackathon' 'Digital Ocean & Colabs' in this hackathon trust me this was my first time in any hackathon and I've learnt alot form others. This was such a nice and amazing experience for a person like me who have never a pofessional suddenly met alots of them.",
        image: "PediCare.png",
        live: true,
        technologies: ["Bolt.new", "CursorA.I", "Tailwind-Css", "Lucide React", "React 18 with TypeScript", "Vite", "Openrouter.ai"],
        link: "pedia-care-nine.vercel.app",
        github: "https://github.com/AmnaQasmi/Pedia-Care-Hackathon-Digital-Ocean-Colabs"
    },
    {
        title: "VMOTOR E-Commerce Website",
        desc: "VMOTOR is a modern, fully responsive e-commerce platform built using Next.js, TailwindCSS, ReactIcons, and Sanity as a HeadlessCMS, offering a seamless shopping experience across all devices. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. VMOTOR combines functionality of stripe for payment Gateway, making online shopping and full of ease.",
        image: "VMOTOR.png",
        live: true,
        technologies: ["Next.Js", "Tailwind", "Redux", "Heroicons", "HeadlessCMS", "Stripe", "React-Redux Toolkit"],
        link: "https://v-motor.vercel.app/",
        github: "https://github.com/AmnaQasmi/next18-deploy"
    },
    {
        title: "Aykays-Project Chronicle (Blog-Site) ",
        desc: "Chronicle is a modern, user-friendly blogging and publishing platform that allows users to write, edit, and share articles seamlessly with an engaging reading experience. It supports features like content formatting, categorization, commenting, and responsive design to ensure accessibility across devices. Designed with scalability and performance in mind, Chronicle provides a clean interface for writers and readers alike, making it an efficient solution for digital publishing. And MongoDB/PostgreSQL for a fast, responsive, and scalable experience.",
        image: "Chronicle.png",
        live: true,
        technologies: ["Next.js(React)", "TailwindCSS", "Supabase", "TypeScript", "Node.js"],
        link: "https://chronicle.base44.app/",
        github: null
    },
    {
        title: "Aykays-Project EduMaster(LMS)",
        desc: "EduMaster LMS is a modern, scalable Learning Management System designed for educational institutions, instructors, and students. It provides role-based access for admins, teachers, and learners, with features such as course creation, curriculum structuring, multimedia content delivery, quizzes, and progress tracking. Built using a modern frontend framework (React/Next.js) with a clean, responsive UI, and powered by a secure backend (Node.js/FastAPI/Django) with database integration, it ensures seamless learning experiences. The platform supports real-time updates, cloud-based storage for media, and analytics dashboards, making it an efficient and professional solution for online education.",
        image: "EduMaster.png",
        live: true,
        technologies: ["React", "TailwindCSS", "Node.js (Express)", "Chart.js", "JWT Authentication & Authorization"],
        link: "https://edu-master-lms.base44.app/",
        github: null
    },
    {
        title: "Aykays-Project Event-Hive(EMS)",
        desc: "Event Management System frontend. Here's how I'll work I'll build the complete user interface for the event calendar, dashboards, and event management pages, keeping the beautiful honey-themed design you like. Role-based access: Admin and Regular User, Protected routes with middleware. For now, I'll use your browser's localStorage to simulate all the backend functionality like creating events, RSVPing, and user roles. This will make the app feel fully functional!Full-featured Calendar: A beautiful, interactive calendar powered by FullCalendar.js to view all events.User & Admin Roles: A complete login and signup system that simulates user and admin roles.Dashboards for Everyone: Separate, functional dashboards for both regular users (to see their created events and RSVPs) and admins (to approve, reject, and manage all events).Event Management: You can create, edit, delete, and RSVP to events, all through a sleek modal interface.Persistent Data: All your users and events are saved in your browser's localStorage, so everything will be there when you come back!",
        image: "EventHive.png",
        live: true,
        technologies: ["React", "TailwindCSS", "Node.js(Back-End)", "MongoDB Atlas (Database)", "JWT-based (Authentication)", "FullCalendar.js"],
        link: "https://youtu.be/VXccxT9lVZw?si=WV-2ykthWReTaIFS",
        github: null
    },
    {
        title: "Aykays-Project Firebase Mastery Course ",
        desc: "This course teaches you how to build a professional web application using Firebase. You'll learn how to use Firebase's real-time database, authentication, and storage services to build a scalable and secure application. You'll also learn how to use Firebase's hosting service to deploy your application. You'll also learn how to use Firebase's crash reporting service to track your application's crashes. You'll also learn how to use Firebase's remote config service to track your application's performance. You'll also learn how to use Firebase's performance monitoring service to track your application's performance. You'll also learn how to use Firebase's crash reporting service to track your application's crashes.",
        image: "FirebaseMastery.png",
        live: true,
        technologies: ["React", "TailwindCSS", "Firebase"],
        link: "https://firebase-mastery-by.base44.app/",
        github: null
    },
    {
        title: "Aykays-Project LandingPage Generator",
        desc: "Crafty is a sleek, modern web application that offers a creative platform for users to design, share, and manage their artistic projects. The interface is built to be intuitive and visually engaging, allowing seamless navigation between creative tools, galleries, and project templates. It supports responsive design so that creators can work from desktops, tablets, or mobile devices without compromise. Users can upload images, collaborate on designs, and curate portfolios or showcase work to an audience. Key Functionalities: 🎨 Design editor with drag-and-drop tools • 📂 Media upload & asset management • 📱 Responsive interface • 👤 Authentication & project saving • 🔄 Real-time preview • 🖼️ PNG download/export support • ⚡ Fast rendering and performance optimization. ",
        image: "LandingPage.png",
        live: true,
        technologies: ["Next.js/React", "TailwindCSS", "Node.js", "Cloud Storage (AWS/Cloudinary)"],
        link: "https://crafty.base44.app/",
        github: null
    },
    {
        title: "Aykays-Project (UI of the Project On Aykays)",
        desc: "This project is a modern government and public sector services landing page UI, built entirely with HTML, CSS, and JavaScript. It showcases a clean, responsive layout with structured sections, including key statistics, service capabilities, program highlights, and solution priorities. The design focuses on trust-building and professionalism, with an emphasis on clear typography, balanced spacing, and visual hierarchy. As a frontend-only implementation, the project demonstrates skills in creating pixel-perfect layouts, responsive design, and user-friendly interfaces without backend integration.",
        image: "UI-Aykays.png",
        live: true,
        technologies: ["HTML", "CSS3", "Javascript"],
        link: "./UI-index.html",
        github: null
    },
    {
        title: "Görev-Aracısı (Task-Manager AI Agent)",
        desc: "Twitter X ek modern, fully responsive social media platform hai jo React aur Tailwind CSS par based hai. Ye platform users ko real-time mein posts create, edit, aur share karne ki suvidha deta hai. Users apne thoughts, images, aur videos ko tweets ke roop mein share kar sakte hain, dusre users ke tweets ko like, comment, aur retweet kar sakte hain. Platform mein live updates, notifications, aur trending topics jaise features shamil hain, jo ek engaging aur seamless experience provide karte hain. Twitter X sleek design ke saath performance-oriented hai, jismein security aur scalability bhi ensured hai, making it an ideal platform for connecting with friends, following influencers, aur latest news se updated rehne ke liye.",
        image: "GörevAracısı.png",
        live: true,
        technologies: ["ReactJS", "Custom CSS", "Lucide-React", "PDF-FileParser"],
        link: "https://task-aracisi.vercel.app/",
        github: "https://github.com/AmnaQasmi/Task-Aracisi"
    },
    {
        title: "Interview-Project MYBindle App UI ",
        desc: "Twitter X ek modern, fully responsive social media platform hai jo React aur Tailwind CSS par based hai. Ye platform users ko real-time mein posts create, edit, aur share karne ki suvidha deta hai. Users apne thoughts, images, aur videos ko tweets ke roop mein share kar sakte hain, dusre users ke tweets ko like, comment, aur retweet kar sakte hain. Platform mein live updates, notifications, aur trending topics jaise features shamil hain, jo ek engaging aur seamless experience provide karte hain. Twitter X sleek design ke saath performance-oriented hai, jismein security aur scalability bhi ensured hai, making it an ideal platform for connecting with friends, following influencers, aur latest news se updated rehne ke liye.",
        image: "MyBindle.png",
        live: true,
        technologies: ["Figma", "Html", "CSS", "Javascript"],
        link: "https://mybindle-black.vercel.app/",
        github: "https://github.com/AmnaQasmi/My-Bindle"
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