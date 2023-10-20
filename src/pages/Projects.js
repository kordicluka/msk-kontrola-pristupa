import React from "react";
import contactImage from "../assets/images/contact.jpg";
import { Context } from "../App";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import "../styles/projects.scss";

const Projects = () => {
  const { projects, setProjects, devices, setDevices } =
    React.useContext(Context);
  return (
    <div className="page projects">
      <div className="page__hero">
        <div className="image">
          <img src={contactImage} alt="About us" />
        </div>

        <h1>Naši projekti</h1>
      </div>

      <div className="projects__container">
        {projects.map((project) => (
          <div className="project">
            <div className="image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="content">
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
              <Link to={`/projekti/${project.slug}`} className="outside__btn">
                Saznajte više
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
