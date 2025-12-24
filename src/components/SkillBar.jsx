const SkillBar = ({ name, score }) => {
  let color = "#22c55e";
  if (score < 7 && score >= 5.5) color = "#f59e0b"; 
  if (score < 5.5) color = "#ef4444"; 

  return (
    <div className="skill">
      <div className="skill-header">
        <span>{name}</span>
        <span className="score-text">{score}/9</span>
      </div>
      <div className="bar">
        <div
          className="fill"
          style={{ width: `${(score / 9) * 100}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
