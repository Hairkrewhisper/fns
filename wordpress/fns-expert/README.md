# FNS Expert — WordPress Theme

**Премиальный продающий лендинг для сервиса ответов на требования ИФНС.**
Версия: 1.1.0 · Совместим с WordPress 6.0+ / PHP 7.4+

Тема построена строго по WordPress Theme Codex
(https://codex.wordpress.org/Theme_Development).

---

## 📦 Структура темы (Codex-compliant)

```
fns-expert/
├── style.css              # Метаданные темы + базовые стили
├── functions.php          # Хуки after_setup_theme, wp_enqueue_scripts, customizer, SEO
├── index.php              # Главный шаблон (fallback)
├── front-page.php         # Шаблон главной страницы (React-лендинг)
├── page-landing.php       # Шаблон "FNS Expert Landing" для произвольных страниц
├── page.php               # Шаблон статической страницы (fallback)
├── single.php             # Шаблон записи блога (fallback)
├── 404.php                # Кастомная страница 404
├── header.php             # Общий <head> + открывающий <body>
├── footer.php             # wp_footer() + закрывающие теги
├── sidebar.php            # Сайдбар (опционально)
├── searchform.php         # Кастомная форма поиска
├── screenshot.png         # Превью темы (1200×900, для админки)
├── README.md              # Этот файл
├── languages/             # Файлы перевода (.po/.mo)
└── assets/
    ├── css/main.*.css     # Production Tailwind bundle
    ├── js/main.*.js       # React production bundle
    ├── images/            # fns-logo.png, favicon.png
    └── .htaccess          # Кэширование статических ассетов
```

---

## ✅ Соответствие WP Codex

- `style.css` содержит **обязательный заголовок** с Theme Name, URI, Author, Version, License, Text Domain, Tags
- `functions.php` использует **хуки `after_setup_theme`** для регистрации поддержки темы (`title-tag`, `post-thumbnails`, `custom-logo`, `html5`, `responsive-embeds`, `automatic-feed-links`, `align-wide`, `editor-styles`)
- Скрипты и стили подключены через **`wp_enqueue_scripts`** хук с `wp_enqueue_script` / `wp_enqueue_style`
- Передача данных в JS через **`wp_localize_script`**
- **i18n-ready** — все строки обёрнуты в `__()` / `esc_html__()` / `esc_attr__()` с `text-domain` = `fns-expert`
- **a11y-ready** — skip-link, `screen-reader-text`, `role="main"`
- **Sanitization & Escaping** — `esc_url()`, `esc_attr()`, `esc_html()` везде, где нужно
- **Customizer API** — настройка CRM URL из админки WordPress
- **Template hierarchy** соблюдена: `front-page.php` → `home.php` → `index.php`
- Соблюдены префиксы функций (`fns_expert_*`) и констант (`FNS_EXPERT_*`)
- Защита от прямого доступа `if ( ! defined( 'ABSPATH' ) ) { exit; }` во всех `.php`-файлах
- GPL v2+ лицензия (требование WordPress.org)

---

## 🚀 Установка

### Вариант 1 — через админку WP
1. Откройте `Внешний вид → Темы → Добавить новую → Загрузить тему`
2. Загрузите `fns-expert.zip`
3. Активируйте

### Вариант 2 — через FTP/SFTP
1. Скопируйте папку `fns-expert/` в `wp-content/themes/`
2. Активируйте через `Внешний вид → Темы`

### Вариант 3 — WP-CLI
```bash
wp theme install /path/to/fns-expert.zip --activate
```

---

## ⚙️ Настройка темы

### Изменение URL CRM
1. Откройте `Внешний вид → Настроить → FNS Expert — настройки`
2. Установите `URL CRM`
3. Все CTA-кнопки автоматически будут вести на новый URL (через `FNS_THEME.crmUrl`)

### Главная страница
По умолчанию `front-page.php` отрисовывает React-лендинг.
Если на сайте также нужен блог:
1. `Настройки → Чтение → Главная страница → Статическая страница`
2. Создайте «Лендинг» → выберите шаблон `FNS Expert Landing`
3. Назначьте её главной

---

## 🔨 Workflow — обновление контента

Контент встроен в React. Чтобы изменить тексты:

```bash
cd /app/frontend
# Внести правки в src/components/landing/*.jsx
yarn build

# Скопировать обновлённые файлы:
cp build/static/css/main.*.css /app/wordpress/fns-expert/assets/css/
cp build/static/js/main.*.js   /app/wordpress/fns-expert/assets/js/

# Обновить хеши в functions.php:
# define('FNS_EXPERT_JS_HASH', 'НОВЫЙ_ХЕШ');
# define('FNS_EXPERT_CSS_HASH', 'НОВЫЙ_ХЕШ');

# Пересобрать ZIP:
cd /app/wordpress && zip -r fns-expert.zip fns-expert/ -x "*.DS_Store"
```

---

## 📊 Что входит в продакшн-сборку

**15 секций лендинга:**
Hero · TrustBar (marquee) · ProblemStatement · HowItWorks (6 этапов) · Features (bento) ·
DemandTypes (8 типов) · Audience · Pricing (5 тарифов) · Comparison · **Testimonials**
(featured + реальные фото с otziv.html + текстовые) · FAQ (15 вопросов) · FinalCTA · Footer · StickyCTA

**Мобильная адаптация — тренды 2026:**
- 🔥 Полноэкранный бургер-меню (нумерованные пункты, slide-stagger анимации)
- Нижний thumb-zone CTA для iPhone
- Snap-scroll тарифов
- Safe-area для устройств с notch
- Touch-ripple эффекты

**Дизайн:** Светлая премиум-палитра — Emerald `#16A34A` + Stone + Amber. Шрифты Manrope + Onest + JetBrains Mono.

**SEO:** Schema.org `LegalService` + offers, Open Graph, Twitter Cards, валидные meta description/keywords.

**Производительность:** ~123 KB JS gzip + ~13 KB CSS gzip, `display=swap`, defer JS, `prefers-reduced-motion`.

---

## 🔗 Воронка продаж (CTA-карта)

Все кнопки ведут на:
- **`https://crm.fns.expert/register`** — основная регистрация (Hero, Pricing, Header, MobileMenu, FinalCTA)
- **`https://crm.fns.expert/login`** — вход (Header)
- **`tel:+79854883889`** — телефон (Header, FinalCTA, Footer)
- **`https://wa.me/79854883889`** — WhatsApp (StickyCTA, FinalCTA, Footer)
- **`https://t.me/FNS_Expert_bot`** — Telegram-бот (FinalCTA, Footer)
- **`mailto:info@fns.expert`** — почта (FinalCTA, Footer)

---

## 📝 Лицензия

GPL v2 or later — соответствует требованиям WordPress.org.

## 🆘 Поддержка

- Email: info@fns.expert
- Telegram: @FNS_Expert_bot
- Тел.: +7 985 488-38-89
