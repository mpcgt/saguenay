import { useState } from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import Bell from "./bell.mp3";
import { Menu, X } from "lucide-react";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    playSound();
  };

  const playSound = () => {
    const audio = new Audio(Bell);
    audio.volume = 0.01;
    audio.play();
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="fixed top-5 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-[66rem] before:mx-2 before:lg:mx-auto before:rounded-[26px] before:bg-neutral-600/30 before:backdrop-blur-md">
        <nav className="relative max-w-[66rem] w-full py-2.5 px-5 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto">
          <div className="flex items-center justify-between w-full">
            <h3
              className="ahsing text-white text-3xl mb-3 hover:text-indigo-400 transition-all"
              onMouseEnter={handleMouseEnter}
            >
              <Link to="/home" className="ahsing text-white text-3xl hover:text-indigo-400 transition-all">
                Saguenay
              </Link>
            </h3>

            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen ? "true" : "false"}
                aria-controls="hs-navbar-floating-dark"
                aria-label="Toggle navigation"
              >
                <Menu
                  className={`shrink-0 ${isMenuOpen ? "hidden" : "block"}`}
                  size={24}
                  color="white"
                />

                <X
                  className={`shrink-0 ${isMenuOpen ? "block" : "hidden"}`}
                  size={24}
                  color="white"
                />
              </button>
            </div>
          </div>

          <div
            id="hs-navbar-floating-dark"
            className={`hs-collapse ${isMenuOpen ? "block" : "hidden"} md:flex md:items-center md:justify-end gap-2 py-2 md:py-0 md:ps-7 transition-all duration-300`} // Ajuster les espacements entre les liens
            aria-labelledby="hs-navbar-floating-dark-collapse"
          >
            <Link to="/home">
              <span
                className="p-2 sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 whitespace-nowrap min-w-0" // Réduction du padding
                aria-current="page"
              >
                {t("navbarHome")}
              </span>
            </Link>
            <Link to="/discovery">
              <span className="p-2 sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 whitespace-nowrap min-w-0">
                {t("navbarDiscovery")}
              </span>
            </Link>
            <Link to="/profile">
              <span className="p-2 sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 whitespace-nowrap min-w-0">
                {t("navbarProfile")}
              </span>
            </Link>
            <Link to="/about">
              <span className="p-2 sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300 whitespace-nowrap min-w-0">
                {t("navbarAbout")}
              </span>
            </Link>

            <div>
            <Link to="/profile">
  <span className="group inline-flex items-center gap-x-2 py-2 px-3 bg-indigo-500 font-medium text-sm text-white rounded-full focus:outline-none whitespace-nowrap min-w-0">
    {t("navbarLogin")}
  </span>
</Link>

            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
