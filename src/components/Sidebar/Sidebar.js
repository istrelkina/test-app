import "./Sidebar.scss";
import ava from "./../../images/avatar.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "./../Main/Menu/context/navState";

const Sidebar = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);
  return (
    <section className={`sidebar${isMenuOpen ? " sidebar_open" : ""}`}>
      <div className="sidebar__user">
        <img src={ava} alt="Avatar" />
        <div className="sidebar__name">Roman Kutepov</div>
        <div className="sidebar__job">Brain Director</div>
      </div>
      <div className="sidebar__nav user-nav">
        <ul className="user-nav__list">
          <li className="user-nav__item user-nav__item_dashboard">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="user-nav__item user-nav__item_users">
            <Link to="/">Users</Link>
          </li>
          <li className="user-nav__item user-nav__item_products">
            <Link to="/">Products</Link>
          </li>
          <li className="user-nav__item user-nav__item_auth">
            <Link to="/">Authentication</Link>
          </li>
          <li className="user-nav__item user-nav__item_typography">
            <Link to="/">Typography</Link>
          </li>
          <li className="user-nav__item user-nav__item_icons">
            <Link to="/">Icons & Images</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar__support support">
        <div className="support__title">Support</div>
        <div className="support__link">
          <Link to="/">Support</Link>
        </div>
      </div>
      <div className="sidebar__info">
        <p className="sidebar__link">See our PRO version for more design components & coded in React follow this link:</p>
        <Link to="/">https://devias.io/products/devias-kit-pro</Link>
      </div>
    </section>
  );
};

export default Sidebar;
