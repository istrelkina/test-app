import Button from "../../Button/Button";
import Input from "../../Input/Input";
import style from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className="main-block">
      <div className="main-block__title">
        <h3>Basic Profile</h3>
        <div className="h3-desc">The information can be edited from your profile page</div>
      </div>
      <form action="">
        <div className={`main-block__fields ${style.fields}`}>
          <Input name="First Name" title="First Name" state="active" type="text" />
          <Input name="Manea" title="Last Name" type="text" />
          <Input name="adrian_shp@yahoo.com" title="Email" type="email" />
          <Input name="0752549328" title="Phone" type="tel" />
          <Input name="Romania" title="Country" />
          <Input name="Ramnicu Valcea" title="Region" />
        </div>
        <Button text="save settings" />
      </form>
    </div>
  );
};

export default Profile;
