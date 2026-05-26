<?php
/**
 * FNS Expert theme functions and definitions
 *
 * @link https://codex.wordpress.org/Theme_Development
 * @link https://codex.wordpress.org/Plugin_API
 *
 * @package FNS_Expert
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Theme version & asset hashes — обновляются при пересборке React.
 */
if ( ! defined( 'FNS_EXPERT_VERSION' ) ) {
	define( 'FNS_EXPERT_VERSION', '1.1.0' );
}
if ( ! defined( 'FNS_EXPERT_JS_HASH' ) ) {
	define( 'FNS_EXPERT_JS_HASH', '7cee4a74' );
}
if ( ! defined( 'FNS_EXPERT_CSS_HASH' ) ) {
	define( 'FNS_EXPERT_CSS_HASH', 'a13a4d2a' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 *
 * @since 1.0.0
 */
function fns_expert_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 */
	load_theme_textdomain( 'fns-expert', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 */
	add_theme_support( 'post-thumbnails' );

	// Custom logo support.
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 80,
			'width'       => 80,
			'flex-height' => true,
			'flex-width'  => true,
		)
	);

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Add support for responsive embeds.
	add_theme_support( 'responsive-embeds' );

	// Add support for full and wide-aligned images.
	add_theme_support( 'align-wide' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'primary' => esc_html__( 'Главное меню', 'fns-expert' ),
			'footer'  => esc_html__( 'Подвал', 'fns-expert' ),
		)
	);

	// Add support for editor styles.
	add_theme_support( 'editor-styles' );

	// Set the content width — used by WordPress for embeds.
	if ( ! isset( $GLOBALS['content_width'] ) ) {
		$GLOBALS['content_width'] = 1280;
	}
}
add_action( 'after_setup_theme', 'fns_expert_setup' );

/**
 * Register widget area.
 *
 * @link https://codex.wordpress.org/Function_Reference/register_sidebar
 */
function fns_expert_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Сайдбар (опционально)', 'fns-expert' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Опциональный сайдбар (не используется на лендинге).', 'fns-expert' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'fns_expert_widgets_init' );

/**
 * Enqueue scripts and styles.
 *
 * @link https://codex.wordpress.org/Function_Reference/wp_enqueue_script
 */
function fns_expert_scripts() {
	$theme_uri = get_template_directory_uri();
	$theme_dir = get_template_directory();

	// 1) Theme stylesheet (style.css with theme meta).
	wp_enqueue_style(
		'fns-expert-style',
		get_stylesheet_uri(),
		array(),
		FNS_EXPERT_VERSION
	);

	// 2) Preconnect to Google Fonts (для скорости).
	add_action(
		'wp_head',
		function () {
			echo '<link rel="preconnect" href="https://fonts.googleapis.com" />' . "\n";
			echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />' . "\n";
		},
		2
	);

	// 3) Google Fonts (Manrope + Onest + JetBrains Mono).
	wp_enqueue_style(
		'fns-expert-fonts',
		'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&family=Onest:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
		array(),
		null
	);

	// 4) Главный CSS (Tailwind production build).
	$css_file = '/assets/css/main.' . FNS_EXPERT_CSS_HASH . '.css';
	if ( file_exists( $theme_dir . $css_file ) ) {
		wp_enqueue_style(
			'fns-expert-main',
			$theme_uri . $css_file,
			array( 'fns-expert-style' ),
			FNS_EXPERT_VERSION
		);
	}

	// 5) Главный JS bundle (React).
	$js_file = '/assets/js/main.' . FNS_EXPERT_JS_HASH . '.js';
	if ( file_exists( $theme_dir . $js_file ) ) {
		wp_enqueue_script(
			'fns-expert-main',
			$theme_uri . $js_file,
			array(),
			FNS_EXPERT_VERSION,
			true // в footer
		);

		// Передаём данные в JS — для assetUrl helper.
		wp_localize_script(
			'fns-expert-main',
			'FNS_THEME',
			array(
				'themeUrl'  => esc_url( $theme_uri ),
				'assetsUrl' => esc_url( $theme_uri . '/assets' ),
				'crmUrl'    => esc_url( get_theme_mod( 'fns_expert_crm_url', 'https://crm.fns.expert' ) ),
				'ajaxUrl'   => esc_url( admin_url( 'admin-ajax.php' ) ),
				'nonce'     => wp_create_nonce( 'fns-expert-nonce' ),
			)
		);
	}

	// 6) Скрипт комментариев — только если есть страница с комментариями.
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'fns_expert_scripts' );

/**
 * Add 'defer' / 'async' to React bundle for performance.
 *
 * @param string $tag    The original script tag.
 * @param string $handle The script handle.
 * @return string
 */
function fns_expert_defer_scripts( $tag, $handle ) {
	if ( 'fns-expert-main' === $handle ) {
		return str_replace( ' src', ' defer src', $tag );
	}
	return $tag;
}
add_filter( 'script_loader_tag', 'fns_expert_defer_scripts', 10, 2 );

/**
 * SEO meta tags + Open Graph + Schema.org LegalService.
 *
 * @since 1.0.0
 */
