import NewHome from "@/components/card/NewHome";
import Header from "@/components/shared/Header";
import NavBar from "@/components/shared/NavBar";


export default function Layout({children}: {children: React.ReactNode}) {
    return (
      <>
      <Header />
      <NavBar />
      <NewHome/>
      {children}
      </>
    )
  }
  