import { MapPin, Clock, Instagram, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { WA_LINK } from "./Navbar";

const HOURS = [
  { day: "Senin – Kamis", time: "08.00 – 22.00" },
  { day: "Jumat", time: "08.00 – 23.00" },
  { day: "Sabtu – Minggu", time: "07.00 – 23.00" },
];

export default function Visit() {
  return (
    <section id="lokasi" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-5 md:grid-cols-2 md:px-8">
        <Reveal>
          <div className="flex h-full flex-col justify-between rounded-2xl border border-cream/10 bg-coal p-8 md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-caramel">
                Mampir
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
                Kami tunggu di <em className="text-caramel">Progo</em>
              </h2>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-caramel" />
                  <p className="text-sm leading-relaxed text-cream/75">
                    Jl. Progo No. 14, Cibangkong,
                    <br />
                    Kota Bandung, Jawa Barat 40271
                  </p>
                </div>
                <div className="flex gap-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-caramel" />
                  <div className="w-full max-w-xs text-sm">
                    {HOURS.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between border-b border-cream/10 py-2 text-cream/75 last:border-0"
                      >
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-caramel" />
                  <p className="text-sm text-cream/75">@kopikilau — tag kami di fotomu!</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-caramel px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                Reservasi Meja
              </a>
              <a
                href="https://www.google.com/maps?q=Jl.+Progo,+Bandung"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold transition-colors hover:border-cream hover:bg-cream/10"
              >
                <MapPin className="h-4 w-4" />
                Buka di Maps
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-h-[320px]">
          <iframe
            title="Lokasi Kopi Kilau di Bandung"
            src="https://www.google.com/maps?q=Jl.%20Progo,%20Bandung&output=embed"
            className="h-full min-h-[320px] w-full rounded-2xl border-0 grayscale-[35%]"
            loading="lazy"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
