<?php
/**
 * 404 template
 *
 * @package FNS_Expert
 * @since 1.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>

<main id="primary" class="site-main fns-404" style="min-height:60vh;display:flex;align-items:center;justify-content:center;padding:40px 20px;font-family:'Manrope',system-ui,sans-serif;text-align:center;">
	<div style="max-width:560px;">
		<div style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;font-weight:800;color:#16A34A;margin-bottom:16px;">
			· <?php esc_html_e( 'Ошибка 404', 'fns-expert' ); ?>
		</div>
		<h1 style="font-size:48px;line-height:1.05;font-weight:900;letter-spacing:-0.03em;color:#0F172A;margin:0 0 16px;">
			<?php esc_html_e( 'Страница не найдена', 'fns-expert' ); ?>
		</h1>
		<p style="font-size:16px;color:#475569;line-height:1.6;margin:0 0 24px;">
			<?php esc_html_e( 'Похоже, такой страницы нет. Вернитесь на главную или свяжитесь с нами.', 'fns-expert' ); ?>
		</p>
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>"
		   style="display:inline-flex;align-items:center;gap:8px;background:#16A34A;color:#fff;text-decoration:none;padding:14px 24px;border-radius:999px;font-weight:700;">
			<?php esc_html_e( 'На главную', 'fns-expert' ); ?>
		</a>
	</div>
</main>

<?php
get_footer();
