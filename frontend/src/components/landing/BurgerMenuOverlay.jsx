/**
 * 2026 Fullscreen burger menu overlay.
 *
 * @param {boolean} open
 * @param {() => void} onClose
 * @param {{num:string,label:string,href:string,desc:string}[]} items
 */
import { ArrowUpRight, Sparkles, Phone, MessageCircle, Mail } from "lucide-react";

const CRM_REGISTER = "https://crm.fns.expert/register";
const CRM_LOGIN = "https://crm.fns.expert/login";

export default function BurgerMenuOverlay({ open, onClose, items }) {
  return (
    <div
      data-testid="mobile-menu-fullscreen"
      className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      aria-hidden={!open}
    >
      <BurgerBackground open={open} />

      <div className="relative h-full w-full overflow-y-auto pt-20 pb-10 safe-bottom">
        <div className="px-5 sm:px-8 max-w-md mx-auto">
          <Eyebrow open={open} />

          <nav className="space-y-1">
            {items.map((n, i) => (
              <BurgerNavItem
                key={n.href}
                item={n}
                delay={150 + i * 60}
                open={open}
                onClick={onClose}
              />
            ))}
          </nav>

          <BurgerCTA open={open} onClose={onClose} />
          <QuickActions open={open} />
          <BurgerFooter open={open} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

function BurgerBackground({ open }) {
  return (
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
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
    </div>
  );
}

function Eyebrow({ open }) {
  return (
    <div
      className={`text-[10px] uppercase tracking-[0.28em] font-bold text-[#16A34A] mb-6 transition-all duration-500 delay-100 ${
        open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
      }`}
    >
      · Меню навигации
    </div>
  );
}

function BurgerNavItem({ item, delay, open, onClick }) {
  return (
    <a
      href={item.href}
      onClick={onClick}
      data-testid={`mobile-nav-${item.label}`}
      className={`group block py-4 border-b border-white/10 transition-all duration-500 ${
        open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-baseline gap-4">
        <span className="mono text-[11px] tracking-wider text-[#16A34A] font-bold">
          {item.num}
        </span>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-[#16A34A] group-active:text-[#16A34A] transition-colors duration-200">
              {item.label}
            </span>
            <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#16A34A] group-hover:rotate-45 transition-all duration-300" />
          </div>
          <div className="text-xs text-white/50 mt-0.5">{item.desc}</div>
        </div>
      </div>
    </a>
  );
}

function BurgerCTA({ open, onClose }) {
  return (
    <a
      href={CRM_REGISTER}
      onClick={onClose}
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
  );
}

function QuickActions({ open }) {
  return (
    <div
      className={`mt-4 grid grid-cols-3 gap-2 transition-all duration-500 ${
        open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: "620ms" }}
    >
      <QuickAction href="tel:+79854883889" icon={<Phone className="w-4 h-4" />} label="Звонок" />
      <QuickAction href="https://wa.me/79854883889" icon={<MessageCircle className="w-4 h-4" />} label="WhatsApp" />
      <QuickAction href="https://t.me/FNS_Expert_bot" icon={<Mail className="w-4 h-4" />} label="Telegram" />
    </div>
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

function BurgerFooter({ open, onClose }) {
  return (
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
        href={CRM_LOGIN}
        onClick={onClose}
        className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-bold text-white/70 hover:text-white transition-colors"
      >
        Войти в CRM
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}
