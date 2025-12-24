const Header = ({ name, date }) => {
  return (
    <div className="header">
      <h1>Speechace Speaking Tests Report</h1>
      <h2>{name}</h2>
      <p>{date}</p>
    </div>
  );
};

export default Header;
