import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePages";
import HireMe from "../pages/Hire-Me";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hire-me" element={<HireMe />} />
    </Routes>
  );
}
