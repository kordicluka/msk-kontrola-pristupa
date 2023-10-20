import React, { useEffect, useState } from "react";
import contactImage from "../assets/images/contact.jpg";
import { Context } from "../App";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import "../styles/project.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

const Project = () => {
  const { projects, setProjects, devices, setDevices } =
    React.useContext(Context);
  useEffect(() => {
    Aos.init({ duration: 1700 });
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const projectSlug = location.pathname.split("/")[2];

  const project = projects.find((project) => project.slug === projectSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  console.log(project);

  return (
    <div className="page project">
      <div className="project__image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="info">
        <h2>{project.type}</h2>
        <h1>{project.title}</h1>
        <p className="description">{project.description}</p>
        <p className="address">{project.address}</p>

        <p className="year">
          Godina izrade: <span>{project.year}</span>
        </p>
      </div>

      <div className="projects">
        <h1>
          {" "}
          Pogledajte ostale <span>projekte</span>{" "}
        </h1>
        <Carousel />
      </div>
    </div>
  );
};

export default Project;
