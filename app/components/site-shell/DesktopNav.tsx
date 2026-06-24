"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
};

export default function DesktopNav({
  items,
}: {
  items: readonly NavItem[];
}) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="flex items-stretch">
      {items.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={[
              "px-8 py-5 text-sm font-semibold uppercase tracking-wide transition-colors",
              active
                ? "bg-ssa-primary text-white"
                : "text-ssa-surface/95 hover:bg-ssa-primary hover:text-white",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}