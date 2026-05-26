import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Sparkles, ArrowUpRight, MessageCircle, Mail } from "lucide-react";
import { assetUrl } from "@/lib/assets";

const NAV = [
  { num: "01", label: "Услуги", href: "#features", desc: "OCR · AI · юристы" },
  { num: "02", label: "Как это работает", href: "#how", desc: "6 этапов под ключ" },
  { num: "03", label: "Тарифы", href: "#pricing", desc: "от 6 000 ₽" },
  { num: "04", label: "Виды требований", href: "#types", desc: "ст. 93, НДС, МРОТ" },
  { num: "05", label: "Отзывы", href: "#testimonials", desc: "реальные клиенты" },
  { num: "06", label: "FAQ", href: "#faq", desc: "15 ответов" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#E5E7EB] shadow-[0_2px_20px_-8px_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" data-testid="logo-link" className="flex items-center gap-2.5 group">
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
              {NAV.slice(0, 5).map((n) => (
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

              {/* 2026 Burger button — animated bars to X */}
              <button
                data-testid="mobile-menu-toggle"
                onClick={() => setOpen(!open)}
                className={`lg:hidden relative flex flex-col items-center justify-center w-11 h-11 -mr-1 rounded-full transition-colors duration-300 ${
                  open ? "bg-[#0F172A]" : "bg-[#0F172A]"
                }`}
                aria-label={open ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={open}
              >
                <span
                  className={`block h-[2px] w-5 bg-white rounded-full transition-all duration-300 ${
                    open ? "translate-y-[3px] rotate-45" : "-translate-y-[3px]"
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 bg-white rounded-full transition-all duration-300 ${
                    open ? "-translate-y-[3px] -rotate-45" : "translate-y-[3px]"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* === 2026 Fullscreen Burger Menu === */}
      <div
        data-testid="mobile-menu-fullscreen"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        {/* Background — dark with green orb */}
        <div className="absolute inset-0 bg-[#0F172A]">
          <div
            className={`absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#16A34A]/30 blur-[120px] transition-transform duration-700 ${
              open ? "scale-100" : "scale-0"
            }`}
          />
          <div
            className={`absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full bg-emerald-400/20 blur-[100px] transition-transform duration-700 delay-100 ${
              open ? "scale-100" : "scale-0"
            }`}
          />
          {/* subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative h-full w-full overflow-y-auto pt-20 pb-10 safe-bottom">
          <div className="px-5 sm:px-8 max-w-md mx-auto">
            <div
              className={`text-[10px] uppercase tracking-[0.28em] font-bold text-[#16A34A] mb-6 transition-all duration-500 delay-100 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
              }`}
            >
              · Меню навигации
            </div>

            <nav className="space-y-1">
              {NAV.map((n, i) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${n.label}`}
                  className={`group block py-4 border-b border-white/10 transition-all duration-500 ${
                    open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${150 + i * 60}ms` }}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="mono text-[11px] tracking-wider text-[#16A34A] font-bold">
                      {n.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-[#16A34A] group-active:text-[#16A34A] transition-colors duration-200">
                          {n.label}
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#16A34A] group-hover:rotate-45 transition-all duration-300" />
                      </div>
                      <div className="text-xs text-white/50 mt-0.5">{n.desc}</div>
                    </div>
                  </div>
                </a>
              ))}
            </nav>

            {/* Big CTA */}
            <a
              href="https://crm.fns.expert/register"
              onClick={() => setOpen(false)}
              data-testid="mobile-cta-register"
              className={`mt-8 group flex items-center justify-between gap-2 p-5 rounded-2xl bg-[#16A34A] text-white font-extrabold text-base transition-all duration-500 active:scale-[0.98] hover:bg-[#15803D] ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "560ms" }}
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                <span>Начать бесплатно</span>
              </div>
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </a>

            {/* Quick contact grid */}
            <div
              className={`mt-4 grid grid-cols-3 gap-2 transition-all duration-500 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "620ms" }}
            >
              <QuickAction
                href="tel:+79854883889"
                icon={<Phone className="w-4 h-4" />}
                label="Звонок"
              />
              <QuickAction
                href="https://wa.me/79854883889"
                icon={<MessageCircle className="w-4 h-4" />}
                label="WhatsApp"
              />
              <QuickAction
                href="https://t.me/FNS_Expert_bot"
                icon={<Mail className="w-4 h-4" />}
                label="Telegram"
              />
            </div>

            {/* Footer contacts */}
            <div
              className={`mt-10 pt-6 border-t border-white/10 transition-all duration-500 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "680ms" }}
            >
              <div className="text-[10px] uppercase tracking-[0.28em] font-bold text-[#16A34A] mb-3">
                · Контакты
              </div>
              <a
                href="tel:+79854883889"
                className="block text-xl font-extrabold tracking-tight text-white hover:text-[#16A34A] transition-colors"
              >
                +7 985 488-38-89
              </a>
              <div className="text-xs text-white/50 mt-2 space-y-1">
                <div>info@fns.expert</div>
                <div>пн–пт · 09:00–18:00 МСК</div>
              </div>
              <a
                href="https://crm.fns.expert/login"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-bold text-white/70 hover:text-white transition-colors"
              >
                Войти в CRM
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function QuickAction({ href, icon, label }) {
  return (
    <a
      href={href}
      className="flex flex-col items-center justify-center gap-1.5 py-3 rounded-2xl bg-white/[0.06] border border-white/10 text-white/90 hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all"
    >
      <span className="text-[#16A34A]">{icon}</span>
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </a>
  );
}
