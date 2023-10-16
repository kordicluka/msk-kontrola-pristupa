import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo-white.png";
import "../styles/header.scss";

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
