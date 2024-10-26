import { useEffect } from "react";

export default function Saved() {
  useEffect(() => {
    document.title = 'Saved - Saguenay';
  }, []);
    return (
      <div>
        <h1>Saved</h1>
        <h3>
          With the Saguenay social network, users can create groups based on their
          interests, whether sports, art or the environment. This makes it easy to
          bring together people who share the same passions and organize
          activities.
        </h3>
      </div>
    );
  }
  