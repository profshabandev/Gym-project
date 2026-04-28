import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import ProductCard from "@/components/site/ProductCard";
import { products } from "@/data/products";

const cats = ["All", "Strength", "Cardio", "Accessories"] as const;

const Shop = () => {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [price, setPrice] = useState(3000);
  const [minRating, setMinRating] = useState(0);

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (cat === "All" || p.category === cat) &&
          p.price <= price &&
          p.rating >= minRating &&
          (q === "" || p.name.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, cat, price, minRating],
  );

  return (
    <div className="container py-12 md:py-20">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-primary">Equipment</span>
        <h1 className="font-display font-extrabold text-5xl md:text-6xl mt-2">Shop everything.</h1>
        <p className="text-muted-foreground mt-3 max-w-xl">Pro-grade tools. Lifetime built. Filter to find your gear.</p>
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-10">
        <aside className="space-y-8 lg:sticky lg:top-24 self-start">
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Search</label>
            <div className="mt-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="Search equipment" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Category</label>
            <div className="mt-3 flex flex-wrap gap-2">
              {cats.map((c) => (
                <Button key={c} variant={cat === c ? "hero" : "outline"} size="sm" onClick={() => setCat(c)}>
                  {c}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Max price</label>
              <span className="text-sm font-semibold">${price}</span>
            </div>
            <Slider className="mt-4" min={50} max={3000} step={50} value={[price]} onValueChange={(v) => setPrice(v[0])} />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Min rating</label>
              <span className="text-sm font-semibold">{minRating.toFixed(1)}★</span>
            </div>
            <Slider className="mt-4" min={0} max={5} step={0.1} value={[minRating]} onValueChange={(v) => setMinRating(v[0])} />
          </div>
        </aside>

        <section>
          <div className="text-sm text-muted-foreground mb-6">{filtered.length} products</div>
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-border p-16 text-center text-muted-foreground">No products match your filters.</div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Shop;