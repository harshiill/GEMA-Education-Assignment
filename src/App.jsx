import React from "react";
import reportData from "./data/reportData";
import SkillBar from "./components/SkillBar";
import Feedback from "./components/Feedback";
import ScoreSummary from "./components/ScoreSummary";

export default function App() {
  return (
    <main>
      <h1>Student Report</h1>
      <ScoreSummary scores={reportData.scores} />
      <SkillBar skills={reportData.skills} />
      <Feedback comments={reportData.feedback} />
    </main>
  );
}
