"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

const transformations = [
  { title: "Декорация за стая", subtitle: "Украси своето пространство", position: "left-top" },
  { title: "Арт проекти", subtitle: "Безкрайно творчество", position: "left-bottom" },
  { title: "Маска на супер герой", subtitle: "От бутилка до герой", position: "right-top" },
  { title: "Еко цветя", subtitle: "Вечна красота", position: "right-bottom" },
]

export function BottleSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-geko-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isInView ? "animate-slide-in-up" : "opacity-0"}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-geko-dark mb-4">
            Новият живот на бутилката
          </h2>
          <p className="text-geko-dark/60">
            Открий безкрайните възможности за трансформация
          </p>
        </div>

        {/* Bottle with transformations */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 items-center">
            {/* Left transformations */}
            <div className="space-y-16">
              {transformations.slice(0, 2).map((item, index) => (
                <div 
                  key={item.title}
                  className={`text-right ${isInView ? "animate-slide-in-left" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-lg font-semibold text-geko-dark">{item.title}</h3>
                  <p className="text-sm text-geko-dark/60">{item.subtitle}</p>
                  <div className="flex justify-end mt-2">
                    <div className="w-24 h-px bg-geko-olive"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center - Bottle */}
            <div className={`flex justify-center ${isInView ? "animate-fade-in" : "opacity-0"}`}>
              <Image
                src="/images/plastic-bottle.png"
                alt="Plastic Bottle"
                width={200}
                height={400}
                className="h-auto w-32 md:w-40 animate-bop"
              />
            </div>

            {/* Right transformations */}
            <div className="space-y-16">
              {transformations.slice(2, 4).map((item, index) => (
                <div 
                  key={item.title}
                  className={`text-left ${isInView ? "animate-slide-in-right" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-lg font-semibold text-geko-dark">{item.title}</h3>
                  <p className="text-sm text-geko-dark/60">{item.subtitle}</p>
                  <div className="flex justify-start mt-2">
                    <div className="w-24 h-px bg-geko-olive"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
