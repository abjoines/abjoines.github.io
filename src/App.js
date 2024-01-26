import React from "react";
import Sidebar from "./Components/Sidebar";
import GenArchive from "./Components/GenArchive";
import ThreeDArchive from "./Components/ThreeDArchive";
import ProjectsGrid from "./Components/ProjectsGrid";
import Project from "./Components/Project";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main-container overflow-hidden">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route element={<Project />} path="/:slug" />
          <Route element={<ProjectsGrid />} exact path="/" />
          <Route element={<GenArchive />} path="/generative" />
          <Route element={<ThreeDArchive />} path="/threed" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
