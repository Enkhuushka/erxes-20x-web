"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

const dayLinks = [
  { key: "day1", slug: "1" },
  { key: "day2", slug: "2" },
  { key: "day3", slug: "3" },
  { key: "day4", slug: "4" },
  { key: "day5", slug: "5" },
];

const pageLinks = [
  { key: "about", slug: "about" },
  { key: "contact", slug: "contact" },
];

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleLang = locale === "mn" ? "/en" + pathname : "/mn" + pathname;

  const isActive = (path: string) => pathname === `/${locale}${path}`;

  return (
    <header className="sticky top-0 z-50 border-t-4 border-primary bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 lg:px-10">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-lg font-semibold text-foreground"
          aria-label={t("home")}
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-mono text-xs font-bold">
            E
          </span>
          <span className="hidden sm:inline">erxes 20x</span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label={t("menu")}
        >
          {pageLinks.map((link) => (
            <NavLink
              key={link.slug}
              href={`/${locale}/${link.slug}`}
              active={isActive(`/${link.slug}`)}
            >
              {t(link.key)}
            </NavLink>
          ))}
          <div className="mx-2 h-4 w-px bg-border" />
          {dayLinks.map((link) => (
            <DayNavLink
              key={link.slug}
              href={`/${locale}/day/${link.slug}`}
              active={isActive(`/day/${link.slug}`)}
            >
              {link.key.replace("day", "D")}
            </DayNavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={toggleLang}
            className="hidden sm:inline-flex h-9 items-center rounded-md border border-border bg-secondary px-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
          >
            {t("switchTo")}
          </Link>
          <ThemeToggle className="hidden sm:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary text-secondary-foreground lg:hidden"
            aria-label={open ? t("close") : t("menu")}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-background lg:hidden"
            aria-label={t("menu")}
          >
            <div className="mx-auto max-w-[1240px] space-y-1 px-6 py-4">
              <MobileLink
                href={`/${locale}`}
                active={isActive("")}
                onClick={() => setOpen(false)}
              >
                {t("home")}
              </MobileLink>
              {pageLinks.map((link) => (
                <MobileLink
                  key={link.slug}
                  href={`/${locale}/${link.slug}`}
                  active={isActive(`/${link.slug}`)}
                  onClick={() => setOpen(false)}
                >
                  {t(link.key)}
                </MobileLink>
              ))}
              <div className="my-3 h-px bg-border" />
              <div className="grid grid-cols-5 gap-2">
                {dayLinks.map((link) => (
                  <MobileDayLink
                    key={link.slug}
                    href={`/${locale}/day/${link.slug}`}
                    active={isActive(`/day/${link.slug}`)}
                    onClick={() => setOpen(false)}
                  >
                    {link.key.replace("day", "D")}
                  </MobileDayLink>
                ))}
              </div>
              <div className="flex items-center gap-2 pt-3">
                <Link
                  href={toggleLang}
                  onClick={() => setOpen(false)}
                  className="flex-1 inline-flex h-10 items-center justify-center rounded-md border border-border bg-secondary text-sm font-medium text-secondary-foreground"
                >
                  {t("switchTo")}
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors",
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary"
        />
      )}
    </Link>
  );
}

function DayNavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "px-2 py-1.5 rounded-md text-xs font-mono font-semibold transition-colors",
        active
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-secondary-foreground hover:bg-muted"
      )}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  active,
  onClick,
  children,
}: {
  href: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
        active
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      {children}
    </Link>
  );
}

function MobileDayLink({
  href,
  active,
  onClick,
  children,
}: {
  href: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex h-10 items-center justify-center rounded-md text-sm font-mono font-semibold transition-colors",
        active
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-secondary-foreground hover:bg-muted"
      )}
    >
      {children}
    </Link>
  );
}
