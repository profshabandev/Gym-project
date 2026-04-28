import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Product } from "@/data/products";

const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
  >
    <Link
      to={`/product/${product.id}`}
      className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/60 transition-all duration-500 hover:shadow-elegant"
    >
      <div className="relative aspect-square overflow-hidden bg-gradient-dark">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest font-bold text-primary bg-primary/10 border border-primary/30 px-2 py-1 rounded">
          {product.category}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
          <Star className="h-3 w-3 fill-primary text-primary" />
          <span className="text-foreground font-medium">{product.rating}</span>
          <span>· {product.reviews.toLocaleString()} reviews</span>
        </div>
        <h3 className="font-display font-bold text-lg leading-tight group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{product.tagline}</p>
        <div className="mt-4 flex items-baseline justify-between">
          <span className="font-display font-bold text-xl">${product.price}</span>
          <span className="text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            View →
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default ProductCard;