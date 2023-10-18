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
    <>
      <div className="top__header">
        <div className="contact">
          <div>
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <span>091 - 390 / 5524</span>
          </div>
          <div>
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
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <span>info@msk.hr</span>
          </div>
        </div>

        <div className="center">
          <span>Ulica 1, 10000 Zagreb, Hrvatska</span>
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
          </NavLink>{" "}
          <NavLink to="/o-nama">O nama</NavLink>
          <NavLink to="/projekti">Projekti</NavLink>
          <NavLink to="/uredaji">Uređaji</NavLink>
        </div>
        <div className="navbar__right">
          <NavLink className="btn" to="/kontaktiraj-nas">
            Kontaktirajte nas
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
