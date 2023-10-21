import React, { useEffect, useState } from "react";
import contactImage from "../assets/images/contact.jpg";
import { Context } from "../App";
import { Link } from "react-router-dom";
import "../styles/device.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

const Device = () => {
  const { projects, setProjects, devices, setDevices } =
    React.useContext(Context);
  useEffect(() => {
    Aos.init({ duration: 1700 });
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const deviceSlug = location.pathname.split("/")[2];

  const device = devices.find((device) => device.slug === deviceSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function formatTitle(title) {
    // Assuming title is in camelCase, we'll split it and capitalize each word.
    return title
      .split(/(?=[A-Z])/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="page device">
      <div className="device__hero">
        <div className="image">
          <img src={device.image} alt={device.title} />
        </div>
        <div className="content">
          <h1>{device.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: device.description }} />
        </div>
      </div>

      <div className="device__specifications">
        {Object.entries(device.specifications).map(([title, value]) => (
          <div className="item" key={title}>
            <div className="title">{formatTitle(title)}</div>
            <div className="value">{value}</div>
          </div>
        ))}
      </div>

      <div
        className="device__content"
        dangerouslySetInnerHTML={{ __html: device.content }}
      ></div>

      <div className="devices">
        <h1>
          {" "}
          Pogledajte ostale <span>uredaje</span>{" "}
        </h1>
        <div className="devices__container">
          {devices.map((device) => (
            <div className="device" key={device.slug}>
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

export default Device;
