import { Heart, ChevronDown } from "lucide-react";

import CountBox from "../CountBox";

import { ROSE } from "../../styles/theme";

import COUPLE_PHOTO from "../../assets/couplePhoto.png";

export default function Hero({ days, hours, mins, secs }) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        textAlign: "center",
        overflow: "hidden",
        padding: "0 1.5rem",
      }}
    >

      {/* Soft overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.08) 100%)",
          zIndex: 1,
        }}
      />

      {/* Names + invitation text */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "13vh",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px, 8vw, 40px)",
            fontWeight: 600,
            color: ROSE.primary,
            margin: "0 0 6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          Aman
          <Heart
            size={24}
            color={ROSE.primary}
            fill={ROSE.primary}
          />
          Pooja
        </h1>

        <p
          style={{
            color: ROSE.textSoft,
            fontSize: 15,
            margin: "6px 0 18px",
          }}
        >
          Forever starts here.
        </p>

        <p
          style={{
            color: ROSE.text,
            fontSize: 15,
            lineHeight: 1.5,
            maxWidth: 300,
            margin: "0 auto",
          }}
        >
          We invite you to join us on our special day.
        </p>
      </div>

      {/* Countdown */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "22vh",
          zIndex: 2,
          display: "flex",
          gap: 10,
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "0 1rem",
        }}
      >
        <CountBox value={days} label="Days" />
        <CountBox value={hours} label="Hours" />
        <CountBox value={mins} label="Minutes" />
        <CountBox value={secs} label="Seconds" />
      </div>

      {/* Swipe indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "3vh",
          left: 0,
          right: 0,
          zIndex: 2,
          color: ROSE.text,
          fontSize: 12,
          letterSpacing: "0.1em",
        }}
      >
        SWIPE UP

        <ChevronDown
          size={18}
          style={{
            display: "block",
            margin: "6px auto 0",
          }}
        />
      </div>
    </section>
  );
}