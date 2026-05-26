<?php
/**
 * The front page template
 *
 * Used when the site's front page is displayed. Renders the React landing.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
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
