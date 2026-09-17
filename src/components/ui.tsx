import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Eyebrow({
  children,
  tone = "gold",
  className,
}: {
  children: ReactNode;
  tone?: "gold" | "navy";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]",
        tone === "gold" ? "text-gold-500" : "text-navy-600",
        className,
      )}
    >
      <span aria-hidden className={cn("h-px w-8", tone === "gold" ? "bg-gold-500" : "bg-navy-600")} />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-2xl", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-navy-950",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", dark ? "text-white/65" : "text-muted")}>
          {description}
        </p>
      )}
    </div>
  );
}

const buttonStyles = {
  primary: "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-[0_8px_30px_-8px_rgb(215_151_53/0.6)]",
  dark: "bg-navy-900 text-white hover:bg-navy-700",
  light: "bg-white text-navy-950 hover:bg-sand-100",
  "outline-light": "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
  outline: "border border-navy-900/15 text-navy-950 hover:border-navy-900/40 hover:bg-navy-900/3",
} as const;

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof buttonStyles;
  size?: "md" | "lg";
  arrow?: boolean;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200",
        size === "lg" ? "h-13 px-7 text-[0.95rem]" : "h-11 px-5 text-sm",
        buttonStyles[variant],
        className,
      )}
    >
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </Link>
  );
}

export function TextLink({ className, children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors hover:text-gold-600",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}
