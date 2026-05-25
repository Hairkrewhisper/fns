import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown } from "lucide-react";

const TIERS = [
  {
    name: "Разовый ответ",
    price: "6 000",
    unit: "₽",
    sub: "за 1 требование",
    desc: "Подходит, если требования приходят редко",
    features: [
      "Анализ требования ИФНС",
      "Проверка законности",
      "Подготовка ответа",
      "Рекомендации по позиции",
    ],
    cta: "Оставить заявку",
    popular: false,
    dark: false,
  },
  {
    name: "Пакет «Старт»",
    price: "27 000",
    unit: "₽",
    sub: "5 ответов · 5 400 ₽ / шт.",
    desc: "ИП, малый бизнес, нерегулярные запросы",
    features: [
      "Ответы на 5 требований",
      "Правовой анализ",
      "Письменная позиция",
      "Приоритетная обработка",
      "Срок действия: 2 месяца",
    ],
    cta: "Оставить заявку",
    save: "экономия 3 000 ₽",
    popular: false,
    dark: false,
  },
  {
    name: "Пакет «Бизнес»",
    price: "48 000",
    unit: "₽",
    sub: "10 ответов · 4 800 ₽ / шт.",
    desc: "ООО, бухгалтерские компании, группы",
    features: [
      "Ответы на 10 требований",
      "Правовой анализ",
      "Аргументированная позиция",
      "Стратегия ответа",
      "Приоритетная очередь",
      "Единый стандарт документов",
      "Срок действия: 4 месяца",
    ],
    cta: "Выбрать «Бизнес»",
    save: "экономия 12 000 ₽",
    popular: true,
    dark: true,
  },
  {
    name: "Пакет «Поток»",
    price: "84 000",
    unit: "₽",
    sub: "20 ответов · 4 200 ₽ / шт.",
    desc: "Холдинги, аутсорсеры, большой документооборот",
    features: [
      "Ответы на 20 требований",
      "Высокий приоритет",
      "Тактика взаимодействия",
      "Единый юридический стандарт",
      "Срок действия: 6 месяцев",
    ],
    cta: "Оставить заявку",
    save: "экономия 36 000 ₽",
    popular: false,
    dark: false,
  },
  {
    name: "Безлимит",
    price: "199 000",
    unit: "₽/мес",
    sub: "без ограничений",
    desc: "Крупные бухгалтерии, аутсорсинговые сети",
    features: [
      "Безлимит требований",
      "Правовой анализ",
      "Проверка правомерности",
      "Письменные ответы",
      "Ускоренный режим (до 12 ч)",
      "Персональный куратор",
    ],
    cta: "Связаться с нами",
    popular: false,
    dark: false,
    crown: true,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="bg-white py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="text-[11px] tracking-[0.22em] uppercase font-bold text-[#064E3B] mb-5">
            · Тарифы
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-[#0F172A] leading-[1.05]">
            Юридически выверенный ответ — не шаблонная отписка
          </h2>
          <p className="mt-5 text-base lg:text-lg text-[#475569] leading-relaxed max-w-2xl">
            Выберите формат под вашу нагрузку. Чем больше требований в пакете — тем ниже
            стоимость одного ответа.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
          {TIERS.map((t, i) => (
            <PriceCard key={i} tier={t} index={i} />
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-4 lg:gap-5">
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-7">
            <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#064E3B] mb-3">
              что вы получаете
            </div>
            <ul className="space-y-2 text-sm text-[#0F172A]">
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" /> Юридически выверенный ответ на требование</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" /> Проверку объёма истребуемых сведений</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" /> Снижение риска передачи лишних документов</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" /> Понятную правовую позицию</li>
              <li className="flex gap-2.5"><Check className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" /> Экономию времени бухгалтера и руководителя</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-7">
            <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-amber-700 mb-3">
              важно знать
            </div>
            <ul className="space-y-2 text-sm text-[#0F172A]">
              <li>• Услуга — исключительно на требования ИФНС</li>
              <li>• Жалобы, возражения, допросы и суд — отдельно</li>
              <li>• Сложные ситуации согласовываются индивидуально</li>
              <li>• Приём документов: пн–пт, 09:00–18:00 (МСК)</li>
              <li>• Ускоренный срок (до 12 ч) — стандартные требования</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceCard({ tier, index }) {
  const isDark = tier.dark;
  return (
    <div
      data-testid={`pricing-tier-${index}`}
      className={`relative rounded-3xl p-7 flex flex-col ${
        isDark
          ? "bg-[#022C22] text-white border-2 border-[#064E3B] lg:-translate-y-3 shadow-2xl"
          : "bg-white text-[#0F172A] border border-black/[0.06]"
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-amber-500 text-[#022C22] text-[10px] uppercase tracking-[0.18em] font-extrabold px-3 py-1.5 rounded-full shadow-lg">
          <Sparkles className="w-3 h-3" />
          Популярный
        </div>
      )}
      {tier.crown && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-[#0F172A] text-white text-[10px] uppercase tracking-[0.18em] font-extrabold px-3 py-1.5 rounded-full shadow-lg">
          <Crown className="w-3 h-3" />
          Максимум
        </div>
      )}

      <div className="mb-5">
        <h3 className={`text-lg font-extrabold tracking-tight mb-1 ${isDark ? "text-white" : "text-[#0F172A]"}`}>
          {tier.name}
        </h3>
        <p className={`text-xs ${isDark ? "text-white/60" : "text-[#475569]"}`}>{tier.desc}</p>
      </div>

      <div className="mb-2 flex items-baseline gap-1">
        <span className={`text-4xl font-extrabold tracking-tighter ${isDark ? "text-white" : "text-[#0F172A]"}`}>
          {tier.price}
        </span>
        <span className={`text-base font-bold ${isDark ? "text-emerald-300" : "text-[#064E3B]"}`}>
          {tier.unit}
        </span>
      </div>
      <p className={`text-xs ${isDark ? "text-white/50" : "text-[#475569]"} mb-2`}>{tier.sub}</p>
      {tier.save && (
        <div className={`inline-flex self-start text-[10px] uppercase tracking-[0.14em] font-extrabold px-2 py-1 rounded-md mb-5 ${
          isDark ? "bg-amber-500/20 text-amber-300" : "bg-amber-100 text-amber-700"
        }`}>
          {tier.save}
        </div>
      )}
      {!tier.save && <div className="h-5 mb-5" />}

      <ul className={`space-y-2.5 mb-7 text-[13px] flex-1 ${isDark ? "text-white/80" : "text-[#0F172A]"}`}>
        {tier.features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? "text-emerald-300" : "text-[#064E3B]"}`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        data-testid={`pricing-cta-${index}`}
        className={`w-full rounded-full h-11 text-sm font-semibold ${
          isDark
            ? "bg-amber-500 hover:bg-amber-400 text-[#022C22]"
            : "bg-[#064E3B] hover:bg-[#022C22] text-white"
        }`}
      >
        <a href="https://crm.fns.expert/register">{tier.cta}</a>
      </Button>
    </div>
  );
}
