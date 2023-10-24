import React, { useEffect, useRef, useState } from "react";
import "../styles/carousel.scss";
import { Context } from "../App";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

const Carousel = () => {
  const carousel = useRef();
  const displayWidth = useRef();
  const [translate, setTranslate] = useState(0);
  const location = useLocation();

  useEffect(() => {
    Aos.init({ duration: 1700 });
  }, []);

  const { projects, setProjects } = React.useContext(Context);

  const translateRight = () => {
    let carouselWidth = carousel.current.scrollWidth;
    let display = displayWidth.current.scrollWidth;

    if (
      translate - carouselWidth / projects.length <
      (-1 * carouselWidth) / 2 - display / 2
    ) {
      setTranslate(0);
    } else {
      if (window.innerWidth > 1500) {
        let t = translate - 4 * (carouselWidth / projects.length);
        if (t < (-1 * carouselWidth) / 2 - display / 2) {
          setTranslate(0);
        } else {
          setTranslate(translate - carouselWidth / projects.length);
        }
      } else if (window.innerWidth < 1500 && window.innerWidth > 768) {
        let t = translate - (3 * carouselWidth) / projects.length;
        if (t < (-1 * carouselWidth) / 2 - display / 2) {
          setTranslate(0);
        } else {
          setTranslate(translate - carouselWidth / projects.length);
        }
      } else {
        setTranslate(translate - carouselWidth / projects.length);
      }
    }
  };

  const translateLeft = () => {
    if (!(translate + carousel.current.scrollWidth / projects.length > 0)) {
      setTranslate(translate + carousel.current.scrollWidth / projects.length);
    }
  };

  const [projectsForCarousel, setProjectsForCarousel] = useState(projects);

  // check if the link of the website is "/projekti/:slug"
  useEffect(() => {
    if (
      location.pathname.split("/")[1] === "projekti" &&
      location.pathname.split("/")[2] !== undefined
    ) {
      const projectSlug = location.pathname.split("/")[2];
      const project = projects.find((project) => project.slug === projectSlug);
      const index = projects.indexOf(project);
      let projectsArray = [...projects];
      projectsArray.splice(index, 1);
      setProjectsForCarousel(projectsArray);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="carousel__buttons">
        <button
          className="carousel__button"
          onClick={translateLeft}
          data-aos="fade-left"
          data-aos-duration="350"
          data-aos-once="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="carousel__button right"
          onClick={translateRight}
          data-aos="fade-right"
          data-aos-duration="350"
          data-aos-once="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="carousel" ref={displayWidth}>
        <div
          className="inner__carousel"
          style={{ transform: `translateX(${translate}px)` }}
          ref={carousel}
        >
          {projectsForCarousel.map((project) => (
            <div
              className="project"
              data-aos="slide-up"
              data-aos-duration="350"
              data-aos-once="false"
            >
              <div className="image">
                <img src={project.image} alt={project.title} />

                <p className="project__type">{project.type}</p>
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
    </>
  );
};

export default Carousel;
