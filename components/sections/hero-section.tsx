"use client"

import Image from "next/image"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

export function HeroSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="relative overflow-hidden bg-geko-cream py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className={`space-y-6 ml-8 ${isInView ? "animate-slide-in-left" : "opacity-0"}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-geko-dark leading-tight text-balance">
              гЕко: Превърни старата си бутилка в супер сила!
            </h1>
            <p className="text-lg text-geko-dark/70 max-w-xl">
              Креативни работилници за деца. Ти носиш пластмасовите бутилки от вкъщи, ние носим артистичното вдъхновение.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/workshops"
                className="inline-flex px-6 py-3 bg-geko-olive text-geko-cream font-semibold rounded-full hover:bg-geko-olive/90 transition-colors"
              >
                Изследвай работилниците
              </Link>
              <Link
                href="#about"
                className="inline-flex px-6 py-3 border-2 border-geko-dark text-geko-dark font-semibold rounded-full hover:bg-geko-dark hover:text-geko-cream transition-colors"
              >
                Научи повече
              </Link>
            </div>

            {/* Stats */}
            <div className={`flex gap-8 pt-6 ${isInView ? "animate-slide-in-up animation-delay-300" : "opacity-0"}`}>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-semibold text-geko-dark">5т +</p>
                <p className="text-sm text-geko-dark/60 font-mono">Рециклирано</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-semibold text-geko-dark">2,00+</p>
                <p className="text-sm text-geko-dark/60 font-mono">Преработени бутилки</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-semibold text-geko-dark">0%</p>
                <p className="text-sm text-geko-dark/60 font-mono">Отпадък</p>
              </div>
            </div>
          </div>

          {/* Right - Mascot */}
          <div className={`relative flex justify-center lg:justify-end ${isInView ? "animate-slide-in-right" : "opacity-0"}`}>
            <Image
              src="/images/geko-homepage-mascot.png"
              alt="gЕко Mascot - Green Frog Character"
              width={500}
              height={600}
              className="h-auto w-full max-w-md animate-float"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
