import "./../scss/Main-notifications.scss";

const MainNotifications = () => {
  return (
    <div className="notif main-block">
      <div className="main-block__title">
        <h3>Notifications</h3>
        <div className="h3-desc">Manage the notifications emailing</div>
      </div>
      <div className="main-block__fields notif__fields">
        <div className="notif__wrapper">
          <div className="notif__notifications">
            <h3 className="notif__title">Notifications</h3>

            <div className="notif__input">
              <input className="notif__checkbox" type="checkbox" id="email" name="email" />
              <label htmlFor="email">Email</label>
            </div>

            <div className="notif__input notif__text">
              <input className="notif__checkbox" type="checkbox" id="push" name="push" defaultChecked={true} />
              <label htmlFor="push">Push notifications</label>
              {/* <div className="notif__text">For your mobile or tablet device</div> */}
            </div>

            <div className="notif__input">
              <input className="notif__checkbox" type="checkbox" id="text" name="text" defaultChecked={true} />
              <label htmlFor="text">Text Messages</label>
            </div>

            <div className="notif__input">
              <input className="notif__checkbox" type="checkbox" id="phone" name="phone" defaultChecked={true} />
              <label htmlFor="phone">Phone Calls</label>
            </div>
          </div>
          <div className="notif__messages">
            <h3 className="notif__title">Messages</h3>

            <div className="notif__input">
              <input className="notif__checkbox" type="checkbox" id="msg-email" name="msg-email" />
              <label htmlFor="msg-email">Email</label>
            </div>

            <div className="notif__input">
              <input className="notif__checkbox" type="checkbox" id="msg-push" name="msg-push" />
              <label htmlFor="msg-push">Push notifications</label>
            </div>

            <div className="notif__input">
              <input className="notif__checkbox" type="checkbox" id="msg-text" name="msg-text" />
              <label htmlFor="msg-text">Text Messages</label>
            </div>
          </div>
        </div>
      </div>
      <div className="main-block__buttons">
        <button className="save save_wide">SAVE</button>
      </div>
    </div>
  );
};

export default MainNotifications;
