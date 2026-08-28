import { Music2 } from "lucide-react";

import { ROSE, SHADOW, FONT } from "../../styles/theme";

export default function MusicPopup({
  open,
  onPlay,
  onSkip,
}) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        padding: 20,

        background: "rgba(30, 20, 25, 0.48)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="music-popup-title"
        style={{
          width: "100%",
          maxWidth: 380,

          background: ROSE.card,

          borderRadius: 20,

          padding: "22px 24px 24px",

          textAlign: "center",

          boxShadow: SHADOW.large,

          animation: "musicPopupIn 0.45s ease-out",
        }}
      >
        {/* Music Icon */}
        <div
          style={{
            width: 66,
            height: 66,

            margin: "0 auto 18px",

            borderRadius: "50%",

            background: `linear-gradient(
              135deg,
              ${ROSE.gradientA},
              ${ROSE.gradientB}
            )`,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            boxShadow: "0 8px 20px rgba(217,79,112,0.28)",
          }}
        >
          <Music2
            size={32}
            strokeWidth={2}
            color="#fff"
          />
        </div>

        {/* Title */}
        <h2
          id="music-popup-title"
          style={{
            fontFamily: FONT.heading,

            fontSize: 20,
            fontWeight: 500,

            color: ROSE.text,

            margin: "0 0 8px",
          }}
        >
          Enhance Your Experience
        </h2>

        {/* Description */}
        <p
          style={{
            fontFamily: FONT.body,

            fontSize: 13,

            lineHeight: 1.6,

            color: ROSE.textSoft,

            maxWidth: 280,

            margin: "0 auto 20px",
          }}
        >
          Play our wedding soundtrack for the perfect ambiance
        </p>

        {/* Play button */}
        <button
          type="button"
          onClick={onPlay}
          style={{
            border: "none",

            borderRadius: 999,

            padding: "11px 25px",

            background: `linear-gradient(
              90deg,
              ${ROSE.gradientA},
              ${ROSE.gradientB}
            )`,

            color: "#fff",

            fontFamily: FONT.body,

            fontSize: 13,
            fontWeight: 600,

            cursor: "pointer",

            boxShadow: "0 8px 18px rgba(217,79,112,0.28)",

            transition: "transform 0.2s ease",
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.96)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Play Music
        </button>

        {/* Skip */}
        <button
          type="button"
          onClick={onSkip}
          style={{
            display: "block",

            margin: "14px auto 0",

            padding: 4,

            border: "none",

            background: "transparent",

            color: ROSE.textSoft,

            fontFamily: FONT.body,

            fontSize: 11,

            cursor: "pointer",
          }}
        >
          Maybe later
        </button>
      </div>

      {/* Popup animation */}
      <style>
        {`
          @keyframes musicPopupIn {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.96);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}