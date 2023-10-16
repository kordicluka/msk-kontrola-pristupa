import React, { useState, useEffect } from "react";
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
const Home = () => {
  const [count, setCount] = useState(0);
  const [projectsTypes, setProjectsTypes] = useState(["Svi projekti"]);
  const [selectedProjectType, setSelectedProjectType] =
    useState("Svi projekti");
  const { projects, setProjects } = React.useContext(Context);
  const [deviceIndex, setDeviceIndex] = useState(1);

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
      title: "KONTROLA PRISTUPA",
      subtitle: "Kvaliteta i sigurnost",
      image: contactImage,
      description: (
        <>
          <p>Zgrade, Stanovi i ostalo</p>
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
            naši uredaji
          </Link>
          <Link className="link" to="/kontaktiraj-nas">
            Saznajte više
          </Link>
        </>
      ),
    },
    {
      title: "DRUGI SLIDE",
      subtitle: "Kvaliteta i sigurnost",
      image: heroSlideImageSecond,
      description: (
        <>
          <p>Zgrade, Stanovi i ostalo</p>
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
            naši uredaji
          </Link>
          <Link className="link" to="/kontaktiraj-nas">
            Saznajte više
          </Link>
        </>
      ),
    },

    {
      title: "ELEKTRONSKI KONTROLERI",
      subtitle: "Kvaliteta i sigurnost",
      image: heroSlideImageThird,
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
            naši uredaji
          </Link>
          <Link className="link" to="/kontaktiraj-nas">
            Saznajte više
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
              <div className="top">
                <h2>{slide.subtitle}</h2>
                <h1>{slide.title}</h1>
                <div className="slide__description">{slide.description}</div>
              </div>
              <div className="slide__actions">{slide.actions}</div>
            </div>
          </div>
        ))}

        <div className="control__butons">
          {heroSlides.map((slide, index) => (
            <button
              className={count === index ? "active" : ""}
              onClick={() => setCount(index)}
              key={index}
            >
              <span className="index">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
              <span className="title">{slide.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="about-us">
        <div className="image">
          <img src={heroSlideImageFirst} alt="" />
          <div className="hero__numbers">
            <div className="item">
              <img src={projectIcon} alt="" />
              <p className="number">25+</p>
              <p className="text"> Završenih projekata</p>{" "}
            </div>
          </div>

          <div className="circle__container">
            <ProgressionCircle value={99} text={"Zadovoljni klijenti"} />
            <h4 className="circle__text">ZADOVOLJNI KLIJENTI</h4>
          </div>
        </div>

        <div className="content">
          <Typewriter
            options={{
              strings: [
                "Saznajte više o nama",
                "Pogledajte zašto izabrati nas?",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <h1>O nama</h1>
          <p>
            Vaša firma se ističe u industriji kontrole pristupa u zgradama,
            pružajući inovativna rješenja za siguran i jednostavan ulazak. Naša
            tehnologija se temelji na sigurnim sebury uređajima, omogućujući
            stanarima i ostalima da koriste privjeske, kartice ili PIN-ove za
            brz i pouzdan ulaz u objekte
          </p>
          <div className="list">
            <div className="item">
              <div className="rectangle">
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
              <div className="list__container">
                <h3>OLAKŠAN ULAZ U ZGRADU</h3>
                <p>
                  Korištenjem naših usluga ulaz u zgradu je znatno olakšan.
                  Jednostavnim prislonom kartice, malog privjeska prema čitaču i
                  otvaraju se ulazna vrata.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="rectangle">
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
              <div className="list__container">
                <h3>PRODULJENJE VIJEKA TRAJANJA ULAZNIH VRATI</h3>
                <p>
                  Korištenjem naših usluga ulaz u zgradu je znatno olakšan.
                  Jednostavnim prislonom kartice, malog privjeska prema čitaču i
                  otvaraju se ulazna vrata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <img src={heroSlideImageFirst} alt="" />
        <form className="form">
          <h1>Kontaktirajte nas</h1>

          <div className="row">
            <input type="text" placeholder="Ime i prezime *" />
            <input type="text" placeholder="E-mail adresa *" />
          </div>

          <div className="row">
            <input type="text" placeholder="Broj telefona *" />
            <input type="text" placeholder="Adresa" />
          </div>

          <textarea placeholder="Poruka *"></textarea>

          <button className="btn">Pošalji</button>
          <p>
            * Obavezna polja. Vaši podaci su sigurni i neće biti dijeljeni s
            trećim stranama.
          </p>
        </form>{" "}
        <div className="info">
          <h1>Informacije</h1>
          <div className="item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.8}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <h2>
              <h2>+385 91 123 4567</h2>
            </h2>
          </div>
          <div className="item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.8}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <h2>
              <h2>+385 91 123 4567</h2>
            </h2>
          </div>
          <div className="item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.8}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <h2>
              <h2>+385 91 123 4567</h2>
            </h2>
          </div>
        </div>
      </div>

      <div className="making-steps">
        <div className="images">
          <img src={heroSlideImageFirst} alt="" />
          <img src={heroSlideImageSecond} alt="" />
          <img src={heroSlideImageThird} alt="" />
          <img src={templateImage} alt="" />
        </div>

        <div className="content">
          <Typewriter
            options={{
              strings: [
                "Saznajte više o nama",
                "Pogledajte zašto izabrati nas?",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <h1> Kako postavljamo sustave za kontrolu pristupa?</h1>
          <p>
            Vaša firma se ističe u industriji kontrole pristupa u zgradama,
            pružajući inovativna rješenja za siguran i jednostavan ulazak.
          </p>

          <div className="list">
            <div className="item">
              <div className="index">
                <span>01</span>
                <div className="vertical-line"></div>
              </div>
              <div className="list_content">
                <h3>KONTKAKT TE IZRADA PONUDE</h3>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when a ever since the 1500s, when a Lorem
                  Ipsum has been the industr
                </p>
              </div>
            </div>
            <div className="item">
              <div className="index">
                <span>02</span>
                <div className="vertical-line"></div>
              </div>
              <div className="list_content">
                <h3>KONTKAKT TE IZRADA PONUDE</h3>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when a ever since the 1500s, when a Lorem
                  Ipsum has been the industr
                </p>
              </div>
            </div>
            <div className="item">
              <div className="index">
                <span>03</span>
                <div className="vertical-line"></div>
              </div>
              <div className="list_content">
                <h3>KONTKAKT TE IZRADA PONUDE</h3>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when a ever since the 1500s, when a Lorem
                  Ipsum has been the industr
                </p>
              </div>
            </div>
            <div className="item">
              <div className="index">
                <span>04</span>
                <div className="vertical-line"></div>
              </div>
              <div className="list_content">
                <h3>KONTKAKT TE IZRADA PONUDE</h3>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when a ever since the 1500s, when a Lorem
                  Ipsum has been the industr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="devices">
        <div className="col-1">
          <div className="content">
            <h1>Elektronski kontroleri</h1>

            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>

            <p>
              Vaša firma se ističe u industriji kontrole pristupa u zgradama,
              pružajući inovativna rješenja za siguran i jednostavan ulazak.
              Naša tehnologija se temelji na sigurnim sebury uređajima,
              omogućujući stanarima i ostalima da koriste privjeske, kartice ili
              PIN-ove za brz i pouzdan ulaz u objekte
            </p>

            <Link className="link" to="/kontaktiraj-nas">
              Pogledaj više
            </Link>
          </div>
          <div className="image">
            <img
              src={heroSlideImageFirst}
              alt=""
              className={deviceIndex === 1 ? "active" : ""}
            />
            <img
              className={deviceIndex === 2 ? "active" : ""}
              src={heroSlideImageSecond}
              alt=""
            />
            <img
              className={deviceIndex === 3 ? "active" : ""}
              src={heroSlideImageThird}
              alt=""
            />
            <img
              className={deviceIndex === 4 ? "active" : ""}
              src={templateImage}
              alt=""
            />
          </div>
        </div>
        <div className="col-2">
          <div className="image">
            <img src={heroSlideImageFirst} className="active" alt="" />
          </div>
          <div className="content">
            <h1>Narukvice, ogrlice, kartice</h1>

            <p>
              Vaša firma se ističe u industriji kontrole pristupa u zgradama,
              pružajući inovativna rješenja za siguran i jednostavan ulazak.
              Naša tehnologija se temelji na sigurnim sebury uređajima,
              omogućujući stanarima i ostalima da koriste privjeske, kartice ili
              PIN-ove za brz i pouzdan ulaz u objekte
            </p>

            <div className="list">
              <div
                className={deviceIndex === 1 ? "item active" : "item"}
                onMouseEnter={() => setDeviceIndex(1)}
              >
                <div className="index">01</div>
                <div className="container">
                  <h3>OGRLICE</h3>
                  <p>
                    Korištenjem naših usluga ulaz u zgradu je znatno olakšan.
                    Jednostavnim prislonom kartice, malog privjeska prema čitaču
                    i otvaraju se ulazna vrata.
                  </p>
                  <Link className="link" to="/kontaktiraj-nas">
                    Pogledaj više
                  </Link>
                </div>
              </div>
              <div
                className={deviceIndex === 2 ? "item active" : "item"}
                onMouseEnter={() => setDeviceIndex(2)}
              >
                <div className="index">02</div>
                <div className="container">
                  <h3>NARUKVICE</h3>
                  <p>
                    Korištenjem naših usluga ulaz u zgradu je znatno olakšan.
                    Jednostavnim prislonom kartice, malog privjeska prema čitaču
                    i otvaraju se ulazna vrata.
                  </p>
                  <Link className="link" to="/kontaktiraj-nas">
                    Pogledaj više
                  </Link>
                </div>
              </div>
              <div
                className={deviceIndex === 3 ? "item active" : "item"}
                onMouseEnter={() => setDeviceIndex(3)}
              >
                <div className="index">03</div>
                <div className="container">
                  <h3>ULAZ SA PINOM</h3>
                  <p>
                    Korištenjem naših usluga ulaz u zgradu je znatno olakšan.
                    Jednostavnim prislonom kartice, malog privjeska prema čitaču
                    i otvaraju se ulazna vrata.
                  </p>
                  <Link className="link" to="/kontaktiraj-nas">
                    Pogledaj više
                  </Link>
                </div>
              </div>
              <div
                className={deviceIndex === 4 ? "item active" : "item"}
                onMouseEnter={() => setDeviceIndex(4)}
              >
                <div className="index">04</div>
                <div className="container">
                  <h3>KARTICE</h3>
                  <p>
                    Korištenjem naših usluga ulaz u zgradu je znatno olakšan.
                    Jednostavnim prislonom kartice, malog privjeska prema čitaču
                    i otvaraju se ulazna vrata.
                  </p>
                  <Link className="link" to="/kontaktiraj-nas">
                    Pogledaj više
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects">
        <h1>Izdvojeni projekti</h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s psum has been tstandard dummy text ever since the 1500s
        </p>
        <div className="control">
          {projectsTypes.map((type) => (
            <button
              className={selectedProjectType === type ? "active" : ""}
              onClick={() => setSelectedProjectType(type)}
              key={type}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="projects__container">
          {projects
            .filter(
              (project) =>
                project.type === selectedProjectType ||
                selectedProjectType === "Svi projekti"
            )
            .map((project) => (
              <div className="project" key={project.slug}>
                <div className="image">
                  <img src={project.image} alt="" />
                </div>
                <div className="content">
                  <p className="address">{project.address}</p>
                  <h3>{project.title}</h3>
                  <p className="shortDescription">{project.shortDescription}</p>
                  <div className="actions">
                    <Link className="btn" to={`/projekt/${project.slug}`}>
                      Saznajte više
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
