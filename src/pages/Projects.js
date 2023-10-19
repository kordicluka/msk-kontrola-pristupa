import React from "react";
import contactImage from "../assets/images/contact.jpg";

const Projects = () => {
  return (
    <div className="page projects">
      <div className="page__hero">
        <div className="image">
          <img src={contactImage} alt="About us" />
        </div>

        <h1>Naši projekti</h1>
      </div>
    </div>
  );
};

export default Projects;
