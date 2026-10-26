import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const MENU = {
  Kopi: [
    { name: "Kopi Susu Tanamanies", desc: "Signature kami — espresso, susu segar, gula aren rumahan", price: "22K" },
    { name: "Es Kopi Aren", desc: "Klasik yang selalu benar, manisnya pas", price: "24K" },
    { name: "Americano", desc: "Double shot, air panas. Bersih dan tegas", price: "20K" },
    { name: "Cappuccino", desc: "Rasio klasik 1:1:1 dengan latte art", price: "24K" },
    { name: "V60 Single Origin", desc: "Rotasi mingguan: Gayo, Kintamani, atau Toraja", price: "28K" },
    { name: "Kopi Tubruk", desc: "Cara paling jujur menikmati kopi nusantara", price: "15K" },
  ],
  "Non-Kopi": [
    { name: "Matcha Latte", desc: "Matcha ceremonial grade, dikocok manual", price: "26K" },
    { name: "Cokelat Panas", desc: "Cokelat 70% dari Jembrana, lembut dan pekat", price: "22K" },
    { name: "Yuzu Soda", desc: "Segar asam manis, favorit siang hari", price: "24K" },
    { name: "Teh Tarik", desc: "Ditarik tinggi, foamy seperti harusnya", price: "20K" },
    { name: "Susu Kurma", desc: "Kurma tunak tanpa gula tambahan", price: "24K" },
    { name: "Jeruk Perasan", desc: "Jeruk dekopon, dingin dan jujur", price: "22K" },
  ],
  Pastry: [
    { name: "Butter Croissant", desc: "Lapisan renyah, dimulai dari jam 5 pagi", price: "20K" },
    { name: "Roti Bakar Srikaya", desc: "Roti sourdough panggang, srikaya homemade", price: "18K" },
    { name: "Banana Bread", desc: "Pisang raja, kacang kenari, sedikit kayu manis", price: "22K" },
    { name: "Cinnamon Roll", desc: "Hangat, lengket, dengan cream cheese glaze", price: "24K" },
    { name: "Pie Apel", desc: "Apel manalagi, kayu manis, kulit butter", price: "25K" },
    { name: "Cookies Choc Chip", desc: "Renyah di pinggir, lembut di tengah", price: "15K" },
  ],
};

const TABS = Object.keys(MENU);

export default function Menu() {
  const [active, setActive] = useState(TABS[0]);

  return (
    <section id="menu" className="scroll-mt-20 bg-cream py-24 text-ink md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ember">
            Menu
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
            Pilihan <em>seduhan</em> kami
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/60">
            Harga dalam ribuan rupiah. Ganti susu oat atau kurangi gula? Cukup
            bilang baristanya.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center gap-2 rounded-full border border-ink/10 bg-paper p-1.5">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`relative flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                  active === tab ? "text-cream" : "text-ink/60 hover:text-ink"
                }`}
              >
                {active === tab && (
                  <motion.span
                    layoutId="menu-tab"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{tab}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid gap-x-12 gap-y-7 md:grid-cols-2"
            >
              {MENU[active].map((item) => (
                <li key={item.name}>
                  <div className="flex items-baseline">
                    <h3 className="font-display text-lg font-medium">
                      {item.name}
                    </h3>
                    <span className="leader" aria-hidden="true" />
                    <span className="font-display text-lg text-ember">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-snug text-ink/55">
                    {item.desc}
                  </p>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
