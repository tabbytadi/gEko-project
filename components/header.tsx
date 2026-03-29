"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-geko-cream border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/header-geko-logo.png"
              alt="gЕко Logo"
              width={80}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-geko-dark font-semibold hover:text-geko-olive transition-colors"
            >
              Начало
            </Link>
            <Link 
              href="#about" 
              className="text-geko-dark font-semibold hover:text-geko-olive transition-colors"
            >
              За нас
            </Link>
            <Link 
              href="#animators" 
              className="text-geko-dark font-semibold hover:text-geko-olive transition-colors"
            >
              Аниматори
            </Link>
            <Link 
              href="/workshops" 
              className="text-geko-dark font-semibold hover:text-geko-olive transition-colors"
            >
              Работилници
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="#signup"
            className="hidden md:inline-flex px-6 py-2.5 bg-geko-orange text-geko-cream font-semibold rounded-full hover:bg-geko-orange/90 transition-colors"
          >
            Запиши се
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-geko-dark" />
            ) : (
              <Menu className="h-6 w-6 text-geko-dark" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t border-border/50 mt-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-geko-dark font-semibold hover:text-geko-olive transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Начало
              </Link>
              <Link 
                href="#about" 
                className="text-geko-dark font-semibold hover:text-geko-olive transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                За нас
              </Link>
              <Link 
                href="#animators" 
                className="text-geko-dark font-semibold hover:text-geko-olive transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Аниматори
              </Link>
              <Link 
                href="/workshops" 
                className="text-geko-dark font-semibold hover:text-geko-olive transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Работилници
              </Link>
              <Link
                href="#signup"
                className="inline-flex justify-center px-6 py-2.5 bg-geko-orange text-geko-cream font-semibold rounded-full hover:bg-geko-orange/90 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Запиши се
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
