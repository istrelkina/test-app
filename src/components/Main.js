import MainMenu from "./Main-menu";
import MainAbout from "./Main-about";
import MainProfile from "./Main-profile";
import MainNotifications from "./Main-notifications";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <MainMenu />
      <div className="main__info">
        <MainAbout />
        <MainProfile />
        <MainNotifications />
      </div>
    </div>
  );
};

export default Main;
