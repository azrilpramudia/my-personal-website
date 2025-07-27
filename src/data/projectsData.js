import projects1 from "/project1.png";
import projects2 from "/project2.jpg";
import projects3 from "/project3.jpg";

export const projects = [
    {
      title: "HidroAkuaponik Agriculture",
      period: "2025-01-01 — 2025-04-30",
      category: "",
      description:
        "Backend service for Computer-Assisted Test Platform with strong type-safety and Hexagonal architecture.",
      tags: ["Rust", "Axum", "SurrealDB", "Integration Testing", "Type Safety"],
      featured: true,
      liveDemo: "#",
      github: "#",
      image: projects1,
    },
    {
      title: "E-Learning Platform",
      period: "2024-06-01 — 2024-12-31",
      category: "Full Stack Application",
      description:
        "Modern e-learning platform with interactive courses, real-time chat, and progress tracking features.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "TypeScript"],
      featured: false,
      liveDemo: "#",
      github: "#",
      image: projects2,
    },
    {
      title: "Task Management App",
      period: "2024-03-01 — 2024-05-31",
      category: "Frontend Application",
      description:
        "Intuitive task management application with drag-and-drop functionality and team collaboration features.",
      tags: ["Vue.js", "Tailwind CSS", "Pinia", "Vite", "WebSockets"],
      featured: false,
      liveDemo: "#",
      github: "#",
      image: projects3,
    },
  ];

  export {projects1, projects2, projects3};