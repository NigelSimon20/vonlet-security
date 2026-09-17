"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { FacebookIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { ButtonLink, cn } from "@/components/ui";
import { aboutLinks, mainNav } from "@/lib/navigation";
import { serviceCategories, servicesInCategory } from "@/lib/services";
import { fullAddress, primaryPhone, site } from "@/lib/site";

type MenuId = "about" | "services";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = (menu: MenuId) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  const solid = scrolled || openMenu !== null || mobileOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div
        className={cn(
          "hidden overflow-hidden bg-ink text-white/60 transition-[max-height,opacity] duration-300 lg:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100",
        )}
      >
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="size-3.5 text-gold-500" />
              {fullAddress}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="size-3.5 text-gold-500" />
              {site.hours.office}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.emails.general}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="size-3.5 text-gold-500" />
              {site.emails.general}
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Vonlet Security on Facebook"
              className="hover:text-white"
            >
              <FacebookIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "relative border-b transition-colors duration-300",
          solid
            ? "border-white/10 bg-navy-950/90 backdrop-blur-xl"
            : "border-transparent bg-linear-to-b from-navy-950/70 to-transparent",
        )}
        onMouseLeave={scheduleClose}
      >
        <div className="container-x flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              if (!item.menu) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={scheduleClose}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      active ? "text-white" : "text-white/70 hover:text-white",
                    )}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold-500" />
                    )}
                  </Link>
                );
              }
              const menu = item.menu;
              const expanded = openMenu === menu;
              return (
                <button
                  key={item.href}
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`menu-${menu}`}
                  onMouseEnter={() => open(menu)}
                  onClick={() => setOpenMenu(expanded ? null : menu)}
                  className={cn(
                    "relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active || expanded ? "text-white" : "text-white/70 hover:text-white",
                  )}
                >
                  {item.label}
                  <ChevronDown className={cn("size-3.5 transition-transform", expanded && "rotate-180")} />
                  {active && <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold-500" />}
                </button>
              );
            })}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a href={primaryPhone.href} className="group hidden items-center gap-3 xl:flex">
              <span className="grid size-10 place-items-center rounded-full border border-white/15 text-gold-400 transition-colors group-hover:border-gold-500">
                <Phone className="size-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-white/50">Call 24/7</span>
                <span className="block text-sm font-semibold text-white">{primaryPhone.display}</span>
              </span>
            </a>
            <ButtonLink href="/contact" variant="primary">
              Get a quote
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={primaryPhone.href}
              aria-label={`Call ${primaryPhone.display}`}
              className="grid size-11 place-items-center rounded-full border border-white/15 text-gold-400"
            >
              <Phone className="size-4.5" />
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((value) => !value)}
              className="grid size-11 place-items-center rounded-full bg-white/10 text-white"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Desktop dropdowns */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              key={openMenu}
              id={`menu-${openMenu}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={() => open(openMenu)}
              className="absolute inset-x-0 top-full hidden border-b border-white/10 bg-navy-950/95 backdrop-blur-xl lg:block"
            >
              {openMenu === "services" ? <ServicesMenu /> : <AboutMenu />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>{mobileOpen && <MobileMenu pathname={pathname} />}</AnimatePresence>
    </header>
  );
}

function ServicesMenu() {
  return (
    <div className="container-x grid grid-cols-[1fr_3fr] gap-10 py-10">
      <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-linear-to-br from-navy-700 to-navy-900 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">What we do</p>
          <p className="mt-3 font-display text-2xl font-bold leading-tight text-white">
            Complete protection, from the gate to the control room.
          </p>
        </div>
        <Link
          href="/services"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300"
        >
          View all services
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {serviceCategories.map((category) => (
          <div key={category.id}>
            <p className="border-b border-white/10 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              {category.title}
            </p>
            <ul className="mt-3 space-y-1">
              {servicesInCategory(category.id).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group -mx-2 flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <service.icon className="size-4 shrink-0 text-gold-500/80 group-hover:text-gold-400" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutMenu() {
  return (
    <div className="container-x grid grid-cols-4 gap-4 py-8">
      {aboutLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group rounded-2xl border border-white/10 p-5 transition-colors hover:border-gold-500/40 hover:bg-white/3"
        >
          <span className="flex items-center justify-between font-display text-base font-semibold text-white">
            {link.label}
            <ArrowRight className="size-4 text-gold-500 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
          </span>
          <span className="mt-1.5 block text-sm text-white/55">{link.description}</span>
        </Link>
      ))}
    </div>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [section, setSection] = useState<MenuId | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-navy-950 lg:hidden"
    >
      <nav aria-label="Mobile" className="container-x flex min-h-full flex-col py-6">
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            if (!item.menu) {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between py-4 font-display text-xl font-semibold",
                      active ? "text-gold-400" : "text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }
            const menu = item.menu;
            const expanded = section === menu;
            return (
              <li key={item.href}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setSection(expanded ? null : menu)}
                  className={cn(
                    "flex w-full items-center justify-between py-4 font-display text-xl font-semibold",
                    active ? "text-gold-400" : "text-white",
                  )}
                >
                  {item.label}
                  <ChevronDown className={cn("size-5 transition-transform", expanded && "rotate-180")} />
                </button>
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      {menu === "about" ? (
                        <ul className="space-y-1 pb-4">
                          {aboutLinks.map((link) => (
                            <li key={link.href}>
                              <Link href={link.href} className="block rounded-lg px-3 py-2.5 text-white/70">
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="space-y-5 pb-5">
                          {serviceCategories.map((category) => (
                            <div key={category.id}>
                              <p className="px-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/40">
                                {category.title}
                              </p>
                              <ul className="mt-1">
                                {servicesInCategory(category.id).map((service) => (
                                  <li key={service.slug}>
                                    <Link
                                      href={`/services/${service.slug}`}
                                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/75"
                                    >
                                      <service.icon className="size-4 text-gold-500" />
                                      {service.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          <Link href="/services" className="block px-3 text-sm font-semibold text-gold-400">
                            All services →
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto space-y-3 pt-8">
          <ButtonLink href="/contact" size="lg" className="w-full" arrow>
            Get a quote
          </ButtonLink>
          <a
            href={primaryPhone.href}
            className="flex h-13 w-full items-center justify-center gap-2 rounded-full border border-white/20 text-sm font-semibold text-white"
          >
            <Phone className="size-4 text-gold-400" />
            {primaryPhone.display}
          </a>
        </div>
      </nav>
    </motion.div>
  );
}
