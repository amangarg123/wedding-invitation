import { ExternalLink, MapPin } from "lucide-react";

import Reveal from "../Reveal";
import PhotoPlaceholder from "../PhotoPlaceholder";

import { ROSE } from "../../styles/theme";

const MAPS_API_KEY = "AIzaSyCbYFlkmzRnzrr4fECpE1NAA-iqj8neVac";

export default function Venue() {
  return (
    <section style={{ padding: "3rem 1.5rem" }}>
        <p style={{ textAlign: "center", color: ROSE.textSoft, fontSize: 14, marginBottom: 20 }}>
          Join us at our beautiful wedding venue
        </p>
        <div style={{ maxWidth: 380, margin: "0 auto" }}>
          <Reveal>
            <div style={{ background: ROSE.bg, borderRadius: 16, padding: "18px 20px", marginBottom: 16 }}>
              <div style={{ fontWeight: 600, fontSize: 16 }}>Hotel Mayura</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: ROSE.textSoft, marginTop: 6 }}>
                <MapPin size={13} /> Ambikapur, Chhattisgarh
              </div>
              <a
                style={{
                  marginTop: 14,
                  width: "100%",
                  padding: "12px 0",
                  borderRadius: 10,
                  border: "none",
                  background: `linear-gradient(90deg, ${ROSE.gradientA}, ${ROSE.gradientB})`,
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: 13,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  cursor: "pointer",
                }}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent( "Hotel Mayura, Ambikapur, Chhattisgarh")}`}
                target="_blank"
                rel="noopener noreferrer">
                Get directions <ExternalLink size={13} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${ROSE.line}`, height: "280px" }}>
              {/* <PhotoPlaceholder ratio="4/3" label="Map preview" />
               */}
                <iframe
                  title="Wedding venue location"
                  src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${encodeURIComponent(
                    `Hotel Mayura, Ambikapur, Chhattisgarh`
                  )}`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{width: "100%", height: "100%"}}
                />
              </div>
          </Reveal>
        </div>
      </section>
  );
}