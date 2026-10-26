import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";

const LINKS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#menu", label: "Menu" },
  { href: "#galeri", label: "Galeri" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#lokasi", label: "Lokasi" },
];

export const WA_LINK =
  "https://wa.me/6281234567890?text=Halo%20Tanamanies%20Cafe!%20Saya%20mau%20tanya-tanya%20dulu%20boleh%3F";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-cream/10 bg-ink/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <Coffee className="h-5 w-5 text-caramel" />
          <span className="font-display text-xl italic">Tanamanies Cafe</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-cream/70 transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-caramel px-5 py-2 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            Pesan via WhatsApp
          </a>
        </div>

        <button
          className="text-cream md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Buka menu navigasi"
        >
          {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-5">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-cream/80 hover:bg-cream/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-full bg-caramel px-5 py-3 text-center text-sm font-semibold text-ink"
              >
                Pesan via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
