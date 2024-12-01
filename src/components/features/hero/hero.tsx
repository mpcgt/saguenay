import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Github } from "lucide-react";
import { Clock, Users } from "lucide-react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../../../assets/images/logo/saguenay_purple.png";
import CustomCursor from "./cursor";
import "../../../index.css";
import { BackgroundHero } from "./background";

export default function Hero() {
  return (
    <>
      <CustomCursor />
      <BackgroundHero />

      <div className="bg-black p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-bl from-gray-700 via-gray-900 to-black p-6 rounded-2xl shadow-md flex flex-col justify-between order-1">
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
            <div className="bg-gradient-to-br from-gray-700 via-gray-900 to-black p-6 rounded-2xl shadow-md flex-1 mb-4">
              <h2 className="text-2xl font-bold text-white mb-4">
                No advertising ✨
              </h2>
              <p className="text-white">
                On our platform, you will never see intrusive advertising. We
                believe that your social space should only be disrupted by what
                really matters: your interactions.
              </p>
            </div>

            <div className="bg-gradient-to-l from-gray-700 via-gray-900 to-black p-6 rounded-2xl shadow-md flex-1">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                Limited screen time <Clock className="ml-2 w-6 h-6" />
              </h2>
              <p className="text-white">
                We offer you the opportunity to limit your screen time according
                to your own criteria, to promote a healthy balance between your
                digital and personal life.
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
              In Saguenay, groups enable users to create communities around
              common interests, exchange freely and share content without
              interference from algorithms or advertising, while respecting each
              other's privacy.
            </p>
          </div>

          <div className="bg-gradient-to-tl from-gray-700 via-gray-900 to-black p-6 rounded-2xl shadow-md order-3 md:order-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Open source</h2>
              <Github className="text-white w-6 h-6" />
            </div>
            <p className="text-white">
              Saguenay is an open source project, which means that its source
              code is accessible to all. It is hosted on GitHub, where anyone
              can view the code, suggest improvements and contribute to its
              development.
            </p>
          </div>

          <div className="bg-gradient-to-tr from-gray-700 via-gray-900 to-black p-6 rounded-2xl shadow-md order-4 md:order-3">
            <h2 className="text-2xl font-bold text-white mb-4">
              No algorithm, so no control over your content 👀
            </h2>
            <p className="text-white">
              On our platform, you will never see intrusive advertising. We
              believe that your social space should only be disrupted by what
              really matters: your interactions.
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
          <div className="bg-gray-900 p-6 rounded-3xl">
            <div className="text-indigo-400 text-4xl font-bold mb-2">10+</div>
            <h3 className="text-xl font-semibold mb-2">Groups created 👥</h3>
            <p className="text-gray-400 mb-4">
              In Saguenay, groups enable users to create communities around
              common interests, exchange freely and share content without
              interference from algorithms or advertising, while respecting each
              other's privacy.
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
              51%<span>&nbsp;</span>
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
            <Link
              to="/development"
              className="text-indigo-400 flex items-center"
            >
              Read more <ArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="bg-gray-900 p-6 rounded-3xl">
            <div className="text-red-400 text-4xl font-bold mb-2">100%</div>
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
              As part of our commitment to transparency and security, your data
              is stored in France. This means that your personal information is
              handled in accordance with the highest standards of data
              protection, offering you both security and compliance with global
              privacy regulations.
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
  );
}
