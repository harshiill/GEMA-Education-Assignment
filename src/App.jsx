import { useState } from "react";
import reportData from "./data/reportData";
import Header from "./components/Header";
import LanguageSelector from "./components/LanguageSelector";
import ScoreSummary from "./components/ScoreSummary";
import DescriptiveFeedback from "./components/DescriptiveFeedback";
import "./styles.css";

function App() {
  const [selectedLang, setSelectedLang] = useState("english");

  const assessment = reportData.assessments[selectedLang];
  const languages = Object.entries(reportData.assessments).map(
    ([key, value]) => ({ key, label: value.label })
  );

  return (
    <div className="container">
      <Header name={reportData.studentName} date={reportData.testDate} />

      <LanguageSelector
        languages={languages}
        selected={selectedLang}
        onChange={setSelectedLang}
      />

      <ScoreSummary assessment={assessment} />
      <DescriptiveFeedback assessment={assessment} />
    </div>
  );
}

export default App;
