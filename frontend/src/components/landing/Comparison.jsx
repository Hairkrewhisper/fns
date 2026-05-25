import { Check, X } from "lucide-react";

const ROWS = [
  { label: "AI + OCR анализ требования", us: true, lawyer: false, soft: false },
  { label: "Юрист готовит позицию", us: true, lawyer: true, soft: false },
  { label: "Готовый ответ за 2 рабочих дня", us: true, lawyer: false, soft: true },
  { label: "Контроль дедлайнов 24/7", us: true, lawyer: false, soft: true },
  { label: "Юридическая защита позиции", us: true, lawyer: true, soft: false },
  { label: "Стоимость от 4 200 ₽ в пакете", us: true, lawyer: false, soft: true },
  { label: "Без помесячной подписки на ПО", us: true, lawyer: true, soft: false },
];

export default function Comparison() {
  return (
    <section
      data-testid="comparison"
      className="bg-[#F4F4F1] py-20 lg:py-32"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[11px] tracking-[0.22em] uppercase font-bold text-[#064E3B] mb-5">
            · Сравнение
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-[#0F172A] leading-[1.05]">
            Почему fns.expert,
            <br />а не частный юрист или Контур
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-black/[0.06] overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-5 bg-[#022C22] text-white">
            <div className="col-span-6 text-xs uppercase tracking-[0.18em] font-bold text-white/70">
              Возможность
            </div>
            <div className="col-span-2 text-center text-xs uppercase tracking-[0.16em] font-extrabold text-amber-300">
              fns.expert
            </div>
            <div className="col-span-2 text-center text-xs uppercase tracking-[0.16em] font-semibold text-white/60">
              Частный юрист
            </div>
            <div className="col-span-2 text-center text-xs uppercase tracking-[0.16em] font-semibold text-white/60">
              Бух. ПО
            </div>
          </div>
          {ROWS.map((r, i) => (
            <div
              key={i}
              className={`grid grid-cols-12 px-6 py-5 items-center text-sm ${
                i % 2 === 0 ? "bg-white" : "bg-[#F4F4F1]"
              }`}
            >
              <div className="col-span-6 font-semibold text-[#0F172A]">{r.label}</div>
              <div className="col-span-2 flex justify-center">
                {r.us ? <Check className="w-5 h-5 text-[#064E3B]" /> : <X className="w-5 h-5 text-rose-400" />}
              </div>
              <div className="col-span-2 flex justify-center">
                {r.lawyer ? <Check className="w-5 h-5 text-[#475569]" /> : <X className="w-5 h-5 text-rose-400" />}
              </div>
              <div className="col-span-2 flex justify-center">
                {r.soft ? <Check className="w-5 h-5 text-[#475569]" /> : <X className="w-5 h-5 text-rose-400" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
