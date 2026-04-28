import { motion } from "framer-motion";

const timeline = [
  { year: "2016", title: "Founded in Berlin", desc: "Two engineers, one garage, zero compromises." },
  { year: "2018", title: "First commercial line", desc: "FORGE barbells ship to 14 countries." },
  { year: "2021", title: "VELOCITY series launches", desc: "Brushless cardio redefines the category." },
  { year: "2024", title: "AI Trainer beta", desc: "Programming meets the algorithm." },
  { year: "2026", title: "250K athletes", desc: "Equipped across 120 countries." },
];

const About = () => (
  <div className="container py-12 md:py-20">
    <div className="max-w-3xl">
      <span className="text-xs uppercase tracking-[0.2em] text-primary">Our story</span>
      <h1 className="font-display font-extrabold text-5xl md:text-7xl mt-2 leading-[0.95]">
        We build for the<br /><span className="text-gradient">relentless one percent.</span>
      </h1>
      <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
        PULSE was born in a Berlin garage in 2016. Two engineers — one ex-aerospace, one ex-Olympic coach — refused to accept that home gym equipment had to feel cheap. We built one barbell. Then one dumbbell. Then a movement.
      </p>
      <p className="mt-6 text-muted-foreground leading-relaxed">
        Every product we ship is overbuilt by 30%, tested for ten years of daily abuse, and engineered to look as serious as it performs. Our mission is simple: equip the people who never quit.
      </p>
    </div>

    <div className="mt-24">
      <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-12">A decade of building.</h2>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-12">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <div className="font-display font-extrabold text-3xl text-gradient">{t.year}</div>
                <h3 className="font-display font-bold text-xl mt-2">{t.title}</h3>
                <p className="text-muted-foreground mt-2">{t.desc}</p>
              </div>
              <div className="hidden md:block" />
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;