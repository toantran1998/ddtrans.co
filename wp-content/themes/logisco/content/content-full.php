<?php
/**
 * The template part for displaying single posts
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="logisco-single-article" >
		<?php
			ob_start();
			the_post_thumbnail('full');
			$post_thumbnail = ob_get_contents();
			ob_end_clean();

			if( !empty($post_thumbnail) ){
				echo '<div class="logisco-single-article-thumbnail logisco-media-image" >';
				echo gdlr_core_escape_content($post_thumbnail);
				if( is_sticky() ){
					echo '<div class="logisco-sticky-banner logisco-title-font" ><i class="fa fa-bolt" ></i>' . esc_html__('Sticky Post', 'logisco') . '</div>';
				}
				echo '</div>';
			}else{
				if( is_sticky() ){
					echo '<div class="logisco-sticky-banner logisco-title-font" ><i class="fa fa-bolt" ></i>' . esc_html__('Sticky Post', 'logisco') . '</div>';
				}
			}

			get_template_part('content/content-single', 'title');

			echo '<div class="logisco-single-article-content">';
			the_excerpt();
			echo '</div>';
		?>
	</div><!-- logisco-single-article -->
</article><!-- post-id -->
