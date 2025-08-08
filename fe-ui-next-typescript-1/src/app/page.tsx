import MainLayout from "@/layout/mainLayoutSection/MainLayout";
import HomePageSection from "./homePageSection/homePageSection";

export default function Home() {
  return (
    <MainLayout>
      <div className="innerContent">
        <HomePageSection />
      </div>
    </MainLayout>
  );
}
