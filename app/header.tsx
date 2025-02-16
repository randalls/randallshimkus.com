'use client'
import { X, Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="bg-opacity-60 fixed top-10 right-0 left-0 z-50 rounded-2xl shadow-xl backdrop-blur-md md:right-20 md:left-20 dark:bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="header">
            <Link
              href="/"
              className="font-medium text-zinc-900 dark:text-zinc-100"
            >
              <h1 className="text-3xl">Randall Shimkus</h1>
            </Link>
            <span className="text-zinc-600 dark:text-zinc-300">
              Software Engineering Leader
            </span>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/"
                  className="text-zinc-600 hover:text-zinc-400 dark:text-zinc-300 dark:hover:text-zinc-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#work"
                  className="text-zinc-600 hover:text-zinc-400 dark:text-zinc-300 dark:hover:text-zinc-100"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="text-zinc-600 hover:text-zinc-400 dark:text-zinc-300 dark:hover:text-zinc-100"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/#connect"
                  className="text-zinc-600 hover:text-zinc-400 dark:text-zinc-300 dark:hover:text-zinc-100"
                >
                  Connect
                </Link>
              </li>
            </ul>
          </nav>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-400 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            Home
          </Link>
          <Link
            href="/#work"
            className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-400 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            Work
          </Link>
          <Link
            href="/#skills"
            className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-400 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            Skills
          </Link>
          <Link
            href="/#connect"
            className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-400 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            Connect
          </Link>
        </div>
      </div>
    </header>
  )
}
