<?php
/**
 * The template for displaying single posts (fallback for blog functionality)
 *
 * @package FNS_Expert
 * @since 1.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>

<main id="primary" class="site-main" style="max-width:760px;margin:120px auto 80px;padding:0 20px;font-family:'Onest',system-ui,sans-serif;color:#0F172A;">
	<?php
	while ( have_posts() ) :
		the_post();
		?>
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<header class="entry-header" style="margin-bottom:32px;">
				<?php the_title( '<h1 class="entry-title" style="font-size:42px;line-height:1.1;font-weight:900;letter-spacing:-0.03em;margin:0 0 12px;">', '</h1>' ); ?>
				<div class="entry-meta" style="color:#475569;font-size:13px;">
					<?php echo esc_html( get_the_date() ); ?> · <?php the_author(); ?>
				</div>
			</header>

			<div class="entry-content" style="font-size:17px;line-height:1.7;">
				<?php
				the_content();
				wp_link_pages(
					array(
						'before' => '<div class="page-links">' . esc_html__( 'Страницы:', 'fns-expert' ),
						'after'  => '</div>',
					)
				);
				?>
			</div>
		</article>
		<?php
	endwhile;
	?>
</main>

<?php
get_footer();
