import React from "react";

export default function Feedback({ comments = [] }) {
  return (
    <section>
      <h2>Feedback</h2>
      <ul>
        {comments.map((text, idx) => (
          <li key={idx}>{text}</li>
        ))}
      </ul>
    </section>
  );
}
