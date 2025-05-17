"use client" 

import * as React from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="flex justify-center w-full py-6 px-4">
      <div 
        className="flex items-center justify-between px-6 py-3 bg-white rounded-full w-full max-w-3xl relative z-10 border-2 border-transparent" 
        style={{ 
          backgroundClip: 'padding-box', 
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
          background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #FF9966, #FF5E62) border-box'
        }}>
        <div className="flex items-center">
          <div className="w-10 h-10 mr-6 relative overflow-hidden rounded-full">
            <Image 
              src="/assets/logo.jpg" 
              alt="Logo" 
              width={40} 
              height={40}
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Catalog", "Contact", "FAQ"].map((item) => (
            <div key={item}>
              <a href="#" className="text-sm text-gray-900 hover:text-gray-600 transition-colors font-medium">
                {item}
              </a>
            </div>
          ))}
        </nav>

        {/* Desktop Search Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-2 text-sm text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
          >
            Search
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <Menu className="h-6 w-6 text-gray-900" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white z-50 pt-24 px-6 md:hidden"
        >
          <button
            className="absolute top-6 right-6 p-2"
            onClick={toggleMenu}
          >
            <X className="h-6 w-6 text-gray-900" />
          </button>
          <div className="flex flex-col space-y-6">
            {["Catalog", "Contact", "FAQ"].map((item, i) => (
              <div key={item}>
                <a href="#" className="text-base text-gray-900 font-medium" onClick={toggleMenu}>
                  {item}
                </a>
              </div>
            ))}

            <div className="pt-6">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
                onClick={toggleMenu}
              >
                Search
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export { Navbar }
