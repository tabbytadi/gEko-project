"use client"

import Image from "next/image"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { Calendar, Clock, MapPin, Droplets, Users } from "lucide-react"

const workshops = [
  {
    id: 1,
    title: "Разходка из Витоша",
    image: "/images/workshop1.png",
    date: "17 Април 2026",
    time: "10:00 - 14:00",
    location: "Витоша",
    bottles: "4 бутилки (1.5L)",
    participants: "20 участници",
    difficulty: "Премиум",
    age: "10-12 години"
  },
  {
    id: 2,
    title: "Ден във фермата",
    image: "/images/workshop2.png",
    date: "18 Април 2026",
    time: "10:00 - 14:00",
    location: "с. Нови Хан",
    bottles: "6 бутилки (1.5L)",
    participants: "20 участници",
    difficulty: "Премиум",
    age: "10-12 години"
  },
  {
    id: 3,
    title: "Засаждане на дърво",
    image: "/images/workshop3.png",
    date: "17 Април 2026",
    time: "10:00 - 14:00",
    location: "Витоша",
    bottles: "4 бутилки (1.5L)",
    participants: "20 участници",
    difficulty: "Средни",
    age: "7-9 години"
  }
]

export function WorkshopsSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-geko-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isInView ? "animate-slide-in-up" : "opacity-0"}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-geko-dark mb-2">
            Разгледай работилниците
          </h2>
          <p className="text-geko-dark/60">Намери перфектното приключение</p>
        </div>

        {/* Workshops Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {workshops.map((workshop, index) => (
            <div 
              key={workshop.id}
              className={`bg-geko-cream border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${isInView ? "animate-slide-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  fill
                  className="object-cover"
                />
                {/* Tags */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-3 py-1 bg-geko-olive text-geko-cream text-xs font-semibold rounded-full">
                    {workshop.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-geko-lime text-geko-dark text-xs font-semibold rounded-full">
                    {workshop.age}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-geko-dark mb-3">{workshop.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-geko-dark/70">
                    <Calendar className="h-4 w-4 text-geko-olive" />
                    <span>{workshop.date}</span>
                    <span className="text-geko-dark/40">|</span>
                    <Clock className="h-4 w-4 text-geko-olive" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-geko-dark/70">
                    <MapPin className="h-4 w-4 text-geko-olive" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-geko-dark/70">
                    <Droplets className="h-4 w-4 text-geko-olive" />
                    <span>Необходими: {workshop.bottles}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-geko-dark/70">
                    <Users className="h-4 w-4 text-geko-olive" />
                    <span>{workshop.participants}</span>
                  </div>
                </div>

                <button className="w-full py-2.5 bg-geko-orange text-geko-cream font-semibold rounded-lg hover:bg-geko-orange/90 transition-colors">
                  Запиши се
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-10 ${isInView ? "animate-fade-in animation-delay-400" : "opacity-0"}`}>
          <Link
            href="/workshops"
            className="inline-flex px-8 py-3 border-2 border-geko-dark text-geko-dark font-semibold rounded-full hover:bg-geko-dark hover:text-geko-cream transition-colors"
          >
            Виж още
          </Link>
        </div>
      </div>
    </section>
  )
}
