import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo/saguenay_white_letters.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
export default function Rules() {
  return (
    <div className="min-h-screen bg-[#1F2937] text-white p-6 font-sans">
      <div className="max-w-2xl mx-auto space-y-8 bg-[#111827] p-8 rounded-2xl shadow-xl">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img
            src={Logo}
            alt="Mastodon"
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
            These are set and enforced by the mastodon.social moderators.
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
          <button
            className="w-full border-gray-600 text-white hover:bg-gray-700 rounded-full transition-colors duration-300"
          >
            <Link to="/home" className="text-white hover:text-white">
            Back
            </Link>
          </button>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center gap-4 text-sm text-[#818CF8] mt-8">
          <Link to="https://github.com/mpcgt/saguenay" target="_blank" className="hover:underline">
            <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff", fontSize: "30px"}} />
          </Link>
        </div>
      </div>
    </div>
  )
}

const rules = [
  {
    title: "Sexually explicit or violent media must be marked as sensitive or with a content warning",
    description:
      "Sexually explicit or violent media must be labeled as sensitive or accompanied by a content warning. This includes content that is particularly provocative, even if it does not depict specific body parts, as well as dead bodies, bloody injuries, and other graphic violence. Particularly obscene content may be completely prohibited. Profile pictures and header images must not contain sexually explicit or violent media.",
  },
  {
    title: "No racism, sexism, homophobia, transphobia, ableism, xenophobia, or casteism.",
    description:
      "No form of racism, sexism, homophobia, transphobia, ableism, xenophobia, or casteism is tolerated. Transphobic behavior, such as intentional misgendering and deadnaming, is strictly prohibited. The promotion of 'conversion therapy' is also banned. Criticism of governments and religions is permitted unless used as a pretext for discrimination.",
  },
  {
    title: "No incitement of violence or promotion of violent ideologies",
    description:
      "No incitement to violence or promotion of violent ideologies is allowed. Calling for the assassination, murder, or physical attack of individuals or groups is strictly forbidden. Supporting violent groups or events is prohibited.",
  },
  {
    title: "No harassment, block evasion, dogpiling, or doxxing of others",
    description:
      "Harassment, block evasion, dogpiling, and doxxing of others are not allowed. Repeated attempts to communicate with users who have blocked you or creating accounts solely to harass or insult individuals are strictly prohibited. Coordinated activities to attack other users are not allowed. Posting private personal information about others is prohibited.",
  },
  {
    title: "Do not share information widely-known to be false and misleading",
    description:
      "Do not share information widely known to be false or misleading. Posting false and misleading information, as well as links from low-quality sources, is prohibited, especially if likely to mislead or confuse others or endanger their safety.",
  },
  {
    title: "Content created by others must be attributed, and use of generative AI must be disclosed",
    description:
      "Content created by others must be attributed, and the use of generative AI must be disclosed. Content created by others must clearly reference the author, creator, or source. Accounts must not solely post AI-generated content.",
  },
]