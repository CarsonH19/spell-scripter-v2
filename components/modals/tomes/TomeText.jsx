import classes from "./TomesModal.module.css";

export default function TomeText({ text }) {
  return (
    <div className={classes.text}>
      {text.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
}
