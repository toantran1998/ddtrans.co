<?php
/**
 * The template part for displaying blog archive
 */

	global $wp_query;

	$settings = array(
		'query' => $wp_query,
		'blog-style' => logisco_get_option('general', 'archive-blog-style', 'blog-full'),
		'blog-full-style' => logisco_get_option('general', 'archive-blog-full-style', 'style-1'),
		'blog-side-thumbnail-style' => logisco_get_option('general', 'archive-blog-side-thumbnail-style', 'style-1'),
		'blog-column-style' => logisco_get_option('general', 'archive-blog-column-style', 'style-1'),
		'blog-image-style' => logisco_get_option('general', 'archive-blog-image-style', 'style-1'),
		'blog-full-alignment' => logisco_get_option('general', 'archive-blog-full-alignment', 'left'),
		'thumbnail-size' => logisco_get_option('general', 'archive-thumbnail-size', 'full'),
		'show-thumbnail' => logisco_get_option('general', 'archive-show-thumbnail', 'enable'),
		'column-size' => logisco_get_option('general', 'archive-column-size', 20),
		'excerpt' => logisco_get_option('general', 'archive-excerpt', 'specify-number'),
		'excerpt-number' => logisco_get_option('general', 'archive-excerpt-number', 55),
		'blog-date-feature' => logisco_get_option('general', 'archive-date-feature', 'enable'),
		'meta-option' => logisco_get_option('general', 'archive-meta-option', array()),
		'show-read-more' => logisco_get_option('general', 'archive-show-read-more', 'enable'),

		'blog-title-font-size' => logisco_get_option('general', 'archive-blog-title-font-size', ''),
		'blog-title-font-weight' => logisco_get_option('general', 'archive-blog-title-font-weight', ''),
		'blog-title-letter-spacing' => logisco_get_option('general', 'archive-blog-title-letter-spacing', ''),
		'blog-title-text-transform' => logisco_get_option('general', 'archive-blog-title-text-transform', ''),

		'paged' => (get_query_var('paged'))? get_query_var('paged') : 1,
		'pagination' => 'page',
		'pagination-style' => logisco_get_option('general', 'pagination-style', 'round'),
		'pagination-align' => logisco_get_option('general', 'pagination-align', 'right'),

	);

	echo '<div class="logisco-content-area" >';
	if( is_category() ){
		$tax_description = category_description();
		if( !empty($tax_description) ){
			echo '<div class="logisco-archive-taxonomy-description logisco-item-pdlr" >' . $tax_description . '</div>';
		}
	}else if( is_tag() ){
		$tax_description = term_description(NULL, 'post_tag');
		if( !empty($tax_description) ){
			echo '<div class="logisco-archive-taxonomy-description logisco-item-pdlr" >' . $tax_description . '</div>';
		}
	}

	echo gdlr_core_pb_element_blog::get_content($settings);
	echo '</div>'; // logisco-content-area