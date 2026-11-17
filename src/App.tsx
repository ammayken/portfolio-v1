import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import WorksPage from "./pages/WorksPage";
import SkillsPage from "./pages/SkillsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/skills" element={<SkillsPage />} />
    </Routes>
  );
}
