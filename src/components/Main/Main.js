import MainMenu from "./Menu/Menu";
import About from "./About/About";
import Profile from "./Profile/Profile";
import Notifications from "./Notifications/Notifications";
import "./Main.scss";

const Main = () => {
  return (
    <section className="main">
      <MainMenu />
      <div className="main__info">
        <About />
        <Profile />
        <Notifications />
      </div>
    </section>
  );
};

export default Main;
