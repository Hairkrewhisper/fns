<?php
/**
 * The header template for FNS Expert
 *
 * Displays everything from <!DOCTYPE> to the opening of the React mount point.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package FNS_Expert
 * @since 1.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
	<link rel="profile" href="https://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<?php wp_head(); ?>
</head>

<body <?php body_class( 'fns-expert-landing' ); ?>>
<?php wp_body_open(); ?>

<a class="skip-link screen-reader-text" href="#root">
	<?php esc_html_e( 'Перейти к содержимому', 'fns-expert' ); ?>
</a>

<noscript>
	<div class="fns-noscript" style="padding:40px;text-align:center;font-family:system-ui,sans-serif;">
		<h1>fns.expert — Ответы на требования ИФНС</h1>
		<p><?php esc_html_e( 'Для работы сайта необходимо включить JavaScript в вашем браузере.', 'fns-expert' ); ?></p>
		<p>
			<strong><?php esc_html_e( 'Телефон:', 'fns-expert' ); ?></strong>
			<a href="tel:+79854883889">+7 985 488-38-89</a><br/>
			<strong><?php esc_html_e( 'Email:', 'fns-expert' ); ?></strong>
			<a href="mailto:info@fns.expert">info@fns.expert</a><br/>
			<strong><?php esc_html_e( 'Telegram:', 'fns-expert' ); ?></strong>
			<a href="https://t.me/FNS_Expert_bot" rel="noopener">@FNS_Expert_bot</a>
		</p>
	</div>
</noscript>