function fns_expert_seo_meta() {
	?>
	<meta name="description" content="<?php echo esc_attr( __( 'AI-сервис ответов на требования ИФНС под ключ. OCR + AI-анализ + налоговые юристы. Готовый ответ за 2 рабочих дня. От 6 000 ₽.', 'fns-expert' ) ); ?>" />
	<meta name="keywords" content="ответ на требование фнс, ответ на требование налоговой, образец письма в фнс, срок ответа на требование, как ответить на требование, расхождение 6-НДФЛ РСВ, зарплата ниже МРОТ, мотивированный отказ, ст 93 НК РФ, ст 93.1 НК РФ" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="ru_RU" />
	<meta property="og:title" content="fns.expert — Ответы на требования ИФНС под ключ за 2 дня" />
	<meta property="og:description" content="AI-сервис ответов на требования налоговой. OCR + AI-анализ + проверка налоговых юристов. От 6 000 ₽." />
	<meta property="og:image" content="<?php echo esc_url( get_template_directory_uri() . '/assets/images/favicon.png' ); ?>" />
	<meta property="og:url" content="<?php echo esc_url( home_url( '/' ) ); ?>" />
	<meta property="og:site_name" content="fns.expert" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="fns.expert — Ответы на требования ИФНС" />
	<meta name="twitter:description" content="AI + налоговые юристы. Ответ за 2 рабочих дня. От 6 000 ₽." />
	<meta name="twitter:image" content="<?php echo esc_url( get_template_directory_uri() . '/assets/images/favicon.png' ); ?>" />

	<!-- Schema.org LegalService -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "LegalService",
		"name": "fns.expert",
		"description": "AI-сервис ответов на требования ИФНС с экспертной проверкой налоговых юристов",
		"url": "<?php echo esc_url( home_url( '/' ) ); ?>",
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
add_action( 'wp_head', 'fns_expert_seo_meta', 5 );

/**
 * Custom favicon (works alongside site_icon if not set).
 *
 * @since 1.0.0
 */
function fns_expert_favicon() {
	// Если в WP настроен site_icon — используем его.
	if ( has_site_icon() ) {
		return;
	}
	$favicon = get_template_directory_uri() . '/assets/images/favicon.png';
	echo '<link rel="icon" type="image/png" href="' . esc_url( $favicon ) . '" />' . "\n";
	echo '<link rel="apple-touch-icon" href="' . esc_url( $favicon ) . '" />' . "\n";
	echo '<meta name="theme-color" content="#16A34A" />' . "\n";
}
add_action( 'wp_head', 'fns_expert_favicon', 1 );

/**
 * Hide admin bar for non-editors (чтобы не ломал лендинг).
 */
function fns_expert_hide_adminbar_for_subscribers() {
	if ( ! current_user_can( 'edit_posts' ) ) {
		show_admin_bar( false );
	}
}
add_action( 'after_setup_theme', 'fns_expert_hide_adminbar_for_subscribers' );

/**
 * Cleanup unnecessary wp_head clutter.
 */
function fns_expert_cleanup_head() {
	remove_action( 'wp_head', 'wp_generator' );
	remove_action( 'wp_head', 'wlwmanifest_link' );
	remove_action( 'wp_head', 'rsd_link' );
	remove_action( 'wp_head', 'wp_shortlink_wp_head' );
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
}
add_action( 'init', 'fns_expert_cleanup_head' );

/**
 * Customizer settings — позволяет менять CRM URL из админки.
 *
 * @link https://codex.wordpress.org/Theme_Customization_API
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function fns_expert_customize_register( $wp_customize ) {
	$wp_customize->add_section(
		'fns_expert_options',
		array(
			'title'    => __( 'FNS Expert — настройки', 'fns-expert' ),
			'priority' => 30,
		)
	);

	$wp_customize->add_setting(
		'fns_expert_crm_url',
		array(
			'default'           => 'https://crm.fns.expert',
			'sanitize_callback' => 'esc_url_raw',
			'transport'         => 'refresh',
		)
	);

	$wp_customize->add_control(
		'fns_expert_crm_url',
		array(
			'label'       => __( 'URL CRM (для всех CTA-кнопок)', 'fns-expert' ),
			'description' => __( 'Например: https://crm.fns.expert', 'fns-expert' ),
			'section'     => 'fns_expert_options',
			'type'        => 'url',
		)
	);
}
add_action( 'customize_register', 'fns_expert_customize_register' );

/**
 * Helper: get theme asset URL.
 *
 * @param string $path Relative path within /assets/.
 * @return string Absolute URL.
 */
function fns_expert_asset( $path ) {
	return get_template_directory_uri() . '/assets/' . ltrim( $path, '/' );
}

/**
 * Add custom HTML5 attribute support for skip-link styling (a11y).
 */
function fns_expert_skip_link_focus_fix() {
	?>
	<style>
		.screen-reader-text {
			border: 0;
			clip: rect(1px, 1px, 1px, 1px);
			-webkit-clip-path: inset(50%);
			clip-path: inset(50%);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute !important;
			width: 1px;
			word-wrap: normal !important;
		}
		.screen-reader-text:focus {
			background-color: #f1f1f1;
			border-radius: 3px;
			box-shadow: 0 0 2px 2px rgba(0,0,0,.6);
			clip: auto !important;
			-webkit-clip-path: none;
			clip-path: none;
			color: #21759b;
			display: block;
			font-size: 14px;
			font-weight: bold;
			height: auto;
			left: 5px;
			line-height: normal;
			padding: 15px 23px 14px;
			text-decoration: none;
			top: 5px;
			width: auto;
			z-index: 100000;
		}
	</style>
	<?php
}
add_action( 'wp_head', 'fns_expert_skip_link_focus_fix' );
