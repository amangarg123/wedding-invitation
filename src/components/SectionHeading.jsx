// src/components/SectionHeading.jsx

import { ROSE } from "../styles/theme";

export default function SectionHeading({ eyebrowIcon, title, subtitle }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 32 }}>
      <h2 style={{ fontSize: 30, fontWeight: 700, color: ROSE.primary, margin: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        {eyebrowIcon}
        {title}
      </h2>
      <div style={{ width: 56, height: 3, background: `linear-gradient(90deg, ${ROSE.gradientA}, ${ROSE.gradientB})`, margin: "10px auto 0", borderRadius: 2 }} />
      {subtitle && <p style={{ color: ROSE.textSoft, fontSize: 14, marginTop: 12 }}>{subtitle}</p>}
    </div>
  );
}