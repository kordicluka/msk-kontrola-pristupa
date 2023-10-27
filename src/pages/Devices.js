import React, { useEffect, useState } from "react";
import contactImage from "../assets/images/contact.jpg";
import { Context } from "../App";
import "../styles/devices.scss";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Devices = () => {
  const { projects, setProjects, devices, setDevices } =
    React.useContext(Context);
  useEffect(() => {
    Aos.init({ duration: 1700 });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="devices page">
      <div className="page__hero">
        <div className="image">
          <img src={contactImage} alt="About us" />
        </div>

        <h1>Uređaji</h1>
      </div>

      <div className="devices">
        <div className="devices__container">
          {devices.map((device) => (
            <div
              className="device"
              key={device.slug}
              data-aos-once="false"
              data-aos="fade-up"
              data-aos-duration="350"
            >
              <div className="content">
                <div className="top">
                  <h3>{device.title}</h3>
                  <p>{device.shortDescription}</p>
                </div>
                <div className="bottom">
                  <Link className="outside__btn" to={`/uredaji/${device.slug}`}>
                    Pogledaj više
                  </Link>
                  <Link className="link" to={`/uredaji/${device.slug}`}>
                    Idi na stranicu
                  </Link>
                </div>
              </div>
              <div className="image">
                <img src={device.image} alt="" />
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default Devices;
