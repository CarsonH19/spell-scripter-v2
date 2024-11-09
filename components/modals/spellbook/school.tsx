export default function School({ text, active, onChangeSchool }) {
  return (
    <li
      onClick={onChangeSchool}
      className={`cursor-pointer mb-4 border text-center rounded-md ${
        active
          ? "bg-[var(--accent)] text-[var(--background)] border-[var(--accent)]"
          : "bg-[var(--primary)] border-[var(--accent)]"
      } ${
        text === "?"
          ? "opacity-50 pointer-events-none border-[var(--secondary)]"
          : ""
      } text-xl`}
    >
      {text}
    </li>
  );
}
