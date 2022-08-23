import "./Header.scss";
import logo from "./../../images/logo.svg";
import notif from "./../../images/icons/notif.svg";
import exit from "./../../images/icons/exit.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
          Devias Kit
        </div>
        <div className="header__info info">
          <span className="header__link-status">free</span>
          <span className="header__link">See our PRO version for more design components & coded in React follow this link:</span>
          <Link to={{ pathname: "https://devias.io/products/devias-kit-pro" }} target="_blank">
            https://devias.io/products/devias-kit-pro
          </Link>
        </div>
      </div>
      <div className="header__right">
        <button className="header__notif">
          <img src={notif} alt="Notifications" />
        </button>
        <button className="header__exit">
          <img src={exit} alt="Exit" />
        </button>
      </div>
    </header>
  );
};

export default Header;
