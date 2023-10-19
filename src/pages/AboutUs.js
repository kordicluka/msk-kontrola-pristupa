import React from "react";
import contactImage from "../assets/images/contact.jpg";

const AboutUs = () => {
  return (
    <div className="page about__us">
      <div className="page__hero">
        <div className="image">
          <img src={contactImage} alt="About us" />
        </div>

        <h1>O nama</h1>
      </div>
    </div>
  );
};

export default AboutUs;
