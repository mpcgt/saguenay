import { useEffect } from "react";
import Hero from "../features/hero/hero";

export default function Home() {
  useEffect(() => {
    document.title = 'Saguenay';
  }, []);
    return (
      <Hero />
    );
  }
  