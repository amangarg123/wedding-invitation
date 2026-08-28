import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import PhotoPlaceholder from "../PhotoPlaceholder";

import { STORY } from "../../data/story";
import { ROSE } from "../../styles/theme";

export default function LoveStory() {
  return (
    <section style={{ padding: "3rem 1.5rem" }}>
            <SectionHeading title="Our Love Story" subtitle="A journey of love, laughter, and endless memories" />
            <div style={{ maxWidth: 380, margin: "0 auto", position: "relative" }}>
              {STORY.map((s, i) => (
                <Reveal key={s.caption} delay={i * 0.1} style={{ marginBottom: 40, position: "relative" }}>
                  <div
                    style={{
                      background: "#fff",
                      padding: 12,
                      borderRadius: 4,
                      boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
                      transform: i % 2 === 0 ? "rotate(-2deg)" : "rotate(2deg)",
                    }}
                  >
                    <PhotoPlaceholder ratio="4/3" label={`Story photo ${i + 1}`} />
                    <div style={{ textAlign: "center", paddingTop: 12 }}>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{s.caption}</div>
                      <div style={{ fontSize: 12, color: ROSE.textSoft, marginTop: 2 }}>{s.note}</div>
                    </div>
                  </div>
                  {i < STORY.length - 1 && (
                    <div style={{ width: 2, height: 32, background: ROSE.line, margin: "0 auto" }} />
                  )}
                </Reveal>
              ))}
            </div>
          </section>
  );
}