import Reveal from "../Reveal";
import PhotoPlaceholder from "../PhotoPlaceholder";

import { ROSE } from "../../styles/theme";

export default function Families() {
  return (
    <section style={{ padding: "3rem 1.5rem" }}>
            <p style={{ textAlign: "center", color: ROSE.textSoft, fontSize: 14, marginBottom: 24 }}>Together with our families</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 380, margin: "0 auto" }}>
              {["The Groom's Family", "The Bride's Family"].map((fam) => (
                <Reveal key={fam}>
                  <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 6px 16px rgba(0,0,0,0.06)" }}>
                    <PhotoPlaceholder ratio="1/1" label="Family photo" />
                    <div style={{ padding: "10px 8px", textAlign: "center", fontWeight: 600, fontSize: 13, color: ROSE.primaryDeep }}>{fam}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p style={{ textAlign: "center", color: ROSE.text, fontSize: 15, marginTop: 28, maxWidth: 320, marginLeft: "auto", marginRight: "auto" }}>
                Request the honor of your presence at the celebration of our union.
              </p>
            </Reveal>
          </section>
  );
}