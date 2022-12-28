import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./components/about/About";
import Accueil from "./components/Accueil/Accueil";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";
import Works from "./components/works/Works";
import cv from "./components/videoSrc/cvNH.pdf";

function App() {

  return (
    
      
    <BrowserRouter>
      <div className="btnCv-container">
        <a href={cv} download={cv}>
          <button className="btnCV nav-link animBtn2" type="submit">
            Download
            <br />
            Cv
          </button>
        </a>
      </div>
      <Nav />
      <Routes>
        <Route path="/portfolioAD115" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
