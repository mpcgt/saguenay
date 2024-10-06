import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "../../../assets/images/logo/saguenay_purple.png"
import '../../../index.css'

export default function Hero() {
  return (
    <>
    <div className="text-white w-full bg-gradient-to-t from-black via-indigo-900 to-indigo-500">
      {/* Navigation */}
      <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-[66rem] before:mx-2 before:lg:mx-auto before:rounded-[26px] before:bg-neutral-800/30 before:backdrop-blur-md">
  <nav className="relative max-w-[66rem] w-full py-2.5 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto">
    <div className="flex items-center justify-between">
      <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="../templates/agency/index.html" aria-label="Preline">
        <h3 className='ahsing text-white text-3xl mb-3'>Saguenay</h3>
      </a>

      <div className="md:hidden">
        <button type="button" className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none" id="hs-navbar-floating-dark-collapse" aria-expanded="false" aria-controls="hs-navbar-floating-dark" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-floating-dark">
          <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>

    <div id="hs-navbar-floating-dark" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-floating-dark-collapse">
      <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
        <Link to="/home"><span className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" aria-current="page">Home</span></Link>
        <Link to="/discovery"><span className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300">Discovery</span></Link>
        <Link to="/404"><span className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300">Profile</span></Link>
        <Link to="/404"><span className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300">About</span></Link>

        <div>
          <Link to="/404"><span className="group inline-flex items-center gap-x-2 py-2 px-3 bg-indigo-500 font-medium text-sm text-white rounded-full focus:outline-none">
            Login
          </span></Link>
        </div>
      </div>
    </div>
  </nav>
</header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-6xl font-bold mb-6 ahsing">
          <span className="text-indigo-500">Your network,</span> <br />your world.
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          With the Saguenay social network, users can create groups based on their interests, whether sports, art or the environment.
          This makes it easy to bring together people who share the same passions and organize activities.
        </p>
        <p className="text-sm text-gray-500 mb-8">Saguenay is open-source, you can go to GitHub repositories.</p>
        <div className="flex justify-center space-x-8">
        <Link to="/discovery"><button type="button" className="transition ease-in-out delay-150 text-white bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"><FontAwesomeIcon icon={faCompass} style={{ fontSize: '20px' }} beat /><span>&nbsp;&nbsp;&nbsp;</span>See current publications</button></Link>
        <Link to="https://github.com/mpcgt/saguenay" target='_blank'><button type="button" className="transition ease-in-out delay-150 text-white bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"><FontAwesomeIcon icon={faGithub} style={{ fontSize: '20px' }} beat /><span>&nbsp;&nbsp;&nbsp;</span>GitHub</button></Link>
        </div>
      </section>
    </div>

      {/* Success Stories */}
      <section className="bg-black py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-4 ahsing">The numbers</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Saguenay's development is advancing rapidly, with key features such as data protection, total absence of ads, 
        and personalized options to limit screen time. With no algorithms to influence content, 
        users retain total control over their interactions and online experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="text-indigo-400 text-4xl font-bold mb-2">10+</div>
            <h3 className="text-xl font-semibold mb-2">Groups created 👥</h3>
            <p className="text-gray-400 mb-4">In Saguenay, groups enable users to create communities around common interests, exchange freely and share content without interference from algorithms or advertising, while respecting each other's privacy.</p>
            <a href="#" className="text-indigo-400 flex items-center">
                Read more <ArrowRight className="ml-2" />
            </a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="text-green-400 text-4xl font-bold mb-2">17%<span>&nbsp;</span><FontAwesomeIcon icon={faCircle} fade style={{fontSize: "20px", color: "#ff0000",}} /><span className='text-red-600 text-2xl'>&nbsp;Live</span></div>
            <h3 className="text-xl font-semibold mb-2">Development progress 🛠️</h3>
            <p className="text-gray-400 mb-4">Saguenay's development is progressing rapidly, with key features already in place to deliver a smooth, secure and user-friendly experience.</p>
            <a href="#" className="text-indigo-400 flex items-center">
                Read more <ArrowRight className="ml-2" />
            </a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="text-red-400 text-4xl font-bold mb-2">100%</div>
            <h3 className="text-xl font-semibold mb-2">Respect for privacy 🔒</h3>
            <p className="text-gray-400 mb-4">Saguenay is committed to protecting the privacy of its users by ensuring that all their personal data is encrypted and secured by state-of-the-art protection measures, guaranteeing exceptional confidentiality.</p>
            <a href="#" className="text-indigo-400 flex items-center">
                Read more <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-black py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-4 ahsing">More freedom</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        At Saguenay, we honor your privacy by ensuring your personal data is never shared or used without consent. 
        You won’t find any intrusive ads here—just meaningful connections. With customizable screen time options, 
        you maintain a healthy balance between your digital and personal life. And best of all, 
        no algorithms control what you see. Your content, your decisions, your world.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 max-w-6xl mx-auto">
          <img src={Image} alt="Image" width={400} height={300} className="rounded-lg" />
          <div className="space-y-6">
            <div className="flex items-start">
              <CheckCircle className="text-indigo-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Respectful of privacy 🛡️</h3>
                <p className="text-gray-400">We make it a point of honor to protect your privacy, ensuring that your personal data is never shared or used without your consent.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-indigo-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">No advertising ✨</h3>
                <p className="text-gray-400">On our platform, you will never see intrusive advertising. We believe that your social space should only be disrupted by what really matters: your interactions..</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-indigo-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Limited screen time (you can modify your choices) 🕑</h3>
                <p className="text-gray-400">We offer you the opportunity to limit your screen time according to your own criteria, to promote a healthy balance between your digital and personal life.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-indigo-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">No algorithm, so no control over your content 👀</h3>
                <p className="text-gray-400">No algorithm controls what you see here. You're in control of your content, and only you decide which interactions count.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="bg-indigo-400 text-black px-6 py-3 rounded-full font-semibold">Learn more</button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-black px-4">
        <h2 className="text-3xl font-bold text-center mb-4 ahsing">Contact us</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Whatever your goal - we will get you there.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12 max-w-6xl mx-auto">
          <div className="space-y-6 md:w-1/3">
            <div>
              <h3 className="font-semibold mb-2">Email us:</h3>
              <p className="text-gray-400">Coming soon! ;)</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">GitHub Discussions</h3>
              <p className="text-gray-400">You can communicate with our community in GitHub Discussions by creating a new discussion.</p>
              <Link to="https://github.com/mpcgt/saguenay/discussions" target='blank' className="text-indigo-400 flex items-center mt-2">
                Go to page <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
          <form className="md:w-2/3">
            <input type="text" placeholder="Name" className="w-full bg-gray-800 text-white p-3 rounded-lg mb-4" />
            <input type="email" placeholder="Email" className="w-full bg-gray-800 text-white p-3 rounded-lg mb-4" />
            <input type="text" placeholder="Company" className="w-full bg-gray-800 text-white p-3 rounded-lg mb-4" />
            <input type="tel" placeholder="Phone" className="w-full bg-gray-800 text-white p-3 rounded-lg mb-4" />
            <textarea placeholder="Tell us about your project" className="w-full bg-gray-800 text-white p-3 rounded-lg mb-4" rows={4}></textarea>
            <button type="submit" className="bg-indigo-400 text-black px-6 py-3 rounded-full w-full font-semibold">Coming soon!</button>
          </form>
        </div>
      </section>

      {/* Footer */}
<div className='bg-black text-center text-gray-400'>
<footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
  <div className="text-center">
    <div>
      <h3 className='ahsing text-white text-3xl mb-3'>Saguenay</h3>
    </div>

    <div className="mt-3">
    © 2024 Saguenay - Made with 💖 by <Link to="https://github.com/mpcgt" target='blank'>Max</Link>
    </div>

    <div className="mt-3 space-x-2">
    <Link to="https://github.com/mpcgt/saguenay" target='_blank'><span className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400">
        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      </span></Link>
    </div>
  </div>
</footer>
      </div>
</>
  )
}