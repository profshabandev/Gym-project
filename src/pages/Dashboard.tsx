import { useState } from "react";
import { Lock, Mail, User as UserIcon, Package, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const orders = [
  { id: "PLS-10248", date: "Apr 12, 2026", total: 838, status: "Delivered" },
  { id: "PLS-09984", date: "Mar 02, 2026", total: 449, status: "Delivered" },
  { id: "PLS-09521", date: "Jan 18, 2026", total: 2499, status: "Delivered" },
];

const Dashboard = () => {
  const [authed, setAuthed] = useState(false);
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  if (!authed) {
    return (
      <div className="container py-20">
        <div className="max-w-md mx-auto rounded-2xl border border-border bg-card p-8 md:p-10">
          <h1 className="font-display font-extrabold text-3xl">{mode === "signin" ? "Welcome back." : "Join PULSE."}</h1>
          <p className="text-muted-foreground mt-2 text-sm">{mode === "signin" ? "Sign in to view orders and AI plans." : "Create your account in seconds."}</p>
          <form className="mt-8 space-y-4" onSubmit={(e) => { e.preventDefault(); setAuthed(true); toast.success("Signed in. (Demo — connect Lovable Cloud to go live.)"); }}>
            {mode === "signup" && (
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <div className="relative mt-2">
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-9" placeholder="Your name" required />
                </div>
              </div>
            )}
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input className="pl-9" type="email" placeholder="you@pulse.fit" required />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Password</label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input className="pl-9" type="password" placeholder="••••••••" required />
              </div>
            </div>
            <Button variant="hero" size="lg" className="w-full">{mode === "signin" ? "Sign in" : "Create account"}</Button>
          </form>
          <p className="text-xs text-muted-foreground text-center mt-6">
            {mode === "signin" ? "New to PULSE?" : "Already have an account?"}{" "}
            <button onClick={() => setMode(mode === "signin" ? "signup" : "signin")} className="text-primary font-semibold hover:underline">
              {mode === "signin" ? "Create account" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="grid lg:grid-cols-[260px_1fr] gap-10">
        <aside className="rounded-2xl border border-border bg-card p-6 self-start">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground">A</div>
            <div>
              <div className="font-display font-bold">Athlete</div>
              <div className="text-xs text-muted-foreground">Member since 2024</div>
            </div>
          </div>
          <nav className="mt-4 space-y-1 text-sm">
            {[{ icon: UserIcon, label: "Profile" }, { icon: Package, label: "Orders" }, { icon: Settings, label: "Settings" }].map((i) => (
              <button key={i.label} className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary text-left">
                <i.icon className="h-4 w-4 text-primary" /> {i.label}
              </button>
            ))}
            <button onClick={() => setAuthed(false)} className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary text-left text-muted-foreground">
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </nav>
        </aside>
        <div className="space-y-10">
          <div>
            <h1 className="font-display font-extrabold text-4xl">Welcome back, Athlete.</h1>
            <p className="text-muted-foreground mt-2">Your training command center.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[{ l: "Total orders", v: "12" }, { l: "Lifetime spend", v: "$8,420" }, { l: "AI sessions", v: "47" }].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
                <div className="font-display font-extrabold text-3xl mt-2 text-gradient">{s.v}</div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="px-6 py-4 border-b border-border"><h2 className="font-display font-bold">Recent orders</h2></div>
            <table className="w-full text-sm">
              <thead className="text-xs uppercase tracking-widest text-muted-foreground">
                <tr><th className="text-left px-6 py-3">Order</th><th className="text-left px-6 py-3">Date</th><th className="text-left px-6 py-3">Total</th><th className="text-left px-6 py-3">Status</th></tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-t border-border">
                    <td className="px-6 py-4 font-display font-bold">{o.id}</td>
                    <td className="px-6 py-4 text-muted-foreground">{o.date}</td>
                    <td className="px-6 py-4">${o.total.toLocaleString()}</td>
                    <td className="px-6 py-4"><span className="text-xs text-primary border border-primary/30 bg-primary/10 px-2 py-1 rounded">{o.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;