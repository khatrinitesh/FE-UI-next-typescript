import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MainLayoutProps } from "@/interface";

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
