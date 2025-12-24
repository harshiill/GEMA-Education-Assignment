import React from "react";

export default function SkillBar({ skills = [] }) {
  return (
    <section>
      <h2>Skills</h2>
      {skills.map(({ name, level }) => (
        <div key={name} style={{ marginBottom: 8 }}>
          <div>{name}</div>
          <div style={{ background: "#eee", height: 8, borderRadius: 4 }}>
            <div style={{ width: `${level * 100}%`, height: "100%", background: "#4caf50", borderRadius: 4 }} />
          </div>
        </div>
      ))}
    </section>
  );
}
