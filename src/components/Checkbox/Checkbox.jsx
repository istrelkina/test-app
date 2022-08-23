import style from "./Checkbox.module.scss";

const Checkbox = (props) => {
  return (
    <div className={`${style.input}${props.state ? ` ${style.text}` : ""}`}>
      <input type="checkbox" id={props.name} name={props.name} />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
};

export default Checkbox;
