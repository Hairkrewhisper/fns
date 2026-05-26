import { FileSearch, Users2, Receipt, TrendingDown, GitCompareArrows, Building2, Wallet, ScrollText } from "lucide-react";

const TYPES = [
  {
    icon: ScrollText,
    title: "По ст. 93 НК РФ",
    desc: "Документы в рамках камеральной или выездной проверки.",
    tag: "Документы",
  },
  {
    icon: Users2,
    title: "По ст. 93.1 — встречные",
    desc: "Информация о контрагенте, выписки, договоры, акты.",
    tag: "Контрагент",
  },
  {
    icon: Receipt,
    title: "Пояснения по НДС",
    desc: "Разрывы, расхождения с книгой покупок / продаж.",
    tag: "НДС",
  },
  {
    icon: GitCompareArrows,
    title: "Расхождения 6-НДФЛ ↔ РСВ",
    desc: "Базы по страхвзносам и НДФЛ не сошлись. Пояснения.",
    tag: "Отчётность",
  },
  {
    icon: TrendingDown,
    title: "Зарплата ниже МРОТ или средней",
    desc: "Объясняем структуру выплат, неполную занятость, сезонность.",
    tag: "ФОТ",
  },
  {
    icon: Building2,
    title: "Зарплата ниже среднеотраслевой",
    desc: "Аргументированный ответ на «зарплатные» комиссии ИФНС.",
    tag: "Комиссия",
  },
  {
    icon: Wallet,
    title: "Вывод денег / зарплатный проект ИП",
    desc: "Объяснения по операциям самозанятых и ИП на УСН.",
    tag: "ИП",
  },
  {
    icon: FileSearch,
    title: "Мотивированный отказ",
    desc: "Когда требование незаконно или превышает полномочия ИФНС.",
    tag: "Отказ",
  },
];

export default function DemandTypes() {
  return (
    <section
      id="types"
      data-testid="demand-types"
      className="bg-white py-14 sm:py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <div className="text-[11px] tracking-[0.22em] uppercase font-bold text-[#16A34A] mb-5">
              · Типы требований ФНС
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-[#0F172A] leading-[1.05]">
              Отвечаем на любые требования ИФНС — от стандартных до сложных
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <p className="text-base text-[#475569] leading-relaxed">
              Камеральные, встречные, по разрывам НДС, по зарплате, по контрагентам. Готовим
              как ответ по существу, так и мотивированный отказ — там, где требование выходит
              за рамки полномочий ИФНС.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {TYPES.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={i}
                data-testid={`demand-type-${i}`}
                className="group bg-[#F9FAFB] hover:bg-[#16A34A] border border-[#E5E7EB] rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(22,163,74,0.4)]"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white text-[#16A34A] group-hover:bg-white/15 group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#475569] group-hover:text-white transition-colors">
                    {t.tag}
                  </span>
                </div>
                <h3 className="font-extrabold text-base tracking-tight text-[#0F172A] group-hover:text-white mb-2 transition-colors">
                  {t.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[#475569] group-hover:text-white/90 transition-colors">
                  {t.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
