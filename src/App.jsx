import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import {
  Plane,
  Compass,
  MapPin,
  Calendar,
  Search,
  Sun,
  Waves,
  Mountain,
  Star,
  ArrowRight,
  MessageCircle,
  User,
  Mail,
  Phone,
  Quote,
  Facebook,
  Instagram,
} from "lucide-react";

// ---------- Image helper (fallback) ----------
function FallbackImage({ src, alt, className }) {
  const [err, setErr] = React.useState(false);
  const fallback = `https://picsum.photos/seed/${encodeURIComponent(
    alt || "travel"
  )}/1200/800`;
  return (
    <img
      src={err ? fallback : src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setErr(true)}
    />
  );
}

// ---------- Dummy EU destinations ----------
const destinations = [
  {
    name: "Paris, France",
    blurb: "Cafés, boulevards, and moonlit Seine walks.",
    img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop",
    tag: "City",
  },
  {
    name: "Santorini, Greece",
    blurb: "Blue domes over sapphire seas.",
    img: "https://images.unsplash.com/photo-1506968430777-bf7784a87f22?q=80&w=1600&auto=format&fit=crop",
    tag: "Island",
  },
  {
    name: "Amalfi Coast, Italy",
    blurb: "Cliffside towns and lemon-scented lanes.",
    img: "https://images.unsplash.com/photo-1506499422608-817f3ae0bc23?q=80&w=1600&auto=format&fit=crop",
    tag: "Coast",
  },
  {
    name: "Barcelona, Spain",
    blurb: "Gaudí curves, tapas bars, beach sunsets.",
    img: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1600&auto=format&fit=crop",
    tag: "City",
  },
  {
    name: "Prague, Czechia",
    blurb: "Bridges, spires, and storybook alleys.",
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop",
    tag: "Historic",
  },
  {
    name: "Vienna, Austria",
    blurb: "Imperial palaces and coffeehouse culture.",
    img: "https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1600&auto=format&fit=crop",
    tag: "Culture",
  },
  {
    name: "Amsterdam, Netherlands",
    blurb: "Gabled houses, bikes, and canal light.",
    img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1600&auto=format&fit=crop",
    tag: "City",
  },
  {
    name: "Lisbon, Portugal",
    blurb: "Trams, miradouros, and pastel de nata.",
    img: "https://images.unsplash.com/photo-1527708676371-14f9e480ca16?q=80&w=1600&auto=format&fit=crop",
    tag: "City",
  },
];

