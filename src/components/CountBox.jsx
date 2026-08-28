import { ROSE } from "../styles/theme";

export default function CountBox({ value, label }) {
  return (
    <div
      style={{
        background: ROSE.card,
        borderRadius: 14,
        padding: "14px 18px",
        minWidth: 68,
        textAlign: "center",
        boxShadow: "0 6px 16px rgba(217,79,112,0.12)",
      }}
    >
      <div style={{ fontSize: 26, fontWeight: 700, color: ROSE.primary }}>
        {String(value).padStart(2, "0")}
      </div>
      <div style={{ fontSize: 10, letterSpacing: "0.08em", color: ROSE.textSoft, textTransform: "uppercase", marginTop: 2 }}>
        {label}
      </div>
    </div>
  );
}