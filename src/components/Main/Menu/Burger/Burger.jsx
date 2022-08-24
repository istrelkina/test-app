import "./Burger.scss";
import { useContext } from "react";
import { MenuContext } from "../context/navState";

const Burger = (props) => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <div className={`burger${isMenuOpen ? " burger_active" : ""}`} onClick={clickHandler}>
      <div className="burger__line"></div>
      <div className="burger__line"></div>
      <div className="burger__line"></div>
    </div>
  );
};
export default Burger;
