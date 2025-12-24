const DescriptiveFeedback = ({ assessment }) => {
  return (
    <div className="feedback">
      <h3>Descriptive Feedback</h3>

      <strong>Overall ({assessment.overallScore})</strong>
      <p>{assessment.overallFeedback}</p>

      {assessment.skills.map((skill, index) => (
        <div key={index}>
          <strong>{skill.name} ({skill.score})</strong>
          <p>{skill.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default DescriptiveFeedback;
