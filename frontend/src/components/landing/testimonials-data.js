// Static data for Testimonials section. Items have stable IDs so React keys can derive
// from the data itself (no array-index keys, no reconciliation issues).

export const REVIEW_IMAGES = [
  { id: "rev-1", src: "https://fns.expert/assets/images/1.jpg-587x715.jpg", alt: "Отзыв клиента №1 — ответ на требование ИФНС" },
  { id: "rev-2", src: "https://fns.expert/assets/images/2.jpg-526x547.jpg", alt: "Отзыв клиента №2 — налоговая проверка" },
  { id: "rev-3", src: "https://fns.expert/assets/images/3.jpg-584x639.jpg", alt: "Отзыв клиента №3 — пояснения по НДС" },
  { id: "rev-4", src: "https://fns.expert/assets/images/4.jpg-544x504.jpg", alt: "Отзыв клиента №4 — расхождение 6-НДФЛ" },
  { id: "rev-5", src: "https://fns.expert/assets/images/5.jpg-527x759.jpg", alt: "Отзыв клиента №5 — встречная проверка" },
  { id: "rev-6", src: "https://fns.expert/assets/images/6.jpg-534x555.jpg", alt: "Отзыв клиента №6 — мотивированный отказ" },
  { id: "rev-7", src: "https://fns.expert/assets/images/7.jpg-519x659.jpg", alt: "Отзыв клиента №7 — комиссия по зарплате" },
  { id: "rev-8", src: "https://fns.expert/assets/images/8.jpg-684x719.jpg", alt: "Отзыв клиента №8 — обжалование решения" },
  { id: "rev-9", src: "https://fns.expert/assets/images/9.jpg-707x824.jpg", alt: "Отзыв клиента №9 — налоговый спор" },
];

export const FEATURED = {
  quote:
    "Получили требование ИФНС о расхождениях 6-НДФЛ и РСВ за 3 квартала. Сами бы потратили неделю и всё равно сдали бы лишнего. Команда fns.expert за 2 дня разобрала ситуацию по статьям НК, подготовила выверенный ответ с приложениями — ИФНС закрыла вопрос без дополнительных требований и штрафов.",
  name: "Елена Севастьянова",
  role: "Главный бухгалтер, ООО «Поляна»",
  result: "Штраф 30 000 ₽ предотвращён",
  metric: "2 дня",
  metricLabel: "до готового ответа",
  photo: "https://fns.expert/assets/images/1.jpg-587x715.jpg",
};

export const QUOTES = [
  {
    id: "q-orekhov",
    quote:
      "Я как ИП на УСН платил юристу по 15 тысяч за каждое требование. Перешёл на пакет «Старт» — экономия очевидна, качество то же.",
    name: "Михаил Орехов",
    role: "ИП, сфера IT-консалтинга",
  },
  {
    id: "q-malakhov",
    quote:
      "Холдинг из 14 юрлиц. Раньше был хаос с требованиями. Сейчас единый стандарт ответов и куратор. Безлимит окупился за месяц.",
    name: "Дмитрий Малахов",
    role: "Финансовый директор, группа компаний",
  },
  {
    id: "q-gromova",
    quote:
      "Пришло требование о зарплате ниже среднеотраслевой. Сама бы не стала спорить. Юристы fns.expert подготовили мотивированный отказ — комиссия отменена.",
    name: "Анна Громова",
    role: "Главный бухгалтер, ООО «Артель»",
  },
];

export function initials(name) {
  return name.split(" ").map((s) => s[0]).join("");
}
