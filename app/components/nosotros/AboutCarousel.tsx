"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { AboutCarouselSlide } from "@/app/lib/about-carousel-slides";

const AUTOPLAY_MS = 5000;

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServer() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getReducedMotionServer,
  );
}

type AboutCarouselProps = {
  slides: AboutCarouselSlide[];
};

export default function AboutCarousel({ slides }: AboutCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const count = slides.length;

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % count) + count) % count);
    },
    [count],
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused || reducedMotion || count <= 1) return;

    const id = window.setTimeout(() => {
      setActive((current) => (current + 1) % count);
    }, AUTOPLAY_MS);

    return () => window.clearTimeout(id);
  }, [active, paused, reducedMotion, count]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  const onBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!sectionRef.current?.contains(e.relatedTarget as Node | null)) {
      setPaused(false);
    }
  };

  if (slides.length === 0) return null;

  return (
    <div
      ref={sectionRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Galería de imágenes de Nosotros"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={onBlur}
      className="relative overflow-hidden bg-white"
    >
      <div className="relative aspect-[4/3] w-full md:h-[420px] md:aspect-auto">
        {slides.map((slide, index) => {
          const isActive = index === active;

          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${count}`}
              aria-hidden={!isActive}
              className={[
                "absolute inset-0 transition-opacity ease-in-out",
                reducedMotion ? "duration-0" : "duration-500",
                isActive ? "opacity-100" : "opacity-0 pointer-events-none",
              ].join(" ")}
            >
            <Image
  src={slide.image}
  alt={slide.alt}
  fill
  sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
  className="object-cover"
/>

            </div>
          );
        })}
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            aria-label="Imagen anterior"
            onClick={prev}
            className="absolute left-3 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ssa-primary text-white transition-colors hover:bg-ssa-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ssa-primary focus-visible:ring-offset-2"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Imagen siguiente"
            onClick={next}
            className="absolute right-3 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ssa-primary text-white transition-colors hover:bg-ssa-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ssa-primary focus-visible:ring-offset-2"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
            {slides.map((slide, index) => {
              const isActive = index === active;

              return (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Ir a la imagen ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => goTo(index)}
                  className={[
                    "h-3 w-3 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
                    isActive ? "bg-ssa-primary" : "bg-white/80 hover:bg-white",
                  ].join(" ")}
                />
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
}