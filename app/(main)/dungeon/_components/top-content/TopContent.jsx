import DungeonInfo from "./DungeonInfo/DungeonInfo";
import InitiativeTracker from "./InitiativeTracker/InitiativeTracker";
import Threat from "./Threat/Threat";

export default function TopContent() {
  return (
    <div className="h-[10%]">
      <div className="flex justify-center">
        <DungeonInfo />
        <InitiativeTracker />
        <Threat />
      </div>
    </div>
  );
}
