import { Heart } from "lucide-react";

import { ROSE } from "../../styles/theme";

export default function Footer() {
  return (
    <footer style={{ padding: "3rem 1.5rem", textAlign: "center" }}>
        <Heart size={20} color={ROSE.primary} fill={ROSE.primary} />
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: ROSE.primary, marginTop: 10 }}>
          Aman &amp; Pooja
        </div>
        <p style={{ color: ROSE.textSoft, fontSize: 13, marginTop: 6 }}>We can't wait to celebrate with you!</p>
      </footer>
  );
}