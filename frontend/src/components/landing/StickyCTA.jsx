import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || closed) return null;

  return (
    <div
      data-testid="sticky-cta"
      className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-3 bg-[#022C22] text-white rounded-full pl-5 pr-3 py-3 shadow-2xl border border-white/10"
    >
      <div className="flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
        </span>
        <span className="text-sm font-semibold tracking-tight">Нужна помощь с требованием?</span>
        <a
          href="https://wa.me/79854883889"
          data-testid="sticky-cta-link"
          className="inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-[#022C22] text-xs font-extrabold uppercase tracking-widest px-4 py-2 rounded-full transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          WhatsApp
        </a>
      </div>
      <button
        onClick={() => setClosed(true)}
        data-testid="sticky-cta-close"
        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        aria-label="Закрыть"
      >
        <X className="w-3.5 h-3.5 text-white/60" />
      </button>
    </div>
  );
}
