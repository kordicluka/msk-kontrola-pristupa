import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroSlideImageFirst from "../assets/images/hero-slide-1.jpg";
import templateImage from "../assets/images/template-image.jpg";
import heroIconOne from "../assets/images/hero__icon_1.png";
import contactImage from "../assets/images/contact.jpg";
import { Context } from "../App";

import "../styles/home.scss";

const Home = () => {
  const [count, setCount] = useState(0);
  const [projectsTypes, setProjectsTypes] = useState(["Svi projekti"]);
  const [selectedProjectType, setSelectedProjectType] =
    useState("Svi projekti");
  const { projects, setProjects } = React.useContext(Context);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => (count + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const projectTypes = [...new Set(projects.map((project) => project.type))];
    setProjectsTypes((prevTypes) => [
      ...new Set([...prevTypes, ...projectTypes]),
    ]);
  }, [projects]);

  const heroSlide = {
    title: "KONTROLA PRISTUPA",
    shortTitle: "Početni slide",
    subtitle: "KVALITETA I SIGURNOST",
    image: contactImage,
    description: (
      <>
        <p>Zgrade, Stanovi i ostalo</p>
        <p>
          Koristimo Sebury uređaje, omogućujući stanarima i ostalima da koriste
          privjeske, kartice ili PIN-ove za brz i pouzdan ulaz u objekte.
          Poboljšajte sigurnost i praktičnost s našim rješenjima za kontrolu
          pristupa.
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
  };

  return (
    <div className="page home">
      <div className="hero">
        <div className={`slide`}>
          <div className="slide__image">
            <img src={heroSlide.image} alt="" />
          </div>

          <div className="slide__content">
            <h2>{heroSlide.subtitle}</h2>
            <h1>{heroSlide.title}</h1>
            <div className="slide__description">{heroSlide.description}</div>
            <div className="slide__actions">{heroSlide.actions}</div>
          </div>
        </div>

        <div className="hero__cards">
          <div className="card first">
            <h2>Zašto odabrati nas?</h2>

            <p>
              Naša tvrtka ima više od 10 godina iskustva u izradi i montaži
              sustava za kontrolu pristupa.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <div className="card">
            <div className="card__icon">
              <img src={heroIconOne} alt="" />
            </div>
            <h3>Sigurnost pristupa</h3>
            <p>
              Kontrola pristupa je sustav koji omogućuje kontrolu pristupa
              određenim područjima, prostorijama ili objektima.
            </p>
            <h4>100% sigurnost</h4>
          </div>
          <div className="card">
            <div className="card__icon">
              <img src={heroIconOne} alt="" />
            </div>
            <h3>Sigurnost pristupa</h3>
            <p>
              Kontrola pristupa je sustav koji omogućuje kontrolu pristupa
              određenim područjima, prostorijama ili objektima.
            </p>
            <h4>100% sigurnost</h4>
          </div>
          <div className="card">
            <div className="card__icon">
              <img src={heroIconOne} alt="" />
            </div>
            <h3>Sigurnost pristupa</h3>
            <p>
              Kontrola pristupa je sustav koji omogućuje kontrolu pristupa
              određenim područjima, prostorijama ili objektima.
            </p>
            <h4>100% sigurnost</h4>
          </div>
        </div>
      </div>

      <div className="about-us">
        <div className="content">
          <div className="subtitle">
            {" "}
            <hr />
            <h2>O nama</h2>
          </div>

          <h1>Saznajte više informacija o našoj tvrtki</h1>
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

          <Link className="btn" to="/o-nama">
            SAZNAJTE VIŠE
          </Link>
        </div>

        <div className="image">
          <img src={heroSlideImageFirst} alt="" />
          <div className="hero__numbers">
            <div className="item">
              <p className="number">10 +</p>
              <p className="text">Godina iskustva</p>
            </div>
            <div className="item">
              <p className="number">25 +</p>
              <p className="text"> Završenih projekata</p>
            </div>
            <div className="item">
              <p className="number">25 +</p>
              <p className="text"> Završenih projekata</p>
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
