import React, { useEffect, useState } from "react";
import { FaLock, FaEye, FaClock, FaTag, FaChevronDown } from "react-icons/fa";
import Navigation from "../../navigationDiscovery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import Cover from "../../../assets/images/groups/cover/pets.png";

const AnimalsAbout: React.FC = () => {
  useEffect(() => {
    document.title = "Animals - Saguenay";
  }, []);

  const [activeTab, setActiveTab] = useState<"about" | "discussion">("about");

  return (
    <>
      <Navigation />
      <div className="bg-[#18191A] text-white min-h-screen mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Cover Image */}
          <div className="relative h-[300px] rounded-b-lg overflow-hidden">
            <img
              src={Cover}
              alt="Cover group"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#00000080] text-white px-3 py-1 rounded-xl">
              Group managed by Saguenay
            </div>
          </div>

          {/* Group Info */}
          <div className="px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold flex items-center gap-2">
                  Animals 😺🐶
                </h1>
                <p className="text-gray-400 flex items-center gap-2 mt-1">
                  <FaLock size={16} />
                  Group (Public)
                </p>
              </div>
              <div className="flex gap-2">
                <button className="bg-[#7182f0] hover:bg-[#7182f0]/90 px-4 py-2 rounded-xl transition-all">
                  <FontAwesomeIcon
                    icon={faArrowRightToBracket}
                    style={{ color: "#ffffff" }}
                  />
                  &nbsp;&nbsp;Join the group
                </button>
                <button className="bg-[#3A3B3C] hover:bg-[#3A3B3C]/90 px-4 py-2 rounded-xl">
                  <FontAwesomeIcon
                    icon={faShare}
                    style={{ color: "#ffffff" }}
                  />
                  &nbsp;&nbsp;Share
                </button>
                <button className="bg-[#3A3B3C] hover:bg-[#3A3B3C]/90 px-2 py-2 rounded-xl">
                  <FaChevronDown size={20} />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-6">
              <div className="border-b border-gray-700">
                <button
                  onClick={() => setActiveTab("about")}
                  className={`mr-4 py-2 ${
                    activeTab === "about"
                      ? "text-white border-b-2 border-[#7182f0]"
                      : "text-gray-300"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setActiveTab("discussion")}
                  className={`py-2 ${
                    activeTab === "discussion"
                      ? "text-white border-b-2 border-[#7182f0]"
                      : "text-gray-300"
                  }`}
                >
                  Announcements
                </button>
              </div>
              {activeTab === "about" && (
                <div className="mt-6">
                  <div className="bg-[#242526] rounded-2xl p-4">
                    <h2 className="text-xl font-semibold mb-4">
                      About this group
                    </h2>
                    <p className="text-gray-300 mb-4">
                      Share your love of animals in the Animals group, where we
                      discuss our four-legged companions and wildlife-related
                      topics!
                    </p>
                    <button className="text-[#7182f0] bg-transparent p-0">See more</button>

                    <div className="mt-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <FaLock size={20} className="text-gray-400" />
                        <div>
                          <h3 className="font-semibold">Privé</h3>
                          <p className="text-sm text-gray-400">
                            Seuls les membres peuvent voir qui est dans le
                            groupe et ce qui est publié.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaEye size={20} className="text-gray-400" />
                        <div>
                          <h3 className="font-semibold">Visible</h3>
                          <p className="text-sm text-gray-400">
                            Tout le monde peut trouver ce groupe.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock size={20} className="text-gray-400" />
                        <div>
                          <h3 className="font-semibold">Historique</h3>
                          <p className="text-sm text-gray-400">
                            Group created on October 11, 2024. Last modification
                            October 27, 2024.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaTag size={20} className="text-gray-400" />
                        <div>
                          <h3 className="font-semibold">Tags</h3>
                        </div>
                      </div>
                      <span className="inline-flex items-center py-1.5 px-3 ml-5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-800/30 dark:text-indigo-500">
                      Pets
                      </span>
                      <span className="inline-flex items-center py-1.5 px-3 ml-5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-800/30 dark:text-indigo-500">
                      Zoos
                      </span>
                      <span className="inline-flex items-center py-1.5 px-3 ml-5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-800/30 dark:text-indigo-500">
                      Wildlife
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "discussion" && (
                <div className="mt-6">
                    <div className="bg-[#242526] rounded-2xl p-4">
                    <h2 className="text-xl font-semibold mb-4">
                    Announcements in this group
                    </h2>
                    <p className="text-gray-300 mb-4">
                    This group is currently under development...
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimalsAbout;
