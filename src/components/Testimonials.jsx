import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Kopi susunya juara, dan tempatnya bikin betah. Untuk kerja atau sekadar menghabiskan sore, ini kedai langganan saya.",
    name: "Rina Pratiwi",
    role: "Pelanggan sejak 2020",
  },
  {
    quote:
      "Bisa milih single origin sesuai selera dan baristanya sabar banget jelasin. V60 Gayo-nya wajib coba.",
    name: "Dimas Ardhana",
    role: "Coffee enthusiast",
  },
  {
    quote:
      "Saya sering rapat di sini. WiFi kencang, colokan banyak, dan pastry-nya habis terus tiap pagi.",
    name: "Sarah Amelia",
    role: "Freelance designer",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="scroll-mt-20 bg-coal py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-caramel">
            Testimoni
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
            Kata <em className="text-caramel">mereka</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-cream/10 bg-ink p-7">
                <Quote className="h-6 w-6 text-caramel" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-caramel text-caramel" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/75">
                  “{t.quote}”
                </p>
                <footer className="mt-6 border-t border-cream/10 pt-4">
                  <p className="font-display text-base italic">{t.name}</p>
                  <p className="mt-0.5 text-xs text-cream/50">{t.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
