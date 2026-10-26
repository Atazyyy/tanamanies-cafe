import { motion } from "framer-motion";
import { MapPin, Instagram, Clock } from "lucide-react";
import { WA_LINK } from "./Navbar";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-40 pt-32 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-caramel"
        >
          Kedai kopi — Bandung, sejak 2019
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] font-medium md:text-7xl"
        >
          Seduh perlahan, <em className="text-caramel">sajikan</em> dengan
          hati.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg"
        >
          Biji pilihan dari petani Nusantara, dipanggang sendiri setiap
          minggu di dapur kami. Datang untuk kopi, tinggal untuk cerita.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <a
            href="#menu"
            className="rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            Lihat Menu
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            Chat WhatsApp
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-cream/10 bg-ink/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-cream/10 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-8">
          <div className="flex items-center gap-3 py-4 sm:py-5 sm:pr-6">
            <Clock className="h-4 w-4 shrink-0 text-caramel" />
            <p className="text-sm text-cream/80">Buka setiap hari · 08.00–22.00</p>
          </div>
          <div className="flex items-center gap-3 py-4 sm:py-5 sm:px-6">
            <MapPin className="h-4 w-4 shrink-0 text-caramel" />
            <p className="text-sm text-cream/80">Jl. Progo No. 14, Bandung</p>
          </div>
          <div className="flex items-center gap-3 py-4 sm:py-5 sm:pl-6">
            <Instagram className="h-4 w-4 shrink-0 text-caramel" />
            <p className="text-sm text-cream/80">@kopikilau</p>
          </div>
        </div>
      </div>
    </section>
  );
}
