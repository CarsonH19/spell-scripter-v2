type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <main className="h-full bg-background">{children}</main>
    </>
  );
};

export default MainLayout;
