import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HeroQuests({
  index,
  quests,
  onLeftClick,
  onRightClick,
}) {
  const quest = quests[index];
  const questStyle = quest.finished
  ? "opacity-40 line-through"
  : "border border-[var(--text)] bg-[var(--primary)]"; 


  return (
    <div className="w-[60%] h-full flex flex-col justify-between items-center gap-4 border-3 border-[var(--primary)] bg-[var(--primary)] rounded-lg overflow-auto">
      <div
        className={`flex flex-col justify-start items-center gap-4 p-4 text-center rounded-md ${questStyle}`}
      >
        <h3 className="border-b border-[var(--text)]">{quest.name}</h3>
        <p>
          <i>{quest.text}</i>
        </p>
        <div>
          <h3>Task:</h3>
          <p>{quest.description}</p>
        </div>
        <p>
          {quest.progress} / {quest.completion}
        </p>
        <div className="mt-4">
          <h3>Reward:</h3>
          <p>{quest.reward}</p>
        </div>
      </div>

      <div className="w-[90%] flex justify-between items-center text-[1.2rem] mb-2">
        <ArrowLeft
          onClick={onLeftClick}
          className="hover:transition-all hover:transform hover:scale-110 hover:text-[var(--accent)] cursor-pointer"
          style={
            index < quests.length - 1
              ? { opacity: "0.5", pointerEvents: "none" }
              : {}
          }
        />
        <p>{quest.finished ? "Quest Complete" : "Active Quest"}</p>
        <ArrowRight
          onClick={onRightClick}
          className="hover:transition-all hover:transform hover:scale-110 hover:text-[var(--accent)] cursor-pointer"
          style={index > 0 ? { opacity: "0.5", pointerEvents: "none" } : {}}
        />
      </div>
    </div>
  );
}
