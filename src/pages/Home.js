import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroSlideImageFirst from "../assets/images/hero-slide-1.jpg";
import heroSlideImageSecond from "../assets/images/hero-slide-2.jpg";
import heroSlideImageThird from "../assets/images/hero-slide-3.jpg";
import templateImage from "../assets/images/template-image.jpg";
import contactImage from "../assets/images/contact.jpg";
import projectIcon from "../assets/images/project-icon.svg";
import { Context } from "../App";
import Typewriter from "typewriter-effect";
import "../styles/home.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressionCircle from "../components/ProgressionCircle";
import mapImage from "../assets/images/map.png";
import facebook_logo from "../assets/images/socials/facebook_logo.png";
import instagram_logo from "../assets/images/socials/instagram_logo.png";
import twitter_logo from "../assets/images/socials/twitter_logo.png";
import tiktok_logo from "../assets/images/socials/tiktok_logo.png";
import pinterest_logo from "../assets/images/socials/pinterest_logo.png";
import Carousel from "../components/Carousel";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const Home = () => {
  const [count, setCount] = useState(0);
  const [projectsTypes, setProjectsTypes] = useState(["Svi projekti"]);
  const [selectedProjectType, setSelectedProjectType] =
    useState("Svi projekti");
  const { projects, setProjects, devices, setDevices } =
    React.useContext(Context);
  const [deviceIndex, setDeviceIndex] = useState(1);

  useEffect(() => {
    Aos.init({ duration: 1700 });
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tvmzlls",
        "template_xgudaqm",
        form.current,
        "mtd5i1kHo1o6AZeMR"
      )
      .then(
        (result) => {
          alert("Uspješno ste poslali poruku!");
        },
        (error) => {
          alert("Došlo je do greške. Pokušajte ponovno.");
        }
      );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => (count + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const projectTypes = [...new Set(projects.map((project) => project.type))];
    setProjectsTypes((prevTypes) => [
      ...new Set([...prevTypes, ...projectTypes]),
    ]);
  }, [projects]);

  const heroSlides = [
    {
      title: "Kontrola pristupa za vašu zgradu",
      subtitle: "Osigurajte svaki ulaz u zgradu",
      image: contactImage,
      description: (
        <>
          <p>
            Produljite trajanje vaših ulaznih vrata korištenjem naše
            tehnologije.
          </p>
          <p>
            Osigurajte svaki ulaz u zgradu, stan ili poslovni prostor. Naša
            tehnologija se temelji na sigurnim sebury uređajima, omogućujući
            stanarima i ostalima da koriste privjeske, kartice ili PIN-ove za
            brz i pouzdan ulaz u objekte.
          </p>
        </>
      ),
      actions: (
        <>
          <Link className="btn" to="/kontaktiraj-nas">
            Saznajte više
          </Link>
          <Link className="link" to="/kontaktiraj-nas">
            Idi na stranicu
          </Link>
        </>
      ),
    },
    {
      title: "DRUGI SLIDE",
      subtitle: "Kvaliteta i sigurnost",
      image: contactImage,
      description: (
        <>
          <p>Zgrade, Stanovi i ostalo</p>
          <p>
            Vaša firma se ističe u industriji kontrole pristupa u zgradama,
            pružajući .
          </p>
        </>
      ),
      actions: (
        <>
          <Link className="btn" to="/kontaktiraj-nas">
            Saznajte više
          </Link>
          <Link className="link" to="/kontaktiraj-nas">
            Idi na stranicu
          </Link>
        </>
      ),
    },

    {
      title: "ELEKTRONSKI KONTROLERI",
      subtitle: "Kvaliteta i sigurnost",
      image: contactImage,
      description: (
        <>
          <p>Koristimo sebury uređaje</p>
          <p>
            Vaša firma se ističe u industriji kontrole pristupa u zgradama,
            pružajući inovativna rješenja za siguran i jednostavan ulazak. Naša
            tehnologija se temelji na sigurnim sebury uređajima, omogućujući
            stanarima i ostalima da koriste privjeske, kartice ili PIN-ove za
            brz i pouzdan ulaz u objekte
          </p>
        </>
      ),
      actions: (
        <>
          <Link className="btn" to="/kontaktiraj-nas">
            Saznajte više
          </Link>
          <Link className="link" to="/kontaktiraj-nas">
            Idi na stranicu
          </Link>
        </>
      ),
    },
  ];

  return (
    <div className="page home">
      <div className="hero">
        {heroSlides.map((slide, index) => (
          <div
            className={`slide ${count === index ? "active" : ""}`}
            key={index}
          >
            <div className="slide__image">
              <img src={slide.image} alt="" />
            </div>

            <div className="slide__content">
              <h2>{slide.subtitle}</h2>
              <h1>{slide.title}</h1>
              <div className="slide__description">{slide.description}</div>
              <div className="slide__actions">{slide.actions}</div>
            </div>
          </div>
        ))}

        <div className="bottom__text">
          <p>
            <span>MSK</span> je tvrtka koja se bavi kontrolom pristupa u
            zgradama.
          </p>
        </div>

        <button
          className="slider__button"
          onClick={() =>
            setCount((count - 1 + heroSlides.length) % heroSlides.length)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
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
          className="slider__button right"
          onClick={() =>
            setCount((count - 1 + heroSlides.length) % heroSlides.length)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
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

      <div className="services">
        <div className="content">
          <h1>
            <span>U</span>sluge koje vam pružamo
          </h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s psum has been tstandard dummy text ever since the 1500s
          </p>
        </div>
        <div className="services__container">
          <div className="service">
            <div className="image">
              <img src={contactImage} alt="" />
            </div>{" "}
            <Link className="service__link" to="/kontaktiraj-nas">
              Saznajte više
            </Link>
            <div className="service__content">
              <h2>Ulazi u zgrade</h2>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the
              </p>
            </div>
          </div>
          <div className="service">
            <div className="image">
              <img src={heroSlideImageThird} alt="" />
            </div>{" "}
            <Link className="service__link" to="/kontaktiraj-nas">
              Saznajte više
            </Link>
            <div className="service__content">
              <h2>Zaštita prostorija</h2>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s psum has been tstandard dummy text ever since
                the 1500s
              </p>
            </div>
          </div>
          <div className="service">
            <div className="image">
              <img src={heroSlideImageSecond} alt="" />
            </div>{" "}
            <Link className="service__link" to="/kontaktiraj-nas">
              Saznajte više
            </Link>
            <div className="service__content">
              <h2>Elektronski kontroleri</h2>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s psum has been tstandard dummy text ever since
                the 1500s
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="content">
          {" "}
          <h1>
            <span>O</span> nama
          </h1>
          <p>
            Vaša firma se ističe u industriji kontrole pristupa u zgradama,
            pružajući inovativna rješenja za siguran i jednostavan ulazak. Naša
            tehnologija se temelji na sigurnim sebury uređajima, omogućujući
            stanarima i ostalima da koriste privjeske, kartice ili PIN-ove za
            brz i pouzdan ulaz u objekte
          </p>
          <div
            className="circle__container"
            data-aos-once="false"
            data-aos="fade-up"
            data-aos-duration="350"
          >
            <ProgressionCircle value={99} text={"Zadovoljni klijenti"} />
            <h4 className="circle__text">ZADOVOLJNI KLIJENTI</h4>
          </div>
          <div className="list">
            <div className="item">
              <div className="icon">
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
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <div className="item__content">
                <h3>Kvaliteta</h3>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s psum has been tstandard dummy text ever since
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
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
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <div className="item__content">
                <h3>Održivost</h3>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s psum has been tstandard dummy text ever since
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
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
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <div className="item__content">
                <h3>Sigurnost</h3>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s psum has been tstandard dummy text ever since
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={heroSlideImageFirst} alt="" />
        </div>
      </div>

      <div className="contact__home__section">
        <div className="image">
          <img src={contactImage} alt="" />
        </div>

        <h1>
          Kako do <span> nas?</span>
        </h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since
        </p>
        <Link className="btn" to="/kontaktiraj-nas">
          Kontaktirajte nas
        </Link>
      </div>

      <div className="projects">
        <h1 data-aos-once="false" data-aos="fade-up" data-aos-duration="350">
          Izdvojeni <span>projekti</span>
        </h1>

        <p data-aos-once="false" data-aos="fade-up" data-aos-duration="350">
          Lorem Ipsum has been the industry's standard dummy text ever since the
        </p>
        <Carousel />
      </div>

      <div className="devices">
        <h1
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-duration="350"
          data-aos-delay="150"
        >
          <span>Uređaji</span> koje koristimo
        </h1>
        <p
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-duration="350"
          data-aos-delay="150"
        >
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s psum has been tstandard dummy text ever since the 1500s
        </p>

        <div className="devices__container">
          {devices.map((device, index) => (
            <div
              className="device"
              key={device.index}
              data-aos-once="false"
              data-aos={index % 2 === 0 ? "fade-up" : "fade-up"}
              data-aos-duration="350"
            >
              <div className="content">
                <div className="top">
                  <h3>{device.title}</h3>
                  <p>{device.shortDescription}</p>
                </div>
                <div className="bottom">
                  <Link className="outside__btn" to={`/uredaji/${device.slug}`}>
                    Pogledaj više
                  </Link>
                  <Link className="link" to="/uredaji">
                    Idi na stranicu
                  </Link>
                </div>
              </div>
              <div className="image">
                <img src={device.image} alt="" />
              </div>
            </div>
          ))}{" "}
        </div>
      </div>

      <div className="contact">
        <div className="info">
          <h1>Informacije</h1>

          <p>
            Pogledajte kako sve možete stupit u kontakt s nama. Ukoliko imate
            bilo kakvih pitanja, slobodno nas kontaktirajte.
          </p>

          <ul className="contact__info">
            <li>
              Telefon: <span>091 - 390 / 5524</span>
            </li>
            <li>
              E-mail:
              <span>info@msk.hr</span>
            </li>
          </ul>
          <p>
            <span>Adresa:</span> Ulica 1, 10000 Zagreb, Hrvatska
          </p>
          <img src={mapImage} alt="" />

          <p>
            Pogledajte kako sve možete stupit u kontakt s nama. Ukoliko imate
            bilo kakvih pitanja, slobodno nas kontaktirajte.
          </p>

          <div className="socials">
            <img src={facebook_logo} alt="facebook_logo" />
            <img src={instagram_logo} alt="instagram_logo" />
          </div>
        </div>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <h1>
            Kontaktirajte nas ispunjavanjem <span>forme.</span>
          </h1>

          <p>
            Potruditi ćemo se odgovoriti na vaš upit u najkraćem mogućem roku.
          </p>

          <div className="row">
            <input
              type="text"
              placeholder="Ime i prezime *"
              id="name"
              name="name"
            />
            <input
              type="text"
              placeholder="Broj telefona *"
              id="telephone"
              name="telephone"
            />
          </div>

          <input type="text" placeholder="E-mail *" id="email" name="email" />

          <textarea
            placeholder="Poruka *"
            id="message"
            name="message"
          ></textarea>

          <button className="btn">Pošalji</button>
          <p>
            * Obavezna polja. Vaši podaci su sigurni i neće biti dijeljeni s
            trećim stranama.
          </p>
        </form>{" "}
      </div>
    </div>
  );
};

export default Home;
