import "./Header.scss";
import logo from "./../images/logo.svg";
import notif from "./../images/icons/notif.svg";
import exit from "./../images/icons/exit.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
          Devias Kit
        </div>
        <div className="header__info">
          <span>free</span>
          See our PRO version for more design components & coded in React follow this link:
          <Link to="/">https://devias.io/products/devias-kit-pro</Link>
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
    </div>
  );
};

export default Header;
