import "./About.scss";
import user from "./../../../images/user.png";

const MainAbout = () => {
  return (
    <div className="main__about">
      <div className="about">
        <div className="about__info">
          <div className="about__text">
            <h2 className="about__title">Adrian Stefan</h2>
            <div className="about__desc">
              <p>Rm. Valcea, Romania</p>
              <p>4:32PM (GMT-4)</p>
            </div>
          </div>
          <div className="about__image">
            <img src={user} alt="Logo" />
          </div>
        </div>
        <div className="about__buttons">
          <button className="about__buttons_upload">UPLOAD PICTURE</button>
          <button className="about__buttons_remove">REMOVE PICTURE</button>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
