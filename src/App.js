import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Devices from "./pages/Devices";
import ContactUs from "./pages/ContactUs";
import Projects from "./pages/Projects";
import templateImage from "./assets/images/template-image.jpg";
import projectImageFirst from "./assets/images/project-1.jpg";
import projectImageSecond from "./assets/images/project-2.jpg";
import projectImageThird from "./assets/images/project-3.jpg";
import logo from "./assets/images/logo192.png";
import sKey2 from "./assets/images/devices/sKey-2.jpg";

export const Context = React.createContext();

function App() {
  const [projects, setProjects] = useState([
    {
      slug: "projekt-1",
      title: "Projekt 1",
      shortDescription: "Vaša firma se ističe u industriji kontrole prisazak. ",
      description: "Opis projekta 1",
      image: templateImage,
      address: "Adresa projekta 1",
      year: "2021",
      content: "Sadržaj projekta 1",
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
      <Context.Provider value={{ projects, setProjects }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/o-nama" element={<AboutUs />} />
              <Route path="/uredaji" element={<Devices />} />
              <Route path="/kontaktiraj-nas" element={<ContactUs />} />
              <Route path="/projekti" element={<Projects />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
