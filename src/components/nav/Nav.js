import { useState } from "react";
import { NavLink } from "react-router-dom";
import AnimateMouse from "../animatedMouse/AnimateMouse";
import Video from "../logo/Video";
import "./Nav.scss";

const Nav = () => {
  const [mouseStatut, setMouseStatut] = useState(false);

  // Activation effet mouse
  const handleMouseStatut = () => {
    mouseStatut ? setMouseStatut(false) : setMouseStatut(true);
  };

  return (
      <div className="nav">
        <div className="nav-top">
          <div className="nav-logo nav-link" id="logo">
            <Video />
          </div>
          <div className="nav-links">
            <div>
              <NavLink to="/portfolioAD115">
                <div id="accueil" className="nav-link">
                  Accueil
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/About">
                <div id="about" className="nav-link">
                  À propos
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/Portfolio">
                <div id="portfolio" className="nav-link">
                  Portfolio
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/Contact">
                <div id="contact" className="nav-link">
                  Contact
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="nav-footer">
          <button className="nav-mouse animBtn" onClick={handleMouseStatut}>
            Active <br />
            Mouse
          </button>
        </div>
      {mouseStatut && <AnimateMouse />}
      </div>
  );
};

export default Nav;
