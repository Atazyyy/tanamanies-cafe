import Reveal from "./Reveal";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    alt: "Latte art dari atas",
    caption: "Latte art, cangkir pertama hari itu",
  },
  {
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=80",
    alt: "Kopi di atas meja kayu",
    caption: "Sudut favorit pelanggan",
  },
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80",
    alt: "Croissant dan pastry",
    caption: "Pastry keluar oven jam 7",
  },
  {
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
    alt: "Biji kopi dan seduhan",
    caption: "Roasting day, setiap Selasa",
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
    alt: "Interior kedai yang hangat",
    caption: "Sore di ruang dalam",
  },
  {
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
    alt: "Secangkir kopi hitam",
    caption: "Americano, tetap yang paling laris",
  },
];

export default function Gallery() {
  return (
    <section id="galeri" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-caramel">
            Galeri
          </p>
          <h2 className="mt-4 max-w-lg font-display text-4xl font-medium leading-tight md:text-5xl">
            Sehari di <em className="text-caramel">Tanamanies</em>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.src} delay={i * 0.05}>
              <figure className="group relative overflow-hidden rounded-xl">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i % 4 === 0 ? "aspect-[4/5]" : "aspect-square"
                  }`}
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm text-cream">{p.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
