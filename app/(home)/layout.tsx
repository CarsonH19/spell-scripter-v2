import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <div
      className={cn("min-h-screen flex flex-col bg-center bg-no-repeat bg-cover")}
      style={{
        backgroundImage: `url("/assets/start-screen-background.jpg")`,
      }}
    >
      <main className="flex-1 flex flex-col items-center justify-center mt-[-10rem] gap-4">
        {children}
      </main>
    </div>
  );
};

export default HomeLayout;
