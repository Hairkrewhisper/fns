import { Scan, BrainCircuit, ShieldCheck, BellRing, Activity, Package, ArrowUpRight } from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="bg-[#F9FAFB] py-14 sm:py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-[11px] tracking-[0.22em] uppercase font-bold text-[#16A34A] mb-5">
              · Что внутри
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-[#0F172A] leading-[1.05]">
              Технологии + юридическая экспертиза
            </h2>
          </div>
          <p className="text-base text-[#475569] leading-relaxed max-w-md">
            Мы соединили AI для быстрого анализа документов и команду налоговых юристов,
            которые отвечают за юридическую силу каждого ответа.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-5">
          {/* Big card */}
          <div className="md:col-span-4 bg-[#16A34A] text-white rounded-3xl p-8 lg:p-10 relative overflow-hidden min-h-[340px] flex flex-col justify-between">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-green-300/30 blur-3xl" />
            <div className="absolute top-0 right-0 w-64 h-64 dot-pattern opacity-30 mix-blend-overlay" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 mb-6 backdrop-blur">
                <BrainCircuit className="w-3.5 h-3.5 text-white" />
                <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-white">
                  AI-анализ требования
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tighter leading-tight max-w-md">
                Понимает суть требования за секунды
              </h3>
              <p className="mt-4 text-white/85 max-w-lg leading-relaxed">
                Извлекаем тип требования, статьи НК РФ, перечень документов и сроки. Выделяем
                красные зоны: расхождения 6-НДФЛ / РСВ, низкая зарплата, разрывы по НДС.
              </p>
            </div>
            <div className="relative grid grid-cols-3 gap-3 mt-8">
              <Chip label="ст. 93 НК РФ" />
              <Chip label="ст. 93.1 НК РФ" />
              <Chip label="ст. 88 НК РФ" />
              <Chip label="6-НДФЛ ↔ РСВ" />
              <Chip label="НДС-разрывы" />
              <Chip label="МРОТ / зарплата" />
            </div>
          </div>

          {/* Medium card */}
          <div className="md:col-span-2 bg-white rounded-3xl p-7 lg:p-8 border border-black/[0.06] flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
                <Scan className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-[#0F172A] mb-3">
                OCR любой сложности
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                PDF до 50 МБ, мультистраничные, отсканированные. Распознаём даже плохое
                качество исходника.
              </p>
            </div>
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-black/[0.06]">
              <span className="mono text-xs text-[#475569]">accuracy</span>
              <span className="text-xl font-extrabold tracking-tight text-[#16A34A]">99.4%</span>
            </div>
          </div>

          {/* Small card 1 */}
          <FeatureCard
            icon={<ShieldCheck />}
            title="Проверка юристом"
            desc="Каждый ответ финально утверждает налоговый юрист. Никакого AI-самотёка."
          />
          {/* Small card 2 */}
          <FeatureCard
            icon={<BellRing />}
            title="Контроль дедлайнов"
            desc="SMS / email-напоминания за 24, 12 и 2 часа до конца срока."
          />
          {/* Small card 3 */}
          <FeatureCard
            icon={<Activity />}
            title="7 этапов в реальном времени"
            desc="Видите, где сейчас ваше требование. Без чёрных ящиков."
          />
          {/* CTA card */}
          <div className="md:col-span-3 bg-white border border-black/[0.06] rounded-3xl p-7 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#16A34A] text-white flex items-center justify-center">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold tracking-tight text-[#0F172A]">
                  Абонентские пакеты
                </h3>
                <p className="text-sm text-[#475569] mt-1">
                  Экономия до 30% и приоритетная обработка
                </p>
              </div>
            </div>
            <a
              href="#pricing"
              data-testid="features-pricing-link"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#16A34A] hover:text-[#15803D] group"
            >
              Смотреть тарифы
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-black/[0.06] rounded-3xl p-7 hover:border-[#16A34A]/20 hover:-translate-y-1 transition-all duration-300">
      <div className="w-11 h-11 rounded-xl bg-green-50 text-[#16A34A] flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-extrabold tracking-tight text-[#0F172A] mb-2">{title}</h3>
      <p className="text-sm text-[#475569] leading-relaxed">{desc}</p>
    </div>
  );
}

function Chip({ label }) {
  return (
    <div className="text-center text-xs font-semibold px-3 py-2 rounded-lg bg-white/15 border border-white/20 text-white tracking-tight backdrop-blur">
      {label}
    </div>
  );
}
