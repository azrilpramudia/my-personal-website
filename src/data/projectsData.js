import projects1 from "/project1.png";
import projects2 from "/project2.png";

export const projects = [
    {
      title: "MyBataku",
      period: "2025-01-01 — Present",
      category: "Web Application",
      description:
        "MyBataku is a website platform that focuses on education and articles on learning the Batak language.",
      tags: ["PostgreSql", "React", "Tailwind", "Go", "Vite"],
      featured: true,
      hasLiveDemo: true,
      hasGithub: true,
      liveDemo: "https://mybataku.my.id",
      github: "https://github.com/azrilpramudia/mybataku-project",
      image: projects1,
    },
    {
      title: "HidroAkuaponik Agriculture",
      period: "2024-06-01 — 2024-12-31",
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
      period: "2024-03-01 — 2024-05-31",
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
  ];

  export {projects1, projects2, };