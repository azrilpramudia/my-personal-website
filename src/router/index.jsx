import { Router, Route } from "react-router-dom";
import HireMe from "../pages/Hire-Me";
import ProjectsPages from "../pages/ProjectsPages";

export default function AppRouter() {
  return (
    <Router>
      <Route path="/Hire-Me" element={<HireMe />} />
      <Route path="/projects" element={<ProjectsPages />} />
    </Router>
  );
}
