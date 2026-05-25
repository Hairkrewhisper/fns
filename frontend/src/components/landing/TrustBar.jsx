import { ShieldCheck, Lock, ScrollText, Award } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, label: "Соответствие НК РФ" },
  { icon: Lock, label: "152-ФЗ · защита данных" },
  { icon: ScrollText, label: "Опыт 9+ лет с ИФНС" },
  { icon: Award, label: "Эксперты с разрядом" },
  { icon: ShieldCheck, label: "ЭЦП · нотариальная сила" },
  { icon: Lock, label: "Конфиденциальность" },
];

export default function TrustBar() {
  const arr = [...ITEMS, ...ITEMS];
  return (
    <section data-testid="trust-bar" className="bg-[#F4F4F1] border-y border-black/5 py-6 overflow-hidden">
      <div className="relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {arr.map((it, i) => {
            const Icon = it.icon;
            return (
              <div key={i} className="flex items-center gap-2.5 text-[#475569] shrink-0">
                <Icon className="w-4 h-4 text-[#064E3B]" />
                <span className="text-sm font-semibold tracking-tight">{it.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
