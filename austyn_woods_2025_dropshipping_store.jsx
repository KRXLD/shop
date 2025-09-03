import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Check, Truck, ShieldCheck, Zap, Leaf, Sparkles, Mail, Package, Clock, Star, TrendingUp, CreditCard, DollarSign } from "lucide-react";

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Button = ({ children, onClick, href, className = "", variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white hover:from-fuchsia-700 hover:to-indigo-700",
    secondary: "bg-white text-gray-900 border border-gray-200 hover:border-gray-300",
    ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
  };
  const Comp = href ? "a" : "button";
  return (
    <Comp
      onClick={onClick}
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-3 py-1 text-xs font-medium text-white">
    <Sparkles className="h-3 w-3" />
    {children}
  </span>
);

export default function AustynWoodsStore() {
  const product = useMemo(() => ({
    name: "BreezeFold™ 2-in-1 Fan + Power Bank",
    tagline: "Pocket‑sized cooling with a 10,000 mAh boost — perfect for commutes, gyms, festivals, and travel.",
    price: 39,
    compareAt: 69,
    rating: 4.8,
    reviews: 1243,
    colors: [
      { key: "onyx", label: "Onyx Black" },
      { key: "neon", label: "Neon Violet" },
      { key: "mint", label: "Soft Mint" },
    ],
    bullets: [
      { icon: Zap, text: "3-speed quiet airflow + fold-flat design" },
      { icon: Package, text: "10,000 mAh USB‑C power bank built in" },
      { icon: Leaf, text: "Energy efficient, recyclable packaging" },
      { icon: Truck, text: "Tracked shipping worldwide" },
    ],
    highlights: [
      "Magnetic flip stand doubles as a phone kickstand",
      "USB‑C in/out, 18W fast charge",
      "Detachable lanyard & safety grill",
      "Up to 12 hours runtime on low",
    ],
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop",
    ],
  }), []);

  const pipeline = [
    {
      title: "SnapCharge Qi2 Travel Dock",
      desc: "Foldable 3‑in‑1 charger (phone + watch + earbuds) with stand mode. Ready for late 2025.",
      pill: "2025 Q4",
    },
    {
      title: "HydraGlow UV+ Bottle v2",
      desc: "Self‑cleaning insulated bottle with UV‑C cap and hydration reminders.",
      pill: "Early 2026",
    },
    {
      title: "PawTrack Mini GPS",
      desc: "Feather‑light pet tracker with global eSIM and 30‑day battery.",
      pill: "Mid 2026",
    },
  ];

  const [selectedColor, setSelectedColor] = useState(product.colors[0].key);
  const [qty, setQty] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart((prev) => [
      ...prev,
      { id: `${product.name}-${selectedColor}-${Date.now()}`, name: product.name, color: selectedColor, qty, price: product.price },
    ]);
    setCartOpen(true);
  };

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/70 bg-black/60 border-b border-gray-800">
        <Container className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white grid place-items-center font-bold">AW</div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">Austyn Woods</p>
              <h1 className="text-base font-semibold leading-tight text-white">Austyn Woods Studio</h1>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#product" className="hover:text-white">Product</a>
            <a href="#why" className="hover:text-white">Why Us</a>
            <a href="#pipeline" className="hover:text-white">2026 Pipeline</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <Button onClick={() => setCartOpen(true)} className="gap-2">
            <ShoppingCart className="h-4 w-4" /> Cart ({cart.length})
          </Button>
        </Container>
      </header>

      <section className="relative overflow-hidden">
        <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge>New for 2025</Badge>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Practical tech that actually makes life easier.
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Designed for commuters, creators, and travelers. Built for real life, priced fairly, and shipped fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#product" className="gap-2">
                <Zap className="h-4 w-4" /> Shop BreezeFold™
              </Button>
              <Button href="#pipeline" variant="secondary">See what's next</Button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> 1‑Year Warranty</div>
              <div className="flex items-center gap-2"><Truck className="h-4 w-4" /> 3‑7 Day Delivery (most regions)</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> 30‑Day Returns</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-800">
              <img src={product.images[0]} alt="BreezeFold fan power bank" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </Container>
      </section>

      <section id="product" className="border-t border-gray-800 bg-gray-900">
        <Container className="grid gap-10 py-16 lg:grid-cols-2 lg:gap-16">
          <div className="grid gap-4">
            <div className="aspect-square overflow-hidden rounded-3xl bg-gray-800">
              <img src={product.images[1]} alt="BreezeFold closeup" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gray-800">
              <img src={product.images[2]} alt="BreezeFold lifestyle" className="h-full w-full object-cover" />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold tracking-tight text-white">{product.name}</h3>
            <p className="mt-2 text-gray-300">{product.tagline}</p>

            <div className="mt-6 flex items-end gap-3">
              <p className="text-3xl font-extrabold text-white">${product.price}</p>
              <p className="text-sm text-gray-400 line-through">${product.compareAt}</p>
              <span className="rounded-full bg-fuchsia-600/20 px-3 py-1 text-xs font-semibold text-fuchsia-300">Fair Price</span>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-gray-300">Color</p>
              <div className="mt-2 flex gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setSelectedColor(c.key)}
                    className={`rounded-full border px-3 py-1 text-sm ${selectedColor === c.key ? "border-fuchsia-600 bg-fuchsia-600 text-white" : "border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-500"}`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <label className="text-sm text-gray-300" htmlFor="qty">Qty</label>
              <input
                id="qty"
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
                className="w-20 rounded-xl border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
              />
              <Button onClick={addToCart} className="gap-2">
                <ShoppingCart className="h-4 w-4" /> Add to cart
              </Button>
            </div>

            <ul className="mt-8 grid gap-3">
              {product.bullets.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-gray-300">
                  <Icon className="h-4 w-4" /> {text}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-gray-800 p-4 ring-1 ring-gray-700">
              <p className="text-sm font-semibold text-white">Highlights</p>
              <ul className="mt-2 grid list-disc gap-1 pl-5 text-sm text-gray-400">
                {product.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section id="why" className="border-t border-gray-800">
        <Container className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h4 className="text-2xl font-bold text-white">A brand built on fair value</h4>
            <p className="mt-3 text-gray-300">
              We price so you win and we stay in business. Transparent margins, reliable suppliers, and a simple promise: if it isn’t excellent, we won’t ship it.
            </p>
          </div>
        </Container>
      </section>

      <section id="pipeline" className="border-t border-gray-800 bg-gray-900">
        <Container className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Roadmap</Badge>
            <h4 className="mt-3 text-2xl font-bold text-white">What we're bringing into 2026</h4>
            <p className="mt-3 text-gray-300">Vote on what ships first when you join the newsletter below.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pipeline.map((item) => (
              <div key={item.title} className="rounded-3xl bg-gray-800 p-6 ring-1 ring-gray-700">
                <div className="flex items-center justify-between">
                  <h5 className="text-base font-semibold text-white">{item.title}</h5>
                  <span className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-3 py-1 text-xs font-medium text-white">{item.pill}</span>
                </div>
                <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-800">
        <Container className="py-12">
          <div className="grid items-center gap-6 rounded-3xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 p-8 text-white md:grid-cols-2">
            <div>
              <h5 className="text-xl font-semibold">Loved by early testers</h5>
              <p className="mt-2 text-sm text-fuchsia-100">“Finally, a fan that doesn’t sound like a drone and actually charges my phone.”</p>
            </div>
            <div className="flex items-center justify-end gap-2 text-xs">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2">4.8 / 1,200+ reviews</span>
            </div>
          </div>
        </Container>
      </section>

      <section id="faq" className="border-t border-gray-800 bg-gray-900">
        <Container className="py-16">
          <div className="mx-auto max-w-3xl">
            <h4 className="text-2xl font-bold text-white">FAQ & Policies</h4>
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-800">
        <Container className="py-16">
          <div className="grid gap-6 rounded-3xl bg-gray-800 p-8 ring-1 ring-gray-700 md:grid-cols-2">
            <div>
              <h5 className="text-xl font-bold text-white">Join the build crew</h5>
              <p className="mt-2 text-sm text-gray-300">Get early access, vote on roadmap items, and snag limited drops.</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We'll be in touch.");
              }}
              className="flex items-center gap-3"
            >
              <input required type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-600" />
              <
