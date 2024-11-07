import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <div
      className={cn("min-h-screen flex flex-col bg-center bg-no-repeat bg-cover")}
      style={{
        backgroundImage: `url("/start-screen-background.jpg")`,
      }}
    >
      <main className="flex-1 flex flex-col items-center justify-center mt-[-10rem] gap-4">
        {/* <h1 className=" text-orange-300 text-[6rem] uppercase font-semibold">Spell Scripter</h1> */}
        {children}
      </main>
    </div>
  );
};

export default HomeLayout;