const testimonials = [
  {
    name: "Elena M.",
    role: "Solo Traveler",
    quote:
      "Booked Barcelona in a day—routes, stays, and cafés sorted.",
  },
  {
    name: "Jonas K.",
    role: "Photographer",
    quote:
      "Amalfi + Prague were perfect for golden hour. Great picks.",
  },
  {
    name: "Priya R.",
    role: "Founder",
    quote:
      "Team trip to Lisbon planned fast. Shared notes were clutch.",
  },
];

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen w-full text-slate-900 overflow-x-hidden">
      {/* ====== Animated background (static parallax look) ====== */}
      <div className="fixed inset-0 -z-50">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(59,130,246,0.35),transparent),radial-gradient(900px_500px_at_20%_10%,rgba(236,72,153,0.35),transparent)] bg-gradient-to-b from-sky-50 via-white to-indigo-50"
          animate={{ opacity: [0.96, 1, 0.96] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="pointer-events-none absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-28 h-[42rem] w-[42rem] rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute inset-0 opacity-50 [background:radial-gradient(2px_2px_at_20%_30%,rgba(0,0,0,0.08),transparent)_0_0/120px_120px,radial-gradient(1.5px_1.5px_at_70%_60%,rgba(0,0,0,0.06),transparent)_0_0/100px_100px]" />
      </div>

      {/* ====== NAVBAR ====== */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <Plane className="h-4 w-4" />
              </div>
              <span className="text-lg font-semibold tracking-tight">Wanderly</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#destinations" className="hover:text-slate-900 text-slate-600">Destinations</a>
              <a href="#schengen-tracker" className="hover:text-slate-900 text-slate-600">Tracker</a>
              <a href="#how-it-works" className="hover:text-slate-900 text-slate-600">How it works</a>
              <a href="#testimonials" className="hover:text-slate-900 text-slate-600">Testimonials</a>
              <a href="#faq" className="hover:text-slate-900 text-slate-600">FAQ</a>
              <a href="#contact" className="hover:text-slate-900 text-slate-600">Contact</a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-xl border border-slate-200"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              {open ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden border-t border-slate-200">
            <div className="space-y-1 px-4 py-3">
              {[
                { href: "#destinations", label: "Destinations" },
                { href: "#schengen-tracker", label: "Tracker" },
                { href: "#how-it-works", label: "How it works" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="block rounded-xl px-3 py-2 text-slate-700 hover:bg-slate-100">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ====== HERO (no form, WhatsApp CTA) ====== */}
      <section className="relative">
        {/* Floating icons */}
        <motion.div
          className="pointer-events-none absolute left-6 top-10 hidden md:block"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Compass className="h-9 w-9 text-slate-700/50" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute right-10 top-28 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sun className="h-10 w-10 text-amber-500/60" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute right-1/3 -bottom-6 hidden lg:block"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Waves className="h-10 w-10 text-sky-600/50" />
        </motion.div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
                <Star className="h-3.5 w-3.5" /> Europe-only escapes
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
                Explore <span className="mx-2 bg-gradient-to-r from-fuchsia-600 to-sky-600 bg-clip-text text-transparent">Europe</span> your way
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                From Paris rooftops to Santorini sunsets—plan trips with routes, stays, and experiences that fit your vibe.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-5 py-3 text-white shadow hover:shadow-md hover:bg-green-700"
                >
                  <MessageCircle className="h-5 w-5" /> Join our WhatsApp group for latest updates
                </a>
              </div>
            </motion.div>

            {/* Right collage images */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-sky-200/70 to-indigo-100/70 blur-2xl rounded-3xl" />
                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-lg">
                  <div className="grid grid-cols-2 gap-3">
                    <motion.div whileHover={{ rotate: -1, scale: 1.02 }} className="col-span-2">
                      <div className="aspect-[16/9] overflow-hidden rounded-2xl">
                        <FallbackImage
                          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop"
                          alt="Rome streets"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.03 }}>
                      <div className="aspect-square overflow-hidden rounded-2xl">
                        <FallbackImage
                          src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1200&auto=format&fit=crop"
                          alt="Barcelona"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.03 }}>
                      <div className="aspect-square overflow-hidden rounded-2xl">
                        <FallbackImage
                          src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop"
                          alt="Prague"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== DESTINATIONS ====== */}
      <section id="destinations" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Featured destinations</h2>
          <p className="mt-3 text-slate-600">Curated places that pair great weather, value, and vibe.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <FallbackImage
                  src={d.img}
                  alt={d.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs shadow">
                <Mountain className="h-3.5 w-3.5" /> {d.tag}
              </div>
              <div className="absolute inset-x-0 bottom-0 space-y-1 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 text-white">
                <h3 className="text-lg font-semibold drop-shadow">{d.name}</h3>
                <p className="text-sm opacity-90 drop-shadow">{d.blurb}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ====== SCHENGEN TRACKER (no form/list) ====== */}
      <section id="schengen-tracker" className="border-y border-slate-200 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-3xl font-bold tracking-tight">
                Track Schengen Visa appointments in real-time
              </h2>
              <p className="mt-2 text-lg font-semibold text-slate-800">
                Never Miss a Slot Again!!
              </p>
              <p className="mt-3 text-slate-600">
                Get notified the moment an appointment opens. No inputs here—
                just connect and start tracking.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow hover:shadow-md"
                >
                  Open Tracker <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-900 hover:bg-slate-50"
                >
                  How it works
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute -inset-3 -z-10 bg-gradient-to-tr from-fuchsia-200/70 to-sky-200/70 blur-2xl rounded-3xl" />
                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-lg">
                  <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-slate-50 to-white grid place-items-center">
                    <div className="text-center px-6">
                      <Plane className="mx-auto h-10 w-10 text-slate-700" />
                      <p className="mt-2 text-lg font-semibold">Live appointment radar</p>
                      <p className="text-slate-600">
                        Status:{" "}
                        <span className="text-emerald-700 font-medium">Monitoring</span> • Refresh: 12s
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-center">How it works</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { step: "1", title: "Pick your cities", text: "Choose embassy/VFS locations and visa type you care about." },
            { step: "2", title: "We watch 24/7", text: "Our backend polls availability and detects fresh slots instantly." },
            { step: "3", title: "Get alerted", text: "Receive real-time WhatsApp/Email alerts with a direct booking link." },
          ].map((s) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white">
                {s.step}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section id="testimonials" className="bg-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-center text-3xl font-bold tracking-tight">What travelers say</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <Quote className="h-5 w-5 text-slate-400" />
                <blockquote className="mt-2 text-slate-700">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-slate-500">
                  <span className="font-medium text-slate-800">{t.name}</span> • {t.role}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FAQ (cool) ====== */}
      <section id="faq" className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* soft glow */}
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none mx-auto h-40 max-w-4xl rounded-full bg-gradient-to-r from-fuchsia-300/30 via-sky-300/30 to-indigo-300/30 blur-3xl" />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Got questions? We’ve got answers.</h2>
          <p className="mt-2 text-slate-600">Quick answers to the most common stuff. Tap to expand.</p>
        </div>

        {/* Search (visual only for now) */}
        <div className="mx-auto mt-8 max-w-2xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search FAQs (e.g. visa slots, cancellation)"
              className="w-full rounded-2xl border border-slate-200 bg-white/70 pl-10 pr-4 py-2 outline-none shadow-sm focus:border-slate-300"
              onChange={() => {}}
            />
          </div>
        </div>

        <div className="mx-auto mt-10 grid gap-4 md:max-w-4xl">
          {[
            {
              q: "Can I cancel my booking?",
              a: "Most fares support 24-hour free cancellation. Policy varies by airline and fare class—check the fare rules at checkout.",
            },
            {
              q: "Do you offer travel insurance?",
              a: "Yes—add it at checkout to cover flights, hotels, and activities for common disruptions.",
            },
            {
              q: "How do I join the WhatsApp group?",
              a: "Use the green ‘Join our WhatsApp group’ button in the hero. We post fare drops and visa updates there.",
            },
            {
              q: "Do you track Schengen visa slots in real time?",
              a: "Yes—our tracker monitors openings across embassies/VFS centers and alerts you instantly when a slot appears.",
            },
            {
              q: "Can you plan a custom EU itinerary?",
              a: "Absolutely. Share dates, vibe, and budget and we’ll craft a day-by-day plan with stays and experiences.",
            },
            {
              q: "Is my data safe?",
              a: "We store only what’s needed to deliver alerts and support. You can request deletion or unsubscribe anytime.",
            },
          ].map((item, idx) => (
            <motion.details
              key={item.q}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="group relative rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-base font-semibold text-slate-900">{item.q}</span>
                <svg
                  className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <div className="mt-2 text-slate-600">{item.a}</div>
              <div
                className="pointer-events-none absolute inset-0 -z-10 hidden rounded-2xl opacity-0 blur-xl transition group-open:block group-open:opacity-100 md:block"
                style={{
                  background:
                    "radial-gradient(600px 200px at 50% -10%, rgba(99,102,241,0.10), transparent)",
                }}
              />
            </motion.details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white/70 px-4 py-2 text-sm text-slate-900 shadow-sm hover:bg-white"
          >
            Still have questions? Contact us
          </a>
        </div>
      </section>

      {/* ====== CONTACT (cool + required) ====== */}
      <section id="contact" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Contact us</h2>
          <p className="mt-3 text-slate-600">We’ll get back within one business day.</p>
        </div>
        <form className="mt-8" action="#" method="post">
          <div className="relative rounded-3xl border border-slate-200 bg-white/60 backdrop-blur p-6 shadow-sm">
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-tr from-fuchsia-200/40 to-sky-200/40 blur-2xl" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 flex items-center gap-2 text-sm font-medium">
                  <User className="h-4 w-4" /> Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="mb-1 flex items-center gap-2 text-sm font-medium">
                  <Mail className="h-4 w-4" /> Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 flex items-center gap-2 text-sm font-medium">
                  <Phone className="h-4 w-4" /> Mobile
                </label>
                <input
                  name="mobile"
                  required
                  pattern="[0-9+()\\-\\s]{7,20}"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none"
                  placeholder="e.g. +44 7700 900123"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 flex items-center gap-2 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none"
                  placeholder="Tell us about your trip…"
                />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow hover:shadow-md"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </section>

    
     {/* ====== FOOTER (fixed alignment) ====== */}
<footer className="border-t border-slate-200/60 bg-transparent">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* Brand */}
      <div className="flex items-center gap-2">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white">
          <Plane className="h-4 w-4" />
        </div>
        <span className="text-lg font-semibold">Wanderly</span>
      </div>

      {/* Social icons */}
      <div className="flex items-center gap-4">
        <a
          href="#"
          aria-label="Facebook"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-white/20 transition"
        >
          <Facebook className="h-5 w-5 text-slate-800" />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:bg-white/20 transition"
        >
          <Instagram className="h-5 w-5 text-slate-800" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-slate-500 text-center md:text-right">
        © {new Date().getFullYear()} Wanderly. Built with React, Tailwind & Framer Motion.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}
