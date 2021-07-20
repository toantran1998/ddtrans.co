<?php
	/*	
	*	Goodlayers Function File
	*	---------------------------------------------------------------------
	*	This file include all of important function and features of the theme
	*	---------------------------------------------------------------------
	*/
	
	// goodlayers core plugin function
	include_once(get_template_directory() . '/admin/core/sidebar-generator.php');
	include_once(get_template_directory() . '/admin/core/utility.php');
	include_once(get_template_directory() . '/admin/core/media.php' );
	
	// create admin page
	if( is_admin() ){
		include_once(get_template_directory() . '/admin/tgmpa/class-tgm-plugin-activation.php');
		include_once(get_template_directory() . '/admin/tgmpa/plugin-activation.php');
		include_once(get_template_directory() . '/admin/function/getting-start.php');	
	}
	
	// plugins
	include_once(get_template_directory() . '/plugins/wpml.php');
	include_once(get_template_directory() . '/plugins/revslider.php');

	include_once(get_template_directory() . '/include/blog-style.php');
	include_once(get_template_directory() . '/include/portfolio-style.php');
	
	/////////////////////
	// front end script
	/////////////////////
	
	include_once(get_template_directory() . '/include/utility.php' );
	include_once(get_template_directory() . '/include/function-regist.php' );
	include_once(get_template_directory() . '/include/navigation-menu.php' );
	include_once(get_template_directory() . '/include/include-script.php' );
	include_once(get_template_directory() . '/include/goodlayers-core-filter.php' );
	include_once(get_template_directory() . '/include/maintenance.php' );
	include_once(get_template_directory() . '/woocommerce/woocommerce-settings.php' );
	
	/////////////////////
	// execute module 
	/////////////////////
	
	// initiate sidebar structure
	$sidebar_atts = array(
		'before_widget' => '<div id="%1$s" class="widget %2$s logisco-widget">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3 class="logisco-widget-title">',
		'after_title'   => '</h3><span class="clear"></span>' );

	if( logisco_get_option('general', 'sidebar-title-divider', 'enable') == 'enable' ){
		$sidebar_atts['before_title'] = '<h3 class="logisco-widget-title"><span class="logisco-widget-head-text">';
		$sidebar_atts['after_title'] = '</span><span class="logisco-widget-head-divider"></span></h3><span class="clear"></span>';
	}
	new gdlr_core_sidebar_generator($sidebar_atts);

	// clear data for wpml translation
	add_action('init', 'logisco_clear_general_option');
	if( !function_exists('logisco_clear_general_option') ){
		function logisco_clear_general_option(){
			unset($GLOBALS['logisco_general']);
		}	
	}	

	// remove the core default action to enqueue the theme script
	remove_action('after_setup_theme', 'gdlr_init_goodlayers_core_elements');
	add_action('after_setup_theme', 'logisco_init_goodlayers_core_elements');
	if( !function_exists('logisco_init_goodlayers_core_elements') ){
		function logisco_init_goodlayers_core_elements(){

			// create an admin option and customizer
			if( (is_admin() || is_customize_preview()) && class_exists('gdlr_core_admin_option') && class_exists('gdlr_core_theme_customizer') ){
				
				$logisco_admin_option = new gdlr_core_admin_option(array(
					'filewrite' => logisco_get_style_custom(true)
				));	
				
				include_once( get_template_directory() . '/include/options/general.php');
				include_once( get_template_directory() . '/include/options/typography.php');
				include_once( get_template_directory() . '/include/options/color.php');
				include_once( get_template_directory() . '/include/options/plugin-settings.php');

				if( is_customize_preview() ){
					new gdlr_core_theme_customizer($logisco_admin_option);
				}

				// clear an option for customize page
				add_action('wp', 'logisco_clear_option');
				
			}
			
			// add the script for page builder / page options / post option
			if( is_admin() ){

				if( class_exists('gdlr_core_revision') ){
					$revision_num = 5;
					new gdlr_core_revision($revision_num);
				}
				
				// create page option
				if( class_exists('gdlr_core_page_option') ){

					// for page post type
					new gdlr_core_page_option(array(
						'post_type' => array('page'),
						'options' => array(
							'layout' => array(
								'title' => esc_html__('Layout', 'logisco'),
								'options' => array(
									'enable-header-area' => array(
										'title' => esc_html__('Enable Header Area', 'logisco'),
										'type' => 'checkbox',
										'default' => 'enable'
									),
									'sticky-navigation' => array(
										'title' => esc_html__('Sticky Navigation', 'logisco'),
										'type' => 'combobox',
										'options' => array(
											'default' => esc_html__('Default', 'logisco'),
											'enable' => esc_html__('Enable', 'logisco'),
											'disable' => esc_html__('Disable', 'logisco'),
										),
										'condition' => array( 'enable-header-area' => 'enable' )
									),
									'enable-page-title' => array(
										'title' => esc_html__('Enable Page Title', 'logisco'),
										'type' => 'checkbox',
										'default' => 'enable',
										'condition' => array( 'enable-header-area' => 'enable' )
									),
									'page-caption' => array(
										'title' => esc_html__('Caption', 'logisco'),
										'type' => 'textarea',
										'condition' => array( 'enable-header-area' => 'enable', 'enable-page-title' => 'enable' )
									),					
									'title-background' => array(
										'title' => esc_html__('Page Title Background', 'logisco'),
										'type' => 'upload',
										'condition' => array( 'enable-header-area' => 'enable', 'enable-page-title' => 'enable' )
									),
									'enable-breadcrumbs' => array(
										'title' => esc_html__('Enable Breadcrumbs', 'logisco'),
										'type' => 'checkbox',
										'default' => 'disable',
										'condition' => array( 'enable-header-area' => 'enable', 'enable-page-title' => 'enable' )
									),
									'body-background-type' => array(
										'title' => esc_html__('Body Background Type', 'logisco'),
										'type' => 'combobox',
										'options' => array(
											'default' => esc_html__('Default', 'logisco'),
											'image' => esc_html__('Image ( Only For Boxed Layout )', 'logisco'),
										)
									),
									'body-background-image' => array(
										'title' => esc_html__('Body Background Image', 'logisco'),
										'type' => 'upload',
										'data-type' => 'file', 
										'condition' => array( 'body-background-type' => 'image' )
									),
									'body-background-image-opacity' => array(
										'title' => esc_html__('Body Background Image Opacity', 'logisco'),
										'type' => 'fontslider',
										'data-type' => 'opacity',
										'default' => '100',
										'condition' => array( 'body-background-type' => 'image' )
									),
									'show-content' => array(
										'title' => esc_html__('Show WordPress Editor Content', 'logisco'),
										'type' => 'checkbox',
										'default' => 'enable',
										'description' => esc_html__('Disable this to hide the content in editor to show only page builder content.', 'logisco'),
									),
									'sidebar' => array(
										'title' => esc_html__('Sidebar', 'logisco'),
										'type' => 'radioimage',
										'options' => 'sidebar',
										'default' => 'none',
										'wrapper-class' => 'gdlr-core-fullsize'
									),
									'sidebar-left' => array(
										'title' => esc_html__('Sidebar Left', 'logisco'),
										'type' => 'combobox',
										'options' => 'sidebar',
										'condition' => array( 'sidebar' => array('left', 'both') )
									),
									'sidebar-right' => array(
										'title' => esc_html__('Sidebar Right', 'logisco'),
										'type' => 'combobox',
										'options' => 'sidebar',
										'condition' => array( 'sidebar' => array('right', 'both') )
									),
									'enable-footer' => array(
										'title' => esc_html__('Enable Footer', 'logisco'),
										'type' => 'combobox',
										'options' => array(
											'default' => esc_html__('Default', 'logisco'),
											'enable' => esc_html__('Enable', 'logisco'),
											'disable' => esc_html__('Disable', 'logisco'),
										)
									),
									'enable-copyright' => array(
										'title' => esc_html__('Enable Copyright', 'logisco'),
										'type' => 'combobox',
										'options' => array(
											'default' => esc_html__('Default', 'logisco'),
											'enable' => esc_html__('Enable', 'logisco'),
											'disable' => esc_html__('Disable', 'logisco'),
										)
									),

								)
							), // layout
							'title' => array(
								'title' => esc_html__('Title Style', 'logisco'),
								'options' => array(

									'title-style' => array(
										'title' => esc_html__('Page Title Style', 'logisco'),
										'type' => 'combobox',
										'options' => array(
											'default' => esc_html__('Default', 'logisco'),
											'small' => esc_html__('Small', 'logisco'),
											'medium' => esc_html__('Medium', 'logisco'),
											'large' => esc_html__('Large', 'logisco'),
											'custom' => esc_html__('Custom', 'logisco'),
										),
										'default' => 'default'
									),
									'title-align' => array(
										'title' => esc_html__('Page Title Alignment', 'logisco'),
										'type' => 'radioimage',
										'options' => 'text-align',
										'with-default' => true,
										'default' => 'default'
									),
									'title-spacing' => array(
										'title' => esc_html__('Page Title Padding', 'logisco'),
										'type' => 'custom',
										'item-type' => 'padding',
										'data-input-type' => 'pixel',
										'options' => array('padding-top', 'padding-bottom', 'caption-top-margin'),
										'wrapper-class' => 'gdlr-core-fullsize gdlr-core-no-link gdlr-core-large',
										'condition' => array( 'title-style' => 'custom' )
									),
									'title-font-size' => array(
										'title' => esc_html__('Page Title Font Size', 'logisco'),
										'type' => 'custom',
										'item-type' => 'padding',
										'data-input-type' => 'pixel',
										'options' => array('title-size', 'title-letter-spacing', 'caption-size', 'caption-letter-spacing'),
										'wrapper-class' => 'gdlr-core-fullsize gdlr-core-no-link gdlr-core-large',
										'condition' => array( 'title-style' => 'custom' )
									),
									'title-font-weight' => array(
										'title' => esc_html__('Page Title Font Weight', 'logisco'),
										'type' => 'custom',
										'item-type' => 'padding',
										'options' => array('title-weight', 'caption-weight'),
										'wrapper-class' => 'gdlr-core-fullsize gdlr-core-no-link gdlr-core-large',
										'condition' => array( 'title-style' => 'custom' )
									),
									'title-font-transform' => array(
										'title' => esc_html__('Page Title Font Transform', 'logisco'),
										'type' => 'combobox',
										'options' => array(
											'none' => esc_html__('None', 'logisco'),
											'uppercase' => esc_html__('Uppercase', 'logisco'),
											'lowercase' => esc_html__('Lowercase', 'logisco'),
											'capitalize' => esc_html__('Capitalize', 'logisco'),
										),
										'default' => 'uppercase',
										'condition' => array( 'title-style' => 'custom' )
									),
									'top-bottom-gradient' => array(
										'title' => esc_html__('Title Top/Bottom Gradient', 'logisco'),
										'type' => 'combobox',
										'options' => array(
											'default' => esc_html__('Default', 'logisco'),
											'both' => esc_html__('Both', 'logisco'),
											'top' => esc_html__('Top', 'logisco'),
											'bottom' => esc_html__('Bottom', 'logisco'),
											'disable' => esc_html__('None', 'logisco'),
										)
									),
									'title-background-overlay-opacity' => array(
										'title' => esc_html__('Page Title Background Overlay Opacity', 'logisco'),
										'type' => 'text',
										'description' => esc_html__('Fill the number between 0.01 - 1 ( Leave Blank For Default Value )', 'logisco'),
										'condition' => array( 'title-style' => 'custom' )
									),
									'title-color' => array(
										'title' => esc_html__('Page Title Color', 'logisco'),
										'type' => 'colorpicker',
									),
									'caption-color' => array(
										'title' => esc_html__('Page Caption Color', 'logisco'),
										'type' => 'colorpicker',
									),
									'title-background-overlay-color' => array(
										'title' => esc_html__('Page Background Overlay Color', 'logisco'),
										'type' => 'colorpicker',
									),

								)
							), // title
							'header' => array(
								'title' => esc_html__('Header', 'logisco'),
								'options' => array(

									'header-slider' => array(
										'title' => esc_html__('Header Slider ( Above Navigation )', 'logisco'),
										'type' => 'combobox',
										'options' => array(
											'none' => esc_html__('None', 'logisco'),
											'layer-slider' => esc_html__('Layer Slider', 'logisco'),
											'master-slider' => esc_html__('Master Slider', 'logisco'),
											'revolution-slider' => esc_html__('Revolution Slider', 'logisco'),
										),
										'description' => esc_html__('For header style plain / bar / boxed', 'logisco'),
									),
									'layer-slider-id' => array(
										'title' => esc_html__('Choose Layer Slider', 'logisco'),
										'type' => 'combobox',
										'options' => gdlr_core_get_layerslider_list(),
										'condition' => array( 'header-slider' => 'layer-slider' )
									),
									'master-slider-id' => array(
										'title' => esc_html__('Choose Master Slider', 'logisco'),
										'type' => 'combobox',
										'options' => gdlr_core_get_masterslider_list(),
										'condition' => array( 'header-slider' => 'master-slider' )
									),
									'revolution-slider-id' => array(
										'title' => esc_html__('Choose Revolution Slider', 'logisco'),
										'type' => 'combobox',
										'options' => gdlr_core_get_revolution_slider_list(),
										'condition' => array( 'header-slider' => 'revolution-slider' )
									),

								) // header options
							), // header
							'bullet-anchor' => array(
								'title' => esc_html__('Bullet Anchor', 'logisco'),
								'options' => array(
									'bullet-anchor-description' => array(
										'type' => 'description',
										'description' => esc_html__('This feature is used for one page navigation. It will appear on the right side of page. You can put the id of element in \'Anchor Link\' field to let the bullet scroll the page to.', 'logisco')
									),
									'bullet-anchor' => array(
										'title' => esc_html__('Add Anchor', 'logisco'),
										'type' => 'custom',
										'item-type' => 'tabs',
										'options' => array(
											'title' => array(
												'title' => esc_html__('Anchor Link', 'logisco'),
												'type' => 'text',
											),
											'anchor-color' => array(
												'title' => esc_html__('Anchor Color', 'logisco'),
												'type' => 'colorpicker',
											),
											'anchor-hover-color' => array(
												'title' => esc_html__('Anchor Hover Color', 'logisco'),
												'type' => 'colorpicker',
											)
										),
										'wrapper-class' => 'gdlr-core-fullsize'
									),
								)
							)
						)
					));

					// for post post type
					new gdlr_core_page_option(array(
						'post_type' => array('post'),
						'options' => array(
							'layout' => array(
								'title' => esc_html__('Layout', 'logisco'),
								'options' => array(

									'show-content' => array(
										'title' => esc_html__('Show WordPress Editor Content', 'logisco'),
										'type' => 'checkbox',
										'default' => 'enable',
										'description' => esc_html__('Disable this to hide the content in editor to show only page builder content.', 'logisco'),
									),
									'sidebar' => array(
										'title' => esc_html__('Sidebar', 'logisco'),
										'type' => 'radioimage',
										'options' => 'sidebar',
										'with-default' => true,
										'default' => 'default',
										'wrapper-class' => 'gdlr-core-fullsize'
									),
									'sidebar-left' => array(
										'title' => esc_html__('Sidebar Left', 'logisco'),
										'type' => 'combobox',
										'options' => 'sidebar',
										'condition' => array( 'sidebar' => array('left', 'both') )
									),
									'sidebar-right' => array(
										'title' => esc_html__('Sidebar Right', 'logisco'),
										'type' => 'combobox',
										'options' => 'sidebar',
										'condition' => array( 'sidebar' => array('right', 'both') )
									),
								)
							),
							'metro-layout' => array(
								'title' => esc_html__('Metro Layout', 'logisco'),
								'options' => array(
									'metro-column-size' => array(
										'title' => esc_html__('Column Size', 'logisco'),
										'type' => 'combobox',
										'options' => array( 'default'=> esc_html__('Default', 'logisco'), 
											60 => '1/1', 30 => '1/2', 20 => '1/3', 40 => '2/3', 
											15 => '1/4', 45 => '3/4', 12 => '1/5', 24 => '2/5', 36 => '3/5', 48 => '4/5',
											10 => '1/6', 50 => '5/6'),
										'default' => 'default',
										'description' => esc_html__('Choosing default will display the value selected by the page builder item.', 'logisco')
									),
									'metro-thumbnail-size' => array(
										'title' => esc_html__('Thumbnail Size', 'logisco'),
										'type' => 'combobox',
										'options' => 'thumbnail-size',
										'with-default' => true,
										'default' => 'default',
										'description' => esc_html__('Choosing default will display the value selected by the page builder item.', 'logisco')
									)
								)
							),						
							'title' => array(
								'title' => esc_html__('Title', 'logisco'),
								'options' => array(

									'blog-title-style' => array(
										'title' => esc_html__('Blog Title Style', 'logisco'),
										'type' => 'combobox',
										'options' => array(
											'default' => esc_html__('Default', 'logisco'),
											'small' => esc_html__('Small', 'logisco'),
											'large' => esc_html__('Large', 'logisco'),
											'custom' => esc_html__('Custom', 'logisco'),
											'inside-content' => esc_html__('Inside Content', 'logisco'),
											'none' => esc_html__('None', 'logisco'),
										),
										'default' => 'default'
									),
									'blog-title-padding' => array(
										'title' => esc_html__('Blog Title Padding', 'logisco'),
										'type' => 'custom',
										'item-type' => 'padding',
										'data-input-type' => 'pixel',
										'options' => array('padding-top', 'padding-bottom'),
										'wrapper-class' => 'gdlr-core-fullsize gdlr-core-no-link gdlr-core-large',
										'condition' => array( 'blog-title-style' => 'custom' )
									),
									'blog-feature-image' => array(
										'title' => esc_html__('Blog Feature Image Location', 'logisco'),
										'type' => 'combobox',
										'options' => array(
											'default' => esc_html__('Default', 'logisco'),
											'content' => esc_html__('Inside Content', 'logisco'),
											'title-background' => esc_html__('Title Background', 'logisco'),
											'none' => esc_html__('None', 'logisco'),
										)
									),
									'blog-title-background-image' => array(
										'title' => esc_html__('Blog Title Background Image', 'logisco'),
										'type' => 'upload',
										'data-type' => 'file',
										'condition' => array( 
											'blog-title-style' => array('default', 'small', 'large', 'custom'),
											'blog-feature-image' => array('default', 'content', 'none')
										),
										'description' => esc_html__('Will be overridden by feature image if selected.', 'logisco'),
									),
									'blog-top-bottom-gradient' => array(
										'title' => esc_html__('Blog ( Feature Image ) Title Top/Bottom Gradient', 'logisco'),
										'type' => 'combobox',
										'options' => array(
											'default' => esc_html__('Default', 'logisco'),
											'enable' => esc_html__('Both', 'logisco'),
											'top' => esc_html__('Top', 'logisco'),
											'bottom' => esc_html__('Bottom', 'logisco'),
											'disable' => esc_html__('None', 'logisco'),
										)
									),
									'blog-title-background-overlay-opacity' => array(
										'title' => esc_html__('Blog Title Background Overlay Opacity', 'logisco'),
										'type' => 'text',
										'description' => esc_html__('Fill the number between 0.01 - 1 ( Leave Blank For Default Value )', 'logisco'),
									),

								) // options
							) // title
						)
					));
				}

			}
			
			// create page builder
			if( class_exists('gdlr_core_page_builder') ){
				new gdlr_core_page_builder(array(
					'style' => array(
						'style-custom' => logisco_get_style_custom()
					)
				));
			}
			
		} // logisco_init_goodlayers_core_elements
	} // function_exists

	add_filter('gdlr_core_portfolio_options', 'logisco_gdlr_core_portfolio_options');
	if( !function_exists('logisco_gdlr_core_portfolio_options') ){
		function logisco_gdlr_core_portfolio_options($options){
			$options['general']['options'] = gdlr_core_array_insert($options['general']['options'], 'title-background', array(
				'enable-breadcrumbs' => array(
					'title' => esc_html__('Enable Breadcrumbs', 'logisco'),
					'type' => 'checkbox',
					'default' => 'disable',
					'condition' => array( 'enable-page-title' => 'enable' )
				),
			));

			return $options;
		}
	}