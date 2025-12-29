import BRFooter from "../components/BRTeamFooter";
import { BRNavbar } from "../components/BRNavbar";

export default function BRTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BRNavbar />
      <main className="pt-20 min-h-screen">
        {children}
      </main>
      <BRFooter />
    </>
  );
}
