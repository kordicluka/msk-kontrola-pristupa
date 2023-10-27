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
import BC2000 from "./assets/images/devices/BC-2000.png";
import W1C from "./assets/images/devices/W1-C.png";
import W3C from "./assets/images/devices/W3-C.png";
import W2A from "./assets/images/devices/W2-A.png";
import K2 from "./assets/images/devices/K2.png";
import mReader from "./assets/images/devices/mReader.png";
import mReaderMax from "./assets/images/devices/mReaderMax.png";
import R1HandEM from "./assets/images/devices/R1-H&EM.png";
import R2 from "./assets/images/devices/R2.png";
import R3M from "./assets/images/devices/R3-&EM.png";
import R4M from "./assets/images/devices/R4.png";
import sTouch2 from "./assets/images/devices/sTouch2.png";
import sTouch2s from "./assets/images/devices/sTouch2s.png";
import BEC02 from "./assets/images/devices/BEC-02.png";
import BEC04 from "./assets/images/devices/BEC-04.png";

import Device from "./pages/Device";

export const Context = React.createContext();

function App() {
  const [projects, setProjects] = useState([
    {
      slug: "instalacija-wifi-kontrolera-u-novom-zagrbu",
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
      title: "BC-2000",
      slug: "bc-2000",
      description: `
        <ul>
          <li>All-metal Password standalone access control/reader</li>
          <li>Material: Zinc Alloy</li>
          <li>Input Voltage: DC12~24V</li>
          <li>Product Dimension: 170 * 83 * 26mm</li>
          <li>Idle Current: ≤50mA</li>
        </ul>`,
      shortDescription: "Metal Waterproof Keypad",
      image: BC2000,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "Wiegand 26-37 bit (HID card output Wiegand 26-37 automatically.) Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60°C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      content: `
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698407818/02_wddwdj.jpg' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698407818/04_k1c8i7.jpg' /></div>
        </div><div class='slide'>
        <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698407818/01_tgv2no.jpg' /></div>
        <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698407818/03_un9i3i.jpg' /></div>
      </div>`,
    },
    {
      title: "K2",
      slug: "k2",
      description: `
        <ul>
          <li>All-metal Password standalone access control/reader</li>
          <li>Material: Zinc Alloy</li>
          <li>Input Voltage: DC12~24V</li>
          <li>Product Dimension: 170 * 83 * 26mm</li>
          <li>Idle Current: ≤50mA</li>
        </ul>`,
      shortDescription: "Metal Waterproof Keypad",
      image: K2,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "Wiegand 26-37 bit (HID card output Wiegand 26-37 automatically.) Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60°C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      video:
        "https://res.cloudinary.com/dmqufec5z/video/upload/v1698407969/video_ibytzr.mp4",
      content: `
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698407968/02_ec20rj.jpg' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698407968/01_uygjym.jpg' /></div>
        </div><div class='slide'>
        <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698407968/04_trropy.jpg' /></div>
        <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698407968/05_rdrkpa.jpg' /></div>
      </div><div class='slide'>
      <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698407969/08_lewslp.jpg' /></div>
      <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698407969/07_m0d9nk.jpg' /></div>
    </div>`,
    },
    {
      title: "W1-C",
      slug: "w-1c",
      description: `
        <ul>
          <li>All-metal Password standalone access control/reader</li>
          <li>Material: Zinc Alloy</li>
          <li>Input Voltage: DC12~24V</li>
          <li>Product Dimension: 170 * 83 * 26mm</li>
          <li>Idle Current: ≤50mA</li>
        </ul>`,
      shortDescription: "Metal Waterproof Keypad",
      image: W1C,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "Wiegand 26-37 bit (HID card output Wiegand 26-37 automatically.) Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60°C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      content: `
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698410110/01_gbvjvz.jpg' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698410110/03_phrub9.jpg' /></div>
        </div><div class='slide'>
        <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698410110/02_irxuae.jpg' /></div>
      </div>`,
    },
    {
      title: "W2-A",
      slug: "w2-a",
      description: `
        <ul>
          <li>All-metal Password standalone access control/reader</li>
          <li>Material: Zinc Alloy</li>
          <li>Input Voltage: DC12~24V</li>
          <li>Product Dimension: 170 * 83 * 26mm</li>
          <li>Idle Current: ≤50mA</li>
        </ul>`,
      shortDescription: "Metal Waterproof Keypad",
      image: BC2000,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "Wiegand 26-37 bit (HID card output Wiegand 26-37 automatically.) Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60°C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      content: `
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698410302/03_v6i7bo.jpg' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698410302/01_uobgkg.jpg' /></div>
        </div><div class='slide'>
        <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698410302/02_j3g7tw.jpg' /></div>
        <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698410302/04_ip29tx.jpg' /></div>
      </div>`,
    },
    {
      title: "mReader",
      slug: "m-reader",
      description: `
        <ul>
          <li>All-metal Password standalone access control/reader</li>
          <li>Material: Zinc Alloy</li>
          <li>Input Voltage: DC12~24V</li>
          <li>Product Dimension: 170 * 83 * 26mm</li>
          <li>Idle Current: ≤50mA</li>
        </ul>`,
      shortDescription: "Metal Waterproof Keypad",
      image: mReader,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "Wiegand 26-37 bit (HID card output Wiegand 26-37 automatically.) Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60°C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      video:
        "https://res.cloudinary.com/dmqufec5z/video/upload/v1698411687/mReader_serial_products_promotion_video_ybs8oj.mp4",
      content: `
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698411697/A_zyq1zo.jpg' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698411698/D_ocijjj.jpg' /></div>
        </div><div class='slide'>
        <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698411698/mReader_datasheet_ffdqix.jpg' /></div>
      </div>`,
    },
    {
      title: "mReaderMax",
      slug: "m-reader-max",
      description: `
        <ul>
          <li>All-metal Password standalone access control/reader</li>
          <li>Material: Zinc Alloy</li>
          <li>Input Voltage: DC12~24V</li>
          <li>Product Dimension: 170 * 83 * 26mm</li>
          <li>Idle Current: ≤50mA</li>
        </ul>`,
      shortDescription: "Metal Waterproof Keypad",
      image: mReaderMax,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "Wiegand 26-37 bit (HID card output Wiegand 26-37 automatically.) Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60°C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      content: `
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412034/1_ygno1j.jpg' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412035/2_ysguna.jpg' /></div>
        </div><div class='slide'>
        <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412035/mReader_MAX_datasheet_vtfusg.jpg' /></div>
      </div>`,
    },
    {
      title: "W3-C",
      slug: "w3-c",
      description: `
        <ul>
          <li>All-metal Password standalone access control/reader</li>
          <li>Material: Zinc Alloy</li>
          <li>Input Voltage: DC12~24V</li>
          <li>Product Dimension: 170 * 83 * 26mm</li>
          <li>Idle Current: ≤50mA</li>
        </ul>`,
      shortDescription: "Metal Waterproof Keypad",
      image: W3C,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "Wiegand 26-37 bit (HID card output Wiegand 26-37 automatically.) Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60°C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      content: `
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698411825/2_p5vbfi.jpg' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698411825/3_ozbqkb.jpg' /></div>
        </div><div class='slide'>
        <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698407818/01_tgv2no.jpg' /></div>
        <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698411825/1_njo0my.jpg' /></div>
      </div>`,
    },
    {
      title: "W2-A",
      slug: "w2-a",
      description: `
        <ul>
          <li>All-metal Password standalone access control/reader</li>
          <li>Material: Zinc Alloy</li>
          <li>Input Voltage: DC12~24V</li>
          <li>Product Dimension: 170 * 83 * 26mm</li>
          <li>Idle Current: ≤50mA</li>
        </ul>`,
      shortDescription: "Metal Waterproof Keypad",
      image: W2A,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "Wiegand 26-37 bit (HID card output Wiegand 26-37 automatically.) Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60°C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      content: `
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698411914/W2-A_01_jnnddw.jpg' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698411914/W2-A_02_rkwzix.jpg' /></div>
        </div><div class='slide'>
        <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698411914/W2-A_03_iwedhe.jpg' /></div>
        <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698411914/photobank_2_xfuvli.jpg' /></div>
      </div>`,
    },
    {
      title: "R1-H&EM",
      slug: "R1-H&EM",
      description: `
        <ul>
          <li>All-metal Password standalone access control/reader</li>
          <li>Material: Zinc Alloy</li>
          <li>Input Voltage: DC12~24V</li>
          <li>Product Dimension: 170 * 83 * 26mm</li>
          <li>Idle Current: ≤50mA</li>
        </ul>`,
      shortDescription: "Metal Waterproof Keypad",
      image: R1HandEM,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "Wiegand 26-37 bit (HID card output Wiegand 26-37 automatically.) Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60°C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      content: `
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412106/photobank_5_unnbaw.jpg' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412107/R1_jyqsur.png' /></div>
        </div><div class='slide'>
        <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412107/R1-1_p4u285.jpg' /></div>
      </div>`,
    },
    {
      title: "R2",
      slug: "r2",
      description: `
        <ul>
          <li>All-metal Password standalone access control/reader</li>
          <li>Material: Zinc Alloy</li>
          <li>Input Voltage: DC12~24V</li>
          <li>Product Dimension: 170 * 83 * 26mm</li>
          <li>Idle Current: ≤50mA</li>
        </ul>`,
      shortDescription: "Metal Waterproof Keypad",
      image: R2,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "Wiegand 26-37 bit (HID card output Wiegand 26-37 automatically.) Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60°C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      content: `
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412153/1_no7nyv.jpg' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412154/R2_lamksd.jpg' /></div>
        </div><div class='slide'>
        <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412154/2_l9kyy7.jpg' /></div>
      </div>`,
    },
    {
      title: "R3-M",
      slug: "r3-M",
      description: `
        <ul>
          <li>All-metal Password standalone access control/reader</li>
          <li>Material: Zinc Alloy</li>
          <li>Input Voltage: DC12~24V</li>
          <li>Product Dimension: 170 * 83 * 26mm</li>
          <li>Idle Current: ≤50mA</li>
        </ul>`,
      shortDescription: "Metal Waterproof Keypad",
      image: R3M,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "Wiegand 26-37 bit (HID card output Wiegand 26-37 automatically.) Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60°C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      content: `
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412277/photobank_4_loyhlf.jpg' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412279/R3_riyqst.png' /></div>
        </div>`,
    },
    {
      title: "R4-H&M",
      slug: "r4-H&M",
      description: `
        <ul>
          <li>All-metal Password standalone access control/reader</li>
          <li>Material: Zinc Alloy</li>
          <li>Input Voltage: DC12~24V</li>
          <li>Product Dimension: 170 * 83 * 26mm</li>
          <li>Idle Current: ≤50mA</li>
        </ul>`,
      shortDescription: "Metal Waterproof Keypad",
      image: R4M,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "Wiegand 26-37 bit (HID card output Wiegand 26-37 automatically.) Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60°C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      content: `
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412365/1_b8sdyl.jpg' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412365/1_b8sdyl.jpg' /></div>
        </div>
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412367/R4_vcbnvh.png' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412368/R4-1_h1qiyw.jpg' /></div>
        </div>
        `,
    },
    {
      slug: "s-touch2",
      title: "sTouch2",
      description: `
        <ul>
          <li>All-metal Password standalone access control/reader</li>
          <li>Material: Zinc Alloy</li>
          <li>Input Voltage: DC12~24V</li>
          <li>Product Dimension: 170 * 83 * 26mm</li>
          <li>Idle Current: ≤50mA</li>
        </ul>`,
      shortDescription: "Metal Waterproof Keypad",
      image: sTouch2,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "Wiegand 26-37 bit (HID card output Wiegand 26-37 automatically.) Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60°C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },
      video:
        "https://res.cloudinary.com/dmqufec5z/video/upload/v1698412573/sTouch2_product_promotion_video_45s__x264_wysjfu.mp4",
      content: `
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412574/sTouch2-1_wqasii.jpg' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412574/sTouch2-1_wqasii.jpg' /></div>
        </div>
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412571/sTouch2_electroplate-1_ewzcld.jpg' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698412570/8_x6gpbq.jpg' /></div>
        </div>
        `,
    },
    {
      title: "BEC-04",
      slug: "BEC-04",
      description: `
        <ul>
          <li>All-metal Password standalone access control/reader</li>
          <li>Material: Zinc Alloy</li>
          <li>Input Voltage: DC12~24V</li>
          <li>Product Dimension: 170 * 83 * 26mm</li>
          <li>Idle Current: ≤50mA</li>
        </ul>`,
      shortDescription: "Privjesci za ulazak",
      image: BEC04,
      specifications: {
        material: "Zinc Alloy",
        inputVoltage: "DC12~24V",
        idleCurrent: "≤50mA",
        cardReadingType: "125KHz: EM/HID 13.56MHz: MF/CPU/NFC (ISO14443A)",
        readingCardDistance: "125KHz: ≤5cm  13.56MHz: ≤2cm",
        outputFormatCard:
          "Wiegand 26-37 bit (HID card output Wiegand 26-37 automatically.) Keypad: 4 bit, 8 bit, virtual card number",
        workingTemperature: "-20~60°C",
        workingHumidity: "0~95% (no condensation)",
        productDimension: "170 * 83 * 26mm",
      },

      content: `
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698413278/BEC-03_s_pvhoso.png' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698413278/BEC-04_crni_uz4nbm.jpg' /></div>
        </div>
        <div class='slide'>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698413281/BEC-04_plavi_od8njq.png' /></div>
          <div class='image'><img src='https://res.cloudinary.com/dmqufec5z/image/upload/v1698413279/BEC-04_crveni_z5iuaf.png' /></div>
        </div>
        `,
    },
    {
      title: "BEC-02",
      slug: "BEC-02",
      description: `
        <ul>
          <li>All-metal Password standalone access control/reader</li>
          <li>Material: Zinc Alloy</li>
          <li>Input Voltage: DC12~24V</li>
          <li>Product Dimension: 170 * 83 * 26mm</li>
          <li>Idle Current: ≤50mA</li>
        </ul>`,
      shortDescription: "Kartica za ulazak",
      image: BEC02,
      specifications: {},
      content: `
       
        `,
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
