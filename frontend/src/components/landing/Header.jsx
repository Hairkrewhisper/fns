import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Sparkles } from "lucide-react";
import { assetUrl } from "@/lib/assets";
import BurgerMenuOverlay from "./BurgerMenuOverlay";
import { useScrollPast, useBodyScrollLock, useEscapeKey } from "@/hooks/use-ui-effects";

const NAV = [
  { num: "01", label: "Услуги", href: "#features", desc: "OCR · AI · юристы" },
  { num: "02", label: "Как это работает", href: "#how", desc: "6 этапов под ключ" },
  { num: "03", label: "Тарифы", href: "#pricing", desc: "от 6 000 ₽" },
  { num: "04", label: "Виды требований", href: "#types", desc: "ст. 93, НДС, МРОТ" },
  { num: "05", label: "Отзывы", href: "#testimonials", desc: "реальные клиенты" },
  { num: "06", label: "FAQ", href: "#faq", desc: "15 ответов" },
];

const DESKTOP_NAV = NAV.slice(0, 5);
const CRM_REGISTER = "https://crm.fns.expert/register";
const CRM_LOGIN = "https://crm.fns.expert/login";

export default function Header() {
  const scrolled = useScrollPast(20);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  useBodyScrollLock(open);
  useEscapeKey(close, open);

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
            <Logo />
            <DesktopNav items={DESKTOP_NAV} />
            <Actions open={open} onToggle={() => setOpen((v) => !v)} />
          </div>
        </div>
      </header>

      <BurgerMenuOverlay open={open} onClose={close} items={NAV} />
    </>
  );
}

function Logo() {
  return (
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
  );
}

function DesktopNav({ items }) {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {items.map((n) => (
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
  );
}

function Actions({ open, onToggle }) {
  return (
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
        href={CRM_LOGIN}
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
        <a href={CRM_REGISTER} className="inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          Начать
        </a>
      </Button>
      <BurgerToggle open={open} onClick={onToggle} />
    </div>
  );
}

function BurgerToggle({ open, onClick }) {
  return (
    <button
      type="button"
      data-testid="mobile-menu-toggle"
      onClick={onClick}
      className="lg:hidden relative flex flex-col items-center justify-center w-11 h-11 -mr-1 rounded-full bg-[#0F172A] transition-colors duration-300"
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
  );
}
