import NavigationBar from "../features/navbar/navigation";

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-indigo-300 py-12 px-4 sm:px-6 lg:px-8">
        <NavigationBar />
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-xl rounded-3xl overflow-hidden mt-10">
            <h1 className="text-5xl font-bold text-center text-black mt-10 mb-6 ahsing">
              Digital Freedom
            </h1>
            <h2 className="text-2xl text-center text-black mb-12">
              A social network that respects your privacy and focuses on
              well-being.
            </h2>
            <hr className="border-black" />
            <div className="p-8">
              <h2 className="text-3xl text-black font-bold italic">
                What is <span className="ahsing">Saguenay</span> ?
              </h2>
              <br />
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Saguenay is a social network designed to respect your privacy
                and promote the well-being of its users. Unlike many existing
                platforms, we don't monitor your activity to influence you or
                control what you see. In fact, Saguenay is algorithm-free:
                there's no sorting mechanism that selects posts for you, which
                means we don't know what you like, what you don't like, or what
                might capture your attention. Our users can enjoy an authentic
                online experience, where their interactions are neither
                monitored nor manipulated for commercial gain.
                <br />
                <br />
                <h2 className="text-2xl font-bold text-black italic">
                  User well-being: a priority 🎯
                </h2>
                <br />
                Saguenay goes further to encourage healthy and balanced use of
                the platform. We've integrated a timer that alerts users when
                they're spending too much time on the network, to help them
                maintain moderate, mindful use. This wellness-focused approach
                is rare in social networking, where most platforms seek to
                extend your screen time to maximize revenue. At Saguenay,
                there's no advertising. Your data is not collected to target you
                with ads, nor is it sold to third parties. We take great care to
                ensure that your privacy is protected: there are no tracking
                devices, and we never share your personal information.
                <br />
                <br />
                <h2 className="text-2xl font-bold text-black italic">
                  Safety and Moderation: A Rigorous Approach 🔒
                </h2>
                <br />
                Our commitment to security and content moderation is equally
                uncompromising. Saguenay has a rigorous process for detecting
                and banning users who post violent, pornographic or extremist
                content. Vulnerable users who violate our community guidelines
                are immediately sanctioned, ensuring a healthier and safer
                environment for all. In addition, the platform enables you to
                create or join groups based on your passions and interests,
                promoting authentic and enriching exchanges without fear of your
                data being exploited.
                <br />
                <br />{" "}
                <h2 className="text-2xl font-bold text-black italic">
                  Open-Source and Transparency: A Committed Community ✊🏻
                </h2>
                <br />
                In addition to its commitment to privacy, Saguenay is an
                open-source platform, which means that its code is accessible
                and verifiable by all. This transparency ensures that we have
                nothing to hide, and allows the community to contribute to the
                continuous improvement of the platform. Unlike other social
                networks that exploit your personal data to maximize their
                profits, Saguenay is committed to providing a space where users
                are in control, without worrying about collecting data for
                profit. Our servers are hosted in the European Union and comply
                with strict data protection regulations, giving you an extra
                layer of privacy.
                <br />
                <br />
                <h2 className="text-2xl font-bold text-black italic">
                  An Ethical Model: Putting the User First ✨
                </h2>
                <br />
                Saguenay distinguishes itself from other social networks by
                refusing to sacrifice user privacy in favor of a business model
                based on advertising and attention control. Where other
                platforms seek to capture your attention for as long as
                possible, while using and sharing your data to generate revenue
                every second, Saguenay lets you remain in control of your online
                experience. Choosing Saguenay means opting for a social network
                that puts you and your privacy first.{" "}
              </p>
            </div>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 items-center gap-4 lg:gap-8">
            <a
              className="group flex flex-col h-full text-center rounded-lg hover:bg-indigo-200 transition-all focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
              href="#"
            >
              <svg
                className="size-9 text-gray-800 mx-auto dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Issues
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-500">
                  If you have a problem in Saguenay, please submit a ticket so
                  we can help you.
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-indigo-600 dark:text-indigo-500">
                <a href="https://github.com/mpcgt/saguenay/issues/new/choose" target="blank">
                  Create a ticket
                  </a>
                  <svg
                    className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </a>

            <a
              className="group flex flex-col h-full text-center rounded-lg hover:bg-indigo-200 transition-all focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10"
              href="#"
            >
              <svg
                className="size-9 text-gray-800 mx-auto dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Email
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-500">
                  We're here to help, so don't hesitate to contact us by e-mail
                  in Saguenay.
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-indigo-600 dark:text-indigo-500">
                <a href="mailto:sgn.ntwk@gmail.com" target="blank">
                  Send an email
                  </a>
                  <svg
                    className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
