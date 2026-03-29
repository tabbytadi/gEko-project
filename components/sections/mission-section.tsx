"use client"

import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    number: "1",
    title: "Повторна употреба",
    description: "Учим децата да превръщат пластмасови отпадъци в красиви творби"
  },
  {
    number: "2",
    title: "Рециклиране",
    description: "Всеки остатък от нашите работилници се изпраща за сертифицирано индустриално рециклиране"
  },
  {
    number: "3",
    title: "Нулев отпадък",
    description: "Гарантираме 0% отпадък останал след всяко събитие"
  }
]

export function MissionSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} id="about" className="py-16 lg:py-24 bg-geko-cream border-y border-border/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 ${isInView ? "animate-slide-in-up" : "opacity-0"}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-geko-dark mb-4">
            Нашата мисия
          </h2>
          <p className="text-geko-dark/70">
            В гЕко даваме нов живот на бутилките чрез творчество, а всеки остатък рециклираме индустриално за 100% чиста природа.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`text-center ${isInView ? "animate-slide-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-geko-olive text-geko-olive text-2xl font-semibold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-geko-dark mb-2">{step.title}</h3>
              <p className="text-geko-dark/60 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
