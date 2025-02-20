import { useEffect } from "react";
import Navigation from "../navigationDiscovery";
import Chat from "../../assets/images/groups/chat.png";
import Food from "../../assets/images/groups/food.png";
import Music from "../../assets/images/groups/music.png";
import Nature from "../../assets/images/groups/nature.png";
import Pets from "../../assets/images/groups/pets.png";
import Pictures from "../../assets/images/groups/picture.png";
import { Link } from "react-router-dom";

interface GroupCardProps {
  image: string;
  bgColor: string;
  title: string;
  description: string;
  aboutLink: string;
}

export default function Groups() {
  useEffect(() => {
    document.title = "Groups - Saguenay";
  }, []);

  return (
    <>
      <Navigation />
      <div className="bg-black text-white">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-72 mt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <GroupCard
              image={Chat}
              bgColor="bg-orange-400"
              title="Discussions"
              description="Welcome to the general discussion group, where we share ideas and opinions on a variety of topics!"
              aboutLink="/discussions"
            />
            <GroupCard
              image={Food}
              bgColor="bg-yellow-400"
              title="Food"
              description="Join us in the Food group to exchange recipes, cooking tips and talk about your favorite dishes!"
              aboutLink="/food"
            />
            <GroupCard
              image={Music}
              bgColor="bg-indigo-400"
              title="Music"
              description="In the Music group, share your musical discoveries, favorite artists and discuss the latest albums!"
              aboutLink="/music"
            />
            <GroupCard
              image={Nature}
              bgColor="bg-green-500"
              title="Nature"
              description="Explore the beauty of the world in our Nature group, where we share outdoor experiences and conservation tips!"
              aboutLink="/nature"
            />
            <GroupCard
              image={Pets}
              bgColor="bg-blue-400"
              title="Animals"
              description="Share your love of animals in the Animals group, where we discuss our four-legged companions and wildlife-related topics!"
              aboutLink="/animals"
            />
            <GroupCard
              image={Pictures}
              bgColor="bg-indigo-400"
              title="Photography"
              description="Join the Photography group to share your shots, get advice and discuss shooting techniques!"
              aboutLink="/photography"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function GroupCard({ image, bgColor, title, description, aboutLink }: GroupCardProps) {
  return (
    <div className="group flex flex-col h-full bg-zinc-900 border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className={`h-52 flex flex-col justify-center items-center ${bgColor} rounded-t-xl`}>
        <img src={image} width={125} style={{ borderRadius: "20px" }} alt={title} />
      </div>
      <div className="p-4 md:p-6">
        <span
          className={`block mb-1 text-xs font-extrabold uppercase ${bgColor.replace(
            "bg-",
            "text-"
          )} dark:${bgColor.replace("bg-", "text-")}`}
        >
          Group created by Saguenay <i>(Coming soon!)</i>
        </span>
        <h3 className="text-xl font-semibold text-white dark:text-neutral-300 dark:hover:text-white">
          {title}
        </h3>
        <p className="mt-3 text-white dark:text-neutral-500">{description}</p>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
        <Link
          to={aboutLink}
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-zinc-900 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-700 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          About
        </Link>
        <Link
          to="/development"
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-zinc-900 text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-700 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          Join
        </Link>
      </div>
    </div>
  );
}
