<?php
/**
 * Search form
 *
 * @package FNS_Expert
 * @since 1.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label>
		<span class="screen-reader-text"><?php echo esc_html_x( 'Поиск:', 'label', 'fns-expert' ); ?></span>
		<input type="search" class="search-field"
		       placeholder="<?php echo esc_attr_x( 'Поиск…', 'placeholder', 'fns-expert' ); ?>"
		       value="<?php echo esc_attr( get_search_query() ); ?>"
		       name="s" />
	</label>
	<button type="submit" class="search-submit">
		<?php echo esc_html_x( 'Найти', 'submit button', 'fns-expert' ); ?>
	</button>
</form>
