import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, ORDER_PATH } from "@/app/lib/site";

type SiteHeaderProps = {
  active?: "home" | "about" | "order";
  tone?: "dark" | "light";
};

const navItems = [
  { href: "/", label: "Home", key: "home" },
  { href: "/about", label: "About", key: "about" },
  { href: ORDER_PATH, label: "Order Feed", key: "order" },
] as const;

export function SiteHeader({ active, tone = "light" }: SiteHeaderProps) {
  const isDark = tone === "dark";
  const logoSrc = isDark
    ? "/Kesten Feed Co. logo (1)/Lace no background or shadow (2).svg"
    : "/Kesten Feed Co. logo (1)/Blue no background, no shadow.svg";

  return (
    <header className="py-5 md:py-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" aria-label="Kesten Feed Co home" className="inline-flex w-fit items-center">
          <Image
            src={logoSrc}
            alt="Kesten Feed Co"
            width={168}
            height={168}
            priority={tone === "dark"}
            className="h-[4.5rem] w-auto md:h-[5.25rem]"
          />
        </Link>

        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-2 sm:justify-end">
          {navItems.map((item) => {
            const isActive = active === item.key;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[var(--bronze)] text-white"
                    : isDark
                      ? "text-white hover:bg-white/12"
                      : "text-[var(--ink)] hover:bg-[var(--lace)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={`rounded px-3 py-2 text-sm font-semibold transition-colors ${
              isDark ? "text-white hover:bg-white/12" : "text-[var(--ink)] hover:bg-[var(--lace)]"
            }`}
          >
            Contact Remi
          </a>
        </nav>
      </div>
    </header>
  );
}
