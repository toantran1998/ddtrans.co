<?php
	/*	
	*	Goodlayers Option
	*	---------------------------------------------------------------------
	*	This file store an array of theme options
	*	---------------------------------------------------------------------
	*/	

	$logisco_admin_option->add_element(array(
	
		// typography head section
		'title' => esc_html__('Typography', 'logisco'),
		'slug' => 'logisco_typography',
		'icon' => get_template_directory_uri() . '/include/options/images/typography.png',
		'options' => array(
		
			// starting the subnav
			'font-family' => array(
				'title' => esc_html__('Font Family', 'logisco'),
				'options' => array(
					'heading-font' => array(
						'title' => esc_html__('Heading Font', 'logisco'),
						'type' => 'font',
						'data-type' => 'font',
						'default' => 'Open Sans',
						'selector' => '.logisco-body h1, .logisco-body h2, .logisco-body h3, ' . 
							'.logisco-body h4, .logisco-body h5, .logisco-body h6, .logisco-body .logisco-title-font,' .
							'.logisco-body .gdlr-core-title-font{ font-family: #gdlr#; }' . 
							'.woocommerce-breadcrumb, .woocommerce span.onsale, ' .
							'.single-product.woocommerce div.product p.price .woocommerce-Price-amount, .single-product.woocommerce #review_form #respond label{ font-family: #gdlr#; }'
					),
					'navigation-font' => array(
						'title' => esc_html__('Navigation Font', 'logisco'),
						'type' => 'font',
						'data-type' => 'font',
						'default' => 'Open Sans',
						'selector' => '.logisco-navigation .sf-menu > li > a, .logisco-navigation .sf-vertical > li > a, .logisco-navigation-font{ font-family: #gdlr#; }'
					),	
					'content-font' => array(
						'title' => esc_html__('Content Font', 'logisco'),
						'type' => 'font',
						'data-type' => 'font',
						'default' => 'Open Sans',
						'selector' => '.logisco-body, .logisco-body .gdlr-core-content-font, ' . 
							'.logisco-body input, .logisco-body textarea, .logisco-body button, .logisco-body select, ' . 
							'.logisco-body .logisco-content-font, .gdlr-core-audio .mejs-container *, .gdlr-core-counter-item .gdlr-core-counter-item-number{ font-family: #gdlr#; }'
					),
					'info-font' => array(
						'title' => esc_html__('Info Font', 'logisco'),
						'type' => 'font',
						'data-type' => 'font',
						'default' => 'Open Sans',
						'selector' => '.logisco-body .gdlr-core-info-font, .logisco-body .logisco-info-font{ font-family: #gdlr#; }'
					),
					'blog-info-font' => array(
						'title' => esc_html__('Blog Info Font', 'logisco'),
						'type' => 'font',
						'data-type' => 'font',
						'default' => 'Open Sans',
						'selector' => '.logisco-body .gdlr-core-blog-info-font, .logisco-body .logisco-blog-info-font{ font-family: #gdlr#; }'
					),
					'quote-font' => array(
						'title' => esc_html__('Quote Font', 'logisco'),
						'type' => 'font',
						'data-type' => 'font',
						'default' => 'Open Sans',
						'selector' => '.logisco-body .gdlr-core-quote-font, blockquote{ font-family: #gdlr#; }'
					),
					'testimonial-font' => array(
						'title' => esc_html__('Testimonial Font', 'logisco'),
						'type' => 'font',
						'data-type' => 'font',
						'default' => 'Open Sans',
						'selector' => '.logisco-body .gdlr-core-testimonial-content{ font-family: #gdlr#; }'
					),
					'additional-font' => array(
						'title' => esc_html__('Additional Font', 'logisco'),
						'type' => 'font',
						'data-type' => 'font',
						'customizer' => false,
						'default' => 'Georgia, serif',
						'description' => esc_html__('Additional font you want to include for custom css.', 'logisco')
					),
					'additional-font2' => array(
						'title' => esc_html__('Additional Font2', 'logisco'),
						'type' => 'font',
						'data-type' => 'font',
						'customizer' => false,
						'default' => 'Georgia, serif',
						'description' => esc_html__('Additional font you want to include for custom css.', 'logisco')
					),
					
				) // font-family-options
			), // font-family-nav
			
			'font-size' => array(
				'title' => esc_html__('Font Size', 'logisco'),
				'options' => array(
				
					'h1-font-size' => array(
						'title' => esc_html__('H1 Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '52px',
						'selector' => '.logisco-body h1{ font-size: #gdlr#; }' 
					),					
					'h2-font-size' => array(
						'title' => esc_html__('H2 Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '48px',
						'selector' => '.logisco-body h2, #poststuff .gdlr-core-page-builder-body h2{ font-size: #gdlr#; }' 
					),					
					'h3-font-size' => array(
						'title' => esc_html__('H3 Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '36px',
						'selector' => '.logisco-body h3{ font-size: #gdlr#; }' 
					),					
					'h4-font-size' => array(
						'title' => esc_html__('H4 Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '28px',
						'selector' => '.logisco-body h4{ font-size: #gdlr#; }' 
					),					
					'h5-font-size' => array(
						'title' => esc_html__('H5 Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '22px',
						'selector' => '.logisco-body h5{ font-size: #gdlr#; }' 
					),					
					'h6-font-size' => array(
						'title' => esc_html__('H6 Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '18px',
						'selector' => '.logisco-body h6{ font-size: #gdlr#; }' 
					),				
					'header-font-weight' => array(
						'title' => esc_html__('Header Font Weight', 'logisco'),
						'type' => 'text',
						'data-type' => 'text',
						'selector' => '.logisco-body h1, .logisco-body h2, .logisco-body h3, .logisco-body h4, .logisco-body h5, .logisco-body h6{ font-weight: #gdlr#; }' . 
							'#poststuff .gdlr-core-page-builder-body h1, #poststuff .gdlr-core-page-builder-body h2{ font-weight: #gdlr#; }',
						'description' => esc_html__('Eg. lighter, bold, normal, 300, 400, 600, 700, 800', 'logisco')
					),
					'content-font-size' => array(
						'title' => esc_html__('Content Font Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '15px',
						'selector' => '.logisco-body{ font-size: #gdlr#; }' 
					),
					'content-font-weight' => array(
						'title' => esc_html__('Content Font Weight', 'logisco'),
						'type' => 'text',
						'data-type' => 'text',
						'selector' => '.logisco-body{ font-weight: #gdlr#; }',
						'description' => esc_html__('Eg. lighter, bold, normal, 300, 400, 600, 700, 800', 'logisco')
					),
					'content-line-height' => array(
						'title' => esc_html__('Content Line Height', 'logisco'),
						'type' => 'text',
						'data-type' => 'text',
						'default' => '1.7',
						'selector' => '.logisco-body, .logisco-body p, .logisco-line-height, .gdlr-core-line-height{ line-height: #gdlr#; }'
					),
					
				) // font-size-options
			), // font-size-nav			
			
			'mobile-font-size' => array(
				'title' => esc_html__('Mobile Font Size', 'logisco'),
				'options' => array(

					'mobile-h1-font-size' => array(
						'title' => esc_html__('Mobile H1 Size', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '@media only screen and (max-width: 767px){ .logisco-body h1{ font-size: #gdlr#; } }' 
					),
					'mobile-h2-font-size' => array(
						'title' => esc_html__('Mobile H2 Size', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '@media only screen and (max-width: 767px){ .logisco-body h2, #poststuff .gdlr-core-page-builder-body h2{ font-size: #gdlr#; } }' 
					),
					'mobile-h3-font-size' => array(
						'title' => esc_html__('Mobile H3 Size', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '@media only screen and (max-width: 767px){ .logisco-body h3{ font-size: #gdlr#; } }' 
					),
					'mobile-h4-font-size' => array(
						'title' => esc_html__('Mobile H4 Size', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '@media only screen and (max-width: 767px){ .logisco-body h4{ font-size: #gdlr#; } }' 
					),
					'mobile-h5-font-size' => array(
						'title' => esc_html__('Mobile H5 Size', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '@media only screen and (max-width: 767px){ .logisco-body h5{ font-size: #gdlr#; } }' 
					),
					'mobile-h6-font-size' => array(
						'title' => esc_html__('Mobile H6 Size', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '@media only screen and (max-width: 767px){ .logisco-body h6{ font-size: #gdlr#; } }' 
					),					
					'mobile-content-font-size' => array(
						'title' => esc_html__('Mobile Content Font Size', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '@media only screen and (max-width: 767px){ .logisco-body{ font-size: #gdlr#; } }' 
					),

				)
			),

			'navigation-font-size' => array(
				'title' => esc_html__('Navigation Font Size', 'logisco'),
				'options' => array(	
					'navigation-font-size' => array(
						'title' => esc_html__('Navigation Font Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '14px',
						'selector' => '.logisco-navigation .sf-menu > li > a, .logisco-navigation .sf-vertical > li > a{ font-size: #gdlr#; }' 
					),	
					'navigation-font-weight' => array(
						'title' => esc_html__('Navigation Font Weight', 'logisco'),
						'type' => 'text',
						'data-type' => 'text',
						'default' => '800',
						'selector' => '.logisco-navigation .sf-menu > li > a, .logisco-navigation .sf-vertical > li > a{ font-weight: #gdlr#; }',
						'description' => esc_html__('Eg. lighter, bold, normal, 300, 400, 600, 700, 800', 'logisco')
					),	
					'navigation-font-letter-spacing' => array(
						'title' => esc_html__('Navigation Font Letter Spacing', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '.logisco-navigation .sf-menu > li > a, .logisco-navigation .sf-vertical > li > a{ letter-spacing: #gdlr#; }'
					),
					'navigation-text-transform' => array(
						'title' => esc_html__('Navigation Text Transform', 'logisco'),
						'type' => 'combobox',
						'data-type' => 'text',
						'options' => array(
							'uppercase' => esc_html__('Uppercase', 'logisco'),
							'lowercase' => esc_html__('Lowercase', 'logisco'),
							'capitalize' => esc_html__('Capitalize', 'logisco'),
							'none' => esc_html__('None', 'logisco'),
						),
						'default' => 'uppercase',
						'selector' => '.logisco-navigation .sf-menu > li > a, .logisco-navigation .sf-vertical > li > a{ text-transform: #gdlr#; }',
					),
					'fixed-navigation-font-size' => array(
						'title' => esc_html__('Fixed Navigation Font Size', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '.logisco-fixed-navigation .logisco-navigation .sf-menu > li > a, .logisco-fixed-navigation .logisco-navigation .sf-vertical > li > a{ font-size: #gdlr#; }' 
					),	
					'fixed-navigation-font-weight' => array(
						'title' => esc_html__('Fixed Navigation Font Weight', 'logisco'),
						'type' => 'text',
						'data-type' => 'text',
						'selector' => '.logisco-fixed-navigation .logisco-navigation .sf-menu > li > a, .logisco-fixed-navigation .logisco-navigation .sf-vertical > li > a{ font-weight: #gdlr#; }',
						'description' => esc_html__('Eg. lighter, bold, normal, 300, 400, 600, 700, 800', 'logisco')
					),	
					'fixed-navigation-font-letter-spacing' => array(
						'title' => esc_html__('Fixed Navigation Font Letter Spacing', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '.logisco-fixed-navigation .logisco-navigation .sf-menu > li > a, .logisco-fixed-navigation .logisco-navigation .sf-vertical > li > a{ letter-spacing: #gdlr#; }'
					),
					'fixed-navigation-text-transform' => array(
						'title' => esc_html__('Fixed Navigation Text Transform', 'logisco'),
						'type' => 'combobox',
						'data-type' => 'text',
						'options' => array(
							'' => esc_html__('Default', 'logisco'),
							'uppercase' => esc_html__('Uppercase', 'logisco'),
							'lowercase' => esc_html__('Lowercase', 'logisco'),
							'capitalize' => esc_html__('Capitalize', 'logisco'),
							'none' => esc_html__('None', 'logisco'),
						),
						'selector' => '.logisco-fixed-navigation .logisco-navigation .sf-menu > li > a, .logisco-fixed-navigation .logisco-navigation .sf-vertical > li > a{ text-transform: #gdlr#; }',
					),
					'navigation-right-button-font-size' => array(
						'title' => esc_html__('Navigation Right Button Font Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '11px',
						'selector' => '.logisco-main-menu-right-button{ font-size: #gdlr#; }' 
					),	
					'navigation-right-button-font-weight' => array(
						'title' => esc_html__('Navigation Right Button Font Weight', 'logisco'),
						'type' => 'text',
						'data-type' => 'text',
						'selector' => '.logisco-main-menu-right-button{ font-weight: #gdlr#; }',
						'description' => esc_html__('Eg. lighter, bold, normal, 300, 400, 600, 700, 800', 'logisco')
					),	
					'navigation-right-button-font-letter-spacing' => array(
						'title' => esc_html__('Navigation Right Button Font Letter Spacing', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '.logisco-main-menu-right-button{ letter-spacing: #gdlr#; }'
					),
					'navigation-right-button-text-transform' => array(
						'title' => esc_html__('Navigation Right Button Text Transform', 'logisco'),
						'type' => 'combobox',
						'data-type' => 'text',
						'options' => array(
							'uppercase' => esc_html__('Uppercase', 'logisco'),
							'lowercase' => esc_html__('Lowercase', 'logisco'),
							'capitalize' => esc_html__('Capitalize', 'logisco'),
							'none' => esc_html__('None', 'logisco'),
						),
						'default' => 'uppercase',
						'selector' => '.logisco-main-menu-right-button{ text-transform: #gdlr#; }',
					),
				) // font-size-options
			), // font-size-nav
			
			'footer-font-size' => array(
				'title' => esc_html__('Sidebar / Footer Font Size', 'logisco'),
				'options' => array(
					
					'sidebar-title-font-size' => array(
						'title' => esc_html__('Sidebar Title Font Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '13px',
						'selector' => '.logisco-sidebar-area .logisco-widget-title{ font-size: #gdlr#; }' 
					),
					'sidebar-title-font-weight' => array(
						'title' => esc_html__('Sidebar Title Font Weight', 'logisco'),
						'type' => 'text',
						'data-type' => 'text',
						'selector' => '.logisco-sidebar-area .logisco-widget-title{ font-weight: #gdlr#; }',
						'description' => esc_html__('Eg. lighter, bold, normal, 300, 400, 600, 700, 800', 'logisco')
					),	
					'sidebar-title-font-letter-spacing' => array(
						'title' => esc_html__('Sidebar Title Font Letter Spacing', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '.logisco-sidebar-area .logisco-widget-title{ letter-spacing: #gdlr#; }'
					),
					'sidebar-title-text-transform' => array(
						'title' => esc_html__('Sidebar Title Text Transform', 'logisco'),
						'type' => 'combobox',
						'data-type' => 'text',
						'options' => array(
							'uppercase' => esc_html__('Uppercase', 'logisco'),
							'lowercase' => esc_html__('Lowercase', 'logisco'),
							'capitalize' => esc_html__('Capitalize', 'logisco'),
							'none' => esc_html__('None', 'logisco'),
						),
						'default' => 'uppercase',
						'selector' => '.logisco-sidebar-area .logisco-widget-title{ text-transform: #gdlr#; }',
					),
					'footer-title-font-size' => array(
						'title' => esc_html__('Footer Title Font Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '13px',
						'selector' => '.logisco-footer-wrapper .logisco-widget-title{ font-size: #gdlr#; }' 
					),
					'footer-title-font-weight' => array(
						'title' => esc_html__('Footer Title Font Weight', 'logisco'),
						'type' => 'text',
						'data-type' => 'text',
						'selector' => '.logisco-footer-wrapper .logisco-widget-title{ font-weight: #gdlr#; }',
						'description' => esc_html__('Eg. lighter, bold, normal, 300, 400, 600, 700, 800', 'logisco')
					),	
					'footer-title-font-letter-spacing' => array(
						'title' => esc_html__('Footer Title Font Letter Spacing', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '.logisco-footer-wrapper .logisco-widget-title{ letter-spacing: #gdlr#; }'
					),
					'footer-title-text-transform' => array(
						'title' => esc_html__('Footer Title Text Transform', 'logisco'),
						'type' => 'combobox',
						'data-type' => 'text',
						'options' => array(
							'uppercase' => esc_html__('Uppercase', 'logisco'),
							'lowercase' => esc_html__('Lowercase', 'logisco'),
							'capitalize' => esc_html__('Capitalize', 'logisco'),
							'none' => esc_html__('None', 'logisco'),
						),
						'default' => 'uppercase',
						'selector' => '.logisco-footer-wrapper .logisco-widget-title{ text-transform: #gdlr#; }',
					),
					'footer-font-size' => array(
						'title' => esc_html__('Footer Content Font Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '15px',
						'selector' => '.logisco-footer-wrapper{ font-size: #gdlr#; }' 
					),
					'footer-content-font-weight' => array(
						'title' => esc_html__('Footer Content Font Weight', 'logisco'),
						'type' => 'text',
						'data-type' => 'text',
						'selector' => '.logisco-footer-wrapper .widget_text{ font-weight: #gdlr#; }',
						'description' => esc_html__('Eg. lighter, bold, normal, 300, 400, 600, 700, 800', 'logisco')
					),	
					'footer-content-text-transform' => array(
						'title' => esc_html__('Footer Content Text Transform', 'logisco'),
						'type' => 'combobox',
						'data-type' => 'text',
						'options' => array(
							'uppercase' => esc_html__('Uppercase', 'logisco'),
							'lowercase' => esc_html__('Lowercase', 'logisco'),
							'capitalize' => esc_html__('Capitalize', 'logisco'),
							'none' => esc_html__('None', 'logisco'),
						),
						'default' => 'none',
						'selector' => '.logisco-footer-wrapper .widget_text{ text-transform: #gdlr#; }',
					),
					'copyright-font-size' => array(
						'title' => esc_html__('Copyright Font Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '14px',
						'selector' => '.logisco-copyright-text, .logisco-copyright-left, .logisco-copyright-right{ font-size: #gdlr#; }' 
					),
					'copyright-font-weight' => array(
						'title' => esc_html__('Copyright Font Weight', 'logisco'),
						'type' => 'text',
						'data-type' => 'text',
						'selector' => '.logisco-copyright-text, .logisco-copyright-left, .logisco-copyright-right{ font-weight: #gdlr#; }',
						'description' => esc_html__('Eg. lighter, bold, normal, 300, 400, 600, 700, 800', 'logisco')
					),	
					'copyright-font-letter-spacing' => array(
						'title' => esc_html__('Copyright Font Letter Spacing', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '.logisco-copyright-text, .logisco-copyright-left, .logisco-copyright-right{ letter-spacing: #gdlr#; }'
					),
					'copyright-text-transform' => array(
						'title' => esc_html__('Copyright Text Transform', 'logisco'),
						'type' => 'combobox',
						'data-type' => 'text',
						'options' => array(
							'uppercase' => esc_html__('Uppercase', 'logisco'),
							'lowercase' => esc_html__('Lowercase', 'logisco'),
							'capitalize' => esc_html__('Capitalize', 'logisco'),
							'none' => esc_html__('None', 'logisco'),
						),
						'default' => 'uppercase',
						'selector' => '.logisco-copyright-text, .logisco-copyright-left, .logisco-copyright-right{ text-transform: #gdlr#; }',
					),
				)
			),

			'font-upload' => array(
				'title' => esc_html__('Font Uploader', 'logisco'),
				'reload-after' => true,
				'customizer' => false,
				'options' => array(
					
					'font-upload' => array(
						'title' => esc_html__('Upload Fonts', 'logisco'),
						'type' => 'custom',
						'item-type' => 'fontupload',
						'wrapper-class' => 'gdlr-core-fullsize',
					),
					
				) // fontupload-options
			), // fontupload-nav
		
		) // typography-options
		
	), 4);