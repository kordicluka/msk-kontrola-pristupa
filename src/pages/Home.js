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
              <div className="rectangle"></div>
              <div className="container">
                <h3>OLAKŠAN ULAZ U ZGRADU</h3>
                <p>
                  Korištenjem naših usluga ulaz u zgradu je znatno olakšan.
                  Jednostavnim prislonom kartice, malog privjeska prema čitaču i
                  otvaraju se ulazna vrata.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="rectangle"></div>
              <div className="container">
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
        <img src={contactImage} alt="" />

        <div className="content">
          <div className="subtitle">
            <hr />
            <h1>Kontaktirajte nas</h1>
          </div>
          <p>Možete nas kontakirati na više načina:</p>

          <ul>
            <li>Pozivom na broj telefona: 091 - 734 / 4974</li>
            <li>Putem e-maila: info@msk.hr</li>
            <li>Ispunjavanjem forme klikom na link ispod.</li>
          </ul>

          <Link className="btn" to="/kontaktiraj-nas">
            {" "}
            KONTAKTIRAJTE NAS{" "}
          </Link>
        </div>
      </div>

      <div className="making-steps">
        <div className="images">
          <img src={templateImage} alt="" />
          <img src={templateImage} alt="" />
          <img src={templateImage} alt="" />
          <img src={templateImage} alt="" />
        </div>

        <div className="content">
          <div className="subtitle">
            <hr />
            <h2>Postupak postavljanja</h2>
          </div>
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

            <Link className="btn" to="/kontaktiraj-nas">
              naši uredaji
            </Link>
          </div>
          <div className="images">
            <img src={templateImage} alt="" />
            <img src={templateImage} alt="" />
            <img src={templateImage} alt="" />
            <img src={templateImage} alt="" />
          </div>
        </div>
        <div className="col-2">
          <div className="image">
            <img src={heroSlideImageFirst} alt="" />
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
              <div className="item">
                <div className="rectangle"></div>
                <div className="container">
                  <h3>OGRLICE</h3>
                  <p>
                    Korištenjem naših usluga ulaz u zgradu je znatno olakšan.
                    Jednostavnim prislonom kartice, malog privjeska prema čitaču
                    i otvaraju se ulazna vrata.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="rectangle"></div>
                <div className="container">
                  <h3>NARUKVICE</h3>
                  <p>
                    Korištenjem naših usluga ulaz u zgradu je znatno olakšan.
                    Jednostavnim prislonom kartice, malog privjeska prema čitaču
                    i otvaraju se ulazna vrata.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="rectangle"></div>
                <div className="container">
                  <h3>ULAZ SA PINOM</h3>
                  <p>
                    Korištenjem naših usluga ulaz u zgradu je znatno olakšan.
                    Jednostavnim prislonom kartice, malog privjeska prema čitaču
                    i otvaraju se ulazna vrata.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="rectangle "></div>
                <div className="container">
                  <h3>KARTICE</h3>
                  <p>
                    Korištenjem naših usluga ulaz u zgradu je znatno olakšan.
                    Jednostavnim prislonom kartice, malog privjeska prema čitaču
                    i otvaraju se ulazna vrata.
                  </p>
                </div>
              </div>
            </div>

            <Link className="btn" to="/kontaktiraj-nas">
              naši uredaji
            </Link>
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
