import MainMenu from "./Main-menu";
import MainAbout from "./Main-about";
import MainProfile from "./Main-profile";
import MainNotifications from "./Main-notifications";
import "./../scss/Main.scss";

const Main = () => {
  return (
    <section className="main">
      <MainMenu />
      <div className="main__info">
        <MainAbout />
        <MainProfile />
        <MainNotifications />
      </div>
    </section>
  );
};

export default Main;
