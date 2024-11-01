"use client";

import { faFeather, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Bookmark,
  CircleHelp,
  Compass,
  Github,
  House,
  Info,
  Mail,
  Settings,
  User,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-black border-b border-gray-700 text-sm py-2.5 lg:ps-[260px] dark:bg-neutral-800 dark:border-neutral-700">
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
                data-popover-target="popover-bottom"
                data-popover-placement="bottom"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <Link to="/create" className="text-white hover:text-white">
                    <FontAwesomeIcon
                      icon={faFeather}
                      className="fa-xl"
                      style={{ color: "#ffffff" }}
                    />
                    &nbsp;&nbsp;Create Post
                  </Link>
                </span>
              </button>

              <button
                type="button"
                className="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-black text-white hover:bg-gray-900"
              >
                <Link
                  to="/notification"
                  className="text-white hover:text-white"
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
                </Link>
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
  dark:bg-black dark:black
  border-r border-gray-700"
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
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-base hover:bg-zinc-900 rounded-xl transition-all text-white hover:text-white dark:bg-black">
                      <House />
                      Home
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/discovery">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-base hover:bg-zinc-900 rounded-xl transition-all text-white hover:text-white dark:bg-black">
                      <Compass />
                      Discovery
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/groups">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-base hover:bg-zinc-900 rounded-xl transition-all text-white hover:text-white dark:bg-black">
                      <Users />
                      Groups
                    </span>
                  </Link>{" "}
                </li>

                <li>
                  <Link to="/development">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-base hover:bg-zinc-900 rounded-xl transition-all text-white hover:text-white dark:bg-black">
                      <Bookmark />
                      Saved
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/notification">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-base hover:bg-zinc-900 rounded-xl transition-all text-white hover:text-white dark:bg-black">
                      <Mail />
                      Messages
                    </span>
                  </Link>{" "}
                </li>

                <li>
                  <Link to="/development">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-base hover:bg-zinc-900 rounded-xl transition-all text-white hover:text-white dark:bg-black">
                      <User />
                      Profile
                    </span>
                  </Link>{" "}
                </li>

                <li>
                  <Link to="/settings">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-base hover:bg-zinc-900 rounded-xl transition-all text-white hover:text-white dark:bg-black">
                      <Settings />
                      Settings
                    </span>
                  </Link>{" "}
                </li>

                <li>
                  <Link to="/about">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-base hover:bg-zinc-900 rounded-xl transition-all text-white hover:text-white dark:bg-black">
                      <Info />
                      About
                    </span>
                  </Link>{" "}
                </li>

                <li>
                  <Link to="/help">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-base hover:bg-zinc-900 rounded-xl transition-all text-white hover:text-white dark:bg-black">
                      <CircleHelp />
                      Help
                    </span>
                  </Link>{" "}
                </li>

                <li>
                  <Link to="https://github.com/mpcgt/saguenay" target="blank">
                    <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-base hover:bg-zinc-900 rounded-xl transition-all text-white hover:text-white dark:bg-black">
                      <Github />
                      GitHub
                    </span>
                  </Link>{" "}
                </li>
              </ul>
            </nav>
          </div>
          <div className="space-x-2 text-xs ml-3 mr-3 mb-3">
            <Link
              to="/404"
              className="text-gray-500 hover:text-gray-700 transition-all"
            >
              Invite people •
            </Link>
            <Link
              to="/rules"
              className="text-gray-500 hover:text-gray-700 transition-all"
            >
              Rules •
            </Link>
            <Link
              to="https://github.com/mpcgt/saguenay?tab=coc-ov-file"
              className="text-gray-500 hover:text-gray-700 transition-all"
            >
              Code of Conduct •
            </Link>
            <Link
              to="/404"
              className="text-gray-500 hover:text-gray-700 transition-all"
            >
              Confidentality •
            </Link>
            <Link
              to="/404"
              className="text-gray-500 hover:text-gray-700 transition-all"
            >
              Documentation •
            </Link>
            <Link
              to="https://github.com/mpcgt/saguenay"
              target="_blank"
              className="text-gray-500 hover:text-gray-700 transition-all"
            >
              GitHub repository
            </Link>
          </div>
          <p className="relative ml-3 mr-3 mb-2 font-bold text-xs text-gray-700">
            Saguenay is an open-source social network, with no ads and no weird
            trackers. <i>(v.0.2.23)</i>
          </p>
          <a
            href="https://github.com/mpcgt/saguenay"
            target="_blank"
            className="relative ml-3 mr-3 mb-5 font-bold text-xs underline text-gray-700 hover:text-gray-800"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </>
  );
}
