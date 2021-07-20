<?php
	/* a template for displaying the header area */
?>	
<header class="logisco-header-wrap logisco-header-style-side-toggle" >
	<?php
		$display_logo = logisco_get_option('general', 'header-side-toggle-display-logo', 'enable');
		if( $display_logo == 'enable' ){
			echo logisco_get_logo(array('padding' => false));
		}

		$navigation_class = '';
		if( logisco_get_option('general', 'enable-main-navigation-submenu-indicator', 'disable') == 'enable' ){
			$navigation_class = 'logisco-navigation-submenu-indicator ';
		}
	?>
	<div class="logisco-navigation clearfix <?php echo esc_attr($navigation_class); ?>" >
	<?php
		// print main menu
		if( has_nav_menu('main_menu') ){
			logisco_get_custom_menu(array(
				'container-class' => 'logisco-main-menu',
				'button-class' => 'logisco-side-menu-icon',
				'icon-class' => 'fa fa-bars',
				'id' => 'logisco-main-menu',
				'theme-location' => 'main_menu',
				'type' => logisco_get_option('general', 'header-side-toggle-menu-type', 'overlay')
			));
		}
	?>
	</div><!-- logisco-navigation -->
	<?php

		// menu right side
		$enable_search = (logisco_get_option('general', 'enable-main-navigation-search', 'enable') == 'enable')? true: false;
		$enable_cart = (logisco_get_option('general', 'enable-main-navigation-cart', 'enable') == 'enable' && class_exists('WooCommerce'))? true: false;
		if( $enable_search || $enable_cart ){ 
			echo '<div class="logisco-header-icon logisco-pos-bottom" >';

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
</header><!-- header -->