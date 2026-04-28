import { Link } from "react-router-dom";
import { Dumbbell, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/60 mt-24">
    <div className="container py-16 grid gap-12 md:grid-cols-4">
      <div>
        <Link to="/" className="flex items-center gap-2 mb-4">
          <div className="h-9 w-9 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Dumbbell className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-display font-extrabold text-xl">PULSE</span>
        </Link>
        <p className="text-sm text-muted-foreground max-w-xs">
          Pro-grade equipment, engineered in Berlin. Built for the relentless.
        </p>
      </div>
      <div>
        <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Shop</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/categories" className="hover:text-primary">Strength</Link></li>
          <li><Link to="/categories" className="hover:text-primary">Cardio</Link></li>
          <li><Link to="/categories" className="hover:text-primary">Accessories</Link></li>
          <li><Link to="/shop" className="hover:text-primary">All products</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/about" className="hover:text-primary">About</Link></li>
          <li><Link to="/blog" className="hover:text-primary">Journal</Link></li>
          <li><Link to="/trainer" className="hover:text-primary">AI Trainer</Link></li>
          <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Follow</h4>
        <div className="flex gap-3">
          {[Instagram, Twitter, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="h-10 w-10 rounded-md border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-border/60">
      <div className="container py-6 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} PULSE Equipment. All rights reserved.</p>
        <p>Engineered in Berlin · Built worldwide.</p>
      </div>
    </div>
  </footer>
);

export default Footer;