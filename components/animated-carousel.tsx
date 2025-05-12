"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CarouselItem {
  id: number
  image: string
  title: string
  description?: string
}

interface AnimatedCarouselProps {
  items: CarouselItem[]
  autoPlay?: boolean
  autoPlayInterval?: number
  className?: string
  showControls?: boolean
  showIndicators?: boolean
  aspectRatio?: "square" | "video" | "wide" | "ultrawide"
}

export function AnimatedCarousel({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  className,
  showControls = true,
  showIndicators = true,
  aspectRatio = "wide",
}: AnimatedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[16/9]",
    ultrawide: "aspect-[21/9]",
  }

  const goToNext = useCallback(() => {
    if (isAnimating) return
    setDirection("right")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, items.length])

  const goToPrevious = useCallback(() => {
    if (isAnimating) return
    setDirection("left")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, items.length])

  const goToSlide = (index: number) => {
    if (isAnimating) return
    setDirection(index > currentIndex ? "right" : "left")
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      goToNext()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, goToNext])

  return (
    <div className={cn("relative overflow-hidden rounded-xl", className)}>
      <div className={cn("relative overflow-hidden", aspectRatioClasses[aspectRatio])}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn("absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out", {
              "translate-x-0 z-10": index === currentIndex,
              "translate-x-full":
                (direction === "right" && index === (currentIndex - 1 + items.length) % items.length) ||
                (direction === "left" && index !== currentIndex && index !== (currentIndex + 1) % items.length),
              "-translate-x-full":
                (direction === "left" && index === (currentIndex + 1) % items.length) ||
                (direction === "right" &&
                  index !== currentIndex &&
                  index !== (currentIndex - 1 + items.length) % items.length),
            })}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover"
              priority={index === currentIndex}
            />
            {item.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                {item.description && <p className="text-sm opacity-90">{item.description}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-background/50 backdrop-blur-sm rounded-full hover:bg-background/70"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-background/50 backdrop-blur-sm rounded-full hover:bg-background/70"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>
        </>
      )}

      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80",
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

