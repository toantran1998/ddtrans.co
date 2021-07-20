<?php
	// mobile menu template
	echo '<div class="logisco-mobile-header-wrap" >';

	// top bar
	$top_bar = logisco_get_option('general', 'enable-top-bar-on-mobile', 'disable');
	if( $top_bar == 'enable' ){
		get_template_part('header/header', 'top-bar');
	}

	// header
	$logo_position = logisco_get_option('general', 'mobile-logo-position', 'logo-left');
	$sticky_mobile_nav = logisco_get_option('general', 'enable-mobile-navigation-sticky', 'enable');
	echo '<div class="logisco-mobile-header logisco-header-background logisco-style-slide ';
	if($sticky_mobile_nav == 'enable'){
		echo 'logisco-sticky-mobile-navigation ';
	}
	echo '" id="logisco-mobile-header" >';
	echo '<div class="logisco-mobile-header-container logisco-container clearfix" >';
	echo logisco_get_logo(array(
		'mobile' => true,
		'wrapper-class' => ($logo_position == 'logo-center'? 'logisco-mobile-logo-center': '')
	));

	echo '<div class="logisco-mobile-menu-right" >';

	// search icon
	$enable_search = (logisco_get_option('general', 'enable-main-navigation-search', 'enable') == 'enable')? true: false;
	if( $enable_search ){
		echo '<div class="logisco-main-menu-search" id="logisco-mobile-top-search" >';
		echo '<i class="fa fa-search" ></i>';
		echo '</div>';
		logisco_get_top_search();
	}

	// cart icon
	$enable_cart = (logisco_get_option('general', 'enable-main-navigation-cart', 'enable') == 'enable' && class_exists('WooCommerce'))? true: false;
	if( $enable_cart ){
		echo '<div class="logisco-main-menu-cart" id="logisco-mobile-menu-cart" >';
		echo '<i class="fa fa-shopping-cart" data-logisco-lb="top-bar" ></i>';
		logisco_get_woocommerce_bar();
		echo '</div>';
	}

	if( $logo_position == 'logo-center' ){
		echo '</div>';
		echo '<div class="logisco-mobile-menu-left" >';
	}

	// mobile menu
	if( has_nav_menu('mobile_menu') ){
		logisco_get_custom_menu(array(
			'type' => logisco_get_option('general', 'right-menu-type', 'right'),
			'container-class' => 'logisco-mobile-menu',
			'button-class' => 'logisco-mobile-menu-button',
			'icon-class' => 'fa fa-bars',
			'id' => 'logisco-mobile-menu',
			'theme-location' => 'mobile_menu'
		));
	}
	echo '</div>'; // logisco-mobile-menu-right/left
	echo '</div>'; // logisco-mobile-header-container
	echo '</div>'; // logisco-mobile-header

	echo '</div>'; // logisco-mobile-header-wrap