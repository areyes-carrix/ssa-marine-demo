"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href?: string;
  label: string;
  children?: readonly {readonly href: string;  readonly label: string;}[];
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
  if (item.children) {
    const active = item.children.some((child) =>
      pathname.startsWith(child.href)
    );

    return (
      <div
        key={item.label}
        className="group relative"
      >
        <div
          className={[
            "cursor-pointer px-8 py-5 text-sm font-semibold uppercase tracking-wide transition-colors",
            active
              ? "bg-ssa-primary text-white"
              : "text-ssa-surface/95 hover:bg-ssa-primary hover:text-white",
          ].join(" ")}
        >
          {item.label}
        </div>

        <div className="absolute left-0 top-full z-[100] hidden min-w-[260px] bg-white shadow-lg group-hover:block">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-5 py-3 text-sm text-slate-700 hover:bg-[#f5f5f5]"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  const active =
    item.href === "/"
      ? pathname === "/"
      : pathname.startsWith(item.href ?? "");

  return (
    <Link
      key={item.href}
      href={item.href!}
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