import { Heart, Volume2 } from "lucide-react";

import { ROSE } from "./styles/theme";
import useCountdown from "./hooks/useCountdown";
import Hero from "./components/sections/Hero";
import LoveStory from "./components/sections/LoveStory";
import Families from "./components/sections/Families";
import Timeline from "./components/sections/Timeline";
import RSVP from "./components/sections/RSVP";
import Venue from "./components/sections/Venue";
import Footer from "./components/sections/Footer";
import { WEDDING_DATE } from "./data/wedding";
import COUPLE_PHOTO from "./assets/couplePhoto.png";

function App() {
  const { days, hours, mins, secs } = useCountdown(WEDDING_DATE);

  return (
    <div style={{ fontFamily: "'Poppins', 'Segoe UI', sans-serif", color: ROSE.text, minHeight: "100vh", position: "relative" }}>
      {/* <div style={{ position: "absolute", inset: 5, backgroundImage: `url(${COUPLE_PHOTO})`, backgroundSize: "100%", backgroundPosition: "center bottom"}} /> */}
      <div className="scroll-photo-bg" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;1,500&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        input, select, textarea {
          width: 100%;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1.5px solid ${ROSE.line};
          background: #fff;
          color: ${ROSE.text};
          outline: none;
        }
        input:focus, select:focus, textarea:focus { border-color: ${ROSE.primary}; }
        .field-label { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 500; color: ${ROSE.primaryDeep}; margin-bottom: 8px; }
      `}</style>

      {/* <div style={{ position: "fixed", inset: 0, background: "linear-gradient(rgba(251,243,238,0.82), rgba(251,243,238,0.94))", zIndex: 0 }} /> */}

      <div style={{ position: "relative", zIndex: 1 }}>

      {/* floating buttons, mimicking app-style corner controls */}
      {/* <div style={{ position: "sticky", top: 0, zIndex: 5, display: "flex", justifyContent: "space-between", padding: "16px 20px", pointerEvents: "none" }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${ROSE.gradientA}, ${ROSE.gradientB})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(217,79,112,0.3)", pointerEvents: "auto" }}>
          <Heart size={18} color="#fff" fill="#fff" />
        </div>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${ROSE.gradientA}, ${ROSE.gradientB})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(217,79,112,0.3)", pointerEvents: "auto" }}>
          <Volume2 size={18} color="#fff" />
        </div>
      </div> */}

      <Hero days={days} hours={hours} mins={mins} secs={secs} />
      <div style={{ backgroundColor: "#fff3", backdropFilter: "blur(12px)"}}>
      <LoveStory />
      <Families />
      <Timeline />
      {/* <RSVP /> */}
      <Venue />
      <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;