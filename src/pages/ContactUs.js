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
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  name: yup.string().required("Ime i prezime je obavezno polje."),
  email: yup
    .string()
    .email("Unesite ispravnu e-mail adresu.")
    .required("E-mail je obavezno polje."),
  telephone: yup.string().required("Broj telefona je obavezno polje."),
});

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      telephone: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
        <form className="form" onSubmit={formik.handleSubmit}>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            <input
              type="text"
              placeholder="Broj telefona *"
              id="telephone"
              name="telephone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.telephone}
            />
          </div>

          <input
            type="text"
            placeholder="E-mail *"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <input
            type="text"
            placeholder="Adresa"
            id="address"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />

          <textarea
            placeholder="Poruka *"
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
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
