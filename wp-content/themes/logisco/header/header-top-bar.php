<?php
	/* a template for displaying the top bar */

	if( logisco_get_option('general', 'enable-top-bar', 'enable') == 'enable' ){

		$top_bar_width = logisco_get_option('general', 'top-bar-width', 'boxed');
		$top_bar_container_class = '';

		if( $top_bar_width == 'boxed' ){
			$top_bar_container_class = 'logisco-container ';
		}else if( $top_bar_width == 'custom' ){
			$top_bar_container_class = 'logisco-top-bar-custom-container ';
		}else{
			$top_bar_container_class = 'logisco-top-bar-full ';
		}

		$top_bar_menu = logisco_get_option('general', 'top-bar-menu-position', 'none');

		echo '<div class="logisco-top-bar" >';
		echo '<div class="logisco-top-bar-background" ></div>';
		echo '<div class="logisco-top-bar-container ' . esc_attr($top_bar_container_class) . '" >';
		echo '<div class="logisco-top-bar-container-inner clearfix" >';

		$left_text = logisco_get_option('general', 'top-bar-left-text', '');
		if( !empty($left_text) || ($top_bar_menu == 'left' && has_nav_menu('top_bar_menu')) ){

			echo '<div class="logisco-top-bar-left logisco-item-pdlr">';
			if( $top_bar_menu == 'left' ){
				logisco_get_top_bar_menu('left');
			}
			echo gdlr_core_escape_content(gdlr_core_text_filter($left_text));
			echo '</div>';
		}

		$right_button_text = logisco_get_option('general', 'top-bar-right-button-text', '');
		$right_button_link = logisco_get_option('general', 'top-bar-right-button-link', '');
		if( (!empty($right_button_text) && !empty($right_button_link)) ){
			$right_button_target = logisco_get_option('general', 'top-bar-right-button-target', '_self');

			echo '<a class="logisco-top-bar-right-button" ';
			echo 'href="' . esc_url($right_button_link) . '" ';
			echo 'target="' . esc_attr($right_button_target) . '" ';
			echo ' >' . gdlr_core_text_filter($right_button_text) . '</a>';
		}

		$right_text = logisco_get_option('general', 'top-bar-right-text', '');
		$top_bar_social = logisco_get_option('general', 'enable-top-bar-social', 'enable');
		$language_flag = logisco_get_wpml_flag();
		
		if( !empty($right_text) || $top_bar_social == 'enable' || !empty($language_flag) ||
			(!empty($right_button_text) && !empty($right_button_link)) ||
			($top_bar_menu == 'right' && has_nav_menu('top_bar_menu')) ){
			echo '<div class="logisco-top-bar-right logisco-item-pdlr">';
			if( $top_bar_menu == 'right' ){
				logisco_get_top_bar_menu('right');
			}

			if( !empty($right_text) ){
				echo '<div class="logisco-top-bar-right-text">';
				echo gdlr_core_escape_content(gdlr_core_text_filter($right_text));
				echo '</div>';
			}

			if( $top_bar_social == 'enable' ){
				echo '<div class="logisco-top-bar-right-social" >';
				get_template_part('header/header', 'social');
				echo '</div>';	
			}

			if( !empty($language_flag) ){
				echo gdlr_core_escape_content($language_flag);
			}
			echo '</div>';	
		}
		echo '</div>'; // logisco-top-bar-container-inner
		echo '</div>'; // logisco-top-bar-container
		echo '</div>'; // logisco-top-bar

	}  // top bar
?>