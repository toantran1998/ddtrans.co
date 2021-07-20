<?php
	/* a template for displaying the header area */

	$header_side_style = logisco_get_option('general', 'header-side-style', 'top-left');
	$header_class = 'logisco-' . logisco_get_option('general', 'header-side-align', 'left') . '-align';
?>	
<header class="logisco-header-wrap logisco-header-style-side <?php echo esc_attr($header_class); ?>" >
	<?php

		$logo_wrap_class = '';
		$navigation_class = '';
		if( logisco_get_option('general', 'enable-main-navigation-submenu-indicator', 'disable') == 'enable' ){
			$navigation_class .= 'logisco-navigation-submenu-indicator ';
		}
		if( in_array($header_side_style, array('middle-left-2', 'middle-right-2')) ){
			$logo_wrap_class .= 'logisco-pos-middle ';
		}else if( in_array($header_side_style, array('middle-left', 'middle-right')) ){
			$navigation_class .= 'logisco-pos-middle ';
		} 

		echo logisco_get_logo(array('padding' => false, 'wrapper-class' => $logo_wrap_class));
	?>
	<div class="logisco-navigation clearfix <?php echo esc_attr($navigation_class); ?>" >
	<?php
		// print main menu
		if( has_nav_menu('main_menu') ){
			echo '<div class="logisco-main-menu" id="logisco-main-menu" >';
			wp_nav_menu(array(
				'theme_location'=>'main_menu', 
				'container'=> '', 
				'menu_class'=> 'sf-vertical'
			));
			echo '</div>';
		}

		// menu right side
		$enable_search = (logisco_get_option('general', 'enable-main-navigation-search', 'enable') == 'enable')? true: false;
		$enable_cart = (logisco_get_option('general', 'enable-main-navigation-cart', 'enable') == 'enable' && class_exists('WooCommerce'))? true: false;
		if( $enable_search || $enable_cart ){
			echo '<div class="logisco-main-menu-right-wrap clearfix" >';

			// search icon
			if( $enable_search ){
				echo '<div class="logisco-main-menu-search" id="logisco-top-search" >';
				echo '<i class="fa fa-search" ></i>';
				echo '</div>';
				logisco_get_top_search();
			}

			// cart icon
			if( $enable_cart ){
				echo '<div class="logisco-main-menu-cart" id="logisco-main-menu-cart" >';
				echo '<i class="fa fa-shopping-cart" data-logisco-lb="top-bar" ></i>';
				logisco_get_woocommerce_bar();
				echo '</div>';
			}

			echo '</div>'; // logisco-main-menu-right-wrap
		}
	?>
	</div><!-- logisco-navigation -->
	<?php
		// social network
		$top_bar_social = logisco_get_option('general', 'enable-top-bar-social', 'enable');
		if( $top_bar_social == 'enable' ){

			$top_bar_social_class = '';
			if( in_array($header_side_style, array('top-left', 'top-right', 'middle-left', 'middle-right')) ){
				$top_bar_social_class .= 'logisco-pos-bottom ';
			}

			echo '<div class="logisco-header-social ' . esc_attr($top_bar_social_class) . '" >';
			get_template_part('header/header', 'social');
			echo '</div>';
			
			logisco_set_option('general', 'enable-top-bar-social', 'disable');
		}
	?>
</header><!-- header -->