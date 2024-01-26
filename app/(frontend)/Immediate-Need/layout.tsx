import NewHome from "@/components/card/NewHome";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
      <>
      <NewHome />
      {children}
      </>
    )
  }
  