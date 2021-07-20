<?php
	/* a template for displaying the header area */

	// header container
	$body_layout = logisco_get_option('general', 'layout', 'full');
	$body_margin = logisco_get_option('general', 'body-margin', '0px');
	$header_width = logisco_get_option('general', 'header-width', 'boxed');
	$header_background_style = logisco_get_option('general', 'header-background-style', 'solid');
	
	if( $header_width == 'boxed' ){
		$header_container_class = ' logisco-container';
	}else if( $header_width == 'custom' ){
		$header_container_class = ' logisco-header-custom-container';
	}else{
		$header_container_class = ' logisco-header-full';
	}

	$header_style = logisco_get_option('general', 'header-plain-style', 'menu-right');
	$navigation_offset = logisco_get_option('general', 'fixed-navigation-anchor-offset', '');

	$header_wrap_class  = ' logisco-style-' . $header_style;
	$header_wrap_class .= ' logisco-sticky-navigation';
	if( $header_style == 'center-logo' || $body_layout == 'boxed' || 
		$body_margin != '0px' || $header_background_style == 'transparent' ){
		
		$header_wrap_class .= ' logisco-style-slide';
	}else{
		$header_wrap_class .= ' logisco-style-fixed';
	}
?>	
<header class="logisco-header-wrap logisco-header-style-plain <?php echo esc_attr($header_wrap_class); ?>" <?php
		if( !empty($navigation_offset) ){
			echo 'data-navigation-offset="' . esc_attr($navigation_offset) . '" ';
		}
	?> >
	<div class="logisco-header-background" ></div>
	<div class="logisco-header-container <?php echo esc_attr($header_container_class); ?>">
			
		<div class="logisco-header-container-inner clearfix">
			<?php

				if( $header_style == 'splitted-menu' && has_nav_menu('main_menu') ){
					add_filter('logisco_center_menu_item', 'logisco_get_logo');
				}else{
					echo logisco_get_logo();
				}

				$navigation_class = '';
				if( logisco_get_option('general', 'enable-main-navigation-submenu-indicator', 'disable') == 'enable' ){
					$navigation_class = 'logisco-navigation-submenu-indicator ';
				}
			?>
			<div class="logisco-navigation logisco-item-pdlr clearfix <?php echo esc_attr($navigation_class); ?>" >
			<?php
				// print main menu
				if( has_nav_menu('main_menu') ){
					echo '<div class="logisco-main-menu" id="logisco-main-menu" >';
					wp_nav_menu(array(
						'theme_location'=>'main_menu', 
						'container'=> '', 
						'menu_class'=> 'sf-menu',
						'walker' => new logisco_menu_walker()
					));
					$slide_bar = logisco_get_option('general', 'navigation-slide-bar', 'enable');
					if( $slide_bar == 'enable' ){
						echo '<div class="logisco-navigation-slide-bar" id="logisco-navigation-slide-bar" ></div>';
					}
					echo '</div>';
				}

				// menu right side
				$menu_right_class = '';
				if( in_array($header_style, array('center-menu', 'center-logo', 'splitted-menu')) ){
					$menu_right_class = ' logisco-item-mglr logisco-navigation-top';
				}

				$enable_search = (logisco_get_option('general', 'enable-main-navigation-search', 'enable') == 'enable')? true: false;
				$enable_cart = (logisco_get_option('general', 'enable-main-navigation-cart', 'enable') == 'enable' && class_exists('WooCommerce'))? true: false;
				$enable_right_button = (logisco_get_option('general', 'enable-main-navigation-right-button', 'disable') == 'enable')? true: false;
				if( has_nav_menu('right_menu') || $enable_search || $enable_cart || $enable_right_button ){
					echo '<div class="logisco-main-menu-right-wrap clearfix ' . esc_attr($menu_right_class) . '" >';

					// search icon
					if( $enable_search ){
						echo '<div class="logisco-main-menu-search" id="logisco-top-search" >';
						echo '<i class="fa fa-search" ></i>';
						echo '</div>';
						logisco_get_top_search();
					}

					// cart icon
					if( $enable_cart ){
						echo '<div class="logisco-main-menu-cart" id="logisco-menu-cart" >';
						echo '<i class="fa fa-shopping-cart" data-logisco-lb="top-bar" ></i>';
						logisco_get_woocommerce_bar();
						echo '</div>';
					}

					// menu right button
					if( $enable_right_button ){
						$button_class = 'logisco-style-' . logisco_get_option('general', 'main-navigation-right-button-style', 'default');
						$button_link = logisco_get_option('general', 'main-navigation-right-button-link', '');
						$button_link_target = logisco_get_option('general', 'main-navigation-right-button-link-target', '_self');
						echo '<a class="logisco-main-menu-right-button ' . esc_attr($button_class) . '" href="' . esc_url($button_link) . '" target="' . esc_attr($button_link_target) . '" >';
						echo logisco_get_option('general', 'main-navigation-right-button-text', '');
						echo '</a>';
					}

					// print right menu
					if( has_nav_menu('right_menu') && $header_style != 'splitted-menu' ){
						logisco_get_custom_menu(array(
							'container-class' => 'logisco-main-menu-right',
							'button-class' => 'logisco-right-menu-button logisco-top-menu-button',
							'icon-class' => 'fa fa-bars',
							'id' => 'logisco-right-menu',
							'theme-location' => 'right_menu',
							'type' => logisco_get_option('general', 'right-menu-type', 'right')
						));
					}

					echo '</div>'; // logisco-main-menu-right-wrap

					if( has_nav_menu('right_menu') && $header_style == 'splitted-menu'  ){
						echo '<div class="logisco-main-menu-left-wrap clearfix logisco-item-pdlr logisco-navigation-top" >';
						logisco_get_custom_menu(array(
							'container-class' => 'logisco-main-menu-right',
							'button-class' => 'logisco-right-menu-button logisco-top-menu-button',
							'icon-class' => 'fa fa-bars',
							'id' => 'logisco-right-menu',
							'theme-location' => 'right_menu',
							'type' => logisco_get_option('general', 'right-menu-type', 'right')
						));
						echo '</div>';
					}
				}
			?>
			</div><!-- logisco-navigation -->

		</div><!-- logisco-header-inner -->
	</div><!-- logisco-header-container -->
</header><!-- header -->