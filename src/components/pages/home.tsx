import { useEffect } from "react";
import { NewHero } from "../features/hero/newhero";

export default function Home() {
  useEffect(() => {
    document.title = 'Saguenay';
  }, []);
    return (
      <NewHero />
    );
  }
  