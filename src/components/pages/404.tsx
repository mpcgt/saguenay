import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Error() {
  return (
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
            <h1 className="block text-7xl font-bold sm:text-9xl text-white">
              404
            </h1>
            <p className="mt-3 text-white">Oops, something went wrong.</p>
            <p className="text-white">Sorry, we couldn't find your page.</p>
            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <Link to="/home">
                <button
                  type="button"
                  className="transition ease-in-out delay-150 text-white bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ fontSize: "20px" }}
                    shake
                  />
                  <span>&nbsp;&nbsp;&nbsp;</span>Go back
                </button>
              </Link>
            </div>
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
  );
}
