import { faCircleXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { AuroraHero } from "../ui/aurora";

export default function Waitlist() {

  return (
    <>
    <AuroraHero />
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="max-w-[50rem] flex flex-col mx-auto size-full">
        <header className="mb-auto flex justify-center z-50 w-full py-4">
          <nav className="px-4 sm:px-6 lg:px-8">
            <p className="ahsing text-indigo-400 text-6xl text-center">
              Saguenay
            </p>{" "}
          </nav>
        </header>

        <main id="content">
          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="block font-bold mb-5 sm:text-7xl text-white">
              Join the waitlist
            </h1>
            <p className="text-white">
              Saguenay uses invites to build a healthier community. You can sign
              up for the waitlist and we'll send one soon.
            </p>
            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                <button
                  type="button"
                  className="transition ease-in-out delay-150 text-white bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ fontSize: "20px" }}
                    beat
                  />
                  <a href="mailto:sgn.ntwk@gmail.com?subject=Invitation to join&body=I would like to join your invitation to use Saguenay with this email address:" target="blank" className="text-white hover:text-white">&nbsp;&nbsp;Send an invitation</a>
                </button>
            </div>
            <br />
            <Link to="/home">
            <button
                  type="button"
                  className="transition ease-in-out delay-150 text-white bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                >
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    style={{ fontSize: "20px" }}
                    beat
                  />
                  <a className="text-white hover:text-white">&nbsp;&nbsp;Go back</a>
                </button>
                </Link>
          </div>
        </main>

        <footer className="mt-auto text-center py-5">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              © 2024 Saguenay - Made with 💖 by{" "}
              <Link to="https://github.com/mpcgt" target="blank">
                Max
              </Link>
            </p>
          </div>
        </footer>
      </div>
    </div>
    </>
  );
}
