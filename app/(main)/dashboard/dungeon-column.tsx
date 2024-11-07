// import classes from "./DungeonColumn.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { setDungeon } from "../../../util/dungeon-util";
// import { openModal } from "../../../store/ui-actions";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DungeonColumn() {
  // const dispatch = useDispatch();
  // const dungeon = useSelector((state) => state.dungeon);

  // const handleEnter = () => {
  //   setDungeon(dispatch, "The Great Catacomb");
  //   openModal(dispatch, "confirmationModal");
  // };

  return (
    <div className="bg-primary text-center w-1/3 h-full border-3 border-secondary p-4 overflow-hidden rounded-xl hover:bg-[#33395b] transition duration-300 flex flex-col justify-between shadow-lg">
      <h1 className="text-center my-4 border-b-2 border-primary">Dungeons</h1>
      <div className="relative flex flex-col items-center justify-between h-full ">
        <div className="h-full">
          <h2>The Great Catacombs</h2>
          <div className="flex flex-col items-center justify-between h-full max-h-[18rem] w-full border-3 border-red-500 rounded-xl relative">
            <Image
              src="/assets/images/backgrounds/the-great-catacomb/catacomb-entrance-3.jpg"
              alt="Dungeon"
              className="object-cover object-center rounded-md border-2 border-secondary"
              layout="fill" // Ensures the image fills the parent container
            />
            {/* <p> Mastery Points Required: 0</p> */}
          </div>
          <p className="text-center w-full my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            nulla ut sequi illo quae ipsa nobis cumque dolore? Quo ipsa quas
            velit laudantium ab ipsam a illo tempora cum in!
          </p>
        </div>

        <Button
          size="lg"
          variant="secondary"
          className="mb-6 w-3/5"
          asChild
          // onClick={handleEnter}
        >
          <Link href="/dungeon">Enter</Link>
        </Button>
      </div>
    </div>
  );
}
