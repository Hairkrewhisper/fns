import { useState } from "react";
import { MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { useScrollPast } from "@/hooks/use-ui-effects";

export default function StickyCTA() {
  const visible = useScrollPast(600);
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <>
      {/* Desktop: floating left badge */}
      {visible && (
        <div
          data-testid="sticky-cta-desktop"
          className="fixed bottom-6 left-6 z-40 hidden lg:flex items-center gap-3 bg-white text-[#0F172A] rounded-full pl-5 pr-3 py-3 shadow-[0_10px_40px_-10px_rgba(22,163,74,0.35)] border border-[#E5E7EB]"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#16A34A]" />
            </span>
            <span className="text-sm font-semibold tracking-tight">Нужна помощь с требованием?</span>
            <a
              href="https://wa.me/79854883889"
              data-testid="sticky-cta-link"
              className="inline-flex items-center gap-1.5 bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-extrabold uppercase tracking-widest px-4 py-2 rounded-full transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
          <button
            onClick={() => setClosed(true)}
            data-testid="sticky-cta-close"
            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-3.5 h-3.5 text-[#475569]" />
          </button>
        </div>
      )}

      {/* Mobile: bottom bar (2026 trend - thumb-zone CTA) */}
      <div
        data-testid="mobile-bottom-cta"
        className="fixed bottom-0 inset-x-0 z-40 lg:hidden safe-bottom bg-white/95 backdrop-blur-xl border-t border-[#E5E7EB] px-3 pt-2.5 pb-3 shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.08)]"
      >
        <div className="flex items-center gap-2">
          <a
            href="tel:+79854883889"
            data-testid="mobile-cta-call"
            className="touch-ripple flex items-center justify-center w-12 h-12 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] text-[#0F172A] active:scale-95 transition-transform shrink-0"
            aria-label="Позвонить"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/79854883889"
            data-testid="mobile-cta-whatsapp"
            className="touch-ripple flex items-center justify-center w-12 h-12 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] text-[#16A34A] active:scale-95 transition-transform shrink-0"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a
            href="https://crm.fns.expert/register"
            data-testid="mobile-cta-primary"
            className="touch-ripple flex-1 flex items-center justify-center gap-2 h-12 rounded-full bg-[#16A34A] text-white font-extrabold text-sm tracking-tight active:scale-[0.98] transition-transform"
          >
            <Sparkles className="w-4 h-4" />
            Загрузить требование
          </a>
        </div>
      </div>
    </>
  );
}
