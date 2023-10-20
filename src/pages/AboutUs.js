import React from "react";
import contactImage from "../assets/images/contact.jpg";
import heroSlideImageFirst from "../assets/images/hero-slide-1.jpg";
import ProgressionCircle from "../components/ProgressionCircle";
import "../styles/aboutUs.scss";

const AboutUs = () => {
  return (
    <div className="page about__us">
      <div className="page__hero">
        <div className="image">
          <img src={contactImage} alt="About us" />
        </div>

        <h1>O nama</h1>
      </div>

      <div className="about-us">
        <div className="content">
          {" "}
          <h1>
            <span>O</span> nama
          </h1>
          <p>
            Vaša firma se ističe u industriji kontrole pristupa u zgradama,
            pružajući inovativna rješenja za siguran i jednostavan ulazak. Naša
            tehnologija se temelji na sigurnim sebury uređajima, omogućujući
            stanarima i ostalima da koriste privjeske, kartice ili PIN-ove za
            brz i pouzdan ulaz u objekte
          </p>
          <div className="circle__container">
            <ProgressionCircle value={99} text={"Zadovoljni klijenti"} />
            <h4 className="circle__text">ZADOVOLJNI KLIJENTI</h4>
          </div>
          <div className="list">
            <div className="item">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <div className="item__content">
                <h3>Kvaliteta</h3>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s psum has been tstandard dummy text ever since
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <div className="item__content">
                <h3>Održivost</h3>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s psum has been tstandard dummy text ever since
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <div className="item__content">
                <h3>Sigurnost</h3>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s psum has been tstandard dummy text ever since
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={heroSlideImageFirst} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
