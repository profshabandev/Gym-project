import { useRef, useState } from "react";
import { Send, Sparkles, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Msg = { role: "user" | "assistant"; content: string };

const suggestions = [
  "Build me a 4-week fat-loss plan",
  "Beginner full-body routine, 3x/week",
  "Equipment for a 50 sq ft home gym",
  "Hypertrophy split for 60 min/day",
];

const sample = (q: string) =>
  `Here's a starting framework based on "${q}":\n\nWeek 1–2 — Foundation\n• 3 sessions / week, full-body\n• Compound lifts: squat, hinge, press, pull\n• 3×8 at RPE 7\n\nRecommended PULSE gear\n• APEX Adjustable Dumbbell\n• FORGE Olympic Barbell\n• IRON Kettlebell 16kg\n\nConnect Lovable Cloud + AI Gateway for fully personalized plans.`;

const AITrainer = () => {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "I'm your PULSE AI trainer. Tell me your goal, level, and time per week — I'll program it." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", content: sample(text) }]);
      setLoading(false);
      setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
    }, 700);
  };

  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full mb-4">
            <Sparkles className="h-3 w-3" /> AI Trainer
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl">Your coach, on demand.</h1>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Programs built around your goals, equipment, and time.</p>
        </div>
        <div className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col h-[600px]">
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${m.role === "user" ? "bg-secondary" : "bg-primary text-primary-foreground"}`}>
                  {m.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center"><Bot className="h-4 w-4" /></div>
                <div className="bg-secondary rounded-2xl px-4 py-3"><div className="flex gap-1">
                  {[0, 1, 2].map((i) => (<div key={i} className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />))}
                </div></div>
              </div>
            )}
            <div ref={endRef} />
          </div>
          {messages.length <= 1 && (
            <div className="px-6 pb-3 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button key={s} onClick={() => send(s)} className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">{s}</button>
              ))}
            </div>
          )}
          <form className="border-t border-border p-4 flex gap-2" onSubmit={(e) => { e.preventDefault(); send(input); }}>
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask anything: goals, equipment, programming..." className="flex-1" />
            <Button type="submit" variant="hero" size="icon"><Send className="h-4 w-4" /></Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AITrainer;