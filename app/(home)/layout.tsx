"use client";

import { Provider } from "react-redux";
import store from "@/store/index";
import { cn } from "@/util/utils";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <div
        className={cn(
          "min-h-screen flex flex-col bg-center bg-no-repeat bg-cover"
        )}
        style={{
          backgroundImage: `url("/assets/start-screen-background.jpg")`,
        }}
      >
        <main className="flex-1 flex flex-col items-center justify-center mt-[-10rem] gap-4">
          {children}
        </main>
      </div>
    </Provider>
  );
};

export default HomeLayout;
