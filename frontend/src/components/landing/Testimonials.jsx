import { Quote, Star } from "lucide-react";

const ITEMS = [
  {
    quote:
      "Получила требование о расхождении 6-НДФЛ и РСВ — за 2 дня сделали такой ответ, что больше вопросов от ИФНС не было. Ни одного штрафа.",
    name: "Елена Севастьянова",
    role: "Главный бухгалтер, ООО «Поляна»",
    rating: 5,
  },
  {
    quote:
      "Я как ИП на УСН платил юристу по 15 тысяч за каждое требование. Перешёл на пакет «Старт» — экономия очевидна, качество то же.",
    name: "Михаил Орехов",
    role: "ИП, сфера IT-консалтинга",
    rating: 5,
  },
  {
    quote:
      "Холдинг из 14 юрлиц. Раньше был хаос с требованиями. Сейчас единый стандарт ответов и куратор. Безлимит окупился за месяц.",
    name: "Дмитрий Малахов",
    role: "Финансовый директор, группа компаний",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials"
      className="bg-white py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-6">
            <div className="text-[11px] tracking-[0.22em] uppercase font-bold text-[#16A34A] mb-5">
              · Отзывы клиентов
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-[#0F172A] leading-[1.05]">
              Бухгалтеры и руководители
              <br />о работе с нами
            </h2>
          </div>
          <div className="lg:col-span-6 lg:flex lg:items-end">
            <div className="flex items-center gap-6">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <div className="text-sm text-[#475569] font-medium">
                  4.96 из 5 · 312 отзывов
                </div>
              </div>
              <div className="h-12 w-px bg-black/10" />
              <div>
                <div className="text-2xl font-extrabold tracking-tight text-[#0F172A]">98%</div>
                <div className="text-xs text-[#475569] uppercase tracking-widest font-semibold mt-1">
                  возвращаются
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {ITEMS.map((t, i) => (
            <div
              key={i}
              data-testid={`testimonial-${i}`}
              className="bg-[#F9FAFB] rounded-3xl p-7 lg:p-8 relative border border-black/[0.04]"
            >
              <Quote className="w-8 h-8 text-[#16A34A]/15 mb-4" />
              <p className="text-base text-[#0F172A] leading-relaxed mb-7">«{t.quote}»</p>
              <div className="flex items-center gap-3 pt-5 border-t border-black/[0.06]">
                <div className="w-10 h-10 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm">
                  {t.name.split(" ").map((s) => s[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#0F172A] tracking-tight">{t.name}</div>
                  <div className="text-xs text-[#475569]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
