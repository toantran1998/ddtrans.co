<?php
/**
 * The template for displaying the footer
 */
	
	$post_option = logisco_get_post_option(get_the_ID());
	if( empty($post_option['enable-footer']) || $post_option['enable-footer'] == 'default' ){
		$enable_footer = logisco_get_option('general', 'enable-footer', 'enable');
	}else{
		$enable_footer = $post_option['enable-footer'];
	}	
	if( empty($post_option['enable-copyright']) || $post_option['enable-copyright'] == 'default' ){
		$enable_copyright = logisco_get_option('general', 'enable-copyright', 'enable');
	}else{
		$enable_copyright = $post_option['enable-copyright'];
	}

	$fixed_footer = logisco_get_option('general', 'fixed-footer', 'disable');
	echo '</div>'; // logisco-page-wrapper

	if( $enable_footer == 'enable' || $enable_copyright == 'enable' ){

		if( $fixed_footer == 'enable' ){
			echo '</div>'; // logisco-body-wrapper

			echo '<footer class="logisco-fixed-footer" id="logisco-fixed-footer" >';
		}else{
			echo '<footer>';
		}

		if( $enable_footer == 'enable' ){

			$logisco_footer_layout = array(
				'footer-1'=>array('logisco-column-60'),
				'footer-2'=>array('logisco-column-15', 'logisco-column-15', 'logisco-column-15', 'logisco-column-15'),
				'footer-3'=>array('logisco-column-15', 'logisco-column-15', 'logisco-column-30',),
				'footer-4'=>array('logisco-column-20', 'logisco-column-20', 'logisco-column-20'),
				'footer-5'=>array('logisco-column-20', 'logisco-column-40'),
				'footer-6'=>array('logisco-column-40', 'logisco-column-20'),
			);
			$footer_style = logisco_get_option('general', 'footer-style');
			$footer_style = empty($footer_style)? 'footer-2': $footer_style;

			$count = 0;
			$has_widget = false;
			foreach( $logisco_footer_layout[$footer_style] as $layout ){ $count++;
				if( is_active_sidebar('footer-' . $count) ){ $has_widget = true; }
			}

			if( $has_widget ){ 	

				$footer_column_divider = logisco_get_option('general', 'enable-footer-column-divider', 'enable');
				$extra_class  = ($footer_column_divider == 'enable')? ' logisco-with-column-divider': '';

				echo '<div class="logisco-footer-wrapper ' . esc_attr($extra_class) . '" >';
				echo '<div class="logisco-footer-container logisco-container clearfix" >';
				
				$count = 0;
				foreach( $logisco_footer_layout[$footer_style] as $layout ){ $count++;
					echo '<div class="logisco-footer-column logisco-item-pdlr ' . esc_attr($layout) . '" >';
					if( is_active_sidebar('footer-' . $count) ){
						dynamic_sidebar('footer-' . $count); 
					}
					echo '</div>';
				}
				
				echo '</div>'; // logisco-footer-container
				echo '</div>'; // logisco-footer-wrapper 
			}
		} // enable footer

		if( $enable_copyright == 'enable' ){
			$copyright_style = logisco_get_option('general', 'copyright-style', 'center');
			
			if( $copyright_style == 'center' ){
				$copyright_text = logisco_get_option('general', 'copyright-text');

				if( !empty($copyright_text) ){
					echo '<div class="logisco-copyright-wrapper" >';
					echo '<div class="logisco-copyright-container logisco-container">';
					echo '<div class="logisco-copyright-text logisco-item-pdlr">';
					echo gdlr_core_escape_content(gdlr_core_text_filter($copyright_text));
					echo '</div>';
					echo '</div>';
					echo '</div>'; // logisco-copyright-wrapper
				}
			}else if( $copyright_style == 'left-right' ){
				$copyright_left = logisco_get_option('general', 'copyright-left');
				$copyright_right = logisco_get_option('general', 'copyright-right');

				if( !empty($copyright_left) || !empty($copyright_right) ){
					echo '<div class="logisco-copyright-wrapper" >';
					echo '<div class="logisco-copyright-container logisco-container clearfix">';
					if( !empty($copyright_left) ){
						echo '<div class="logisco-copyright-left logisco-item-pdlr">';
						echo gdlr_core_escape_content(gdlr_core_text_filter($copyright_left));
						echo '</div>';
					}

					if( !empty($copyright_right) ){
						echo '<div class="logisco-copyright-right logisco-item-pdlr">';
						echo gdlr_core_escape_content(gdlr_core_text_filter($copyright_right));
						echo '</div>';
					}
					echo '</div>';
					echo '</div>'; // logisco-copyright-wrapper
				}
			}
		}

		echo '</footer>';

		if( $fixed_footer == 'disable' ){
			echo '</div>'; // logisco-body-wrapper
		}
		echo '</div>'; // logisco-body-outer-wrapper

	// disable footer	
	}else{
		echo '</div>'; // logisco-body-wrapper
		echo '</div>'; // logisco-body-outer-wrapper
	}

	$header_style = logisco_get_option('general', 'header-style', 'plain');
	
	if( $header_style == 'side' || $header_style == 'side-toggle' ){
		echo '</div>'; // logisco-header-side-nav-content
	}

	$back_to_top = logisco_get_option('general', 'enable-back-to-top', 'disable');
	if( $back_to_top == 'enable' ){
		echo '<a href="#logisco-top-anchor" class="logisco-footer-back-to-top-button" id="logisco-footer-back-to-top-button"><i class="fa fa-angle-up" ></i></a>';
	}
?>

<?php wp_footer(); ?>

</body>
</html>