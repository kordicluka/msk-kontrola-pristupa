import React from "react";
import contactImage from "../assets/images/contact.jpg";

const Devices = () => {
  return (
    <div className="devices page">
      <div className="page__hero">
        <div className="image">
          <img src={contactImage} alt="About us" />
        </div>

        <h1>Uređaji</h1>
      </div>
    </div>
  );
};

export default Devices;
