const LanguageSelector = ({ languages, selected, onChange }) => {
  return (
    <div className="language-tabs">
      {languages.map((lang) => (
        <button
          key={lang.key}
          className={`lang-tab ${selected === lang.key ? "active" : ""}`}
          onClick={() => onChange(lang.key)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
