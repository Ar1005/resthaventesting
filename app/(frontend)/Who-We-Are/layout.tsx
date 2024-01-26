import NavBar from "@/components/shared/NavBar";
import Header from "@/components/shared/Header";
import NewHome from "@/components/card/NewHome";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <NavBar />
      {children}
    </>
  );
}
