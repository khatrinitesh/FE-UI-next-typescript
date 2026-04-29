import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }: any) => {
  return (
    <div className="appLayout h-dvh flex flex-col">
      <Header />
      <div className="mainContent flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
