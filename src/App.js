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
import Device from "./pages/Device";

export const Context = React.createContext();

function App() {
  const [projects, setProjects] = useState([
    {
      slug: "projekt-1",
      title: "Instalacija WiFi kontrolera u Novom Zagrbu",
      shortDescription:
        "Vaša firma se ističe u industriji ki jednostavan ulazak. Vaša firma se ističe u industriji kontrole pristupa u zgradama, pružajući inovativna rješenja za siguran i jednostavan ulazak. ",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
      image: templateImage,
      address: "Adresa projekta 1",
      year: "2021",
      type: "Ulazi u zgrade",
      content:
        "<div class='slide'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div><div class='slide reverse'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div>",
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
      content:
        "<div class='slide'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div><div class='slide reverse'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div>",
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
      content:
        "<div class='slide'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div><div class='slide reverse'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div>",
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
      content:
        "<div class='slide'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div><div class='slide reverse'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div>",
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
      content:
        "<div class='slide'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div><div class='slide reverse'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div>",

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
      content:
        "<div class='slide'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div><div class='slide reverse'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div>",
      type: "Zatvaranje spremišta",
    },
  ]);

  const [devices, setDevices] = useState([
    {
      title: "sKey 2",
      slug: "skey-2",
      image: templateImage,
      description:
        "<ul style='margin-left: 1rem;display: flex; flex-direction: column; gap: .5rem; align-items: flex-start; '><li>All-metal Password standalone access</li><li>control/reader</li><li>Material:Zinc Alloy</li><li>Input Voltage:DC12~24V</li><li>Product Dimension:170 * 83 * 26mm</li><li>Idle Current:≤50mA</li></ul>",
      shortDescription: "All-metal Password standalone access",
      image: sKey2,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "wiegand 26-37 bit (HID card output wiegand 26-37 automatically.)Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60° C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      content:
        "<div class='slide'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div><div class='slide reverse'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div>",
    },
    {
      title: "sKey 2",
      slug: "skey-22",
      image: templateImage,
      description:
        "<ul style='margin-left: 1rem;display: flex; flex-direction: column; gap: .5rem; align-items: flex-start; '><li>All-metal Password standalone access</li><li>control/reader</li><li>Material:Zinc Alloy</li><li>Input Voltage:DC12~24V</li><li>Product Dimension:170 * 83 * 26mm</li><li>Idle Current:≤50mA</li></ul>",
      shortDescription: "All-metal Password standalone access",
      image: sKey2,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "wiegand 26-37 bit (HID card output wiegand 26-37 automatically.)Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60° C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      content:
        "<div class='slide'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div><div class='slide reverse'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div>",
    },
    {
      title: "sKey 2",
      slug: "skey-23",
      image: templateImage,
      description:
        "<ul style='margin-left: 1rem;display: flex; flex-direction: column; gap: .5rem; align-items: flex-start; '><li>All-metal Password standalone access</li><li>control/reader</li><li>Material:Zinc Alloy</li><li>Input Voltage:DC12~24V</li><li>Product Dimension:170 * 83 * 26mm</li><li>Idle Current:≤50mA</li></ul>",
      shortDescription: "All-metal Password standalone access",
      image: sKey2,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "wiegand 26-37 bit (HID card output wiegand 26-37 automatically.)Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60° C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      content:
        "<div class='slide'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div><div class='slide reverse'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div>",
    },
    {
      title: "sKey 2",
      slug: "skey-24",
      image: templateImage,
      description:
        "<ul style='margin-left: 1rem;display: flex; flex-direction: column; gap: .5rem; align-items: flex-start; '><li>All-metal Password standalone access</li><li>control/reader</li><li>Material:Zinc Alloy</li><li>Input Voltage:DC12~24V</li><li>Product Dimension:170 * 83 * 26mm</li><li>Idle Current:≤50mA</li></ul>",
      shortDescription: "All-metal Password standalone access",
      image: sKey2,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "wiegand 26-37 bit (HID card output wiegand 26-37 automatically.)Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60° C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      content:
        "<div class='slide'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div><div class='slide reverse'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div>",
    },
    {
      title: "sKey 2",
      slug: "skey-25",
      image: templateImage,
      description:
        "<ul style='margin-left: 1rem;display: flex; flex-direction: column; gap: .5rem; align-items: flex-start; '><li>All-metal Password standalone access</li><li>control/reader</li><li>Material:Zinc Alloy</li><li>Input Voltage:DC12~24V</li><li>Product Dimension:170 * 83 * 26mm</li><li>Idle Current:≤50mA</li></ul>",
      shortDescription: "All-metal Password standalone access",
      image: sKey2,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "wiegand 26-37 bit (HID card output wiegand 26-37 automatically.)Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60° C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      content:
        "<div class='slide'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div><div class='slide reverse'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div>",
    },
    {
      title: "sKey 2",
      slug: "skey-29",
      image: templateImage,
      description:
        "<ul style='margin-left: 1rem;display: flex; flex-direction: column; gap: .5rem; align-items: flex-start; '><li>All-metal Password standalone access</li><li>control/reader</li><li>Material:Zinc Alloy</li><li>Input Voltage:DC12~24V</li><li>Product Dimension:170 * 83 * 26mm</li><li>Idle Current:≤50mA</li></ul>",
      shortDescription: "All-metal Password standalone access",
      image: sKey2,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "wiegand 26-37 bit (HID card output wiegand 26-37 automatically.)Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60° C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      link: "https://sebury.com/index.php/products_v_107_473.html",
      content:
        "<div class='slide'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div><div class='slide reverse'> <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1697821559/mother-daughter-with-shopping-bag_bdjmet.jpg' /></div><div class='content'><h1>Naslov</h1><p>1.Adopt the non-electromagnetic shielding metal access control patent technology, patent NO.:CN210610015U<p/> <p>2.Innovative All-metal Design,no antenna window, Large metal keypad, European and American Style<p/> <p>3.125KHz and 13.56MHz Dual-band antenna, support  EM/HID/MF/NFC cards<p/> <p>4.Standalone mode, anti-pass back mode: wiegand input, external card reader can be connected<p/> <p>5.Reader mode: wiegand ouput, LED and Buzzer control input<p/> <p>6.Fully potted process, IP68<p/></div></div>",
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
              <Route path="/uredaji/:slug" element={<Device />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
