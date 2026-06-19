"use client";
import { useEffect } from "react";

export default function HeaderScrollWatcher() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(
      'header[data-shell="site-header"]',
    );
    if (!header) return;
    const onScroll = () => {
      header.dataset.scrolled = window.scrollY > 8 ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return null;
}