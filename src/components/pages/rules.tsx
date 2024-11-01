import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/saguenay_white_letters.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Rules() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6 font-sans">
      <div className="max-w-2xl mx-auto space-y-8 bg-zinc-800 p-8 rounded-2xl shadow-xl">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img
            src={Logo}
            alt="Saguenay"
            width={180}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-[#818CF8]" />
            <div className="h-[2px] w-24 bg-gray-600" />
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-gray-600" />
            <div className="h-[2px] w-24 bg-gray-600" />
          </div>
          <div className="h-3 w-3 rounded-full bg-gray-600" />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold mb-2">Some ground rules.</h1>
          <p className="text-gray-400 mb-6">
            Welcome to Saguenay, a space where community members can connect,
            share, and exchange. To maintain a respectful and enjoyable
            environment for everyone, we ask you to follow this rules.
          </p>
        </div>

        {/* Rules */}
        <div className="space-y-6">
          {rules.map((rule, index) => (
            <div key={index} className="pb-6 border-b border-gray-700">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#818CF8] flex items-center justify-center self-center">
                  {index + 1}
                </div>
                <div>
                  <h2 className="font-semibold mb-2">{rule.title}</h2>
                  <p className="text-[#818CF8] text-sm">{rule.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* buttons */}
        <div className="space-y-4 mt-12">
          <button className="w-full bg-[#818CF8] hover:bg-[#6366F1] text-white py-3 rounded-full transition-colors duration-300">
            <Link to="/waitlist" className="text-white hover:text-white">
              Accept
            </Link>
          </button>
          <button className="w-full border-gray-600 text-white hover:bg-gray-700 rounded-full transition-colors duration-300">
            <Link to="/home" className="text-white hover:text-white">
              Back
            </Link>
          </button>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center gap-4 text-sm text-[#818CF8] mt-8">
          <Link
            to="https://github.com/mpcgt/saguenay"
            target="_blank"
            className="hover:underline"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#ffffff", fontSize: "30px" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

const rules = [
  {
    title: "Mutual Respect",
    description:
      "Treat other members with respect, courtesy, and kindness. Insults, personal attacks, harassment, or discrimination of any kind (racial, sexual, religious, etc.) will not be tolerated. Be open to opinions and perspectives different from your own.",
  },
  {
    title: "Inappropriate Content",
    description:
      "Offensive, violent, hateful, or explicitly sexual content is strictly prohibited. Do not post content that violates the law or infringes on the rights of others, including copyright, privacy, and image rights.",
  },
  {
    title: "Privacy Protection",
    description:
      "Respect the privacy of other members. Do not share personal information about others without their explicit consent. Be cautious when sharing your own personal information. Saguenay is not responsible for any consequences related to the disclosure of your information.",
  },
  {
    title: "Constructive Behavior",
    description:
      "Encourage constructive and enriching discussions. Avoid toxic debates and provocations. If you disagree with someone, express yourself calmly and respectfully.",
  },
  {
    title: "Spam and Advertising",
    description:
      "Spam, unsolicited advertising, or any form of commercial promotion without explicit permission from the administrators is prohibited. Do not post content or links aiming to redirect users to other sites for commercial purposes without authorization.",
  },
  {
    title: "Safety and Reporting",
    description:
      "If you see inappropriate behavior, you have the option to report it to the network administrators. Any severe or repeated violation of this rule may result in penalties, including a ban from the network.",
  },
  {
    title: "Modifications to the Code of Conduct",
    description:
      "Saguenay reserves the right to modify or adjust this rules at any time to meet the community's needs. Any changes will be communicated to members.",
  },
  {
    title: "Language",
    description:
      "Use appropriate and respectful language at all times. Vulgar or inappropriate remarks are not accepted. By participating in Saguenay, you agree to abide by this code of conduct. Together, we can build a safe and inclusive community where everyone feels comfortable sharing and interacting.",
  },
];
