import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "../navbar/navigation";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const BackgroundHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <NavigationBar />

      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          <FontAwesomeIcon
            icon={faCircle}
            fade
            style={{ fontSize: "15px", color: "#ff0000" }}
          />
          <span className="text-red-600 text-base font-bold">
            &nbsp;&nbsp;Live
          </span>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;42% Development progress
        </span>
        <h1 className="ahsing max-w-3xl bg-gradient-to-br from-white to-gray-500 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Your network, <br /> your world.
        </h1>
        <p className="my-6 bottom-5 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Saguenay is a privacy-focused, ad-free social network that prioritizes
          user well-being by avoiding algorithms and tracking, offering an
          authentic experience while ensuring safety, transparency, and ethical
          data practices.
        </p>
        <div className="flex flex-col md:flex-row md:items-center space-x-5">
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-white transition-colors hover:bg-gray-950/50"
          >
            <Link to="/waitlist" className="text-white hover:text-white">See current publications</Link>
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>

          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 transition-colors hover:bg-gray-950/50"
          >
            <Link to="https://github.com/mpcgt/saguenay" target="_blank" className="text-white hover:text-white">
              GitHub
            </Link>
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
