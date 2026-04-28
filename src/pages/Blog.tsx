import { motion } from "framer-motion";

const posts = [
  { title: "The science of progressive overload", excerpt: "Why 2.5lb jumps beat 10lb leaps every time.", read: "6 min", tag: "Strength" },
  { title: "Building a home gym in 50 sq ft", excerpt: "Our Berlin engineer's exact apartment setup.", read: "8 min", tag: "Setup" },
  { title: "Why we overbuild by 30%", excerpt: "Inside the PULSE quality lab.", read: "5 min", tag: "Process" },
  { title: "Cardio without the noise", excerpt: "Brushless motors and quieter neighbors.", read: "4 min", tag: "Cardio" },
  { title: "AI programming, explained", excerpt: "How our trainer builds a 12-week block.", read: "7 min", tag: "AI" },
  { title: "Recovery is training", excerpt: "Mobility, sleep, and metrics that matter.", read: "6 min", tag: "Recovery" },
];

const Blog = () => (
  <div className="container py-12 md:py-20">
    <div className="mb-14">
      <span className="text-xs uppercase tracking-[0.2em] text-primary">Journal</span>
      <h1 className="font-display font-extrabold text-5xl md:text-6xl mt-2">Field notes from the lab.</h1>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((p, i) => (
        <motion.article key={p.title}
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
          className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/60 transition-all">
          <div className="aspect-[16/10] bg-gradient-dark relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-50" />
            <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-primary border border-primary/40 bg-background/60 px-2 py-1 rounded">{p.tag}</div>
          </div>
          <div className="p-6">
            <div className="text-xs text-muted-foreground">{p.read} read</div>
            <h3 className="font-display font-bold text-xl mt-2 group-hover:text-primary transition-colors">{p.title}</h3>
            <p className="text-muted-foreground text-sm mt-2">{p.excerpt}</p>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
);

export default Blog;