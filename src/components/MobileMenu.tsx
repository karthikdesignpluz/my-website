'use client'

import { useState } from 'react'
import Link from 'next/link'

interface MenuItem {
  _key: string
  label: string
  url: string
  isExternal?: boolean
}

interface MobileMenuProps {
  menuItems: MenuItem[]
}

export default function MobileMenu({ menuItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1.5 w-6 h-6 items-center justify-center"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="absolute top-20 left-0 right-0 bg-white border-b border-slate-200 md:hidden shadow-lg">
          <div className="flex flex-col p-4 gap-3">
            {menuItems.map((item) => (
              <Link
                key={item._key}
                href={item.url}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className="text-slate-700 hover:text-slate-900 py-2 px-3 rounded hover:bg-slate-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  )
}
