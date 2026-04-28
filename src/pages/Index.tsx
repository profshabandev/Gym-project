import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Truck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/site/ProductCard";
import { products } from "@/data/products";
import hero from "@/assets/hero.jpg";

const stats = [
  { v: "250K+", l: "Athletes equipped" },
  { v: "120+", l: "Countries shipped" },
  { v: "4.9★", l: "Average rating" },
  { v: "10yr", l: "Engineered warranty" },
];

const testimonials = [
  { name: "Marcus L.", role: "Powerlifter, IPF", quote: "The FORGE bar feels alive. Best whip I've pulled in 15 years." },
  { name: "Aiko R.", role: "Olympic athlete", quote: "PULSE built my home setup. Everything just works — no compromises." },
  { name: "Diego F.", role: "Strength coach", quote: "We outfitted three facilities with PULSE. Zero failures, year three." },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />
        <div className="container relative pt-12 pb-20 md:pt-20 md:pb-32 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full mb-6">
              <Sparkles className="h-3 w-3" /> New · Velocity Pro Series
            </span>
            <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              Train like<br />the <span className="text-gradient">one percent.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Pro-grade gym equipment engineered in Berlin. Designed for athletes who refuse compromise — and an AI trainer that programs every set.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop"><Button variant="hero" size="xl">Shop equipment <ArrowRight className="h-5 w-5" /></Button></Link>
              <Link to="/trainer"><Button variant="neon" size="xl">Try AI Trainer</Button></Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Lifetime warranty</div>
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Free worldwide ship</div>
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> 30-day returns</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-elegant">
              <img src={hero} alt="Athlete deadlifting under neon" width={1920} height={1280} className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-display font-extrabold text-3xl md:text-5xl text-gradient">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="container py-20 md:py-32">
        <div className="flex items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary">Featured</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">Built for the relentless.</h2>
          </div>
          <Link to="/shop" className="hidden md:inline-flex text-sm text-muted-foreground hover:text-primary">View all →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-20 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Trusted</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">Athletes who push limits.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <p className="text-lg leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-display font-bold">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-dark p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
          <div className="relative">
            <h3 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight">
              Your AI trainer is <span className="text-gradient">ready.</span>
            </h3>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Get a custom program in seconds. Powered by your goals, your equipment, your time.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link to="/trainer"><Button variant="hero" size="xl">Open AI Trainer</Button></Link>
              <Link to="/shop"><Button variant="outline" size="xl">Browse gear</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
