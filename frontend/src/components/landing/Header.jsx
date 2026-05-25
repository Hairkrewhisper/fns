import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

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
        scrolled ? "bg-[#F4F4F1]/85 backdrop-blur-xl border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" data-testid="logo-link" className="flex items-center gap-2 group">
            <div className="relative">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-extrabold text-[15px] tracking-tighter transition-colors ${
                scrolled ? "bg-[#064E3B] text-white" : "bg-white text-[#022C22]"
              }`}>
                fns
              </div>
              <span className={`absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#D97706] rounded-full ring-2 ${scrolled ? "ring-[#F4F4F1]" : "ring-[#022C22]"}`} />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className={`font-extrabold text-base tracking-tight transition-colors ${scrolled ? "text-[#0F172A]" : "text-white"}`}>fns.expert</span>
              <span className={`text-[10px] tracking-[0.18em] uppercase font-semibold mt-0.5 transition-colors ${scrolled ? "text-[#475569]" : "text-emerald-300/80"}`}>
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
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-[#475569] hover:text-[#0F172A]" : "text-white/70 hover:text-white"
                }`}
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
              className={`hidden md:flex items-center gap-2 text-sm font-semibold transition-colors ${
                scrolled ? "text-[#0F172A] hover:text-[#064E3B]" : "text-white hover:text-emerald-300"
              }`}
            >
              <Phone className="w-4 h-4" />
              +7 985 488-38-89
            </a>
            <a
              href="https://crm.fns.expert/login"
              data-testid="header-login-btn"
              className={`hidden sm:inline-flex text-sm font-semibold transition-colors px-3 py-2 ${
                scrolled ? "text-[#0F172A] hover:text-[#064E3B]" : "text-white/80 hover:text-white"
              }`}
            >
              Войти
            </a>
            <Button
              asChild
              data-testid="header-cta-btn"
              className={`rounded-full px-5 h-10 text-sm font-semibold transition-colors ${
                scrolled
                  ? "bg-[#064E3B] hover:bg-[#022C22] text-white"
                  : "bg-amber-500 hover:bg-amber-400 text-[#022C22]"
              }`}
            >
              <a href="https://crm.fns.expert/register">Начать бесплатно</a>
            </Button>
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 -mr-2 ${scrolled ? "text-[#0F172A]" : "text-white"}`}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4 border-t border-black/5 pt-3">
            <nav className="flex flex-col gap-1">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${n.label}`}
                  className="text-base font-medium text-[#0F172A] py-2.5 px-2 rounded-lg hover:bg-black/5"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="tel:+79854883889"
                className="text-base font-semibold text-[#064E3B] py-2.5 px-2 mt-2 flex items-center gap-2"
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
