import { AlertOctagon, Ban, Gavel, TrendingDown, Clock4 } from "lucide-react";

const RISKS = [
  {
    icon: AlertOctagon,
    title: "Штраф 5 000 — 20 000 ₽",
    desc: "За непредставление документов по требованию (ст. 126 НК РФ). Повторно — двойной.",
    metric: "ст. 126",
  },
  {
    icon: Ban,
    title: "Блокировка счёта",
    desc: "ИФНС вправе приостановить операции при непредставлении пояснений в течение 10 дней.",
    metric: "ст. 76",
  },
  {
    icon: Gavel,
    title: "Выездная проверка",
    desc: "Игнорирование запросов — красный флаг для назначения углублённого контроля.",
    metric: "→ ВНП",
  },
  {
    icon: TrendingDown,
    title: "Доначисления",
    desc: "Без аргументированного ответа ИФНС зачастую трактует ситуацию в свою пользу.",
    metric: "+ %",
  },
];

export default function ProblemStatement() {
  return (
    <section
      data-testid="problem-section"
      className="bg-[#F4F4F1] py-20 lg:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="text-[11px] tracking-[0.22em] uppercase font-bold text-[#DC2626] mb-5">
              · Цена молчания
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-[#0F172A] leading-[1.05]">
              Что грозит,
              <br />
              если <span className="text-[#DC2626]">не ответить</span>
              <br />
              на требование ФНС
            </h2>
            <p className="mt-6 text-base text-[#475569] leading-relaxed max-w-md">
              Срок ответа на стандартное требование — <strong className="text-[#0F172A]">5 рабочих
              дней</strong>. На пояснения по НДС — 10 дней. После — последствия наступают
              автоматически.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-[#022C22] text-white">
              <Clock4 className="w-5 h-5 text-amber-300" />
              <div className="text-sm font-medium">
                Дедлайн пропустить нельзя. <span className="text-amber-300 font-semibold">Действуем за 2 дня.</span>
              </div>
            </div>
          </div>

          {/* Risk grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {RISKS.map((r, i) => {
              const Icon = r.icon;
              return (
                <div
                  key={i}
                  data-testid={`risk-card-${i}`}
                  className="group relative bg-white border border-black/[0.06] rounded-2xl p-6 hover:border-[#DC2626]/30 transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-rose-50 text-[#DC2626] flex items-center justify-center group-hover:bg-[#DC2626] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="mono text-[10px] uppercase tracking-widest text-[#DC2626] font-bold bg-rose-50 px-2 py-1 rounded">
                      {r.metric}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-lg text-[#0F172A] tracking-tight mb-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
