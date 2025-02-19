import "../../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBluesky,
  faFacebook,
  faMastodon,
  faRedditAlien,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FC, ReactNode, MouseEventHandler, useState, useEffect } from "react";
import NavigationBar from "../navbar/navigation";
import AnimateImages from "./images";
import CustomCursor from "./cursor";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, Github, Users } from "lucide-react";
import {
  faArrowDown,
  faCircle,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ children, className, onClick }) => (
  <button className={`px-6 py-3 rounded ${className}`} onClick={onClick}>
    {children}
  </button>
);

const NewHero: FC = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <>
        <>
          <>
            <>
              <div className="min-h-screen bg-black text-white">
                {!isMobileOrTablet && <CustomCursor />}
                <NavigationBar />
                <div className="max-w-7xl mx-auto px-4 pt-40 pb-24 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h1 className="ahsing text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-center sm:text-left">
                        {t("welcome")}
                      </h1>
                      <p className="mt-6 text-lg sm:text-xl text-center sm:text-left">
                        {t("presentation")}
                      </p>
                      <div className="mt-8 flex justify-center sm:justify-start gap-4">
                        <button
                          data-popover-target="popover-bottom"
                          data-popover-placement="bottom"
                          className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        >
                          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            <Link
                              to="/discovery"
                              className="text-white hover:text-white"
                            >
                              <FontAwesomeIcon
                                icon={faNewspaper}
                                beatFade
                                className="fa-xl"
                                style={{ color: "#ffffff" }}
                              />
                              &nbsp;&nbsp;{t("currentPublications")}
                            </Link>
                          </span>
                        </button>
                        <Button className="border hover:border-indigo-500 bg-zinc-800 hover:bg-zinc-700 text-white rounded-2xl transition-all px-3 py-2">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="24"
                              height="24"
                              viewBox="0 0 64 64"
                              style={{ fill: "#FFFFFF" }}
                            >
                              <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6z"></path>
                            </svg>
                            <Link
                              to="https://github.com/mpcgt/saguenay"
                              target="_blank"
                              className="text-white hover:text-white"
                            >
                              GitHub
                            </Link>
                          </div>
                        </Button>
                      </div>
                      <p className="mt-6 text-sm text-center sm:text-left">
                        {t("version")}{" "}
                        <span className="font-bold">v.0.3.4</span>
                      </p>
                      <div className="mt-12 text-center sm:text-left">
                        <p className="text-base mb-4">
                          <span className="ahsing">Saguenay</span>{" "}
                          {t("alternative")}
                        </p>
                        <div className="flex justify-center sm:justify-start gap-6">
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="w-20 h-6 opacity-60 hover:text-blue-500 hover:opacity-100 transition-all"
                          />

                          <FontAwesomeIcon
                            icon={faXTwitter}
                            className="w-20 h-6 opacity-60 hover:text-zinc-700 hover:opacity-100 transition-all"
                          />
                          <FontAwesomeIcon
                            icon={faRedditAlien}
                            className="w-20 h-6 opacity-60 hover:text-orange-600 hover:opacity-100 transition-all"
                          />
                          <FontAwesomeIcon
                            icon={faMastodon}
                            className="w-20 h-6 opacity-60 hover:text-indigo-500 hover:opacity-100 transition-all"
                          />
                          <FontAwesomeIcon
                            icon={faBluesky}
                            className="w-20 h-6 opacity-60 hover:text-blue-400 hover:opacity-100 transition-all"
                          />
                        </div>
                      </div>
                      <br />
                      <p className="text-base mb-4">
                        <span className="ahsing">Saguenay </span>
                        {t("language")}
                      </p>
                      <div style={{ display: "flex", gap: "10px", backgroundColor: "black" }}>
                        <button onClick={() => handleChangeLanguage("fr")}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                          >
                            <path fill="#fff" d="M10 4H22V28H10z"></path>
                            <path
                              d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                              fill="#092050"
                            ></path>
                            <path
                              d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                              transform="rotate(180 26 16)"
                              fill="#be2a2c"
                            ></path>
                            <path
                              d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                              opacity=".15"
                            ></path>
                            <path
                              d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                              fill="#fff"
                              opacity=".2"
                            ></path>
                          </svg>
                        </button>
                        <button onClick={() => handleChangeLanguage("en")}>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                            >
                              <rect
                                x="1"
                                y="4"
                                width="30"
                                height="24"
                                rx="4"
                                ry="4"
                                fill="#fff"
                              ></rect>
                              <path
                                d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z"
                                fill="#a62842"
                              ></path>
                              <path
                                d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z"
                                fill="#a62842"
                              ></path>
                              <path
                                fill="#a62842"
                                d="M2 11.385H31V13.231H2z"
                              ></path>
                              <path
                                fill="#a62842"
                                d="M2 15.077H31V16.923000000000002H2z"
                              ></path>
                              <path
                                fill="#a62842"
                                d="M1 18.769H31V20.615H1z"
                              ></path>
                              <path
                                d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z"
                                fill="#a62842"
                              ></path>
                              <path
                                d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z"
                                fill="#a62842"
                              ></path>
                              <path
                                d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z"
                                fill="#102d5e"
                              ></path>
                              <path
                                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                                opacity=".15"
                              ></path>
                              <path
                                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                                fill="#fff"
                                opacity=".2"
                              ></path>
                              <path
                                fill="#fff"
                                d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"
                              ></path>
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                            >
                              <rect
                                x="1"
                                y="4"
                                width="30"
                                height="24"
                                rx="4"
                                ry="4"
                                fill="#071b65"
                              ></rect>
                              <path
                                d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
                                fill="#fff"
                              ></path>
                              <path
                                d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
                                fill="#b92932"
                              ></path>
                              <path
                                d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
                                fill="#b92932"
                              ></path>
                              <path
                                d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
                                fill="#fff"
                              ></path>
                              <rect
                                x="13"
                                y="4"
                                width="6"
                                height="24"
                                fill="#fff"
                              ></rect>
                              <rect
                                x="1"
                                y="13"
                                width="30"
                                height="6"
                                fill="#fff"
                              ></rect>
                              <rect
                                x="14"
                                y="4"
                                width="4"
                                height="24"
                                fill="#b92932"
                              ></rect>
                              <rect
                                x="14"
                                y="1"
                                width="4"
                                height="30"
                                transform="translate(32) rotate(90)"
                                fill="#b92932"
                              ></rect>
                              <path
                                d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z"
                                fill="#b92932"
                              ></path>
                              <path
                                d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z"
                                fill="#b92932"
                              ></path>
                              <path
                                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                                opacity=".15"
                              ></path>
                              <path
                                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                                fill="#fff"
                                opacity=".2"
                              ></path>
                            </svg>
                          </div>
                        </button>
                        <button onClick={() => handleChangeLanguage("es")}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                          >
                            <path fill="#f1c142" d="M1 10H31V22H1z"></path>
                            <path
                              d="M5,4H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z"
                              fill="#a0251e"
                            ></path>
                            <path
                              d="M5,21H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z"
                              transform="rotate(180 16 24.5)"
                              fill="#a0251e"
                            ></path>
                            <path
                              d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                              opacity=".15"
                            ></path>
                            <path
                              d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                              fill="#fff"
                              opacity=".2"
                            ></path>
                            <path
                              d="M12.614,13.091c.066-.031,.055-.14-.016-.157,.057-.047,.02-.15-.055-.148,.04-.057-.012-.144-.082-.13,.021-.062-.042-.127-.104-.105,.01-.068-.071-.119-.127-.081,.004-.068-.081-.112-.134-.069-.01-.071-.11-.095-.15-.035-.014-.068-.111-.087-.149-.028-.027-.055-.114-.057-.144-.004-.03-.047-.107-.045-.136,.002-.018-.028-.057-.044-.09-.034,.009-.065-.066-.115-.122-.082,.002-.07-.087-.111-.138-.064-.013-.064-.103-.087-.144-.036-.02-.063-.114-.075-.148-.017-.036-.056-.129-.042-.147,.022-.041-.055-.135-.031-.146,.036-.011-.008-.023-.014-.037-.016,.006-.008,.01-.016,.015-.025h.002c.058-.107,.004-.256-.106-.298v-.098h.099v-.154h-.099v-.101h-.151v.101h-.099v.154h.099v.096c-.113,.04-.169,.191-.11,.299h.002c.004,.008,.009,.017,.014,.024-.015,.002-.029,.008-.04,.017-.011-.067-.106-.091-.146-.036-.018-.064-.111-.078-.147-.022-.034-.057-.128-.046-.148,.017-.041-.052-.131-.028-.144,.036-.051-.047-.139-.006-.138,.064-.056-.033-.131,.017-.122,.082-.034-.01-.072,.006-.091,.034-.029-.047-.106-.049-.136-.002-.03-.054-.117-.051-.143,.004-.037-.059-.135-.04-.149,.028-.039-.06-.14-.037-.15,.035-.053-.043-.138,0-.134,.069-.056-.038-.137,.013-.127,.081-.062-.021-.125,.044-.104,.105-.05-.009-.096,.033-.096,.084h0c0,.017,.005,.033,.014,.047-.075-.002-.111,.101-.055,.148-.071,.017-.082,.125-.016,.157-.061,.035-.047,.138,.022,.154-.013,.015-.021,.034-.021,.055h0c0,.042,.03,.077,.069,.084-.023,.048,.009,.11,.06,.118-.013,.03-.012,.073-.012,.106,.09-.019,.2,.006,.239,.11-.015,.068,.065,.156,.138,.146,.06,.085,.133,.165,.251,.197-.021,.093,.064,.093,.123,.118-.013,.016-.043,.063-.055,.081,.024,.013,.087,.041,.113,.051,.005,.019,.004,.028,.004,.031,.091,.501,2.534,.502,2.616-.001v-.002s.004,.003,.004,.004c0-.003-.001-.011,.004-.031l.118-.042-.062-.09c.056-.028,.145-.025,.123-.119,.119-.032,.193-.112,.253-.198,.073,.01,.153-.078,.138-.146,.039-.104,.15-.129,.239-.11,0-.035,.002-.078-.013-.109,.044-.014,.07-.071,.049-.115,.062-.009,.091-.093,.048-.139,.069-.016,.083-.12,.022-.154Zm-.296-.114c0,.049-.012,.098-.034,.141-.198-.137-.477-.238-.694-.214-.002-.009-.006-.017-.011-.024,0,0,0-.001,0-.002,.064-.021,.074-.12,.015-.153,0,0,0,0,0,0,.048-.032,.045-.113-.005-.141,.328-.039,.728,.09,.728,.393Zm-.956-.275c0,.063-.02,.124-.054,.175-.274-.059-.412-.169-.717-.185-.007-.082-.005-.171-.011-.254,.246-.19,.81-.062,.783,.264Zm-1.191-.164c-.002,.05-.003,.102-.007,.151-.302,.013-.449,.122-.719,.185-.26-.406,.415-.676,.73-.436-.002,.033-.005,.067-.004,.101Zm-1.046,.117c0,.028,.014,.053,.034,.069,0,0,0,0,0,0-.058,.033-.049,.132,.015,.152,0,0,0,.001,0,.002-.005,.007-.008,.015-.011,.024-.219-.024-.495,.067-.698,.206-.155-.377,.323-.576,.698-.525-.023,.015-.039,.041-.039,.072Zm3.065-.115s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0Zm-3.113,1.798v.002s-.002,0-.003,.002c0-.001,.002-.003,.003-.003Z"
                              fill="#9b8028"
                            ></path>
                            <path
                              d="M14.133,16.856c.275-.65,.201-.508-.319-.787v-.873c.149-.099-.094-.121,.05-.235h.072v-.339h-.99v.339h.075c.136,.102-.091,.146,.05,.235v.76c-.524-.007-.771,.066-.679,.576h.039s0,0,0,0l.016,.036c.14-.063,.372-.107,.624-.119v.224c-.384,.029-.42,.608,0,.8v1.291c-.053,.017-.069,.089-.024,.123,.007,.065-.058,.092-.113,.083,0,.026,0,.237,0,.269-.044,.024-.113,.03-.17,.028v.108s0,0,0,0v.107s0,0,0,0v.107s0,0,0,0v.108s0,0,0,0v.186c.459-.068,.895-.068,1.353,0v-.616c-.057,.002-.124-.004-.17-.028,0-.033,0-.241,0-.268-.054,.008-.118-.017-.113-.081,.048-.033,.034-.108-.021-.126v-.932c.038,.017,.073,.035,.105,.053-.105,.119-.092,.326,.031,.429l.057-.053c.222-.329,.396-.743-.193-.896v-.35c.177-.019,.289-.074,.319-.158Z"
                              fill="#9b8028"
                            ></path>
                            <path
                              d="M8.36,16.058c-.153-.062-.39-.098-.653-.102v-.76c.094-.041,.034-.115-.013-.159,.02-.038,.092-.057,.056-.115h.043v-.261h-.912v.261h.039c-.037,.059,.039,.078,.057,.115-.047,.042-.108,.118-.014,.159v.873c-.644,.133-.611,.748,0,.945v.35c-.59,.154-.415,.567-.193,.896l.057,.053c.123-.103,.136-.31,.031-.429,.032-.018,.067-.036,.105-.053v.932c-.055,.018-.069,.093-.021,.126,.005,.064-.059,.089-.113,.081,0,.026,0,.236,0,.268-.045,.024-.113,.031-.17,.028v.401h0v.215c.459-.068,.895-.068,1.352,0v-.186s0,0,0,0v-.108s0,0,0,0v-.107s0,0,0,0v-.107s0,0,0,0v-.108c-.056,.002-.124-.004-.169-.028,0-.033,0-.241,0-.269-.055,.008-.119-.018-.113-.083,.045-.034,.03-.107-.024-.124v-1.29c.421-.192,.383-.772,0-.8v-.224c.575,.035,.796,.314,.653-.392Z"
                              fill="#9b8028"
                            ></path>
                            <path
                              d="M12.531,14.533h-4.28l.003,2.572v1.485c0,.432,.226,.822,.591,1.019,.473,.252,1.024,.391,1.552,.391s1.064-.135,1.544-.391c.364-.197,.591-.587,.591-1.019v-4.057Z"
                              fill="#a0251e"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="relative flex justify-center lg:justify-end">
                      <AnimateImages />
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    bounce
                    className="flex justify-center mx-auto text-6xl	"
                  />
                </div>
                <section className="bg-black text-white py-20 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                    <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-bl from-gray-700 via-gray-900 to-black p-6 rounded-2xl shadow-md flex flex-col justify-between order-1">
                      <div>
                        <p className="text-white text-sm mb-2">
                          www.saguenay.vercel.app
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 ahsing">
                          More than a network, a community.
                        </h1>
                        <p className="text-white text-xl">
                          Your network, your world.
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <span className="text-white text-5xl font-serif ahsing">
                          S
                        </span>
                      </div>
                    </div>

                    <div className="md:row-span-2 flex flex-col order-2">
                      <div className="bg-gradient-to-br from-gray-700 via-gray-900 to-black p-6 rounded-2xl shadow-md flex-1 mb-4">
                        <h2 className="text-2xl font-bold text-white mb-4">
                          No advertising ✨
                        </h2>
                        <p className="text-white">
                          On our platform, you will never see intrusive
                          advertising. We believe that your social space should
                          only be disrupted by what really matters: your
                          interactions.
                        </p>
                      </div>

                      <div className="bg-gradient-to-l from-gray-700 via-gray-900 to-black p-6 rounded-2xl shadow-md flex-1">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                          Limited screen time <Clock className="ml-2 w-6 h-6" />
                        </h2>
                        <p className="text-white">
                          We offer you the opportunity to limit your screen time
                          according to your own criteria, to promote a healthy
                          balance between your digital and personal life.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-t from-gray-700 via-gray-900 to-black rounded-2xl p-6  shadow-md order-3 md:order-4">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-white">10+</h2>
                        <Users className="text-white w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Groups created
                      </h3>
                      <p className="text-white">
                        In Saguenay, groups enable users to create communities
                        around common interests, exchange freely and share
                        content without interference from algorithms or
                        advertising, while respecting each other's privacy.
                      </p>
                    </div>

                    <div className="bg-gradient-to-tl from-gray-700 via-gray-900 to-black p-6 rounded-2xl shadow-md order-3 md:order-4">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-white">
                          Open source
                        </h2>
                        <Github className="text-white w-6 h-6" />
                      </div>
                      <p className="text-white">
                        Saguenay is an open source project, which means that its
                        source code is accessible to all. It is hosted on
                        GitHub, where anyone can view the code, suggest
                        improvements and contribute to its development.
                      </p>
                    </div>

                    <div className="bg-gradient-to-tr from-gray-700 via-gray-900 to-black p-6 rounded-2xl shadow-md order-4 md:order-3">
                      <h2 className="text-2xl font-bold text-white mb-4">
                        No algorithm, so no control over your content 👀
                      </h2>
                      <p className="text-white">
                        On our platform, you will never see intrusive
                        advertising. We believe that your social space should
                        only be disrupted by what really matters: your
                        interactions.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <section className="bg-black text-white py-20 px-4">
                <h2 className="text-3xl font-bold text-center mb-4 ahsing">
                  The numbers
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                  Saguenay's development is advancing rapidly, with key features
                  such as data protection, total absence of ads, and
                  personalized options to limit screen time. With no algorithms
                  to influence content, users retain total control over their
                  interactions and online experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  <div className="bg-gray-900 p-6 rounded-3xl">
                    <div className="text-indigo-400 text-4xl font-bold mb-2">
                      10+
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Groups created 👥
                    </h3>
                    <p className="text-gray-400 mb-4">
                      In Saguenay, groups enable users to create communities
                      around common interests, exchange freely and share content
                      without interference from algorithms or advertising, while
                      respecting each other's privacy.
                    </p>
                    <Link
                      to="/development"
                      className="text-indigo-400 flex items-center"
                    >
                      Read more <ArrowRight className="ml-2" />
                    </Link>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-3xl">
                    <div className="text-green-400 text-4xl font-bold mb-2">
                      56%<span>&nbsp;</span>
                      <FontAwesomeIcon
                        icon={faCircle}
                        fade
                        style={{ fontSize: "20px", color: "#ff0000" }}
                      />
                      <span className="text-red-600 text-2xl">&nbsp;Live</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Development progress 🛠️
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Saguenay's development is progressing rapidly, with key
                      features already in place to deliver a smooth, secure and
                      user-friendly experience.
                    </p>
                    <Link
                      to="/development"
                      className="text-indigo-400 flex items-center"
                    >
                      Read more <ArrowRight className="ml-2" />
                    </Link>
                  </div>
                  <div className="bg-gray-900 p-6 rounded-3xl">
                    <div className="text-red-400 text-4xl font-bold mb-2">
                      100%
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Your data is stored in France&nbsp;&nbsp;
                      <svg
                        width="30px"
                        height="40px"
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--twemoji"
                        preserveAspectRatio="xMidYMid meet"
                        style={{ display: "inline-block" }}
                      >
                        <path
                          fill="#ED2939"
                          d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"
                        ></path>
                        <path
                          fill="#002495"
                          d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"
                        ></path>
                        <path fill="#EEE" d="M12 5h12v26H12z"></path>
                      </svg>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      As part of our commitment to transparency and security,
                      your data is stored in France. This means that your
                      personal information is handled in accordance with the
                      highest standards of data protection, offering you both
                      security and compliance with global privacy regulations.
                    </p>
                    <Link
                      to="/development"
                      className="text-indigo-400 flex items-center"
                    >
                      Read more <ArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </section>
            </>
            <section className="bg-black text-white py-20 px-4">
              <h2 className="text-3xl font-bold text-center mb-4 ahsing">
                More freedom
              </h2>
              <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                At Saguenay, we honor your privacy by ensuring your personal
                data is never shared or used without consent. You won’t find any
                intrusive ads here—just meaningful connections. With
                customizable screen time options, you maintain a healthy balance
                between your digital and personal life. And best of all, no
                algorithms control what you see. Your content, your decisions,
                your world.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 max-w-6xl mx-auto">
                <img
                  src="https://github.com/mpcgt/saguenay/blob/main/src/assets/images/logo/saguenay_purple.png?raw=true"
                  alt="Image"
                  width={400}
                  height={300}
                  className="rounded-2xl"
                />
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="text-indigo-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Respectful of privacy 🛡️
                      </h3>
                      <p className="text-gray-400">
                        We make it a point of honor to protect your privacy,
                        ensuring that your personal data is never shared or used
                        without your consent.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-indigo-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">No advertising ✨</h3>
                      <p className="text-gray-400">
                        On our platform, you will never see intrusive
                        advertising. We believe that your social space should
                        only be disrupted by what really matters: your
                        interactions..
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-indigo-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Limited screen time (you can modify your choices) 🕑
                      </h3>
                      <p className="text-gray-400">
                        We offer you the opportunity to limit your screen time
                        according to your own criteria, to promote a healthy
                        balance between your digital and personal life.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-indigo-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        No algorithm, so no control over your content 👀
                      </h3>
                      <p className="text-gray-400">
                        No algorithm controls what you see here. You're in
                        control of your content, and only you decide which
                        interactions count.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <button className="bg-indigo-400 text-black px-6 py-3 rounded-full font-semibold">
                  Learn more
                </button>
              </div>
            </section>
          </>
          <section className="py-20 bg-black text-white px-4">
            <h2 className="text-3xl font-bold text-center mb-4 ahsing">
              Contact us
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              Whatever your goal - we will get you there.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12 max-w-6xl mx-auto">
              <div className="space-y-6 md:w-1/3">
                <div>
                  <h3 className="font-semibold mb-2">Email us:</h3>
                  <p className="text-gray-400">sgn.ntwk@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">GitHub Discussions</h3>
                  <p className="text-gray-400">
                    You can communicate with our community in GitHub Discussions
                    by creating a new discussion.
                  </p>
                  <Link
                    to="https://github.com/mpcgt/saguenay/discussions"
                    target="blank"
                    className="text-indigo-400 flex items-center mt-2"
                  >
                    Go to page <ArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
              <form className="md:w-2/3">
                <input
                  type="text"
                  placeholder="Name (Coming soon!)"
                  className="w-full bg-gray-800 text-white p-3 rounded-2xl mb-4"
                />
                <input
                  type="email"
                  placeholder="Email (Coming soon!)"
                  className="w-full bg-gray-800 text-white p-3 rounded-2xl mb-4"
                />
                <textarea
                  placeholder="Write your message (Coming soon!)"
                  className="w-full bg-gray-800 text-white p-3 rounded-2xl mb-4"
                  rows={4}
                ></textarea>
                <button
                  type="submit"
                  className="bg-indigo-400 text-black px-6 py-3 rounded-full w-full font-semibold"
                  disabled
                >
                  Coming soon!
                </button>
              </form>
            </div>
          </section>
        </>
        <div className="bg-black text-center text-gray-400">
          <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center">
              <div>
                <h3 className="ahsing text-white text-3xl mb-3">Saguenay</h3>
              </div>

              <div className="mt-3">
                © 2024 Saguenay - Made with 💖 by{" "}
                <Link to="https://github.com/mpcgt" target="blank">
                  Max
                </Link>
              </div>

              <div className="mt-3 space-x-2">
                <Link to="https://github.com/mpcgt/saguenay" target="_blank">
                  <span className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400">
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </>
    </>
  );
};

export { NewHero };
