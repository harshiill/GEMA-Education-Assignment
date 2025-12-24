import SkillBar from "./SkillBar";

const ScoreSummary = ({ assessment }) => {
  return (
    <div>
      <h3>Summary of Scores ({assessment.label})</h3>
      <div className="overall">{assessment.overallScore} / 9</div>

      {assessment.skills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} score={skill.score} />
      ))}
    </div>
  );
};

export default ScoreSummary;
