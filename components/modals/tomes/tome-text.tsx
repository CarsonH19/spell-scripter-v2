export default function TomeText({ text }) {
  return (
    <div className="flex flex-col justify-center text-center gap-2 text-xl px-12">
      {text.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
}
