import style from "./Input.module.scss";

const Input = (props) => {
  return (
    // <div className={`${style.field} ${style.field_text}`}>
    <div className={`${style.field}${props.state ? ` ${style.field_text}` : ""}`}>
      <input className={style.input} type="text" placeholder={props.name} />
      <span title={props.title}></span>
    </div>
  );
};

export default Input;
