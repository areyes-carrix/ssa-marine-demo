"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Item = { href: string; label: string };

export default function MobileNav({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-nav-dialog"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded text-ssa-ink md:hidden"
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
          <path d="M4 7h16 M4 12h16 M4 17h16" />
        </svg>
      </button>

      {open && (
        <div
          id="mobile-nav-dialog"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal"
          className="fixed inset-0 z-[60] flex flex-col bg-ssa-ink p-6 text-ssa-surface md:hidden"
        >
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={close}
           className="self-end inline-flex h-10 w-10 items-center justify-center rounded text-ssa-surface hover:text-ssa-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ssa-primary"
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
              <path d="M6 6 L18 18 M6 18 L18 6" />
            </svg>
          </button>
          <nav aria-label="Mobile" className="mt-4 flex flex-col gap-4">
            {items.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                ref={i === 0 ? firstLinkRef : undefined}
                onClick={() => setOpen(false)}
                className="font-display text-xl font-medium text-ssa-surface hover:text-ssa-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}