import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Package } from "lucide-react";

const cats = [
  { name: "Strength", desc: "Barbells, dumbbells, racks. Built to outlast you.", icon: Dumbbell, count: 24 },
  { name: "Cardio", desc: "Treadmills, bikes, rowers. Studio energy at home.", icon: HeartPulse, count: 12 },
  { name: "Accessories", desc: "Bands, mats, recovery. The 1% that compounds.", icon: Package, count: 38 },
];

const Categories = () => (
  <div className="container py-12 md:py-20">
    <div className="mb-14">
      <span className="text-xs uppercase tracking-[0.2em] text-primary">Categories</span>
      <h1 className="font-display font-extrabold text-5xl md:text-6xl mt-2">Find your discipline.</h1>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {cats.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <Link
            to="/shop"
            className="group relative block aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-gradient-dark p-8 hover:border-primary/60 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full flex flex-col justify-between">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <c.icon className="h-8 w-8" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.count} products</div>
                <h3 className="font-display font-extrabold text-4xl mt-2 group-hover:text-primary transition-colors">{c.name}</h3>
                <p className="text-muted-foreground mt-3">{c.desc}</p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Categories;