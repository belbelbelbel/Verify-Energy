import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/landing-page';
import AboutPage from './components/about-us';
import Project from './components/project';
import Team from './components/Team';
import Contact from './components/contact';
import ProjectsPage from './components/project';
import TeamPage from './components/Team';
import ContactPage from './components/contact';


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/projects" element={<ProjectsPage/>} />
      <Route path="/team" element={<TeamPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  </Router>
  );
};

export default App;