"use client";

import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Provider } from "react-redux";
import store, { RootState } from "@/store/index";
import Modal from "@/components/modals/modal";
import { useSelector } from "react-redux";
import FadeEffect from "@/components/ui/FadeEffect";
import Dialogue from "@/components/dialogue/Dialogue";
import Narration from "@/components/narration/Narration";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <ContentWrapper>{children}</ContentWrapper>
    </Provider>
  );
};

export default MainLayout;

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  const {
    // Using NextJS route paths instead of ui-state variables
    // startIsVisible,
    // dashboardIsVisible,
    // gameWindowIsVisible,
    modalIsVisible,
  } = useSelector((state: RootState) => state.ui);
  const dialogueActive = useSelector((state) => state.dialogue.active);
  console.log("dialogueActive", dialogueActive);

  return (
    <>
      {/* FADE EFFECT */}
      {<FadeEffect />}

      {/* NARRATION */}
      <Narration />

      {/* MODAL */}
      {modalIsVisible && <Modal />}

      {/* DIALOGUE */}
      {dialogueActive && <Dialogue />}

      <main className="h-full w-screen min-w-[1250px] bg-background">
        <div className="absolute top-0 right-0 p-4">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
        </div>
        {children}
      </main>
    </>
  );
};
