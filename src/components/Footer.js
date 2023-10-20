import React, { useContext } from "react";
import "../styles/footer.scss";
import logoWhite from "../assets/images/logo-white.png";
import { Link } from "react-router-dom";
import { Context } from "../App";
import facebook_logo from "../assets/images/socials/facebook_logo.png";
import instagram_logo from "../assets/images/socials/instagram_logo.png";
import twitter_logo from "../assets/images/socials/twitter_logo.png";
import tiktok_logo from "../assets/images/socials/tiktok_logo.png";
import pinterest_logo from "../assets/images/socials/pinterest_logo.png";

const Footer = () => {
  const { projects } = useContext(Context);

  return (
    <>
      <div className={"footer"}>
        <div className="box-container">
          <div className="box first">
            <img src={logoWhite} alt="logo" className="logo" />
            <p>
              Vaša firma se ističe u industriji kontrole pristupa u zgradama,
              pružajući inovativna rješenja za siguran i jednostavan ulazak.
            </p>
            <div className="socials">
              <img src={facebook_logo} alt="facebook_logo" />
              <img src={instagram_logo} alt="instagram_logo" />
              <img src={twitter_logo} alt="twitter_logo" />
              <img src={tiktok_logo} alt="tiktok_logo" />
              <img src={pinterest_logo} alt="pinterest_logo" />
            </div>
          </div>
          <div className="box">
            <h3>Menu </h3>

            <ul>
              <li>
                <Link to="/"> Početna </Link>
              </li>
              <li>
                <Link to="/"> Uređaji</Link>
              </li>
              <li>
                <Link to="/"> Projekti</Link>
              </li>
              <li>
                <Link to="/"> O nama</Link>
              </li>
              <li>
                <Link to="/"> Kućanski aparati</Link>
              </li>
            </ul>
          </div>

          <div className="box">
            <h3> Projekti</h3>

            <ul>
              <li>
                <Link to="/"> Projekt 1 </Link>
              </li>
              <li>
                <Link to="/"> Projekt 2</Link>
              </li>
              <li>
                <Link to="/"> Projekt 3</Link>
              </li>
              <li>
                <Link to="/"> Projekt 4</Link>
              </li>
              <li>
                <Link to="/"> Pogledajte sve projekte</Link>
              </li>
            </ul>
          </div>

          <div className="box">
            <h3> Kontakt</h3>

            <ul>
              <li>
                Pozivom na broj telefona:{" "}
                <a href="tel:0917344974">091 - 734 / 4974</a>{" "}
              </li>
              <li>
                Putem e-maila: <a href="mailto:info@msk.hr">info@msk.hr</a>
              </li>
              <li>Ispunjavanjem forme klikom na link ispod.</li>
              <Link className="btn" to="/kontaktirajte-nas">
                {" "}
                Kontaktirajte nas
              </Link>
            </ul>
          </div>
        </div>

        <div className="rights">
          <hr />
          <div className="bottom-container">
            <div className="links">
              <Link to="/">Pravila o privatnosti</Link>
              <Link to="/">Politika kolačića</Link>
              <Link to="/">O nama</Link>
            </div>
            <p>© 2023. Sva prava pridržana. </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
