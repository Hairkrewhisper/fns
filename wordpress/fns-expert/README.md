# FNS Expert — WordPress Theme

Премиальный продающий лендинг для сервиса ответов на требования ИФНС.

## Что внутри темы

```
fns-expert/
├── style.css              # Метаданные темы (обязательно для WP)
├── functions.php          # Подключение CSS/JS, SEO, Schema.org
├── index.php              # Главный шаблон (монтирует React-приложение)
├── front-page.php         # Шаблон для главной страницы
├── page-landing.php       # Шаблон для произвольной страницы "FNS Expert Landing"
├── screenshot.png         # Превью темы в админке (рекомендуется добавить 1200x900)
├── README.md              # Этот файл
└── assets/
    ├── css/
    │   └── main.9c4c77f0.css       # Production-сборка Tailwind + кастомные стили
    ├── js/
    │   └── main.91a98eaa.js        # React-приложение (бандл)
    └── images/
        ├── favicon.png
        └── fns-logo.png
```

## Установка

### Вариант 1: через админку WordPress
1. Откройте админку: `Внешний вид → Темы → Добавить новую → Загрузить тему`
2. Заархивируйте папку `fns-expert/` в `.zip`
3. Загрузите архив, активируйте тему

### Вариант 2: через FTP / файловый менеджер хостинга
1. Скопируйте папку `fns-expert/` в `wp-content/themes/`
2. В админке `Внешний вид → Темы` активируйте «FNS Expert»

### Вариант 3: через WP-CLI
```bash
wp theme install /path/to/fns-expert.zip --activate
```

## Настройка

### Главная страница
По умолчанию `front-page.php` автоматически отрисовывает лендинг.

Если вы хотите, чтобы главная использовала «Последние записи» (блог), а лендинг был на отдельной странице:

1. `Настройки → Чтение → Главная страница` → выберите «Статическая страница»
2. Создайте новую страницу `Лендинг`, в правой панели «Атрибуты страницы → Шаблон» выберите **«FNS Expert Landing»**
3. Назначьте её главной в `Настройки → Чтение`

### Изменение контента
Контент лендинга встроен в React-приложение. Чтобы изменить тексты, тарифы, FAQ:

1. Клонируйте репозиторий с исходниками (React + Tailwind)
2. Внесите правки в файлах `frontend/src/components/landing/*.jsx`
3. Запустите production-сборку:
   ```bash
   cd frontend && yarn install && yarn build
   ```
4. Скопируйте обновлённые файлы:
   ```bash
   cp frontend/build/static/css/main.*.css wp-content/themes/fns-expert/assets/css/
   cp frontend/build/static/js/main.*.js wp-content/themes/fns-expert/assets/js/
   ```
5. Обновите хеши в `functions.php`:
   ```php
   define('FNS_EXPERT_JS_HASH', 'НОВЫЙ_ХЕШ_JS');
   define('FNS_EXPERT_CSS_HASH', 'НОВЫЙ_ХЕШ_CSS');
   ```

### CRM-ссылки
В `functions.php` есть переменная `crmUrl`, которая передаётся в JS:

```php
'crmUrl' => 'https://crm.fns.expert',
```

Измените её, если CRM переедет на другой домен.

## Что входит в продакшн-сборку

- **15 секций лендинга**: Hero, TrustBar (marquee), ProblemStatement, HowItWorks (6 этапов), Features bento, DemandTypes (8 типов), Audience (5 сегментов), Pricing (5 тарифов), Comparison, Testimonials, FAQ (15 вопросов), FinalCTA, Footer, StickyCTA + Mobile Bottom Bar
- **Дизайн**: светлая премиум-палитра (Emerald #16A34A + Stone + Amber), шрифты Manrope + Onest + JetBrains Mono
- **Адаптив**: полностью оптимизирован для мобильных устройств (2026 trends — bottom thumb-zone CTA, sheet-меню, snap-scroll тарифов, safe-area для устройств с notch)
- **SEO**: Schema.org `LegalService` + offers, Open Graph, Twitter cards, корректные meta description/keywords
- **Производительность**: 123 KB JS gzip + 13 KB CSS gzip, шрифты с display=swap, prefers-reduced-motion

## SEO ключевые запросы (учтены в FAQ и текстах)

- ответ на требование фнс
- срок ответа на требование налоговой
- образец письма в фнс
- как ответить на требование через личный кабинет налогоплательщика
- ответ на требование о расхождении 6-НДФЛ и РСВ
- ответ на требование о зарплате ниже МРОТ / среднеотраслевой
- мотивированный отказ на требование
- ст. 93, 93.1, 88 НК РФ
- что грозит за неответ на требование ИФНС

## Интеграции

Сейчас все CTA-кнопки ведут на:
- `https://crm.fns.expert/register` — основная регистрация
- `https://crm.fns.expert/login` — вход
- `tel:+79854883889` — телефон
- `https://wa.me/79854883889` — WhatsApp
- `https://t.me/FNS_Expert_bot` — Telegram-бот
- `mailto:info@fns.expert` — почта

## Совместимость

- WordPress 6.0+
- PHP 7.4+
- Все современные браузеры (Chrome, Safari, Firefox, Edge)
- iOS Safari 14+, Chrome Mobile

## Лицензия

GPL v2 or later — соответствует требованиям WordPress.org.

## Поддержка

Email: info@fns.expert
Telegram: @FNS_Expert_bot
