import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Devices from "./pages/Devices";
import ContactUs from "./pages/ContactUs";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import templateImage from "./assets/images/template-image.jpg";
import projectImageFirst from "./assets/images/project-1.jpg";
import projectImageSecond from "./assets/images/project-2.jpg";
import projectImageThird from "./assets/images/project-3.jpg";
import logo from "./assets/images/logo192.png";
import sKey2 from "./assets/images/devices/sKey-2.jpg";

export const Context = React.createContext();

function App() {
  const ProjectOneContent = (
    <>
      <div
        className="slide"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "60vh",
        }}
      >
        <div
          className="image"
          style={{ width: "50%", height: "60vh", overflow: "hidden" }}
        >
          <img
            src="https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
      <div
        className="slide reverse"
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "60vh",
        }}
      >
        <div
          className="content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
            paddingLeft: "5%",
            height: "60vh",
            gap: "1rem",
          }}
        >
          <h1
            style={{
              fontFamily: "Roboto Bold, sans-serif",
              fontSize: "35px",
              color: "black",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
              textAlign: "left",
              maxWidth: "100%",
            }}
          >
            Sadržaj projekta 1
          </h1>
          <p
            style={{
              fontFamily: "Roboto Regular, sans-serif",
              fontSize: "13px",
              color: "black",
              maxWidth: "100%",
              textAlign: "left",
            }}
          >
            Your project content goes here.
          </p>
        </div>
      </div>
    </>
  );

  const [projects, setProjects] = useState([
    {
      slug: "projekt-1",
      title: "Projekt 1",
      shortDescription: "Vaša firma se ističe u industriji kontrole prisazak. ",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
      image: templateImage,
      address: "Adresa projekta 1",
      year: "2021",
      content:
        "<div className='slide' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: '60vh' }}><div className='image' style={{ width: '50%', height: '60vh', overflow: 'hidden' }}><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} /></div></div><div className='slide reverse' style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'center', width: '100%', height: '60vh' }}><div className='content' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50%', paddingLeft: '5%', height: '60vh', gap: '1rem' }}><h1 style={{ fontFamily: 'Roboto Bold, sans-serif', fontSize: '35px', color: 'black', textTransform: 'uppercase', marginBottom: '0.5rem', textAlign: 'left', maxWidth: '100%' }}>Sadržaj projekta 1</h1><p style={{ fontFamily: 'Roboto Regular, sans-serif', fontSize: '13px', color: 'black', maxWidth: '100%', textAlign: 'left' }}>Your project content goes here.</p></div></div>",
      type: "Ulazi u zgrade",
    },
    {
      slug: "projekt-2",
      title: "Projekt 2",
      shortDescription:
        "Vaša firma se ističe u industriji ki jednostavan ulazak. Vaša firma se ističe u industriji kontrole pristupa u zgradama, pružajući inovativna rješenja za siguran i jednostavan ulazak. ",
      description: "Opis projekta 1",
      image: templateImage,
      address: "Adresa projekta 1",
      year: "2021",
      content: "Sadržaj projekta 1",
      type: "Ulazi u zgrade",
    },
    {
      slug: "projekt-3",
      title: "Projekt 3",
      shortDescription:
        "Vaša firma se ističe u industriji k i jednostavan ulazak. Vaša firma se ističe u industriji kontrole pristupa u zgradama, pružajući inovativna rješenja za siguran i jednostavan ulazak. ",
      description: "Opis projekta 1",
      image: templateImage,
      address: "Adresa projekta 1",
      year: "2021",
      content: "Sadržaj projekta 1",
      type: "Ulazi u zgrade",
    },
    {
      slug: "projekt-4",
      title: "Projekt 4",
      shortDescription:
        "Vaša firma se ističe u i inovativna rješenja za siguran i jednostavan ulazak. ",
      description: "Opis projekta 1",
      image: templateImage,
      address: "Adresa projekta 1",
      year: "2021",
      content: "Sadržaj projekta 1",
      type: "Ulazi u zgrade",
    },
    {
      slug: "projekt-5",
      title: "Projekt 5",
      shortDescription:
        "Vaša firma se ističe u industriji kontrole pristupa u zgradama, pružajući ",
      description: "Opis projekta 1",
      image: templateImage,
      address: "Adresa projekta 1",
      year: "2021",
      content: "Sadržaj projekta 1",
      type: "Zatvaranje spremišta",
    },
    {
      slug: "projekt-6",
      title: "Projekt 6",
      shortDescription:
        "Vaša firma se ističevan ulazak. Vaša firma se ističe u industriji kontrole pristupa u zgradama, pružajući inovativna rješenja za siguran i jednostavan ulazak. ",
      description: "Opis projekta 1",
      image: templateImage,
      address: "Adresa projekta 1",
      year: "2021",
      content: "Sadržaj projekta 1",
      type: "Zatvaranje spremišta",
    },
  ]);

  const [devices, setDevices] = useState([
    {
      title: "sKey 2",
      slug: "skey-2",
      image: templateImage,
      description:
        "All-metal Password standalone access, control/reader, Material:Zinc Alloy, Input Voltage:DC12~24V, Idle Current:≤50mA, Product Dimension:170 * 83 * 26mm     ",
      shortDescription: "All-metal Password standalone access",
      image: sKey2,
    },
    {
      title: "sKey 2",
      slug: "skey-2",
      image: templateImage,
      shortDescription: "All-metal Password standalone access",

      description:
        "All-metal Password standalone access, control/reader, Material:Zinc Alloy, Input Voltage:DC12~24V, Idle Current:≤50mA, Product Dimension:170 * 83 * 26mm     ",
      image: sKey2,
    },
    {
      title: "sKey 2",
      slug: "skey-2",
      image: templateImage,
      shortDescription: "All-metal Password standalone access",

      description:
        "All-metal Password standalone access, control/reader, Material:Zinc Alloy, Input Voltage:DC12~24V, Idle Current:≤50mA, Product Dimension:170 * 83 * 26mm     ",
      image: sKey2,
    },
    {
      title: "sKey 2",
      slug: "skey-2",
      shortDescription: "All-metal Password standalone access",

      image: templateImage,
      description:
        "All-metal Password standalone access, control/reader, Material:Zinc Alloy, Input Voltage:DC12~24V, Idle Current:≤50mA, Product Dimension:170 * 83 * 26mm     ",
      image: sKey2,
    },
    {
      title: "sKey 2",
      slug: "skey-2",
      image: templateImage,
      shortDescription: "All-metal Password standalone access",

      description:
        "All-metal Password standalone access, control/reader, Material:Zinc Alloy, Input Voltage:DC12~24V, Idle Current:≤50mA, Product Dimension:170 * 83 * 26mm     ",
      image: sKey2,
    },
    {
      title: "sKey 2",
      slug: "skey-2",
      image: templateImage,
      shortDescription: "All-metal Password standalone access",

      description:
        "All-metal Password standalone access, control/reader, Material:Zinc Alloy, Input Voltage:DC12~24V, Idle Current:≤50mA, Product Dimension:170 * 83 * 26mm     ",
      image: sKey2,
    },
  ]);

  useEffect(() => {
    const originalTitle = document.title; // Store the original title

    // Update the page title
    document.title = "MSK | Kontrola pristupa";

    // Change the favicon (React logo)
    const link =
      document.querySelector("link[rel='icon']") ||
      document.createElement("link");
    link.rel = "icon";
    link.href = logo; // Replace with the path to your new favicon
    document.head.appendChild(link);

    // Restore the original title when the component unmounts
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <>
      <Context.Provider value={{ projects, setProjects, devices, setDevices }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/o-nama" element={<AboutUs />} />
              <Route path="/uredaji" element={<Devices />} />
              <Route path="/kontaktiraj-nas" element={<ContactUs />} />
              <Route path="/projekti" element={<Projects />} />
              <Route path="/projekti/:slug" element={<Project />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
