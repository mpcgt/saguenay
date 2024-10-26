import { useEffect } from "react";
import NavigationBar from "../features/navbar/navigation";
import { AuroraHero } from "../ui/aurora";

export default function Waitlist() {
  useEffect(() => {
    document.title = 'Waitlist - Saguenay';
  }, []);
  return (
    <>
    <NavigationBar />
    <AuroraHero />
    </>
  );
}
