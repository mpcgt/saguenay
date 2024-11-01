import { Mail, HelpCircle, FileText, Lock, Settings } from "lucide-react"
import { Link } from "react-router-dom"
import NavigationBar from "../features/navbar/navigation"

export default function Help() {
  const helpCategories = [
    { title: "FAQ", icon: HelpCircle, href: "/development" },
    { title: "Guides", icon: FileText, href: "/development" },
    { title: "Security", icon: Lock, href: "/security" },
    { title: "Account settings", icon: Settings, href: "/development" },
  ]

  return (
    <div className="min-h-screen bg-zinc-900 transition-colors duration-200">
        <NavigationBar />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="mt-20">
          <h2 className="text-4xl text-center font-semibold mb-6 text-white">How can we help you?</h2>
          <p className="text-base text-center font-semibold mb-6 text-white">This page is under development...</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <Link to={category.href} key={index}>
                <button
                  className="w-full h-32 text-lg font-semibold flex flex-col items-center justify-center space-y-2 bg-zinc-800 text-white hover:bg-zinc-700 hover:border-transparent transition-colors duration-200"
                >
                  <category.icon className="h-8 w-8" />
                  <span>{category.title}</span>
                </button>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-zinc-800 text-white mt-12">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold">Need help?</h3>
              <p className="mt-2">Saguenay is here to help. 😊</p>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <Link to="mailto:sgn.ntwk@gmail.com" target="_blank" className="text-white hover:text-white hover:border-transparent">
                Email
                </Link>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}