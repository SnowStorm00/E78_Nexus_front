"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"

const featuredApps = [
  {
    id: 1,
    title: "Audio Visual",
    subtitle: "AV Solutions",
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
    image: "/images/app-icon.png"
  },
  {
    id: 2,
    title: "IT Assessment B2B",
    subtitle: "Technology Audit",
    color: "bg-gradient-to-br from-orange-500 to-orange-700",
    image: "/images/app-icon.png"
  },
  {
    id: 3,
    title: "Society for Information Management",
    subtitle: "SIM Community",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
    image: "/images/sim.png"
  },
  {
    id: 4,
    title: "Executive Leader Forum",
    subtitle: "Leadership Development",
    color: "bg-gradient-to-br from-slate-700 to-slate-900",
    image: "/images/app-icon.png"
  },
  {
    id: 5,
    title: "Next-Level Tech Manager Workshop",
    subtitle: "Management Training",
    color: "bg-gradient-to-br from-slate-600 to-slate-800",
    image: "/images/next-level.png"
  },
  {
    id: 6,
    title: "Rising Leader Forums",
    subtitle: "Leadership Growth",
    color: "bg-gradient-to-br from-slate-700 to-slate-900",
    image: "/images/app-icon.png"
  },
  {
    id: 7,
    title: "Cloud Solutions",
    subtitle: "Infrastructure",
    color: "bg-gradient-to-br from-purple-600 to-purple-800",
    image: "/images/app-icon.png"
  },
  {
    id: 8,
    title: "Data Analytics",
    subtitle: "Business Intelligence",
    color: "bg-gradient-to-br from-green-600 to-green-800",
    image: "/images/app-icon.png"
  },
]

export function FeaturedApps() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 6

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerView >= featuredApps.length ? 0 : prev + itemsPerView))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, featuredApps.length - itemsPerView) : Math.max(0, prev - itemsPerView),
    )
  }

  const visibleApps = featuredApps.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section className="py-16 bg-gradient-to-b from-white via-blue-100 to-blue-200">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Apps and Solutions</h2>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                See More
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={prevSlide} disabled={currentIndex === 0}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={nextSlide}
                disabled={currentIndex + itemsPerView >= featuredApps.length}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {visibleApps.map((app, index) => (
            <AnimatedSection key={app.id} delay={index * 100}>
              <Card
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 max-w-[250px] mx-auto md:max-w-none"
                style={{ height: "100%" }}
              >
                <CardContent className="p-0 h-full flex flex-col">
                  <div
                    className={`${app.color} aspect-square w-full flex items-center justify-center rounded-t-lg relative overflow-hidden flex-shrink-0`}
                  >
                    <Image
                      src={app.image}
                      alt={app.title}
                      width={96}
                      height={96}
                      className="transition-transform duration-300 group-hover:scale-110 w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-center">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{app.title}</h3>
                    <p className="text-xs text-gray-600">{app.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
