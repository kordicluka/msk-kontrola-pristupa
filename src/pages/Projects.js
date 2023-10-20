import React, { useEffect, useState } from "react";
import contactImage from "../assets/images/contact.jpg";
import { Context } from "../App";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import "../styles/projects.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const { projects, setProjects, devices, setDevices } =
    React.useContext(Context);
  useEffect(() => {
    Aos.init({ duration: 1700 });
    window.scrollTo(0, 0);
  }, []);
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
          <div
            className="project"
            key={project.slug}
            data-aos="fade-up"
            data-aos-duration="500"
          >
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
