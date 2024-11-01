import { Github } from "lucide-react"
import { Link } from "react-router-dom"
import NavigationBar from "../features/navbar/navigation"

export default function Development() {
  return (
    <>
    <NavigationBar />
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4">
      <div className="relative z-10 text-center space-y-8 max-w-2xl mx-auto px-4 py-16 backdrop-blur-sm bg-white/5 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-extralight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-red-600">
            Under development
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-light">
            Saguenay is working hard to bring you an exceptional experience. Come back soon to discover something extraordinary!
        </p>
        <Link
          to="https://github.com/mpcgt/saguenay"
          target="_blank"
          className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-gradient-to-r text-white from-indigo-400 to-red-600 hover:text-white h-12 px-8 py-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <Github className="mr-2 h-5 w-5" />
          Explore on GitHub
        </Link>
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
    </div>
    </>
  )
}