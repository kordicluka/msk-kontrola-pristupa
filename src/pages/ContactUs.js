import React, { useEffect, useState } from "react";
import contactImage from "../assets/images/contact.jpg";
import facebook_logo from "../assets/images/socials/facebook_logo.png";
import instagram_logo from "../assets/images/socials/instagram_logo.png";
import twitter_logo from "../assets/images/socials/twitter_logo.png";
import tiktok_logo from "../assets/images/socials/tiktok_logo.png";
import pinterest_logo from "../assets/images/socials/pinterest_logo.png";
import mapImage from "../assets/images/map.png";
import "../styles/contact.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1700 });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contact page">
      <div className="page__hero">
        <div className="image">
          <img src={contactImage} alt="About us" />
        </div>

        <h1>Kontaktirajte nas</h1>
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
            <img src={twitter_logo} alt="twitter_logo" />
            <img src={tiktok_logo} alt="tiktok_logo" />
            <img src={pinterest_logo} alt="pinterest_logo" />
          </div>
        </div>
        <form className="form">
          <h1>
            Kontaktirajte nas ispunjavanjem <span>forme.</span>
          </h1>

          <p>
            Potruditi ćemo se odgovoriti na vaš upit u najkraćem mogućem roku.
          </p>

          <div className="row">
            <input type="text" placeholder="Ime i prezime *" />
            <input type="text" placeholder="Broj telefona *" />
          </div>

          <input type="text" placeholder="Broj telefona *" />
          <input type="text" placeholder="Adresa" />

          <textarea placeholder="Poruka *"></textarea>

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

export default ContactUs;
