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
      className="bg-[#F9FAFB] py-14 sm:py-20 lg:py-32"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[11px] tracking-[0.22em] uppercase font-bold text-[#16A34A] mb-5">
            · Сравнение
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-[#0F172A] leading-[1.05]">
            Почему fns.expert,
            <br />а не частный юрист или Контур
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden shadow-sm">
          <div className="grid grid-cols-12 px-6 py-5 bg-[#16A34A] text-white">
            <div className="col-span-6 text-xs uppercase tracking-[0.18em] font-bold text-white/80">
              Возможность
            </div>
            <div className="col-span-2 text-center text-xs uppercase tracking-[0.16em] font-extrabold text-white">
              fns.expert
            </div>
            <div className="col-span-2 text-center text-xs uppercase tracking-[0.16em] font-semibold text-white/70">
              Частный юрист
            </div>
            <div className="col-span-2 text-center text-xs uppercase tracking-[0.16em] font-semibold text-white/70">
              Бух. ПО
            </div>
          </div>
          {ROWS.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-12 px-6 py-5 items-center text-sm ${
                i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"
              }`}
            >
              <div className="col-span-6 font-semibold text-[#0F172A]">{r.label}</div>
              <div className="col-span-2 flex justify-center">
                {r.us ? <Check className="w-5 h-5 text-[#16A34A]" /> : <X className="w-5 h-5 text-rose-400" />}
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
