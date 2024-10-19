import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Github } from "lucide-react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCompass  } from "@fortawesome/free-solid-svg-icons";
import { Clock, Users } from "lucide-react"
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../../../assets/images/logo/saguenay_purple.png";
import { useTranslation } from 'react-i18next';
import { BackgroundLines } from "../../ui/background-lines";
import CustomCursor from "./cursor";
import "../../../index.css";
import BannerLang from "../banners/bannerLanguage";

export default function Hero() {
  const { t } = useTranslation();


  return (
    <>
    <CustomCursor />
    <BannerLang />
        {/* Navigation */}
        <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-[66rem] before:mx-2 before:lg:mx-auto before:rounded-[26px] before:bg-neutral-600/30 before:backdrop-blur-md">
          <nav className="relative max-w-[66rem] w-full py-2.5 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto">
            <div className="flex items-center justify-between">
              <a
                className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                href="../templates/agency/index.html"
                aria-label="Saguenay"
              >
                <h3 className="ahsing text-white text-3xl mb-3">Saguenay</h3>
              </a>

              <div className="md:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none"
                  id="hs-navbar-floating-dark-collapse"
                  aria-expanded="false"
                  aria-controls="hs-navbar-floating-dark"
                  aria-label="Toggle navigation"
                  data-hs-collapse="#hs-navbar-floating-dark"
                >
                  <svg
                    className="hs-collapse-open:hidden shrink-0 size-4"
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
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden shrink-0 size-4"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              id="hs-navbar-floating-dark"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
              aria-labelledby="hs-navbar-floating-dark-collapse"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
                <Link to="/home">
                  <span
                    className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
                    aria-current="page"
                  >
                    {t('navbarHome')}
                  </span>
                </Link>
                <Link to="/waitlist">
                  <span className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300">
                  {t('navbarDiscovery')}
                  </span>
                </Link>
                <Link to="/waitlist">
                  <span className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300">
                  {t('navbarProfile')}
                  </span>
                </Link>
                <Link to="/about">
                  <span className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300">
                  {t('navbarAbout')}
                  </span>
                </Link>
                

                <div>
                  <Link to="/waitlist">
                    <span className="group inline-flex items-center gap-x-2 py-2 px-3 bg-indigo-500 font-medium text-sm text-white rounded-full focus:outline-none">
                    {t('navbarLogin')}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className="bg-clip-text text-transparent text-center ahsing bottom-14 bg-gradient-to-b from-neutral-700 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          {t('welcome1')} <br />
            <span className="text-gray-400">{t('welcome2')}</span>
          </h2>
          <p className="relative max-w-xl mx-auto text-sm md:text-lg bottom-14 text-white dark:text-white text-center">
            {t('presentation')}
          </p>
          <div className="flex justify-center space-x-8">
            <Link to="/waitlist">
              <span className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white hover:text-white rounded-md shadow-2xl group">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-400 group-hover:opacity-100"></span>
                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span className="relative hover:text-white"><FontAwesomeIcon icon={faCompass} style={{ fontSize: "20px" }} beat />&nbsp;&nbsp;&nbsp;{t('discover-button')}</span>
              </span>
            </Link>
            <Link to="https://github.com/mpcgt/saguenay" target="_blank">
              <span className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white hover:text-white rounded-md shadow-2xl group">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-400 group-hover:opacity-100"></span>
                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span className="relative hover:text-white"><FontAwesomeIcon icon={faGithub} style={{ fontSize: "20px" }} beat />&nbsp;&nbsp;&nbsp;GitHub</span>
              </span>
            </Link>
          </div>
        </BackgroundLines>


      
        <div className="bg-black p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        <div className="md:col-span-2 lg:col-span-3 bg-indigo-500 p-6 rounded-lg shadow-md flex flex-col justify-between order-1">
          <div>
            <p className="text-white text-sm mb-2">www.saguenay.vercel.app</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 ahsing">
              More than a network, a community.
            </h1>
            <p className="text-white text-xl">Your network, your world.</p>
          </div>
          <div className="flex justify-end">
            <span className="text-white text-5xl font-serif ahsing">S</span>
          </div>
        </div>

        <div className="md:row-span-2 flex flex-col order-2">
          <div className="bg-indigo-400 p-6 rounded-lg shadow-md flex-1 mb-4">
            <h2 className="text-2xl font-bold text-white mb-4">No advertising ✨</h2>
            <p className="text-white">
              On our platform, you will never see intrusive advertising. We believe that your social space should only be
              disrupted by what really matters: your interactions.
            </p>
          </div>

          <div className="bg-indigo-700 p-6 rounded-lg shadow-md flex-1">
          <span className="text-white text-sm italic">Coming soon!</span>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              Limited screen time <Clock className="ml-2 w-6 h-6" />
            </h2>
            <p className="text-white">
              We offer you the opportunity to limit your screen time according to your own criteria, to promote a healthy
              balance between your digital and personal life.
            </p>
          </div>
        </div>

        <div className="bg-indigo-500 p-6 rounded-lg shadow-md order-3 md:order-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">10+</h2>
            <Users className="text-white w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Groups created</h3>
          <p className="text-white">
            In Saguenay, groups enable users to create communities around
              common interests, exchange freely and share content without
              interference from algorithms or advertising, while respecting each
              other's privacy.</p>
        </div>

        <div className="bg-indigo-600 p-6 rounded-lg shadow-md order-3 md:order-4">
          <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Open source</h2>
          <Github className="text-white w-6 h-6" />
            </div>
            <p className="text-white">
            Saguenay is an open source project, which means that its source code is accessible to all. 
            It is hosted on GitHub, where anyone can view the code, suggest improvements and contribute to its development. 
            </p>
        </div>

        <div className="bg-indigo-400 p-6 rounded-lg shadow-md order-4 md:order-3">
          <h2 className="text-2xl font-bold text-white mb-4">
            No algorithm, so no control over your content 👀
          </h2>
          <p className="text-white">
            On our platform, you will never see intrusive advertising. We believe that your social space should only be
            disrupted by what really matters: your interactions.
          </p>
        </div>
      </div>
    </div>

      {/* Success Stories */}
      <section className="bg-black py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-4 ahsing">
          The numbers
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Saguenay's development is advancing rapidly, with key features such as
          data protection, total absence of ads, and personalized options to
          limit screen time. With no algorithms to influence content, users
          retain total control over their interactions and online experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="text-indigo-400 text-4xl font-bold mb-2">10+</div>
            <h3 className="text-xl font-semibold mb-2">Groups created 👥</h3>
            <p className="text-gray-400 mb-4">
              In Saguenay, groups enable users to create communities around
              common interests, exchange freely and share content without
              interference from algorithms or advertising, while respecting each
              other's privacy.
            </p>
            <a href="#" className="text-indigo-400 flex items-center">
              Read more <ArrowRight className="ml-2" />
            </a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="text-green-400 text-4xl font-bold mb-2">
              39%<span>&nbsp;</span>
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
              Saguenay's development is progressing rapidly, with key features
              already in place to deliver a smooth, secure and user-friendly
              experience.
            </p>
            <a href="#" className="text-indigo-400 flex items-center">
              Read more <ArrowRight className="ml-2" />
            </a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="text-red-400 text-4xl font-bold mb-2">100%</div>
            <h3 className="text-xl font-semibold mb-2">
              Respect for privacy 🔒
            </h3>
            <p className="text-gray-400 mb-4">
              Saguenay is committed to protecting the privacy of its users by
              ensuring that all their personal data is encrypted and secured by
              state-of-the-art protection measures, guaranteeing exceptional
              confidentiality.
            </p>
            <a href="#" className="text-indigo-400 flex items-center">
              Read more <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-black py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-4 ahsing">
          More freedom
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          At Saguenay, we honor your privacy by ensuring your personal data is
          never shared or used without consent. You won’t find any intrusive ads
          here—just meaningful connections. With customizable screen time
          options, you maintain a healthy balance between your digital and
          personal life. And best of all, no algorithms control what you see.
          Your content, your decisions, your world.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 max-w-6xl mx-auto">
          <img
            src={Image}
            alt="Image"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className="space-y-6">
            <div className="flex items-start">
              <CheckCircle className="text-indigo-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Respectful of privacy 🛡️</h3>
                <p className="text-gray-400">
                  We make it a point of honor to protect your privacy, ensuring
                  that your personal data is never shared or used without your
                  consent.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-indigo-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">No advertising ✨</h3>
                <p className="text-gray-400">
                  On our platform, you will never see intrusive advertising. We
                  believe that your social space should only be disrupted by
                  what really matters: your interactions..
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
                  according to your own criteria, to promote a healthy balance
                  between your digital and personal life.
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
                  No algorithm controls what you see here. You're in control of
                  your content, and only you decide which interactions count.
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

      {/* Contact Form */}
      <section className="py-20 bg-black px-4">
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
                You can communicate with our community in GitHub Discussions by
                creating a new discussion.
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
              placeholder="Name"
              className="w-full bg-gray-800 text-white p-3 rounded-lg mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-800 text-white p-3 rounded-lg mb-4"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full bg-gray-800 text-white p-3 rounded-lg mb-4"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full bg-gray-800 text-white p-3 rounded-lg mb-4"
            />
            <textarea
              placeholder="Tell us about your project"
              className="w-full bg-gray-800 text-white p-3 rounded-lg mb-4"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-400 text-black px-6 py-3 rounded-full w-full font-semibold"
            >
              Coming soon!
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
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
                <span className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400">
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
  );
}
