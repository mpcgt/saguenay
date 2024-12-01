'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Mail, Settings, LogOut } from 'lucide-react'

export default function ProfileButton() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full pr-4 pl-2 py-2 transition-colors duration-200"
        >
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
            <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="h-full w-full object-cover" />
          </div>
          <span className="font-medium">John Doe</span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div className="px-4 py-2 text-sm text-gray-400">
                john.doe@example.com
              </div>
              <a href="#" className="flex px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors duration-200">
                <Mail className="mr-3 h-5 w-5" />
                Inbox
              </a>
              <a href="#" className="flex px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors duration-200">
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </a>
              <a href="#" className="flex px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors duration-200">
                <LogOut className="mr-3 h-5 w-5" />
                Log out
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}