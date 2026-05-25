import { Button } from "@/components/ui/button";
import { ArrowUpRight, ShieldCheck, Scan, Sparkles, Clock, FileText, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative bg-[#022C22] text-white overflow-hidden pt-28 lg:pt-36 pb-24 lg:pb-32 grain-overlay"
    >
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid-bg opacity-60" />
      {/* Emerald orb */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-500/20 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-amber-600/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 mb-7 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-emerald-200">
                ai-сервис + налоговые юристы
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] leading-[1.04] font-extrabold tracking-tighter text-balance">
              Ответы на требования
              <br />
              <span className="gradient-text-emerald">ИФНС под ключ</span>
              <br />
              <span className="text-white/70 font-medium">за 2 рабочих дня</span>
            </h1>

            <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed">
              Загрузите PDF из ФНС — наш AI извлечёт суть, налоговые юристы подготовят
              юридически выверенный ответ. Без шаблонов и переплат за разовые консультации.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                asChild
                data-testid="hero-primary-cta"
                size="lg"
                className="bg-white text-[#022C22] hover:bg-emerald-50 rounded-full h-14 px-7 text-base font-semibold pulse-emerald"
              >
                <a href="https://crm.fns.expert/register" className="inline-flex items-center gap-2">
                  Загрузить требование
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                data-testid="hero-secondary-cta"
                variant="outline"
                size="lg"
                className="border-white/20 text-white bg-transparent hover:bg-white/5 rounded-full h-14 px-7 text-base font-semibold"
              >
                <a href="#how">Как это работает</a>
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              <Stat value="500+" label="требований обработано" />
              <Stat value="2 дня" label="среднее время ответа" />
              <Stat value="98%" label="довольных клиентов" />
            </div>
          </div>

          {/* Right side: scan card */}
          <div className="lg:col-span-5 relative">
            <ScanCard />
          </div>
        </div>
      </div>

      {/* Bottom features strip */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          <FeatureCell icon={<Scan className="w-5 h-5" />} title="OCR" desc="PDF до 50 МБ, мультистраничные" />
          <FeatureCell icon={<Sparkles className="w-5 h-5" />} title="AI-анализ" desc="Извлекаем риски и аргументы" />
          <FeatureCell icon={<ShieldCheck className="w-5 h-5" />} title="Юристы" desc="Проверяют каждый ответ" />
          <FeatureCell icon={<Clock className="w-5 h-5" />} title="Дедлайны" desc="Напоминания 24/7" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white">{value}</div>
      <div className="text-[11px] uppercase tracking-[0.14em] mt-1 text-white/50 font-semibold leading-snug">
        {label}
      </div>
    </div>
  );
}

function FeatureCell({ icon, title, desc }) {
  return (
    <div className="bg-[#022C22] p-5 flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-300 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-bold text-white">{title}</div>
        <div className="text-xs text-white/60 mt-0.5">{desc}</div>
      </div>
    </div>
  );
}

function ScanCard() {
  return (
    <div className="relative">
      {/* Floating badge */}
      <div className="absolute -top-3 -left-3 z-20 hidden md:flex items-center gap-2 px-3 py-2 bg-amber-500 text-[#022C22] rounded-full text-xs font-extrabold shadow-2xl">
        <Sparkles className="w-3.5 h-3.5" />
        OCR + AI
      </div>

      <div className="relative bg-[#03362A] border border-white/10 rounded-2xl p-6 shadow-2xl">
        {/* PDF mock */}
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
          <div className="w-10 h-10 rounded-lg bg-rose-500/15 text-rose-300 flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold truncate">Требование № 2547-К/2026</div>
            <div className="text-xs text-white/50 mono">ИФНС № 22 по г. Москве</div>
          </div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-full">
            OCR ✓
          </span>
        </div>

        {/* AI Findings */}
        <div className="text-[11px] uppercase tracking-[0.18em] text-white/40 font-bold mb-3">
          AI-анализ требования
        </div>
        <div className="space-y-2.5">
          <Finding label="Тип требования" value="ст. 93.1 НК РФ — встречная" />
          <Finding label="Срок ответа" value="5 рабочих дней" highlight />
          <Finding label="Объём документов" value="14 позиций → можно сократить" />
          <Finding label="Риск штрафа" value="до 10 000 ₽ ст. 129.1" danger />
        </div>

        {/* Status bar */}
        <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-white/70 font-medium">Готов к экспертной проверке</span>
          </div>
          <span className="mono text-[10px] text-white/40">step 3 / 7</span>
        </div>
      </div>

      {/* Decorative floating mini-card */}
      <div className="absolute -bottom-6 -right-6 hidden md:block bg-white text-[#022C22] rounded-xl p-4 shadow-2xl max-w-[220px] rotate-2">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs font-bold tracking-tight">Ответ готов</span>
        </div>
        <div className="text-[11px] text-[#475569] leading-snug">
          Юрист Е. Соколова · 14 стр. · подпись ЭЦП
        </div>
      </div>
    </div>
  );
}

function Finding({ label, value, highlight, danger }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2 px-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
      <span className="text-xs text-white/50 font-medium">{label}</span>
      <span
        className={`text-xs font-semibold ${
          danger ? "text-rose-300" : highlight ? "text-amber-300" : "text-white/90"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
