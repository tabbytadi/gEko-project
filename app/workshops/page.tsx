"use client"

import Image from "next/image"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, MapPin, Droplets, Users } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const workshops = [
  {
    id: 1,
    title: "Разходка из Витоша",
    image: "/images/workshop1.png",
    date: "18 април 2026",
    time: "10:00 - 14:00",
    location: "Витоша",
    bottles: "4 бутилки (1.5L)",
    participants: "20 участници",
    difficulty: "Премиум",
    age: "10-12 години",
    ageCategory: "10-12"
  },
  {
    id: 2,
    title: "Ден във фермата",
    image: "/images/workshop2.png",
    date: "19 април 2026",
    time: "10:00 - 14:00",
    location: "с. Нови Хан",
    bottles: "6 бутилки (1.5L)",
    participants: "20 участници",
    difficulty: "Премиум",
    age: "10-12 години",
    ageCategory: "10-12"
  },
  {
    id: 3,
    title: "Засаждане на дърво",
    image: "/images/workshop3.png",
    date: "25 април 2026",
    time: "10:00 - 14:00",
    location: "Южен парк",
    bottles: "4 бутилки (1.5L)",
    participants: "20 участници",
    difficulty: "Средни",
    age: "7-9 години",
    ageCategory: "7-9"
  },
  {
    id: 4,
    title: "Отглеждане на растение",
    image: "/images/workshop4.png",
    date: "16 май 2026",
    time: "10:00 - 14:00",
    location: 'ДГ "Дружба"',
    bottles: "4 бутилки (1.5L)",
    participants: "20 участници",
    difficulty: "Премиум",
    age: "10-12 години",
    ageCategory: "10-12"
  },
  {
    id: 5,
    title: "Устойчив начин на живот",
    image: "/images/workshop5.png",
    date: "17 май 2026",
    time: "10:00 - 14:00",
    location: "Младост",
    bottles: "6 бутилки (1.5L)",
    participants: "20 участници",
    difficulty: "Премиум",
    age: "10-12 години",
    ageCategory: "10-12"
  },
  {
    id: 6,
    title: "Изработване на цветя",
    image: "/images/workshop6.png",
    date: "24 май 2026",
    time: "10:00 - 14:00",
    location: 'ДГ "Дружба"',
    bottles: "4 бутилки (1.5L)",
    participants: "20 участници",
    difficulty: "Средни",
    age: "7-9 години",
    ageCategory: "7-9"
  }
]

const ageFilters = ["Всички възрасти", "4-6 години", "7-9 години", "10-12 години"]
const difficultyFilters = ["Всички", "Базови", "Средни", "Премиум"]

function WorkshopsContent() {
  const [selectedAge, setSelectedAge] = useState("Всички възрасти")
  const [selectedDifficulty, setSelectedDifficulty] = useState("Всички")
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  const filteredWorkshops = workshops.filter((workshop) => {
    const ageMatch = selectedAge === "Всички възрасти" || workshop.age === selectedAge
    const difficultyMatch = selectedDifficulty === "Всички" || workshop.difficulty === selectedDifficulty
    return ageMatch && difficultyMatch
  })

  return (
    <>
      {/* Hero Section with Curved Background */}
      <section className="relative bg-geko-olive overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-20 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-geko-cream mb-4 animate-slide-in-up">
            Открий своята следваща мисия
          </h1>
          <p className="text-geko-cream/80 text-lg animate-slide-in-up animation-delay-100">
            Разгледай нашия каталог от творчески мисии
          </p>
        </div>
        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="#FFFEF0"/>
          </svg>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-geko-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-6 mb-8">
            {/* Age Filter */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-geko-dark font-semibold">Възраст:</span>
              {ageFilters.map((age) => (
                <button
                  key={age}
                  onClick={() => setSelectedAge(age)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    selectedAge === age
                      ? "bg-geko-olive text-geko-cream"
                      : "bg-geko-cream border border-geko-dark/30 text-geko-dark hover:border-geko-olive"
                  }`}
                >
                  {age}
                </button>
              ))}
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-geko-dark font-semibold">Трудност:</span>
              {difficultyFilters.map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    selectedDifficulty === difficulty
                      ? "bg-geko-olive text-geko-cream"
                      : "bg-geko-cream border border-geko-dark/30 text-geko-dark hover:border-geko-olive"
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section ref={ref} className="py-8 pb-16 bg-geko-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkshops.map((workshop, index) => (
              <div 
                key={workshop.id}
                className={`bg-geko-cream border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all ${isInView ? "animate-slide-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-52">
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

          {filteredWorkshops.length === 0 && (
            <div className="text-center py-12">
              <p className="text-geko-dark/60 text-lg">Няма намерени работилници с избраните филтри.</p>
            </div>
          )}

          {/* Load More Button */}
          <div className="text-center mt-10">
            <button className="inline-flex px-8 py-3 border-2 border-geko-dark text-geko-dark font-semibold rounded-full hover:bg-geko-dark hover:text-geko-cream transition-colors">
              Виж още
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-geko-cream">
      <Header />
      <main>
        <WorkshopsContent />
      </main>
      <Footer />
    </div>
  )
}
