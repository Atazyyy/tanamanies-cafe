import Reveal from "./Reveal";

const STATS = [
  { value: "7", label: "Single origin Nusantara" },
  { value: "150 kg", label: "Biji dipanggang tiap bulan" },
  { value: "2019", label: "Tahun berdiri" },
];

export default function About() {
  return (
    <section id="tentang" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2 md:px-8">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
              alt="Suasana kedai Kopi Kilau"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-52 overflow-hidden rounded-2xl border-4 border-ink shadow-2xl sm:block md:-right-8">
            <img
              src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=600&q=80"
              alt="Seduhan pour over"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-caramel">
              Tentang Kami
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight font-medium md:text-5xl">
              Dari biji pilihan petani lokal,{" "}
              <em className="text-caramel">ke cangkir</em> Anda
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-cream/70">
              Tanamanies Cafe lahir dari sebuah keyakinan sederhana: kopi
              terbaik lahir dari proses yang tidak terburu-buru. Di ruang
              kami yang dipenuhi tanaman rindang, kami bekerja sama langsung
              dengan petani di Gayo, Kintamani, dan Toraja, lalu memanggang
              setiap biji sendiri di dapur kami setiap minggu.
            </p>
            <p className="mt-4 leading-relaxed text-cream/70">
              Setiap cangkir yang kami sajikan adalah cara kami menghargai
              kerja petani — dan cara kami merawat cerita rasa Nusantara,
              satu seduhan demi satu seduhan.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-cream/10 pt-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl text-caramel md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-cream/60 md:text-sm">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
