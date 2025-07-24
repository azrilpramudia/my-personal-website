import { Router, Route } from "react-router-dom";
import HireMe from "../pages/Hire-Me";

export default function AppRouter() {
  return (
    <Router>
      <Route path="/Hire-Me" element={<HireMe />} />
    </Router>
  );
}
