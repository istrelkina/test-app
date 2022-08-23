import Button from "../../Button/Button";
import Checkbox from "../../Checkbox/Checkbox";
import style from "./Notifications.module.scss";

const Notifications = () => {
  return (
    <div className={`${style.notif} main-block`}>
      <div className="main-block__title">
        <h3>Notifications</h3>
        <div className="h3-desc">Manage the notifications emailing</div>
      </div>
      <div className={`main-block__fields ${style.fields}`}>
        <div className={style.wrapper}>
          <div className={style.notifications}>
            <h3 className={style.title}>Notifications</h3>

            <Checkbox name="email" label="Email" />
            <Checkbox name="push" label="Push notifications" state="text" />
            <Checkbox name="text" label="Text Messages" />
            <Checkbox name="phone" label="Phone Calls" />

            {/* <div className="notif__input notif__text">
              <input className="notif__checkbox" type="checkbox" id="push" name="push" defaultChecked={true} />
              <label htmlFor="push">Push notifications</label>
  </div>*/}
          </div>
          <div className={style.messages}>
            <h3 className={style.title}>Messages</h3>

            <Checkbox name="msg-email" label="Email" />
            <Checkbox name="msg-push" label="Push notifications" />
            <Checkbox name="msg-text" label="Text Messages" />
          </div>
        </div>
      </div>
      <Button text="save" />
    </div>
  );
};

export default Notifications;
