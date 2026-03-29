"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

const animators = [
  {
    name: "Габи Иванова",
    image: "/images/animator1.png",
    description: "Вярва, че изкуството е най-прекият път към детското сърце и въображение."
  },
  {
    name: "Криси Петкова",
    image: "/images/animator2.png",
    description: "Специалист в превръщането на всяка игрова ситуация в незабравимо приключение."
  },
  {
    name: "Ани Георгиева",
    image: "/images/animator3.png",
    description: "Посветена на мисията да открива и развива индивидуалния талант на всяко дете."
  }
]

export function AnimatorsSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} id="animators" className="py-16 lg:py-24 bg-geko-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isInView ? "animate-slide-in-up" : "opacity-0"}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-geko-dark mb-2">
            Аниматори
          </h2>
          <p className="text-geko-dark/60">Запознай се с екипа</p>
        </div>

        {/* Animators Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {animators.map((animator, index) => (
            <div 
              key={animator.name}
              className={`text-center ${isInView ? "animate-slide-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-3xl overflow-hidden border-4 border-geko-olive/20">
                <Image
                  src={animator.image}
                  alt={animator.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-geko-dark mb-2">{animator.name}</h3>
              <p className="text-sm text-geko-dark/60 leading-relaxed max-w-xs mx-auto">
                {animator.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
