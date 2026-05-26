import { Calculator, Briefcase, Building, Network, Users } from "lucide-react";

const ITEMS = [
  {
    icon: Calculator,
    title: "Бухгалтерам и главбухам",
    bullets: ["Снимаем рутину по ответам", "Защищаем вас перед руководством", "Грамотно — без правок и переделок"],
  },
  {
    icon: Briefcase,
    title: "ИП и микробизнесу",
    bullets: ["Простой язык, никакой воды", "Готовый ответ для ЛК ИП", "Стоимость от 6 000 ₽ за требование"],
  },
  {
    icon: Building,
    title: "ООО и руководителям",
    bullets: ["Снижаем риски доначислений", "Корпоративный стандарт ответов", "ЭЦП и нотариальная сила"],
  },
  {
    icon: Network,
    title: "Холдингам",
    bullets: ["Единая правовая позиция", "Безлимит на все юрлица", "Персональный куратор"],
  },
  {
    icon: Users,
    title: "Бухгалтерским аутсорсерам",
    bullets: ["Реферальный белый-лейбл", "Скидки от 20 требований", "API-интеграция (по запросу)"],
  },
];

export default function Audience() {
  return (
    <section
      data-testid="audience-section"
      className="bg-[#F9FAFB] py-14 sm:py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-[11px] tracking-[0.22em] uppercase font-bold text-[#16A34A] mb-5">
            · Кому подходит
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-[#0F172A] leading-[1.05]">
            От ИП на УСН
            <br />
            до холдингов
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={i}
                data-testid={`audience-${i}`}
                className="bg-white rounded-2xl p-6 border border-black/[0.04] hover:border-[#16A34A]/30 transition-all hover:-translate-y-1 duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#16A34A] text-white flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base tracking-tight text-[#0F172A] mb-4 leading-snug">
                  {it.title}
                </h3>
                <ul className="space-y-2">
                  {it.bullets.map((b, j) => (
                    <li key={j} className="text-[13px] text-[#475569] leading-relaxed flex gap-2">
                      <span className="text-[#16A34A] mt-1.5 w-1 h-1 rounded-full bg-[#16A34A] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
