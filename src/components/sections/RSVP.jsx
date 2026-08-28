import { useState } from "react";

import {
  Calendar,
  Heart,
  MessageSquare,
  Phone,
  Send,
  User,
  Users,
} from "lucide-react";

import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

import { ROSE } from "../../styles/theme";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "1",
    days: "",
    arrival: "",
    note: "",
  });

  const [attending, setAttending] = useState("yes");

  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    // Later we'll connect Firebase / EmailJS / API here
    console.log({
      attending,
      ...form,
    });
  };

  if (submitted) {
    return (
      <section style={{ padding: "3rem 1.5rem" }}>
        <SectionHeading title="RSVP" subtitle="Thank you!" />
        <div style={{ maxWidth: 380, margin: "0 auto" }}>
          <Reveal>
            <div style={{ background: "#fff", borderRadius: 16, padding: "32px 20px", textAlign: "center", boxShadow: "0 6px 20px rgba(0,0,0,0.06)", }}>
              <Heart size={26} color={ROSE.primary} fill={ROSE.primary} />
              <p style={{ marginTop: 15, fontSize: 15 }}> 
                Thank you{form.name ? `, ${form.name}` : ""} — we've received your response. 
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: "3rem 1.5rem" }}>
        <SectionHeading title="RSVP" subtitle="We would love to have you join us on our special day" />
        <div style={{ maxWidth: 380, margin: "0 auto" }}>
            <Reveal>
              <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                <button
                  onClick={() => setAttending("yes")}
                  style={{
                    flex: 1,
                    padding: "12px 0",
                    borderRadius: 12,
                    border: `1.5px solid ${attending === "yes" ? ROSE.primary : ROSE.line}`,
                    background: attending === "yes" ? "#FCE9EC" : "#fff",
                    color: ROSE.primaryDeep,
                    fontWeight: 500,
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  Joyfully accept
                </button>
                <button
                  onClick={() => setAttending("no")}
                  style={{
                    flex: 1,
                    padding: "12px 0",
                    borderRadius: 12,
                    border: `1.5px solid ${attending === "no" ? ROSE.primary : ROSE.line}`,
                    background: attending === "no" ? "#FCE9EC" : "#fff",
                    color: ROSE.textSoft,
                    fontWeight: 500,
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  Regretfully decline
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                style={{ display: "grid", gap: 16 }}
              >
                <div>
                  <div className="field-label"><User size={14} /> Your name</div>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Enter your full name" />
                </div>
                <div>
                  <div className="field-label"><Phone size={14} /> Phone number</div>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="XXXXX XXXXX" />
                </div>
                <div>
                  <div className="field-label"><Users size={14} /> Number of guests</div>
                  <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })}>
                    {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n} guest{n > 1 ? "s" : ""}</option>)}
                  </select>
                </div>
                <div>
                  <div className="field-label"><Calendar size={14} /> Which days will you attend?</div>
                  <select value={form.days} onChange={(e) => setForm({ ...form, days: e.target.value })}>
                    <option value="">Select days</option>
                    <option value="day1">4th December only</option>
                    <option value="day2">5th December only</option>
                    <option value="both">Both days (4th & 5th December)</option>
                  </select>
                </div>
                <div>
                  <div className="field-label"><MessageSquare size={14} /> Message (optional)</div>
                  <textarea rows={3} value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} placeholder="Send your wishes to the couple..." />
                </div>
                <button
                  type="submit"
                  style={{
                    marginTop: 6,
                    padding: "14px 0",
                    borderRadius: 12,
                    border: "none",
                    background: `linear-gradient(90deg, ${ROSE.gradientA}, ${ROSE.gradientB})`,
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    cursor: "pointer",
                    boxShadow: "0 8px 20px rgba(217,79,112,0.3)",
                  }}
                >
                  <Send size={15} /> Send RSVP
                </button>
              </form>
            </Reveal>
        </div>
      </section>
  );
}