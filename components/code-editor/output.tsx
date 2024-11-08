import classes from "./CodeEditor.module.css";

export default function Output({ output, isError }) {
  return (
    <div className={`${classes.output} ${isError ? classes.error : ""}`}>
      {output && output.length > 0
        ? output.map((line, index) => <p key={index}>{line}</p>)
        : `Click "Run Code"!`}
    </div>
  );
}
