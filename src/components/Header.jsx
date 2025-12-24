const Header = ({ name, date }) => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="logo">
          <img
            src="/logo.jpeg"
            alt="Company Logo"
            className="company-logo"
          />
          <span className="logo-text">GEMA</span>
        </div>
      </div>

      <div className="header-info">
        <h1>Speaking Assessment Report</h1>
        <h2>{name}</h2>
        <p>Test Date: {date}</p>
      </div>
    </div>
  );
};

export default Header;
