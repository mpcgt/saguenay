import { Link } from 'react-router-dom'
import Logo from "../assets/images/logo/saguenay_white_letters.png"

export default function Navbar() {
  return (
<nav className="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={Logo} className="h-8" alt="Saguenay Logo" />
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-black rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-black md:dark:bg-black dark:border-black">
      <li>
        <Link to="/"><span className="text-white hover:text-gray-400">Home</span></Link>
      </li>
      <li>
        <Link to="/discovery"><span className="text-white hover:text-gray-400">Discovery</span></Link> </li> <li>
      </li>
      <li>
        <Link to="/profile"><span className="text-white hover:text-gray-400">Profile</span></Link> </li> <li>
      </li>
      <li>
      <Link to="/about"><span className="text-white hover:text-gray-400">About</span></Link> </li> <li>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}
