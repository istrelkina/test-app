import Button from "../../Button/Button";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile main-block">
      <div className="main-block__title">
        <h3>Basic Profile</h3>
        <div className="h3-desc">The information can be edited from your profile page</div>
      </div>
      <div className="main-block__fields profile__fields">
        <div className="profile__field profile__field_text">
          <input className="profile__input" type="text" placeholder="First Name" />
        </div>
        <div className="profile__field profile__field_active">
          <input className="profile__input profile__input_active" type="text" placeholder="Manea" />
        </div>
        <div className="profile__field">
          <input className="profile__input" type="text" placeholder="adrian_shp@yahoo.com" />
        </div>
        <div className="profile__field">
          <input className="profile__input" type="text" placeholder="0752549328" />
        </div>
        <div className="profile__field">
          <input className="profile__input" type="text" placeholder="Romania" />
        </div>
        <div className="profile__field">
          <input className="profile__input" type="text" placeholder="Ramnicu Valcea" />
        </div>
      </div>
      <Button text="save settings" />
    </div>
  );
};

export default Profile;
