import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../styles/header.scss";
import facebook_logo from "../assets/images/socials/facebook_logo.png";
import instagram_logo from "../assets/images/socials/instagram_logo.png";
import twitter_logo from "../assets/images/socials/twitter_logo.png";
import tiktok_logo from "../assets/images/socials/tiktok_logo.png";
import pinterest_logo from "../assets/images/socials/pinterest_logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="top__header">
        <div className="contact">
          <div>
            <span>Broj telefona:</span>
            <span>091 - 390 / 5524</span>
          </div>
          <div>
            <span>E-mail: </span>

            <span>info@msk.hr</span>
          </div>
        </div>
        <div className="socials">
          <img src={facebook_logo} alt="facebook_logo" />
          <img src={instagram_logo} alt="instagram_logo" />
          <img src={twitter_logo} alt="twitter_logo" />
          <img src={tiktok_logo} alt="tiktok_logo" />
          <img src={pinterest_logo} alt="pinterest_logo" />
        </div>
      </div>
      <div className="navbar">
        <div className="navbar__left">
          <Link className="logo" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navbar__center">
          <NavLink to="/" exact>
            Početna
          </NavLink>
          <NavLink to="/uredaji">Uređaji</NavLink>
          <NavLink to="/projekti">Projekti</NavLink>
          <NavLink to="/o-nama">O nama</NavLink>
        </div>
        <div className="navbar__right">
          <NavLink className="btn" to="/kontaktiraj-nas">
            Kontaktirajte nas
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
