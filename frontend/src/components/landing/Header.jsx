import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Sparkles, ArrowRight } from "lucide-react";
import { assetUrl } from "@/lib/assets";

const NAV = [
  { label: "Услуги", href: "#features", desc: "OCR · AI · юристы" },
  { label: "Как работает", href: "#how", desc: "6 этапов под ключ" },
  { label: "Тарифы", href: "#pricing", desc: "от 6 000 ₽" },
  { label: "Виды требований", href: "#types", desc: "ст. 93, НДС, МРОТ" },
  { label: "FAQ", href: "#faq", desc: "15 ответов" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-white/90 backdrop-blur-xl border-b border-[#E5E7EB] shadow-[0_2px_20px_-8px_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" data-testid="logo-link" className="flex items-center gap-2.5 group touch-ripple">
              <img
                src={assetUrl("/images/fns-logo.png")}
                alt="fns.expert"
                className="h-9 w-9 lg:h-11 lg:w-11 object-contain"
              />
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-extrabold text-[#0F172A] text-base tracking-tight">fns.expert</span>
                <span className="text-[10px] text-[#475569] tracking-[0.18em] uppercase font-semibold mt-0.5">
                  ответы на требования ифнс
                </span>
              </div>
            </a>

            {/* Nav - desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  data-testid={`nav-${n.label}`}
                  className="text-sm font-medium text-[#475569] hover:text-[#16A34A] transition-colors"
                >
                  {n.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:+79854883889"
                data-testid="header-phone"
                className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#0F172A] hover:text-[#16A34A] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +7 985 488-38-89
              </a>
              <a
                href="https://crm.fns.expert/login"
                data-testid="header-login-btn"
                className="hidden sm:inline-flex text-sm font-semibold text-[#0F172A] hover:text-[#16A34A] transition-colors px-3 py-2"
              >
                Войти
              </a>
              <Button
                asChild
                data-testid="header-cta-btn"
                className="hidden sm:inline-flex bg-[#16A34A] hover:bg-[#15803D] text-white rounded-full px-5 h-10 text-sm font-semibold shadow-sm"
              >
                <a href="https://crm.fns.expert/register" className="inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Начать
                </a>
              </Button>
              <button
                data-testid="mobile-menu-toggle"
                onClick={() => setOpen(!open)}
                className="lg:hidden touch-ripple flex items-center justify-center w-11 h-11 -mr-2 text-[#0F172A] rounded-full active:bg-black/5 transition-colors"
                aria-label={open ? "Закрыть меню" : "Открыть меню"}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sheet Menu — 2026 fullscreen drawer */}
      <div
        data-testid="mobile-menu-sheet"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-[#0F172A]/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-0 top-16 bottom-0 bg-white overflow-y-auto safe-bottom transition-transform duration-300 ${
            open ? "translate-y-0" : "translate-y-4"
          }`}
        >
          <div className="px-5 py-6 pb-32">
            <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#94A3B8] mb-4 px-2">
              · меню
            </div>
            <nav className="space-y-2">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${n.label}`}
                  className="touch-ripple group flex items-center justify-between p-4 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] active:scale-[0.98] transition-transform"
                >
                  <div>
                    <div className="text-base font-extrabold text-[#0F172A] tracking-tight">{n.label}</div>
                    <div className="text-xs text-[#475569] mt-0.5">{n.desc}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#16A34A]" />
                </a>
              ))}
            </nav>

            <div className="mt-7 grid gap-3">
              <a
                href="https://crm.fns.expert/register"
                onClick={() => setOpen(false)}
                data-testid="mobile-cta-register"
                className="touch-ripple flex items-center justify-center gap-2 h-13 py-4 rounded-2xl bg-[#16A34A] text-white font-extrabold text-base active:scale-[0.98] transition-transform"
              >
                <Sparkles className="w-5 h-5" />
                Начать бесплатно
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+79854883889"
                  className="touch-ripple flex items-center justify-center gap-2 py-3 rounded-2xl bg-white border border-[#E5E7EB] text-[#0F172A] font-bold text-sm active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4" />
                  Позвонить
                </a>
                <a
                  href="https://crm.fns.expert/login"
                  onClick={() => setOpen(false)}
                  className="touch-ripple flex items-center justify-center py-3 rounded-2xl bg-white border border-[#E5E7EB] text-[#0F172A] font-bold text-sm active:scale-[0.98]"
                >
                  Войти
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
              <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#94A3B8] mb-3 px-2">
                · контакты
              </div>
              <div className="text-sm text-[#475569] space-y-1.5 px-2">
                <div className="text-[#0F172A] font-bold">+7 985 488-38-89</div>
                <div>info@fns.expert · @FNS_Expert_bot</div>
                <div>пн–пт · 09:00–18:00 МСК</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
