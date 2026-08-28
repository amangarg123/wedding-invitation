import { useState } from "react";
import confetti from "canvas-confetti";
import { Heart, Music, Volume2, VolumeX } from "lucide-react";

import { ROSE } from "../styles/theme";

export default function FloatingButtons({
  audioRef,
  isMusicPlaying,
  setIsMusicPlaying,
}) {
  const [loveActive, setLoveActive] = useState(false);

  // ❤️ Love / Confetti
  const handleLoveClick = () => {
    setLoveActive(true);

    // Main confetti burst
    confetti({
      particleCount: 90,
      spread: 75,
      startVelocity: 30,
      gravity: 0.8,
      scalar: 1.1,
      origin: {
        x: 0.88,
        y: 0.72,
      },
      colors: [
        "#e11d48",
        "#f43f5e",
        "#fb7185",
        "#fda4af",
        "#f9a8d4",
        "#fbbf24",
      ],
    });

    // Smaller side burst
    setTimeout(() => {
      confetti({
        particleCount: 45,
        spread: 55,
        startVelocity: 20,
        gravity: 0.9,
        scalar: 0.8,
        origin: {
          x: 0.82,
          y: 0.78,
        },
        colors: ["#e11d48", "#fb7185", "#fda4af", "#fbbf24"],
      });
    }, 120);

    setTimeout(() => {
      setLoveActive(false);
    }, 500);
  };

  // 🎵 Music Play / Pause
  const handleMusicClick = async () => {
    if (!audioRef?.current) return;

    try {
      if (audioRef.current.paused) {
        await audioRef.current.play();
        setIsMusicPlaying?.(true);
      } else {
        audioRef.current.pause();
        setIsMusicPlaying?.(false);
      }
    } catch (error) {
      console.error("Unable to play music:", error);
      setIsMusicPlaying?.(false);
    }
  };

  return (
    <div
      style={{
        position: "sticky",
        top: "90vh",
        zIndex: 5,
        display: "flex",
        padding: "16px 20px",
        justifyContent: "space-between"
      }}
    >
      {/* ❤️ Love Button */}
      <button
        type="button"
        onClick={handleLoveClick}
        aria-label="Send love"
        title="Send some love ❤️"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.75)",
          background: `linear-gradient(135deg, ${ROSE.gradientA}, ${ROSE.gradientB})`,
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow:
            "0 8px 24px rgba(120, 35, 55, 0.25), 0 2px 8px rgba(0,0,0,0.12)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          transition:
            "transform 0.2s ease, box-shadow 0.2s ease",
          transform: loveActive ? "scale(1.25)" : "scale(1)",
        }}
        onMouseEnter={(e) => {
          if (!loveActive) {
            e.currentTarget.style.transform = "scale(1.08)";
          }
        }}
        onMouseLeave={(e) => {
          if (!loveActive) {
            e.currentTarget.style.transform = "scale(1)";
          }
        }}
      >
        <Heart
          size={21}
          strokeWidth={2}
          fill="currentColor"
        />
      </button>

      {/* 🎵 Music Button */}
      <button
        type="button"
        onClick={handleMusicClick}
        aria-label={isMusicPlaying ? "Pause music" : "Play music"}
        title={isMusicPlaying ? "Pause music" : "Play music"}
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.75)",
          background: `linear-gradient(135deg, ${ROSE.gradientA}, ${ROSE.gradientB})`,
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow:
            "0 8px 24px rgba(120, 35, 55, 0.25), 0 2px 8px rgba(0,0,0,0.12)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          transition:
            "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        {isMusicPlaying ? (
          <Volume2 size={20} strokeWidth={2} />
        ) : (
          <VolumeX size={20} strokeWidth={2} />
        )}
      </button>
    </div>
  );
}
