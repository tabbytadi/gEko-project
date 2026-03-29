"use client"

import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

export function CTASection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.3 })

  return (
    <section ref={ref} id="signup" className="py-16 lg:py-20 bg-geko-olive">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-2xl mx-auto ${isInView ? "animate-slide-in-up" : "opacity-0"}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-geko-cream mb-4">
            Включи се в следващата мисия
          </h2>
          <p className="text-geko-cream/80 mb-8">
            Присъедини се към хиляди деца, които вече правят разлика. Всяка бутилка е стъпка към по-чиста планета!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/workshops"
              className="inline-flex px-8 py-3 bg-geko-orange text-geko-cream font-semibold rounded-full hover:bg-geko-orange/90 transition-colors"
            >
              Запиши се сега
            </Link>
            <Link
              href="#about"
              className="inline-flex px-8 py-3 border-2 border-geko-cream text-geko-cream font-semibold rounded-full hover:bg-geko-cream hover:text-geko-olive transition-colors"
            >
              Научи повече
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
