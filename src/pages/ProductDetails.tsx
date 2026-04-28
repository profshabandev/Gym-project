import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Check, Truck, Shield, ArrowLeft, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProduct(id ?? "");
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [zoom, setZoom] = useState(false);

  if (!product) {
    return (
      <div className="container py-32 text-center">
        <h1 className="font-display text-3xl">Product not found</h1>
        <Link to="/shop"><Button className="mt-6" variant="hero">Back to shop</Button></Link>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-16">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to shop
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div
            className="relative aspect-square rounded-3xl overflow-hidden border border-border bg-card cursor-zoom-in"
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
          >
            <img
              src={product.image}
              alt={product.name}
              className={`h-full w-full object-cover transition-transform duration-500 ${zoom ? "scale-150" : "scale-100"}`}
            />
          </div>
          <div className="grid grid-cols-4 gap-3 mt-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="aspect-square rounded-lg border border-border bg-card overflow-hidden opacity-60 hover:opacity-100 cursor-pointer transition">
                <img src={product.image} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-xs uppercase tracking-[0.2em] text-primary">{product.category}</span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mt-2">{product.name}</h1>
          <p className="text-muted-foreground mt-2">{product.tagline}</p>
          <div className="flex items-center gap-2 mt-4 text-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"}`} />
              ))}
            </div>
            <span className="font-semibold">{product.rating}</span>
            <span className="text-muted-foreground">· {product.reviews.toLocaleString()} reviews</span>
          </div>

          <div className="mt-8">
            <div className="font-display font-extrabold text-5xl">${product.price}</div>
            <p className="text-xs text-muted-foreground mt-1">or 4 payments of ${(product.price / 4).toFixed(0)}</p>
          </div>

          <p className="mt-8 text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {product.specs.map((s) => (
              <div key={s.label} className="rounded-lg border border-border p-4">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                <div className="font-display font-bold mt-1">{s.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex items-center border border-border rounded-md">
              <button className="h-12 w-12 flex items-center justify-center hover:text-primary" onClick={() => setQty((q) => Math.max(1, q - 1))}><Minus className="h-4 w-4" /></button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button className="h-12 w-12 flex items-center justify-center hover:text-primary" onClick={() => setQty((q) => q + 1)}><Plus className="h-4 w-4" /></button>
            </div>
            <Button variant="hero" size="xl" className="flex-1" onClick={() => { add(product, qty); toast.success(`${product.name} added to cart`); }}>
              Add to cart · ${product.price * qty}
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-xs">
            <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Free shipping</div>
            <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Lifetime warranty</div>
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 30-day returns</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;