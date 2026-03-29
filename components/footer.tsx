import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-geko-cream border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <Image
              src="/images/footer-geko-logo.png"
              alt="gЕко Logo"
              width={80}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-geko-dark/70 mb-4">
              Малки стъпки за голяма планета.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-geko-dark/70 hover:text-geko-olive transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="#" className="text-geko-dark/70 hover:text-geko-olive transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-geko-dark mb-4">Бързи връзки</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/workshops" className="text-sm text-geko-dark/70 hover:text-geko-olive transition-colors">
                  Работилници
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-geko-dark/70 hover:text-geko-olive transition-colors">
                  Абонаменти
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-geko-dark/70 hover:text-geko-olive transition-colors">
                  За нас
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-geko-dark mb-4">Ресурси</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-geko-dark/70 hover:text-geko-olive transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-geko-dark/70 hover:text-geko-olive transition-colors">
                  ЧЗВ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-geko-dark/70 hover:text-geko-olive transition-colors">
                  Еко съвети
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-geko-dark/70 hover:text-geko-olive transition-colors">
                  DIY проекти
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-geko-dark mb-4">Контакти</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-geko-olive" />
                <a href="mailto:gEko@gmail.com" className="text-sm text-geko-dark/70 hover:text-geko-olive transition-colors">
                  gEko@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-geko-olive" />
                <a href="tel:+359888888888" className="text-sm text-geko-dark/70 hover:text-geko-olive transition-colors">
                  +359 888 888 888
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-geko-olive mt-0.5" />
                <span className="text-sm text-geko-dark/70">
                  ж.к. Овча купел 2, ул.<br />
                  &quot;Монтевидео&quot; 21, 1618 София
                </span>
              </li>
            </ul>
          </div>

          {/* Mascot */}
          <div className="hidden lg:flex justify-end items-end">
            <Image
              src="/images/footer-mascot.png"
              alt="gЕко Mascot"
              width={120}
              height={120}
              className="h-auto w-28"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-geko-dark/60">
            © 2026 gЕко. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  )
}
