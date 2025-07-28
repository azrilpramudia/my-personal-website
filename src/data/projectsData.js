import projects1 from "../assets/projects/project1.webp";
import projects2 from "../assets/projects/project2.webp";
import projects3 from "../assets/projects/project3.webp";
import projects4 from "../assets/projects/project4.webp";

export const projects = [
    {
      title: "MyBataku",
      hasPeriod: true,
      period: "2025-01-01 — Present",
      hasCategory: true,
      category: "Web Application",
      description:
        "MyBataku is a website platform that focuses on education and articles on learning the Batak language.",
      tags: ["PostgreSql", "React", "Tailwind CSS", "Go", "Vite"],
      featured: true,
      hasLiveDemo: true,
      hasGithub: true,
      liveDemo: "https://mybataku.my.id",
      github: "https://github.com/azrilpramudia/mybataku-project",
      image: projects1,
    },
    {
      title: "HidroAkuaponik Agriculture",
      hasPeriod: true,
      period: "2024-11-13 — 2024-12-28",
      hasCategory: true,
      category: "Web Application",
      description:
        "HydroAkuaponik is a website platform that focuses on education and information related to sustainable agricultural learning.",
      tags: ["MySQL", "Express", "React", "Node.js", "Tailwind CSS"],
      featured: false,
      hasLiveDemo: true,
      hasGithub: true,
      liveDemo: "https://hidroakuaponik.vercel.app",
      github: "https://github.com/azrilpramudia/nineteen-hidro-akuaponik-massive-project",
      image: projects2,
    },
    {
      title: "Notes App",
      hasPeriod: true,
      period: "2025-06-28 — 2024-07-18",
      hasCategory: true,
      category: "Mobile Application",
      description:
        "Notes App is a mobile application developed using Express for the backend and Flutter for the frontend. This application is used to create important notes, daily activities, cooking recipes and much more.",
      tags: ["Express", "Node.js", "Flutter", "MySQL"],
      featured: false,
      hasLiveDemo: false,
      hasGithub: true,
      liveDemo: "#",
      github: "https://github.com/azrilpramudia/notes-app-mobile",
      image: "#",
    },
    {
      title: "Simple To-do List App",
      hasPeriod: false,
      period: "",
      hasCategory: false,
      category: "",
      description:
        "Notes App is a mobile application developed using Express for the backend and Flutter for the frontend. This application is used to create important notes, daily activities, cooking recipes and much more.",
      tags: ["React", "Tailwind CSS"],
      featured: false,
      hasLiveDemo: false,
      hasGithub: true,
      liveDemo: "#",
      github: "https://github.com/azrilpramudia/todo-app-reactjs",
      image: projects3,
    },
    {
      title: "My Personal Web",
      hasPeriod: false,
      period: "",
      hasCategory: true,
      category: "Web Application",
      description:
        "Notes App is a mobile application developed using Express for the backend and Flutter for the frontend. This application is used to create important notes, daily activities, cooking recipes and much more.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      featured: false,
      hasLiveDemo: true,
      hasGithub: true,
      liveDemo: "https://itsmeow.tech",
      github: "https://github.com/azrilpramudia/my-personal-website",
      image: projects4,
    },
    {
      title: "Uninus Himatif Website",
      hasPeriod: false,
      period: "",
      hasCategory: true,
      category: "Web Application",
      description:
        "Notes App is a mobile application developed using Express for the backend and Flutter for the frontend. This application is used to create important notes, daily activities, cooking recipes and much more.",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      featured: false,
      hasLiveDemo: true,
      hasGithub: false,
      liveDemo: "https://uninus-himatif.vercel.app",
      github: "",
      image: false,
    },
  ];

  export {projects1, projects2, projects3, projects4};