import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import WorksPage from "./pages/WorksPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<WorksPage />} />
    </Routes>
  );
}
