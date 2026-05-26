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
- ✅ **2026 fullscreen burger menu** — тёмный полноэкранный оверлей, нумерация 01–06, slide-stagger анимации, ArrowUpRight, зелёные орбы на фоне
- ✅ **Featured testimonial** — главный кейс месяца с фото-скриншотом отзыва (рекомендательное письмо ООО ТЕМП), метриками (Штраф 30 000 ₽ предотвращён / 2 дня / Скриншот клиента) и автором (Елена Севастьянова)
- ✅ **Реальные клиенты** — отдельная секция с 9 фото-отзывами из `fns.expert/otziv.html` + masonry-сетка + lightbox с навигацией
- ✅ **WordPress тема по Codex**: 26 файлов
  - style.css с полным header (Theme Name, URI, Author, Version, License, Text Domain, Tags)
  - functions.php с правильными хуками (after_setup_theme, wp_enqueue_scripts, customize_register), i18n, sanitization
  - Шаблоны: index.php, front-page.php, page-landing.php, page.php, single.php, 404.php
  - Партиалы: header.php, footer.php, sidebar.php, searchform.php
  - screenshot.png (1200×900), README.md, /languages/, /assets/.htaccess
  - Customizer API — настройка CRM URL из админки
  - HTML5 support, automatic-feed-links, responsive-embeds, align-wide, editor-styles
  - skip-link для accessibility
- ✅ Воронка продаж проверена: все CTA (15+) ведут на правильные URL, `crm.fns.expert` отвечает 200
- ✅ Testing agent 100% (55/55 тестов)

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
