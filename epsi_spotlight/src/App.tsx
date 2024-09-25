import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import InfosUtiles from "@/pages/infos.tsx";
import Environnement from "@/pages/environnement.tsx";
import LogoutPage from "@/pages/logout.tsx";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<InfosUtiles />} path="/infos" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<Environnement />} path="/environnement" />
      <Route element={<LogoutPage />} path="/logout" />
    </Routes>
  );
}

export default App;
