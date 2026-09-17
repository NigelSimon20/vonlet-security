import Image from "next/image";
import Link from "next/link";

import badge from "@/assets/images/logo-badge.png";
import { cn } from "@/components/ui";

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Vonlet Security Services — home"
      className={cn("group flex items-center gap-3", className)}
    >
      <Image
        src={badge}
        alt=""
        priority
        className="h-11 w-auto drop-shadow-[0_4px_12px_rgb(0_0_0/0.35)] transition-transform duration-300 group-hover:scale-105"
        sizes="48px"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-[0.08em] text-white">VONLET</span>
        <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold-400">
          Security Services
        </span>
      </span>
    </Link>
  );
}
