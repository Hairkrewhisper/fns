# fns.expert — Премиальный продающий лендинг

## Original problem statement
Создать современную премиальную продающую тему для основного сайта WordPress fns.expert.
Сервис: AI-сервис ответов на требования ИФНС под ключ (OCR + AI-анализ + налоговые юристы).
Конкуренты: buhsoft.ru, kontur.ru, klerk.ru, taxcom.ru, glavbukh.ru, 1c.ru и др.
Цель: продающий React-лендинг → готовая WordPress-тема, строго по WP Codex.

## Architecture
- **Frontend**: React 19 + Tailwind + Shadcn/UI (Manrope/Onest/JetBrains Mono шрифты).
- **WordPress Theme**: `/app/wordpress/fns-expert/` — упакована в `fns-expert.zip`, соответствует WP Codex.
- **CTA**: ведут на внешние URL → `crm.fns.expert/register`, `crm.fns.expert/login`, `tel:`, `mailto:`, `t.me`, `wa.me`.

## Design system
- **Палитра** (light theme, совпадает с crm.fns.expert): Emerald `#16A34A` / `#15803D` (CTA), Slate `#0F172A` (текст), Stone `#F9FAFB` (фон карточек), Amber `#F59E0B` (popular-метка), Danger `#DC2626`.
- **Шрифты**: Manrope (заголовки), Onest (тело), JetBrains Mono (цифры/коды статей НК).
- **Стиль**: Premium + Swiss high-contrast.

## Sections (15 секций)
1. Header — fixed, с 2026 fullscreen burger menu (mobile)
2. Hero — premium с зелёным акцентом + scan-card OCR-аналитики
3. TrustBar (marquee)
4. ProblemStatement
5. HowItWorks (6 этапов)
6. Features (bento)
7. DemandTypes (8 типов)
8. Audience (5 сегментов)
9. Pricing (5 тарифов)
10. Comparison
11. **Testimonials** (featured + 9 фото с otziv.html + текстовые отзывы) — Feb 2026 update
12. FAQ (15 вопросов)
13. FinalCTA
14. Footer
15. StickyCTA + Mobile Bottom Bar

## What's implemented (Feb 2026)
- ✅ Все 15 секций — полностью функциональны
- ✅ Светлая премиум-палитра c зелёным акцентом `#16A34A` (совпадает с crm.fns.expert)
- ✅ Логотип `fns-logo.png` + favicon
- ✅ Mobile optimization (2026 trends): нижний CTA-бар, snap-scroll тарифов, safe-area
- ✅ **2026 fullscreen burger menu** — выделено в `BurgerMenuOverlay.jsx`
- ✅ **Featured testimonial** — главный кейс месяца с фото и метриками
- ✅ **Реальные клиенты** — секция с 9 фото-отзывами из `fns.expert/otziv.html` + masonry + lightbox с keyboard-навигацией
- ✅ **Lead-magnet в Hero** — drag-and-drop PDF с UTM-метками → CRM
- ✅ **WordPress тема по Codex** (v1.2.0): 26 файлов

## Code quality refactor (Feb 2026)
- ✅ Header.jsx сокращён с 293 → 144 строк (выделены `Logo`, `DesktopNav`, `Actions`, `BurgerToggle`, `BurgerMenuOverlay`)
- ✅ LeadMagnetCard.jsx вынесен в отдельный файл с кастомным хуком `useUploadFlow` и подкомпонентами (`Dropzone`, `IdleContent`, `BusyContent`, `TrustRow`)
- ✅ Testimonials.jsx разбит на `FeaturedTestimonialCard`, `RealClientsGallery`, `OtherQuotesGrid`, `TestimonialLightbox`
- ✅ Hero.jsx разбит на `HeroContent`, `Eyebrow`, `Headline`, `Description`, `CtaRow`, `StatsRow`, `FeatureCell`
- ✅ Новые переиспользуемые хуки: `useScrollPast`, `useBodyScrollLock`, `useEscapeKey` в `/hooks/use-ui-effects.js`
- ✅ Все React-ключи стабильные (item.id / item.title / item.href вместо array index)
- ✅ Данные вынесены в `testimonials-data.js` с id-полями
- ✅ ESLint без замечаний

## Test results
- Iteration 1 (initial): 55/55 ✅
- Iteration 2 (after refactor regression): 60/61 ✅ (1 false-positive — span text concat)

## WordPress Theme Codex compliance
- `style.css` — полный обязательный header
- Префиксы функций `fns_expert_*` и констант `FNS_EXPERT_*`
- ABSPATH guard во всех `.php`-файлах
- Все строки i18n-готовы (`__()`, `esc_html__()` с domain `fns-expert`)
- Sanitization: `esc_url()`, `esc_attr()`, `esc_html()`
- Template hierarchy: front-page → index → 404 → page → single
- GPL v2+ лицензия

## Prioritized backlog
### P1 (next iteration)
- Блог-секция со статьями под SEO (по запросам "образец ответа на требование", "что делать если ИФНС...")
- Калькулятор стоимости (выбор пакета + кол-во требований)
- Форма "Заявка на бесплатный анализ" с интеграцией email/Telegram

### P2
- Lead-magnet: PDF-чеклист "Как ответить на требование за 5 шагов"
- Кейсы (case-study) с цифрами доначислений, которые удалось снять
- Интеграция Яндекс.Метрики + ВК Pixel
- WPML/Polylang для многоязычности

### P3
- A/B тестирование hero-заголовка
- ReCAPTCHA для контактных форм
- AMP-версия для Яндекса

## Files of reference
- `/app/frontend/src/components/landing/*` (15 секций)
- `/app/wordpress/fns-expert/` (Codex-compliant theme)
- `/app/wordpress/fns-expert.zip` (готов к загрузке в WP)
- `/app/test_reports/iteration_1.json` (100% pass)
