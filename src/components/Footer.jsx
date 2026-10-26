import { Coffee, Github, Instagram } from "lucide-react";
import { WA_LINK } from "./Navbar";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-[#0f0a06]">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <a href="#" className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-caramel" />
              <span className="font-display text-2xl italic">Tanamanies Cafe</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/50">
              Kedai kopi dipenuhi tanaman di Bandung. Biji Nusantara,
              dipanggang sendiri, diseduh dengan hati.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/40">
                Jelajahi
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-cream/60">
                <li><a href="#tentang" className="hover:text-cream">Tentang</a></li>
                <li><a href="#menu" className="hover:text-cream">Menu</a></li>
                <li><a href="#galeri" className="hover:text-cream">Galeri</a></li>
                <li><a href="#lokasi" className="hover:text-cream">Lokasi</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/40">
                Hubungi
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-cream/60">
                <li>
                  <a href={WA_LINK} target="_blank" rel="noreferrer" className="hover:text-cream">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-1.5 hover:text-cream">
                    <Instagram className="h-3.5 w-3.5" /> @tanamanies.cafe
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center">
          <p>© 2026 Tanamanies Cafe. Seluruh merek dan konten bersifat fiktif.</p>
          <p className="flex items-center gap-1.5">
            Concept demo — dibuat oleh{" "}
            <a
              href="https://github.com/Atazyyy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-cream/60 hover:text-cream"
            >
              <Github className="h-3.5 w-3.5" /> Agni Miftah Fauzi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
