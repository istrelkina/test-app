import "./../scss/Main-menu.scss";
import { Link } from "react-router-dom";

const MainMenu = () => {
  function openMenu() {
    const burgerMenu = document.querySelector(".menu-burger");
    const sidebar = document.querySelector(".sidebar");
    burgerMenu.classList.toggle("menu-burger_active");
    sidebar.classList.toggle("sidebar_open");
    document.body.classList.toggle("lock");
  }
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
      <div className="menu-burger" onClick={openMenu}>
        <div className="menu-burger__line"></div>
      </div>
    </nav>
  );
};

export default MainMenu;
