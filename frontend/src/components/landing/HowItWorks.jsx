import { Upload, ScanLine, Brain, Scale, CreditCard, FileCheck2, ArrowRight } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: Upload,
    title: "Загрузка PDF",
    desc: "Прикрепите требование из личного кабинета или скан-копию. До 50 МБ, любые страницы.",
    time: "30 секунд",
  },
  {
    n: "02",
    icon: ScanLine,
    title: "OCR-распознавание",
    desc: "Извлекаем текст, реквизиты, статьи НК РФ, перечень истребуемых документов.",
    time: "2–5 минут",
  },
  {
    n: "03",
    icon: Brain,
    title: "AI-анализ",
    desc: "Определяем тип требования, риски, объём ответа и слабые места формулировок ИФНС.",
    time: "до 15 минут",
  },
  {
    n: "04",
    icon: Scale,
    title: "Экспертиза юристов",
    desc: "Налоговые юристы готовят правовую позицию, мотивированный отказ или ответ по существу.",
    time: "до 2 дней",
  },
  {
    n: "05",
    icon: CreditCard,
    title: "Оплата по факту",
    desc: "Утверждаете тариф и проект ответа. Оплачиваете онлайн картой или счётом.",
    time: "1 минута",
  },
  {
    n: "06",
    icon: FileCheck2,
    title: "Готовый ответ",
    desc: "Получаете финальный документ с инструкцией по отправке через ЛК или СБИС / Контур.",
    time: "→ в ИФНС",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      data-testid="how-it-works"
      className="bg-white py-20 lg:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="text-[11px] tracking-[0.22em] uppercase font-bold text-[#16A34A] mb-5">
            · 6 этапов
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-[#0F172A] leading-[1.05]">
            Как мы готовим ответ на требование
          </h2>
          <p className="mt-5 text-base lg:text-lg text-[#475569] leading-relaxed max-w-2xl">
            Прозрачный процесс. На каждом этапе вы видите статус, понимаете, что происходит,
            и можете задать вопрос менеджеру.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-black/[0.06] rounded-3xl overflow-hidden border border-black/[0.06]">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                data-testid={`step-${i + 1}`}
                className="bg-white p-7 lg:p-9 relative group hover:bg-[#F9FAFB] transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="mono text-xs font-bold tracking-widest text-[#16A34A]">
                    {s.n}
                  </span>
                  <ArrowRight className="w-4 h-4 text-black/20 group-hover:text-[#16A34A] group-hover:translate-x-1 transition-all" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#16A34A] text-white flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold tracking-tight text-[#0F172A] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-5">{s.desc}</p>
                <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] font-bold text-[#16A34A] bg-green-50 px-2.5 py-1 rounded-full">
                  <span className="w-1 h-1 rounded-full bg-[#16A34A]" />
                  {s.time}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
