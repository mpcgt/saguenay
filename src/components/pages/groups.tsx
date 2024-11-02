import { useEffect } from "react";
import Navigation from "../navigationDiscovery";
import Chat from "../../assets/images/groups/chat.png";
import Food from "../../assets/images/groups/food.png";
import Music from "../../assets/images/groups/music.png";
import Nature from "../../assets/images/groups/nature.png";
import Pets from "../../assets/images/groups/pets.png";
import Pictures from "../../assets/images/groups/picture.png";
import { Link } from "react-router-dom";

export default function Groups() {
  useEffect(() => {
    document.title = 'Groups - Saguenay';
  }, []);
  return (
    <>
    <Navigation />
    <div className="bg-black">
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-72 mt-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="group flex flex-col h-full bg-zinc-900 border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-orange-400 rounded-t-xl">
            <img src={Chat} width={125} style={{ borderRadius: "20px"}} />
              <linearGradient id="paint0_linear_2204_541" x1="24.734" y1="29.2284" x2="16.1543" y2="44.0429" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#8DA2FB"/>
              <stop offset="0.92" stop-color="#8DA2FB"/>
              </linearGradient>
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-extrabold uppercase text-orange-400 dark:text-orange-400">
            Group created by Saguenay <i>(Coming soon!)</i>
            </span>
            <h3 className="text-xl font-semibold text-white dark:text-neutral-300 dark:hover:text-white">
            Discussions
            </h3>
            <p className="mt-3 text-white dark:text-neutral-500">
            Welcome to the general discussion group, where we share ideas and opinions on a variety of topics!
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-zinc-900 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-700 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
            <Link to="/discussions" className="text-white hover:text-white">
            About
            </Link>
            </a>
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-zinc-900 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-700 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
              Join
            </a>
          </div>
        </div>
    
        <div className="group flex flex-col h-full bg-zinc-900 border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-yellow-400 rounded-t-xl">
          <img src={Food} width={125} style={{ borderRadius: "20px"}} />
              <radialGradient id="paint0_radial_2204_541" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.0043 29.3944) scale(21.216 19.6102)">
              <stop offset="0%" stop-color="#8DA2FB"/>
              <stop offset="0.6" stop-color="#8DA2FB"/>
              <stop offset="0.999" stop-color="#8DA2FB"/>
              </radialGradient>
              <clipPath id="clip0_2204_541">
              <rect width="32" height="29.5808" fill="white" transform="translate(12 13.2096)"/>
              </clipPath>
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-extrabold uppercase text-yellow-400 dark:text-yellow-400">
            Group created by Saguenay <i>(Coming soon!)</i>
            </span>
            <h3 className="text-xl font-semibold text-white dark:text-neutral-300 dark:hover:text-white">
            Food
            </h3>
            <p className="mt-3 text-white dark:text-neutral-500">
            Join us in the Food group to exchange recipes, cooking tips and talk about your favorite dishes!
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-zinc-900 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-700 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
              <Link to="/food" className="text-white hover:text-white">
              About
              </Link>
            </a>
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-zinc-900 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-700 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
              Join
            </a>
          </div>
        </div>
    
        <div className="group flex flex-col h-full bg-zinc-900 border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-indigo-400 rounded-t-xl">
          <img src={Music} width={125} style={{ borderRadius: "20px"}} />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-extrabold uppercase text-indigo-400">
            Group created by Saguenay <i>(Coming soon!)</i>
            </span>
            <h3 className="text-xl font-semibold text-white dark:text-neutral-300 dark:hover:text-white">
            Music
            </h3>
            <p className="mt-3 text-white dark:text-neutral-500">
            In the Music group, share your musical discoveries, favorite artists and discuss the latest albums!
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-zinc-900 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-700 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
            <Link to="/music" className="text-white hover:text-white">
              About
              </Link>
            </a>
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-zinc-900 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-700 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
              Join
            </a>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-zinc-900 border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-green-500 rounded-t-xl">
          <img src={Nature} width={125} style={{ borderRadius: "20px"}} />
              <radialGradient id="paint0_radial_2204_541" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.0043 29.3944) scale(21.216 19.6102)">
              <stop offset="0%" stop-color="#8DA2FB"/>
              <stop offset="0.6" stop-color="#8DA2FB"/>
              <stop offset="0.999" stop-color="#8DA2FB"/>
              </radialGradient>
              <clipPath id="clip0_2204_541">
              <rect width="32" height="29.5808" fill="white" transform="translate(12 13.2096)"/>
              </clipPath>
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-extrabold uppercase text-green-500 dark:text-green-500">
            Group created by Saguenay <i>(Coming soon!)</i>
            </span>
            <h3 className="text-xl font-semibold text-white dark:text-neutral-300 dark:hover:text-white">
            Nature
            </h3>
            <p className="mt-3 text-white dark:text-neutral-500">
            Explore the beauty of the world in our Nature group, where we share outdoor experiences and conservation tips!
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-zinc-900 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-700 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
            <Link to="/nature" className="text-white hover:text-white">
              About
              </Link>
            </a>
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-zinc-900 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-700 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
              Join
            </a>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-zinc-900 border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-blue-400 rounded-t-xl">
          <img src={Pets} width={125} style={{ borderRadius: "20px"}} />
              <radialGradient id="paint0_radial_2204_541" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.0043 29.3944) scale(21.216 19.6102)">
              <stop offset="0%" stop-color="#8DA2FB"/>
              <stop offset="0.6" stop-color="#8DA2FB"/>
              <stop offset="0.999" stop-color="#8DA2FB"/>
              </radialGradient>
              <clipPath id="clip0_2204_541">
              <rect width="32" height="29.5808" fill="white" transform="translate(12 13.2096)"/>
              </clipPath>

          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-extrabold uppercase text-blue-400 dark:text-blue-400">
            Group created by Saguenay <i>(Coming soon!)</i>
            </span>
            <h3 className="text-xl font-semibold text-white dark:text-neutral-300 dark:hover:text-white">
            Animals
            </h3>
            <p className="mt-3 text-white dark:text-neutral-500">
            Share your love of animals in the Animals group, where we discuss our four-legged companions and wildlife-related topics!
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-zinc-900 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-700 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
            <Link to="/animals" className="text-white hover:text-white">
              About
              </Link>
            </a>
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-zinc-900 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-700 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
              Join
            </a>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-zinc-900 border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-center items-center bg-indigo-400 rounded-t-xl">
          <img src={Pictures} width={125} style={{ borderRadius: "20px"}} />
              <radialGradient id="paint0_radial_2204_541" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.0043 29.3944) scale(21.216 19.6102)">
              <stop offset="0%" stop-color="#8DA2FB"/>
              <stop offset="0.6" stop-color="#8DA2FB"/>
              <stop offset="0.999" stop-color="#8DA2FB"/>
              </radialGradient>
              <clipPath id="clip0_2204_541">
              <rect width="32" height="29.5808" fill="white" transform="translate(12 13.2096)"/>
              </clipPath>
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-extrabold uppercase text-indigo-400 dark:text-indigo-400">
            Group created by Saguenay <i>(Coming soon!)</i>
            </span>
            <h3 className="text-xl font-semibold text-white dark:text-neutral-300 dark:hover:text-white">
            Photography
            </h3>
            <p className="mt-3 text-white dark:text-neutral-500">
            Join the Photography group to share your shots, get advice and discuss shooting techniques!
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-zinc-900 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-700 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
            <Link to="/photography" className="text-white hover:text-white">
              About
              </Link>
            </a>
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-zinc-900 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-700 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
              Join
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
</>
  )
}
