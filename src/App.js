import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import React from "react";
import { useTranslation } from "react-i18next";
import Websites from "./pages/Websites";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import i18n from "./i18n.js";
import { useState } from 'react';
import { I18nextProvider } from "react-i18next";
import "./App.css";

function App() {

  const { t } = useTranslation();

  const [ setLanguage ] = useState('en');

  const lngs = {
    en: { nativeName: "English" },
    es: { nativeName:'Español' }
  }

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng)
  };


  return (
    <div className="stars">
      <I18nextProvider i18={i18n}>
      <div className="App">
        <Router>

          <Navbar />

          <Routes>

            <Route path="/" exact Component={Home} />
 
            <Route path="/websites" exact Component={Websites} />

            <Route path="/about" exact Component={About} />

            <Route path="/contact" exact Component={Contact} />

          </Routes>

          <Footer lngs={lngs} changeLangauge={changeLanguage} useTranslation={useTranslation} t={t} />
          
        </Router>

    </div>
    </I18nextProvider>
    </div>
  );
}

export default App;
