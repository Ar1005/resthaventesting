import NavBar from "@/components/shared/NavBar";
import Header from "@/components/shared/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <NavBar />
      {children}
    </>
  );
}
