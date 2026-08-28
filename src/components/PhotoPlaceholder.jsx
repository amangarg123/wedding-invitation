// src/components/PhotoPlaceholder.jsx

import { ROSE } from "../styles/theme";

export default function PhotoPlaceholder({ ratio = "4/5", label = "Your photo" }) {
  return (
    <div
      style={{
        aspectRatio: ratio,
        background: "repeating-linear-gradient(135deg, #FCE9EC, #FCE9EC 10px, #FBF3EE 10px, #FBF3EE 20px)",
        border: `1px dashed ${ROSE.line}`,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: ROSE.primaryDeep,
        fontSize: 12,
        letterSpacing: "0.04em",
        textAlign: "center",
        padding: 8,
      }}
    >
      {label}
    </div>
  );
}