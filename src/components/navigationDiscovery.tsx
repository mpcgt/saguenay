"use client";

import {
  faHouse,
  faBookmark,
  faCircleInfo,
  faEarthEurope,
  faEnvelope,
  faGear,
  faPeopleGroup,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-black text-sm py-2.5 lg:ps-[260px] dark:bg-neutral-800 dark:border-neutral-700">
        <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
          <div className="me-5 lg:me-0 lg:hidden">
            <a
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Saguenay"
            >
              <h1 className="ahsing text-white text-3xl">Saguenay</h1>
            </a>
          </div>

          <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                  <svg
                    className="shrink-0 size-4 text-gray-400 dark:text-white/60"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="py-2 ps-10 pe-16 block w-full bg-black border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600"
                  placeholder="Search (Coming soon!)"
                />
                <div className="hidden absolute inset-y-0 end-0 items-center pointer-events-none z-20 pe-1">
                  <button
                    type="button"
                    className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                    aria-label="Close"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-end gap-1">
              <button
                type="button"
                className="md:hidden size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-white "
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span className="sr-only">Search</span>
              </button>

              <button
                type="button"
                className="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-black text-white hover:bg-gray-900"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
                <span className="sr-only">Notifications</span>
              </button>

              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-dropdown-account"
                  type="button"
                  className="size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-black text-white hover:bg-gray-900"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        id="hs-application-sidebar"
        className="hs-overlay [--auto-close:lg]
  hs-overlay-open:translate-x-0
  -translate-x-full transition-all duration-300 transform
  w-[260px] h-full
  hidden
  fixed inset-y-0 start-0 z-[60]
  bg-black
  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
  dark:bg-black dark:black"
        role="dialog"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full">
          <div className="px-8 pt-4">
            <p className="ahsing text-indigo-400 text-4xl text-center">
              Saguenay
            </p>
          </div>

          <hr className="w-32 h-1 mt-8 mb-6 mx-auto bg-indigo-400 border-0 rounded dark:bg-gray-700" />

          <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <nav
              className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open
            >
              <ul className="flex flex-col space-y-1">
                <li>
                  <Link to="/home">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:text-white dark:bg-black">
                      <FontAwesomeIcon icon={faHouse} />
                      Home
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/discovery">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:text-white dark:bg-black">
                      <FontAwesomeIcon icon={faEarthEurope} />
                      Discovery
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/404">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:text-white dark:bg-black">
                      <FontAwesomeIcon icon={faBookmark} />
                      Saved
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/notification">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:text-white dark:bg-black">
                      <FontAwesomeIcon icon={faEnvelope} />
                      Messages
                    </span>
                  </Link>{" "}
                </li>

                <li>
                  <Link to="/404">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:text-white dark:bg-black">
                      <FontAwesomeIcon icon={faUser} />
                      Profile
                    </span>
                  </Link>{" "}
                </li>

                <li>
                  <Link to="/settings">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:text-white dark:bg-black">
                      <FontAwesomeIcon icon={faGear} />
                      Settings
                    </span>
                  </Link>{" "}
                </li>

                <li>
                  <Link to="/groups">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:text-white dark:bg-black">
                      <FontAwesomeIcon icon={faPeopleGroup} />
                      Groups
                    </span>
                  </Link>{" "}
                </li>

                <li>
                  <Link to="/about">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:text-white dark:bg-black">
                      <FontAwesomeIcon icon={faCircleInfo} />
                      About
                    </span>
                  </Link>{" "}
                </li>

                <li>
                  <Link to="https://github.com/mpcgt/saguenay" target="blank">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:text-white dark:bg-black">
                      <FontAwesomeIcon icon={faGithub} />
                      GitHub
                    </span>
                  </Link>{" "}
                </li>

                <li>
                  <button
                    data-popover-target="popover-bottom"
                    data-popover-placement="bottom"
                    className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] left-12 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      Create Post
                    </span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
