import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { heroSlides } from "../data/company.js";
import Button from "./Button.jsx";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % heroSlides.length);
  };

  return (
    <section className="relative isolate h-[85vh] lg:h-screen overflow-hidden bg-slate-950 pt-24 text-white">
      <AnimatePresence mode="wait">
        <motion.img
          key={activeSlide.image}
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
          src={activeSlide.image}
          alt={activeSlide.alt}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 0.45, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-slate-900/20" />

      <div className="mx-auto flex min-h-[calc(92vh-6rem)] max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.title}
            className="max-w-4xl"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.24em] text-red-400">
              {activeSlide.eyebrow}
            </p>
            <h1 className="font-heading text-3xl font-extrabold leading-[1.05] sm:text-4xl lg:text-4xl">
              {activeSlide.title}
            </h1>
            <p className="mt-6 max-w-2xl md:text-lg leading-6 md:leading-8 text-white/78 sm:text-xl">
              {activeSlide.description}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact">Contact us</Button>
              <Button to="/projects" variant="secondary">
                View Our Works
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4 px-4">
        <button
          className="flex h-11 w-11 items-center justify-center rounded-md border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          type="button"
          onClick={showPrevious}
          aria-label="Show previous hero slide"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2" aria-label="Hero slide controls">
          {heroSlides.map((slide, index) => (
            <button
              className={`h-2.5 rounded-full transition ${activeIndex === index ? "w-9 bg-red-500" : "w-2.5 bg-white/55 hover:bg-white"
                }`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
              aria-current={activeIndex === index ? "true" : undefined}
              key={slide.title}
            />
          ))}
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-md border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          type="button"
          onClick={showNext}
          aria-label="Show next hero slide"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <motion.div
          className="h-full bg-red-600"
          key={activeIndex}
          initial={{ width: "0%" }}
          animate={{ width: prefersReducedMotion ? "0%" : "100%" }}
          transition={{ duration: 6.5, ease: "linear" }}
        />
      </div>
    </section>
  );
}
