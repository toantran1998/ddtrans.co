<?php
	/*	
	*	Goodlayers Option
	*	---------------------------------------------------------------------
	*	This file store an array of theme options
	*	---------------------------------------------------------------------
	*/	

	// save the css/js file 
	add_action('gdlr_core_after_save_theme_option', 'logisco_gdlr_core_after_save_theme_option');
	if( !function_exists('logisco_gdlr_core_after_save_theme_option') ){
		function logisco_gdlr_core_after_save_theme_option(){
			if( function_exists('gdlr_core_generate_combine_script') ){
				logisco_clear_option();

				gdlr_core_generate_combine_script(array(
					'lightbox' => logisco_gdlr_core_lightbox_type()
				));
			}
		}
	}

	if( !function_exists('logisco_gdlr_core_get_privacy_options') ){
		function logisco_gdlr_core_get_privacy_options( $type = 1 ){
			if( function_exists('gdlr_core_get_privacy_options') ){
				return gdlr_core_get_privacy_options( $type );
			}

			return array();
		} // logisco_gdlr_core_get_privacy_options
	}

	// add the option
	$logisco_admin_option->add_element(array(
	
		// plugin head section
		'title' => esc_html__('Miscellaneous', 'logisco'),
		'slug' => 'logisco_plugin',
		'icon' => get_template_directory_uri() . '/include/options/images/plugin.png',
		'options' => array(
			
			// starting the subnav
			'thumbnail-sizing' => array(
				'title' => esc_html__('Thumbnail Sizing', 'logisco'),
				'customizer' => false,
				'options' => array(
				
					'enable-srcset' => array(
						'title' => esc_html__('Enable Srcset', 'logisco'),
						'type' => 'checkbox',
						'default' => 'disable',
						'description' => esc_html__('Enable this option will improve the performance by resizing the image based on the screensize. Please be cautious that this will generate multiple images on your server.', 'logisco')
					),
					'thumbnail-sizing' => array(
						'title' => esc_html__('Add Thumbnail Size', 'logisco'),
						'type' => 'custom',
						'item-type' => 'thumbnail-sizing',
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					
				) // thumbnail-sizing-options
			), // thumbnail-sizing-nav		

			'consent-settings' => array(
				'title' => esc_html__('Consent Settings', 'logisco'),
				'options' => logisco_gdlr_core_get_privacy_options(1)
			),
			'privacy-settings' => array(
				'title' => esc_html__('Privacy Style Settings', 'logisco'),
				'options' => logisco_gdlr_core_get_privacy_options(2)
			),

			'plugins' => array(
				'title' => esc_html__('Plugins', 'logisco'),
				'options' => array(

					'font-icon' => array(
						'title' => esc_html__('Icon Type', 'logisco'),
						'type' => 'multi-combobox',
						'options' => (function_exists('gdlr_core_get_icon_font_title')? gdlr_core_get_icon_font_title(): array()),
						'description' => esc_html__('You can use Ctrl/Command button to select multiple items or remove the selected item. Leave this field blank to select all items in the list.', 'logisco'),
						'default' => array('font-awesome', 'elegant-font')
					),
					'lightbox' => array(
						'title' => esc_html__('Lightbox Type', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'lightGallery' => esc_html__('LightGallery', 'logisco'),
							'strip' => esc_html__('Strip', 'logisco'),
						)
					),
					'link-to-lightbox' => array(
						'title' => esc_html__('Turn Image Link To Open In Lightbox', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable'
					),
					'lightbox-video-autoplay' => array(
						'title' => esc_html__('Enable Video Autoplay On Lightbox', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable'
					),
					
				) // plugin-options
			), // plugin-nav		
			'additional-script' => array(
				'title' => esc_html__('Custom Css/Js', 'logisco'),
				'options' => array(
				
					'additional-css' => array(
						'title' => esc_html__('Additional CSS ( without <style> tag )', 'logisco'),
						'type' => 'textarea',
						'data-type' => 'text',
						'selector' => '#gdlr#',
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					'additional-mobile-css' => array(
						'title' => esc_html__('Mobile CSS ( screen below 767px )', 'logisco'),
						'type' => 'textarea',
						'data-type' => 'text',
						'selector' => '@media only screen and (max-width: 767px){ #gdlr# }',
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					'additional-head-script' => array(
						'title' => esc_html__('Additional Head Script ( without <script> tag )', 'logisco'),
						'type' => 'textarea',
						'wrapper-class' => 'gdlr-core-fullsize',
						'descriptin' => esc_html__('Eg. For analytics', 'logisco')
					),
					'additional-head-script2' => array(
						'title' => esc_html__('Additional Head Script ( with <script> tag )', 'logisco'),
						'type' => 'textarea',
						'wrapper-class' => 'gdlr-core-fullsize',
						'descriptin' => esc_html__('Eg. For analytics', 'logisco')
					),
					'additional-script' => array(
						'title' => esc_html__('Additional Script ( without <script> tag )', 'logisco'),
						'type' => 'textarea',
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					
				) // additional-script-options
			), // additional-script-nav	
			'maintenance' => array(
				'title' => esc_html__('Maintenance Mode', 'logisco'),
				'options' => array(		
					'enable-maintenance' => array(
						'title' => esc_html__('Enable Maintenance / Coming Soon Mode', 'logisco'),
						'type' => 'checkbox',
						'default' => 'disable'
					),					
					'maintenance-page' => array(
						'title' => esc_html__('Select Maintenance / Coming Soon Page', 'logisco'),
						'type' => 'combobox',
						'options' => 'post_type',
						'options-data' => 'page'
					),

				) // maintenance-options
			), // maintenance
			'pre-load' => array(
				'title' => esc_html__('Preload', 'logisco'),
				'options' => array(		
					'enable-preload' => array(
						'title' => esc_html__('Enable Preload', 'logisco'),
						'type' => 'checkbox',
						'default' => 'disable'
					),
					'preload-image' => array(
						'title' => esc_html__('Preload Image', 'logisco'),
						'type' => 'upload',
						'data-type' => 'file', 
						'selector' => '.logisco-page-preload{ background-image: url(#gdlr#); }',
						'condition' => array( 'enable-preload' => 'enable' ),
						'description' => esc_html__('Upload the image (.gif) you want to use as preload animation. You could search it online at https://www.google.com/search?q=loading+gif as well', 'logisco')
					),
				)
			),
			'import-export' => array(
				'title' => esc_html__('Import / Export', 'logisco'),
				'options' => array(

					'export' => array(
						'title' => esc_html__('Export Option', 'logisco'),
						'type' => 'export',
						'action' => 'gdlr_core_theme_option_export',
						'options' => array(
							'all' => esc_html__('All Options(general/typography/color/miscellaneous) exclude widget, custom template', 'logisco'),
							'logisco_general' => esc_html__('General Option', 'logisco'),
							'logisco_typography' => esc_html__('Typography Option', 'logisco'),
							'logisco_color' => esc_html__('Color Option', 'logisco'),
							'logisco_plugin' => esc_html__('Miscellaneous', 'logisco'),
							'widget' => esc_html__('Widget', 'logisco'),
							'page-builder-template' => esc_html__('Custom Page Builder Template', 'logisco'),
						),
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					'import' => array(
						'title' => esc_html__('Import Option', 'logisco'),
						'type' => 'import',
						'action' => 'gdlr_core_theme_option_import',
						'wrapper-class' => 'gdlr-core-fullsize'
					),

				) // import-options
			), // import-export
			
		
		) // plugin-options
		
	), 8);	