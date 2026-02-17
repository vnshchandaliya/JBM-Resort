import React from "react";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import ResortFooter from "./components/Footer";
import Waterpark from "./pages/WaterPark";
import CavearcadePage from "./pages/Cavearcade";
import RoomPage from "./pages/Rooms";
import RoomDeluxe from "./pages/DeluxeRooms";
import SunsetCoveSuit from "./pages/Sunsetcove";
import ExecutiveRoom from "./pages/Executive";
import Villa from "./pages/Villas";
import SkyVilla from "./pages/Skyvilla";
import FusionLounge from "./pages/FusionLounge";

function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation ek hi baar chale
    });
  }, []);

  return (
    <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/waterpark" element={<Waterpark />} />
    <Route path="/waterpark-cavearcade/" element={<CavearcadePage />} />
    <Route path="/rooms" element={<RoomPage />} />
    <Route path="/rooms/deluxe" element={<RoomDeluxe /> } />
    <Route path="/rooms/sunsetcove" element= {<SunsetCoveSuit />} />
    <Route path="/rooms/executive" element= {<ExecutiveRoom />  } />
    <Route path="/villas" element={<Villa /> } />
    <Route path="/villas/skyvilla" element={<SkyVilla />  } />
    <Route path="/fusion-lounge" element={<FusionLounge />} />

  </Routes>
  <ResortFooter />
  </>
  )
}

export default App
