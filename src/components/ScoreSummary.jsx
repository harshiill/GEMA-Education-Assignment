import React from "react";

export default function ScoreSummary({ scores = [] }) {
  return (
    <section>
      <h2>Scores</h2>
      <ul>
        {scores.map(({ subject, score }) => (
          <li key={subject}>
            {subject}: {score}
          </li>
        ))}
      </ul>
    </section>
  );
}
