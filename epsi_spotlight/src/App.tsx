import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import InfosUtiles from "@/pages/infos.tsx";
import Environnement from "@/pages/environnement.tsx";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<InfosUtiles />} path="/infos" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<Environnement />} path="/environnement" />
    </Routes>
  );
}

export default App;
