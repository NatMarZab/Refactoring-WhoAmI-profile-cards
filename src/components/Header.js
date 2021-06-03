import LogoHeader from "../images/logo-header.png";
import "../stylesheet/layout/header.scss";
import "../stylesheet/core/_variables.scss";

function Header() {
  return (
    <header className="header-container2">
      <img className="main-logo2" src={LogoHeader} />
    </header>
  );
}

export default Header;
