import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePages";
import HireMe from "../pages/Hire-Me";
import ProjectsPages from "../pages/ProjectsPages";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hire-me" element={<HireMe />} />
      <Route path="/projects" element={<ProjectsPages />} />
    </Routes>
  );
}
