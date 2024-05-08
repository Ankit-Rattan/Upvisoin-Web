import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Home from "./Home";
import AllTeam from "./components/AllTeam";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Alumuni from "./components/Alumuni";
import FullGalleryPage from "./components/FullGalleryPage";
import EventFull from "./components/EventFull";
import Hero from "./components/Hero";
import Navneet from "./components/Navneet";
import Aryan from "./components/Aryan";
import RahulSinha from "./components/RahulSinha";
import SumanAbhishek from "./components/SumanAbhishek";
import Adityasharma from "./components/Adityasharma";
import AyushPranav from "./components/AyushPranav";
import Open from "./components/Open";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <BrowserRouter>
            <div>
              <Routes>
                <Route path="/hero" element={<Hero/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/Contact-Us" element={<Footer />} />
                <Route path="/allteam" element={<AllTeam />} />
                <Route path="/alumni" element={<Alumuni />} />
                <Route path="/fullgallery" element={<FullGalleryPage />} />
                <Route path="/eventfull" element={<EventFull />} />
                <Route path="/navneet" element={<Navneet/>} />
                <Route path="/aryansrivastav" element={<Aryan/>} />
                <Route path="/rahulsinha" element={<RahulSinha/>} />
                <Route path="/aksuman" element={<SumanAbhishek/>} />
                <Route path="/adityasharma" element={<Adityasharma/>} />
                <Route path="/open" element={<Open/>} />
                <Route path="/ayushpranav" element={<AyushPranav/>} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
