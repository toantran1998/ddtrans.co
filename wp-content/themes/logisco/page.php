<?php
/**
 * The template for displaying pages
 */

	get_header();

	while( have_posts() ){ the_post();
	
		$post_option = logisco_get_post_option(get_the_ID());
		$show_content = (empty($post_option['show-content']) || $post_option['show-content'] == 'enable')? true: false;

		if( empty($post_option['sidebar']) ){
			$sidebar_type = 'none';
			$sidebar_left = '';
			$sidebar_right = '';
		}else{
			$sidebar_type = empty($post_option['sidebar'])? 'none': $post_option['sidebar'];
			$sidebar_left = empty($post_option['sidebar-left'])? '': $post_option['sidebar-left'];
			$sidebar_right = empty($post_option['sidebar-right'])? '': $post_option['sidebar-right'];
		}

		if( $sidebar_type == 'none' ){

			// content from wordpress editor area
			ob_start();
			the_content();
			wp_link_pages(array(
				'before'      => '<div class="page-links"><span class="page-links-title">' . esc_html__( 'Pages:', 'logisco' ) . '</span>',
				'after'       => '</div>',
				'link_before' => '<span>',
				'link_after'  => '</span>',
				'pagelink'    => '<span class="screen-reader-text">' . esc_html__( 'Page', 'logisco' ) . ' </span>%',
				'separator'   => '<span class="screen-reader-text">, </span>',
			));
			$content = ob_get_contents();
			ob_end_clean();

			if( ($show_content && trim($content) != "") || post_password_required() ){
				echo '<div class="logisco-content-container logisco-container">';
				echo '<div class="logisco-content-area logisco-item-pdlr logisco-sidebar-style-none clearfix" >';
				echo gdlr_core_escape_content($content);
				echo '</div>'; // logisco-content-area
				echo '</div>'; // logisco-content-container
			}

			if( !post_password_required() ){
				do_action('gdlr_core_print_page_builder');
			}

			// comments template
			if( comments_open() || get_comments_number() ){
				echo '<div class="logisco-page-comment-container logisco-container" >';
				echo '<div class="logisco-page-comments logisco-item-pdlr" >';
				comments_template();
				echo '</div>';
				echo '</div>';
			}

		}else{

			echo '<div class="logisco-content-container logisco-container">';
			echo '<div class="' . esc_attr(logisco_get_sidebar_wrap_class($sidebar_type)) . '" >';

			// sidebar content
			echo '<div class="' . esc_attr(logisco_get_sidebar_class(array('sidebar-type'=>$sidebar_type, 'section'=>'center'))) . '" >';
			
			// content from wordpress editor area
			ob_start();
			the_content();
			wp_link_pages(array(
				'before'      => '<div class="page-links"><span class="page-links-title">' . esc_html__( 'Pages:', 'logisco' ) . '</span>',
				'after'       => '</div>',
				'link_before' => '<span>',
				'link_after'  => '</span>',
				'pagelink'    => '<span class="screen-reader-text">' . esc_html__( 'Page', 'logisco' ) . ' </span>%',
				'separator'   => '<span class="screen-reader-text">, </span>',
			));
			$content = ob_get_contents();
			ob_end_clean();

			if( ($show_content && trim($content) != "") || post_password_required() ){
				echo '<div class="logisco-content-area logisco-item-pdlr" >' . $content . '</div>'; // logisco-content-wrapper
			}

			if( !post_password_required() ){
				do_action('gdlr_core_print_page_builder');
			}

			// comments template
			if( comments_open() || get_comments_number() ){
				echo '<div class="logisco-page-comments logisco-item-pdlr" >';
				comments_template();
				echo '</div>';
			}

			echo '</div>'; // logisco-get-sidebar-class

			// sidebar left
			if( $sidebar_type == 'left' || $sidebar_type == 'both' ){
				echo logisco_get_sidebar($sidebar_type, 'left', $sidebar_left);
			}

			// sidebar right
			if( $sidebar_type == 'right' || $sidebar_type == 'both' ){
				echo logisco_get_sidebar($sidebar_type, 'right', $sidebar_right);
			}

			echo '</div>'; // logisco-get-sidebar-wrap-class
		 	echo '</div>'; // logisco-content-container

		}
		
	} // while

	get_footer(); 
?>