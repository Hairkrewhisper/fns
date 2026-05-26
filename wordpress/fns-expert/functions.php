<?php
/**
 * FNS Expert Theme functions
 *
 * @package FNS_Expert
 */

if (!defined('ABSPATH')) { exit; }

define('FNS_EXPERT_VERSION', '1.0.0');
define('FNS_EXPERT_JS_HASH', '7bba51de');
define('FNS_EXPERT_CSS_HASH', '9c4c77f0');

/**
 * Базовая настройка темы
 */
function fns_expert_setup() {
    // Поддержка title-tag
    add_theme_support('title-tag');

    // Кастомный логотип в админке
    add_theme_support('custom-logo', array(
        'height'      => 80,
        'width'       => 80,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Поддержка миниатюр для блога (если будете добавлять статьи)
    add_theme_support('post-thumbnails');

    // Адаптивные embed
    add_theme_support('responsive-embeds');

    // Меню (если захотите добавить кастомные позже)
    register_nav_menus(array(
        'primary' => __('Главное меню', 'fns-expert'),
        'footer'  => __('Подвал', 'fns-expert'),
    ));
}
add_action('after_setup_theme', 'fns_expert_setup');

/**
 * Подключение скриптов и стилей React-приложения
 */
function fns_expert_enqueue_assets() {
    $theme_uri = get_template_directory_uri();

    // Подгружаем шрифты с правильной кириллической поддержкой
    wp_enqueue_style(
        'fns-expert-fonts',
        'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&family=Onest:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
        array(),
        null
    );

    // Главный CSS (Tailwind production build)
    wp_enqueue_style(
        'fns-expert-main',
        $theme_uri . '/assets/css/main.' . FNS_EXPERT_CSS_HASH . '.css',
        array(),
        FNS_EXPERT_VERSION
    );

    // Главный JS bundle (React app)
    wp_enqueue_script(
        'fns-expert-main',
        $theme_uri . '/assets/js/main.' . FNS_EXPERT_JS_HASH . '.js',
        array(),
        FNS_EXPERT_VERSION,
        true // в footer
    );

    // PUBLIC_URL для React (чтобы /images/fns-logo.png резолвилось правильно)
    wp_localize_script('fns-expert-main', 'FNS_THEME', array(
        'themeUrl'  => $theme_uri,
        'assetsUrl' => $theme_uri . '/assets',
        'crmUrl'    => 'https://crm.fns.expert',
    ));
}
add_action('wp_enqueue_scripts', 'fns_expert_enqueue_assets');

/**
 * Открытые маршруты — для SPA-роутинга, чтобы любые URL вели на главный шаблон
 * (используется, если хотите чтобы React Router работал на любых путях)
 */
function fns_expert_template_redirect() {
    // По умолчанию ничего не делаем — стандартный роутинг WP работает
    // Раскомментируйте, если хотите перенаправить все запросы на лендинг:
    // if (!is_admin() && !is_user_logged_in() && !is_404()) {
    //     include get_template_directory() . '/index.php';
    //     exit;
    // }
}
add_action('template_redirect', 'fns_expert_template_redirect');

/**
 * SEO meta-теги в <head>
 */
function fns_expert_seo_meta() {
    ?>
    <meta name="description" content="AI-сервис ответов на требования ИФНС под ключ. OCR + AI-анализ + налоговые юристы. Готовый ответ за 2 рабочих дня. От 6 000 ₽." />
    <meta name="keywords" content="ответ на требование фнс, ответ на требование налоговой, образец письма в фнс, срок ответа на требование, как ответить на требование, расхождение 6-НДФЛ РСВ, зарплата ниже МРОТ, мотивированный отказ, ст 93 НК РФ, ст 93.1 НК РФ" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="ru_RU" />
    <meta property="og:title" content="fns.expert — Ответы на требования ИФНС под ключ за 2 дня" />
    <meta property="og:description" content="AI-сервис ответов на требования налоговой. OCR + AI-анализ + проверка налоговых юристов. От 6 000 ₽." />
    <meta property="og:image" content="<?php echo esc_url(get_template_directory_uri() . '/assets/images/favicon.png'); ?>" />
    <meta property="og:url" content="<?php echo esc_url(home_url('/')); ?>" />
    <meta property="og:site_name" content="fns.expert" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="fns.expert — Ответы на требования ИФНС" />
    <meta name="twitter:description" content="AI + налоговые юристы. Ответ за 2 рабочих дня. От 6 000 ₽." />
    <meta name="twitter:image" content="<?php echo esc_url(get_template_directory_uri() . '/assets/images/favicon.png'); ?>" />

    <!-- Schema.org LegalService -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "fns.expert",
      "description": "AI-сервис ответов на требования ИФНС с экспертной проверкой налоговых юристов",
      "url": "<?php echo esc_url(home_url('/')); ?>",
      "telephone": "+7-985-488-38-89",
      "email": "info@fns.expert",
      "priceRange": "₽₽",
      "areaServed": { "@type": "Country", "name": "Russia" },
      "serviceType": "Подготовка ответов на требования ФНС",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.96",
        "reviewCount": "312"
      },
      "offers": [
        { "@type": "Offer", "name": "Разовый ответ", "price": "6000", "priceCurrency": "RUB" },
        { "@type": "Offer", "name": "Пакет Старт (5)", "price": "27000", "priceCurrency": "RUB" },
        { "@type": "Offer", "name": "Пакет Бизнес (10)", "price": "48000", "priceCurrency": "RUB" },
        { "@type": "Offer", "name": "Пакет Поток (20)", "price": "84000", "priceCurrency": "RUB" },
        { "@type": "Offer", "name": "Безлимит", "price": "199000", "priceCurrency": "RUB" }
      ]
    }
    </script>
    <?php
}
add_action('wp_head', 'fns_expert_seo_meta', 5);

/**
 * Кастомный favicon
 */
function fns_expert_favicon() {
    $favicon = get_template_directory_uri() . '/assets/images/favicon.png';
    echo '<link rel="icon" type="image/png" href="' . esc_url($favicon) . '" />' . "\n";
    echo '<link rel="apple-touch-icon" href="' . esc_url($favicon) . '" />' . "\n";
    echo '<meta name="theme-color" content="#16A34A" />' . "\n";
}
add_action('wp_head', 'fns_expert_favicon', 1);

/**
 * Убираем wp-admin-bar для не-админов (чтобы не ломал верстку лендинга)
 */
function fns_expert_hide_adminbar_for_subscribers() {
    if (!current_user_can('edit_posts')) {
        show_admin_bar(false);
    }
}
add_action('after_setup_theme', 'fns_expert_hide_adminbar_for_subscribers');

/**
 * Убираем лишние WP-теги в head (oembed, generator, RSS — не нужны для лендинга)
 */
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_shortlink_wp_head');

/**
 * Helper: вывести URL ассета темы
 */
function fns_expert_asset($path) {
    return get_template_directory_uri() . '/assets/' . ltrim($path, '/');
}
