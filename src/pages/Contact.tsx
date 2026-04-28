import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "At least 10 characters").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    toast.success("Message sent. We'll be in touch within 24h.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container py-12 md:py-20">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Contact</span>
          <h1 className="font-display font-extrabold text-5xl md:text-6xl mt-2">Let's talk.</h1>
          <p className="text-muted-foreground mt-4 max-w-md">
            Questions about specs, bulk orders, or commercial outfitting? Our team responds within 24 hours.
          </p>
          <div className="mt-12 space-y-6">
            {[
              { icon: Mail, label: "Email", value: "team@pulse.fit" },
              { icon: Phone, label: "Phone", value: "+49 30 1234 5678" },
              { icon: MapPin, label: "HQ", value: "Köpenicker Str. 40, Berlin" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-display font-bold mt-1">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 aspect-video rounded-2xl overflow-hidden border border-border">
            <iframe title="HQ map" className="w-full h-full grayscale invert opacity-90"
              src="https://www.openstreetmap.org/export/embed.html?bbox=13.41%2C52.50%2C13.43%2C52.52&layer=mapnik" />
          </div>
        </div>
        <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-8 md:p-10 space-y-6 self-start">
          <h2 className="font-display font-bold text-2xl">Send a message</h2>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
            <Input className="mt-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
            <Input className="mt-2" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <Textarea className="mt-2 min-h-[140px]" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
          </div>
          <Button variant="hero" size="lg" className="w-full">Send message</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;