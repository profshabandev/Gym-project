import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const Cart = () => {
  const { items, remove, setQty, subtotal, clear } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-32 text-center">
        <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h1 className="font-display font-extrabold text-4xl">Your cart is empty.</h1>
        <p className="text-muted-foreground mt-2">Time to load it up.</p>
        <Link to="/shop"><Button variant="hero" size="lg" className="mt-8">Shop equipment</Button></Link>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-20">
      <h1 className="font-display font-extrabold text-5xl md:text-6xl mb-12">Cart</h1>
      <div className="grid lg:grid-cols-[1fr_400px] gap-12">
        <div className="space-y-4">
          {items.map((i) => (
            <div key={i.product.id} className="flex gap-4 rounded-2xl border border-border bg-card p-4">
              <img src={i.product.image} alt={i.product.name} className="h-28 w-28 rounded-lg object-cover" />
              <div className="flex-1">
                <div className="flex justify-between gap-4">
                  <div>
                    <Link to={`/product/${i.product.id}`} className="font-display font-bold hover:text-primary">{i.product.name}</Link>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{i.product.category}</div>
                  </div>
                  <button onClick={() => { remove(i.product.id); toast.success("Removed"); }} className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center border border-border rounded-md">
                    <button className="h-9 w-9 flex items-center justify-center hover:text-primary" onClick={() => setQty(i.product.id, i.qty - 1)}><Minus className="h-3 w-3" /></button>
                    <span className="w-8 text-center text-sm font-semibold">{i.qty}</span>
                    <button className="h-9 w-9 flex items-center justify-center hover:text-primary" onClick={() => setQty(i.product.id, i.qty + 1)}><Plus className="h-3 w-3" /></button>
                  </div>
                  <div className="font-display font-bold">${(i.product.price * i.qty).toLocaleString()}</div>
                </div>
              </div>
            </div>
          ))}
          <button onClick={clear} className="text-xs text-muted-foreground hover:text-destructive">Clear cart</button>
        </div>
        <aside className="rounded-2xl border border-border bg-card p-8 self-start lg:sticky lg:top-24">
          <h2 className="font-display font-bold text-xl mb-6">Order summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="font-semibold">${subtotal.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="font-semibold text-primary">Free</span></div>
            <div className="border-t border-border pt-3 flex justify-between text-lg"><span className="font-display font-bold">Total</span><span className="font-display font-extrabold">${subtotal.toLocaleString()}</span></div>
          </div>
          <Button variant="hero" size="lg" className="w-full mt-6" onClick={() => toast.success("Checkout ready — connect Lovable Cloud + Stripe to go live.")}>Checkout</Button>
          <p className="text-[11px] text-muted-foreground mt-3 text-center">Secure checkout. 30-day returns.</p>
        </aside>
      </div>
    </div>
  );
};

export default Cart;