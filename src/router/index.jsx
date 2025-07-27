import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePages";
import ProjectsPages from "../pages/ProjectsPages";
import HireMe from "../pages/Hire-Me";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPages />} />
      <Route path="/hire-me" element={<HireMe />} />
    </Routes>
  );
}
