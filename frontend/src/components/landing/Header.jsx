import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Sparkles } from "lucide-react";

const NAV = [
  { label: "Услуги", href: "#features" },
  { label: "Как работает", href: "#how" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Виды требований", href: "#types" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-[#E5E7EB] shadow-[0_2px_20px_-8px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" data-testid="logo-link" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-9 h-9 bg-[#16A34A] rounded-lg flex items-center justify-center font-extrabold text-white text-[15px] tracking-tighter shadow-sm">
                fns
              </div>
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-extrabold text-[#0F172A] text-base tracking-tight">fns.expert</span>
              <span className="text-[10px] text-[#475569] tracking-[0.18em] uppercase font-semibold mt-0.5">
                ответы на требования ифнс
              </span>
            </div>
          </a>

          {/* Nav */}
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
              className="bg-[#16A34A] hover:bg-[#15803D] text-white rounded-full px-5 h-10 text-sm font-semibold shadow-sm"
            >
              <a href="https://crm.fns.expert/register" className="inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Начать бесплатно
              </a>
            </Button>
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 -mr-2 text-[#0F172A]"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4 border-t border-[#E5E7EB] pt-3 bg-white">
            <nav className="flex flex-col gap-1">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${n.label}`}
                  className="text-base font-medium text-[#0F172A] py-2.5 px-2 rounded-lg hover:bg-green-50 hover:text-[#16A34A]"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="tel:+79854883889"
                className="text-base font-semibold text-[#16A34A] py-2.5 px-2 mt-2 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                +7 985 488-38-89
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
