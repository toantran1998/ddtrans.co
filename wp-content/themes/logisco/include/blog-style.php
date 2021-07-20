<?php

	// change the portfolio style
	add_filter('gdlr_core_blog_style_content', 'logisco_gdlr_core_blog_style_content', 10, 3);
	if( !function_exists('logisco_gdlr_core_blog_style_content') ){
		function logisco_gdlr_core_blog_style_content( $ret, $args, $blog_style ){
			
			if( $args['blog-style'] == 'blog-widget'){
				
				$additional_class  = empty($args['text-align'])? '': ' gdlr-core-' . $args['text-align'] . '-align';
				$additional_class .= empty($args['item-size'])? '': 'gdlr-core-style-' . $args['item-size']; 

				$ret  = '<div class="gdlr-core-item-list gdlr-core-blog-widget gdlr-core-item-mglr clearfix ' . esc_attr($additional_class) . '" ' . gdlr_core_esc_style(array(
					'margin-bottom' => empty($args['margin-bottom'])? '': $args['margin-bottom']
				)) . ' >';
				if( empty($args['show-thumbnail']) || $args['show-thumbnail'] == 'enable' ){
					$ret .= $blog_style->blog_thumbnail(array(
						'thumbnail-size' => 'thumbnail',
						'opacity-on-hover' => empty($args['enable-thumbnail-opacity-on-hover'])? 'enable': $args['enable-thumbnail-opacity-on-hover'],
						'zoom-on-hover' => empty($args['enable-thumbnail-zoom-on-hover'])? 'enable': $args['enable-thumbnail-zoom-on-hover'],
						'grayscale-effect' => empty($args['enable-thumbnail-grayscale-effect'])? 'disable': $args['enable-thumbnail-grayscale-effect']
					));
				}

				$ret .= '<div class="gdlr-core-blog-widget-content" >';
				$ret .= $blog_style->blog_info(array(
					'display' => $args['meta-option'],
					'wrapper' => true
				));
				$ret .= $blog_style->blog_title($args);
				
				$ret .= '</div>'; // gdlr-core-blog-widget-content
				$ret .= '</div>'; // gdlr-core-blog-widget
				
				return $ret;

			}

		}
	}