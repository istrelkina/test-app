import style from "./Button.module.scss";

const Button = (props) => {
  return (
    <div className={style.buttons}>
      <button className={style.save}>{props.text}</button>
    </div>
  );
};

export default Button;
