"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    type: "image",
    image: "/images/hero-slide-1.jpg",
    title: "Transform Your Business",
    subtitle: "Cutting-edge Solutions | Expert Consultation | 24/7 Support",
    link: "/solutions",
    textAlign: "center",
    textSize: "large",
    // overlayColor: "rgba(29, 51, 85, 0.5)",
  },
  {
    id: 2,
    type: "text-image",
    title: "Think like an Adversary. Defend like a Guardian.",
    description: "Managed Detection & Response combined with the offensive capabilities you need for stronger security.",
    image: "/images/hero-slide-2.png",
    buttonText: "Learn more",
    buttonLink: "/security",
    backgroundColor: "#fff",
    textAlignment: "left",
    imagePosition: "left",
  },
  {
    id: 3,
    type: "image",
    image: "/images/slide-3.jpg",
    title: "Enterprise Solutions",
    subtitle: "Scalable, Secure, and Reliable",
    link: "/enterprise",
    textAlign: "left",
    textSize: "medium",
    // overlayColor: "rgba(120, 113, 113, 0.5)",
  },
  {
    id: 4,
    type: "image",
    image: "/images/slide-4.jpg",
    title: "Enterprise Solutions",
    subtitle: "Scalable, Secure, and Reliable",
    link: "/enterprise",
    textAlign: "left",
    textSize: "medium",
    // overlayColor: "rgba(120, 113, 113, 0.5)",
  },
  {
    id: 5,
    type: "image",
    image: "/images/slide-5.jpg",
    title: "Enterprise Solutions",
    subtitle: "Scalable, Secure, and Reliable",
    link: "/enterprise",
    textAlign: "left",
    textSize: "medium",
    // overlayColor: "rgba(120, 113, 113, 0.5)",
  },
  {
    id: 6,
    type: "image",
    image: "/images/slide-6.png",
    title: "Enterprise Solutions",
    subtitle: "Scalable, Secure, and Reliable",
    link: "/enterprise",
    textAlign: "left",
    textSize: "medium",
    // overlayColor: "rgba(120, 113, 113, 0.5)",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const renderSlide = (slide: typeof slides[0]) => {
    if (slide.type === "image") {
      return (
        <a
          href={slide.link}
          className={`carouselSlideImage_content carouselSlideImage_content--fit carouselSlideImage_content--text-size-${slide.textSize}`}
          style={{
            "--title-color": "rgba(255, 255, 255, 1)",
            "--text-color": "rgba(255, 255, 255, 1)",
            "--height": isMobile ? "300px" : "600px",
            "--mobile-height": "300px",
            "--background-color": "transparent",
            "--image-url": `url("${slide.image}")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          } as React.CSSProperties}
        >
          {/* Title and subtitle are hidden for image slides */}
        </a>
      )
    }

    if (slide.type === "text-image") {
      return (
        <div
          className={`carouselSlideText_wrapper carouselSlideText_wrapper--image-left carouselSlideText_wrapper--text-size-small carouselSlideText_wrapper--has-background`}
          style={{
            "--height": isMobile ? "300px" : "600px",
            "--mobile-height": "300px",
            "--background-color": slide.backgroundColor,
            "--text-alignment": slide.textAlignment,
          } as React.CSSProperties}
        >
          <div className="carouselSlideText_content">
            <div className="carouselSlideText_image">
              <img
                className="image_item"
                src={slide.image}
                alt={slide.title}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="carouselSlideText_text">
              <div className="carouselSlideText_title">{slide.title}</div>
              <div className="carouselSlideText_description">{slide.description}</div>
              <div className="carouselSlideText_button">
                <a href={slide.buttonLink} className="button_item button_item--emphasisAlt button_item--default button_item--button">
                  <div className="button_text">{slide.buttonText}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <section className="relative overflow-hidden" style={{ height: isMobile ? "300px" : "600px" }}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="carousel_slide" style={{ width: "100%", display: "inline-block" }}>
            {renderSlide(slide)}
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <ul className="slick-dots">
        {slides.map((_, index) => (
          <li key={index} className={index === currentSlide ? "slick-active" : ""}>
            <button onClick={() => setCurrentSlide(index)} />
          </li>
        ))}
      </ul>
    </section>
  )
}
