import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Scan, Sparkles, Clock, Brain } from "lucide-react";
import LeadMagnetCard from "./LeadMagnetCard";

const CRM_REGISTER =
  "https://crm.fns.expert/register?intent=upload&utm_source=landing&utm_medium=hero&utm_campaign=lead_magnet";

const STATS = [
  { key: "demands", value: "500+", label: "требований обработано" },
  { key: "days", value: "2 дня", label: "среднее время ответа" },
  { key: "happy", value: "98%", label: "довольных клиентов" },
];

const FEATURES = [
  { key: "ocr", icon: <Scan className="w-5 h-5" />, title: "OCR", desc: "PDF до 50 МБ, мультистраничные" },
  { key: "ai", icon: <Brain className="w-5 h-5" />, title: "AI-анализ", desc: "Извлекаем риски и аргументы" },
  { key: "lawyers", icon: <ShieldCheck className="w-5 h-5" />, title: "Юристы", desc: "Проверяют каждый ответ" },
  { key: "deadlines", icon: <Clock className="w-5 h-5" />, title: "Дедлайны", desc: "Напоминания 24/7" },
];

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative hero-soft-bg overflow-hidden pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="absolute inset-0 hero-grid-bg opacity-50" />
      <div className="absolute top-32 right-10 w-64 h-64 dot-pattern opacity-50 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <HeroContent />
          </div>
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <LeadMagnetCard />
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {FEATURES.map((f) => (
            <FeatureCell key={f.key} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <>
      <Eyebrow />
      <HeroHeadline />
      <HeroDescription />
      <HeroCtaRow />
      <StatsRow />
    </>
  );
}

function Eyebrow() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 mb-5 sm:mb-7">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <span className="text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.18em] uppercase font-bold text-green-700">
        ai-сервис + налоговые юристы
      </span>
    </div>
  );
}

function HeroHeadline() {
  return (
    <h1 className="text-[34px] leading-[1.05] sm:text-5xl lg:text-[64px] lg:leading-[1.04] font-extrabold tracking-tighter text-[#0F172A] text-balance">
      Ответы на требования
      <br />
      <span className="gradient-text-green">ИФНС под ключ</span>
      <br />
      <span className="text-[#475569] font-medium">за 2 рабочих дня</span>
    </h1>
  );
}

function HeroDescription() {
  return (
    <p className="mt-5 sm:mt-7 text-base sm:text-lg text-[#475569] max-w-xl leading-relaxed">
      Загрузите PDF из ФНС — наш AI извлечёт суть, налоговые юристы подготовят юридически
      выверенный ответ. Без шаблонов и переплат.
    </p>
  );
}

function HeroCtaRow() {
  return (
    <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3">
      <Button
        asChild
        data-testid="hero-primary-cta"
        size="lg"
        className="bg-[#16A34A] text-white hover:bg-[#15803D] rounded-full h-14 px-7 text-base font-semibold pulse-green w-full sm:w-auto"
      >
        <a href={CRM_REGISTER} className="inline-flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5" />
          Начать бесплатно
        </a>
      </Button>
      <Button
        asChild
        data-testid="hero-secondary-cta"
        variant="outline"
        size="lg"
        className="border-[#E5E7EB] text-[#0F172A] bg-white hover:bg-green-50 hover:border-green-200 hover:text-[#15803D] rounded-full h-14 px-7 text-base font-semibold w-full sm:w-auto"
      >
        <a href="#how" className="inline-flex items-center justify-center gap-2">
          Как это работает
          <ArrowRight className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );
}

function StatsRow() {
  return (
    <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
      {STATS.map((s) => (
        <Stat key={s.key} value={s.value} label={s.label} />
      ))}
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#0F172A]">
        {value}
      </div>
      <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.14em] mt-1 text-[#475569] font-semibold leading-snug">
        {label}
      </div>
    </div>
  );
}

function FeatureCell({ icon, title, desc }) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex items-start gap-4 hover:border-green-200 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-green-50 text-[#16A34A] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-bold text-[#0F172A]">{title}</div>
        <div className="text-xs text-[#475569] mt-0.5">{desc}</div>
      </div>
    </div>
  );
}
