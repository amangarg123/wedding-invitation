import { Calendar, Clock } from "lucide-react";

import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

import { SCHEDULE } from "../../data/schedule";
import { ROSE } from "../../styles/theme";

export default function Timeline() {
  return (
    <section style={{ padding: "3rem 1.5rem" }}>
        <SectionHeading eyebrowIcon={<Calendar size={22} />} title="Wedding Timeline" subtitle="Join us for the celebration of a lifetime" />
        <div style={{ maxWidth: 380, margin: "0 auto" }}>
          {SCHEDULE.map((day) => (
            <div key={day.date} style={{ marginBottom: 28 }}>
              <div style={{ textAlign: "center", fontWeight: 600, color: ROSE.primaryDeep, fontSize: 14, marginBottom: 14 }}>{day.date}</div>
              <div style={{ position: "relative", paddingLeft: 20 }}>
                <div style={{ position: "absolute", left: 5, top: 6, bottom: 6, width: 2, background: ROSE.line }} />
                {day.items.map((it, i) => (
                  <Reveal key={it.name} delay={i * 0.08} style={{ marginBottom: 14 }}>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", left: -20, top: 6, width: 10, height: 10, borderRadius: "50%", background: ROSE.primary, border: "2px solid #fff", boxShadow: "0 0 0 1px " + ROSE.line }} />
                      <div style={{ background: ROSE.bg, borderRadius: 12, padding: "14px 16px" }}>
                        <div style={{ fontWeight: 600, fontSize: 15 }}>{it.name}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: ROSE.primary, margin: "4px 0" }}>
                          <Clock size={12} /> {it.time}
                        </div>
                        <div style={{ fontSize: 12, color: ROSE.textSoft }}>{it.note}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
  );
}