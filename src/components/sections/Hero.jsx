import { Heart, ChevronDown } from "lucide-react";

import CountBox from "../CountBox";

import { ROSE } from "../../styles/theme";

import COUPLE_PHOTO from "../../assets/couplePhoto.png";

export default function Hero({
  days,
  hours,
  mins,
  secs,
}) {
  return (
    <>
      <section
              style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                textAlign: "center",
                padding: "2rem 1.5rem 2.5rem",
                overflow: "hidden",
              }}
            >
              {/* <div className="hero-couple-photo" style={{ backgroundImage: `url(${COUPLE_PHOTO})`}}/> */}
      
              <div style={{ position: "relative" }}>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 600, color: ROSE.primary, margin: "0 0 6px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                  Aman <Heart size={26} color={ROSE.primary} fill={ROSE.primary} /> Pooja
                </h1>
                <p style={{ color: ROSE.textSoft, fontSize: 15, margin: "6px 0 20px" }}>Forever starts here.</p>
                <p style={{ color: ROSE.text, fontSize: 15, maxWidth: 300, margin: "0 auto 28px" }}>
                  We invite you to join us on our special day.
                </p>
      
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                  <CountBox value={days} label="Days" />
                  <CountBox value={hours} label="Hours" />
                  <CountBox value={mins} label="Minutes" />
                  <CountBox value={secs} label="Seconds" />
                </div>
      
                <div style={{ marginTop: 30, color: ROSE.text, fontSize: 12, letterSpacing: "0.1em" }}>
                  SWIPE UP
                  <ChevronDown size={18} style={{ display: "block", margin: "6px auto 0" }} />
                </div>
              </div>
            </section>
    </>
  );
}