import "./Menu.scss";
import { Link } from "react-router-dom";
import Burger from "./Burger/Burger";

const MainMenu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link className="menu__link menu__link_active" to="/">
            Profile
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/">
            Account
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/">
            Price Plans
          </Link>
        </li>
      </ul>
      <Burger />
    </nav>
  );
};

export default MainMenu;
