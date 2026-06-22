import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
  arrow?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = false,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-accent text-white shadow-[0_8px_24px_rgba(91,92,240,.28)] hover:bg-accent-dark",
    secondary:
      "border border-line bg-white text-ink shadow-sm hover:border-gray-300 hover:bg-surface",
    dark: "bg-ink text-white hover:bg-gray-800",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight size={16} aria-hidden="true" />}
    </Link>
  );
}
