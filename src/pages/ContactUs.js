import React, { useEffect, useState, useRef } from "react";
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
import emailjs from "@emailjs/browser";

const ContactUs = () => {
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

export default ContactUs;
