"use client";

import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Provider } from "react-redux";
import store, { RootState } from "@/store/index";
import Modal from "@/components/modals/modal";
import { useSelector } from "react-redux";

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
    // startIsVisible,
    // dashboardIsVisible,
    // gameWindowIsVisible,
    modalIsVisible,
  } = useSelector((state: RootState) => state.ui);
  // const dialogueActive = useSelector((state) => state.dialogue.active);

  return (
    <>
      {modalIsVisible && <Modal />}
      <main className="h-full bg-background">
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
