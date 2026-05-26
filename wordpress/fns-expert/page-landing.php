<?php
/**
 * Template Name: FNS Expert Landing
 * Description: Шаблон страницы для отрисовки React-лендинга на произвольной странице.
 *
 * @package FNS_Expert
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>

<!-- React-приложение монтируется в этот контейнер -->
<div id="root" role="main"></div>

<?php
get_footer();
