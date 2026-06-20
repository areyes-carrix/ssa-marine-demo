"use client";

import Image from "next/image";
import Link from "next/link";
import {
    useCallback,
    useEffect,
    useRef,
    useState,
    useSyncExternalStore,
  } from "react";
import type { HeroSlide } from "@/app/lib/hero-slides";

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

export default function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const count = slides.length;

  const goTo = useCallback(
    (i: number) => setActive(((i % count) + count) % count),
    [count],
  );
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Autoplay
  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = window.setTimeout(
      () => setActive((a) => (a + 1) % count),
      AUTOPLAY_MS,
    );
    return () => window.clearTimeout(id);
  }, [active, paused, reducedMotion, count]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  const onBlur = (e: React.FocusEvent) => {
    if (!sectionRef.current?.contains(e.relatedTarget as Node | null)) {
      setPaused(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Puertos donde operamos"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={onBlur}
      className="relative w-full overflow-hidden bg-ssa-ink min-h-[600px] md:min-h-screen"
    >
      {slides.map((slide, i) => {
        const isActive = i === active;
        return (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} de ${count}: ${slide.title}`}
            aria-hidden={!isActive}
            inert={!isActive || undefined}
            className={[
              "absolute inset-0 transition-opacity ease-in-out",
              reducedMotion ? "duration-0" : "duration-700",
              isActive ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent"
            />
            <div className="relative z-10 mx-auto flex h-full min-h-[600px] max-w-ssa items-center px-6 md:min-h-screen">
              <div className="max-w-xl text-ssa-surface">
                <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
                  {slide.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed md:text-lg">
                  {slide.description}
                </p>
                <Link
                  href={slide.href}
                  className="mt-8 inline-block bg-ssa-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ssa-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Más información
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      {/* Chevrons */}
      <button
        type="button"
        aria-label="Puerto anterior"
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition-colors hover:bg-ssa-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Puerto siguiente"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition-colors hover:bg-ssa-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.id}
              type="button"
              aria-label={`Ir al ${s.title}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => goTo(i)}
              className={[
                "h-3 w-3 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
                isActive ? "bg-ssa-primary" : "bg-white/50 hover:bg-white",
              ].join(" ")}
            />
          );
        })}
      </div>
    </section>
  );
}