import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Project, Experience, Home } from "./pages";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay"
import Helmet from 'react-helmet';
import Game from "./components/Game";
import Tetris from "./pages/Tetris";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/tetris" element={<Tetris />} />
          <Route path="/game" element={<Game />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      <Helmet bodyAttributes={{style: 'background-color : ##35424c'}}/>
    </div>
    
  );
}

export default App;