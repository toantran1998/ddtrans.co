<?php

	// edit portfolio options
	add_filter('gdlr_core_portfolio_item_options', 'logisco_gdlr_core_portfolio_item_options');
	if( !function_exists('logisco_gdlr_core_portfolio_item_options') ){
		function logisco_gdlr_core_portfolio_item_options( $options ){

			unset($options['settings']['options']['portfolio-frame-opacity']);

			if( !empty($options['spacing']['options']) ){
				$options['spacing']['options'] = gdlr_core_array_insert($options['spacing']['options'], 'filterer-bottom-margin', array(
					'portfolio-grid-frame-margin' => array(
						'title' => esc_html__('Portfolio (Grid Style) Frame Margin', 'logisco'),
						'type' => 'custom',
						'item-type' => 'padding',
						'data-input-type' => 'pixel',
					),
					'portfolio-grid-frame-background-shadow-size' => array(
						'title' => esc_html__('Background Shadow Size', 'logisco'),
						'type' => 'custom',
						'item-type' => 'padding',
						'options' => array('x', 'y', 'size'),
						'data-input-type' => 'pixel',
					),
					'portfolio-grid-frame-background-shadow-color' => array(
						'title' => esc_html__('Background Shadow Color', 'logisco'),
						'type' => 'colorpicker'
					),
					'portfolio-grid-frame-background-shadow-opacity' => array(
						'title' => esc_html__('Background Shadow Opacity', 'logisco'),
						'type' => 'text',
						'default' => '0.2',
						'description' => esc_html__('Fill the number between 0.01 to 1', 'logisco')
					),
				));
			}

			return $options;
		}
	}

	// change the portfolio style
	add_filter('gdlr_core_portfolio_style_content', 'logisco_gdlr_core_portfolio_style_content', 10, 3);
	if( !function_exists('logisco_gdlr_core_portfolio_style_content') ){
		function logisco_gdlr_core_portfolio_style_content( $ret, $args, $port_style ){
			
			if( $args['portfolio-style'] == 'grid' || $args['portfolio-style'] == 'grid-no-space' ){
				
				$extra_class  = ' gdlr-core-' . (empty($args['portfolio-grid-text-align'])? 'left': $args['portfolio-grid-text-align']) . '-align';
				$extra_class .= ' gdlr-core-style-' . (empty($args['portfolio-grid-style'])? 'normal': $args['portfolio-grid-style']);
				
				$thumbnail_shadow = false;
				
				$port_atts = array(
					'margin-bottom' => empty($args['portfolio-item-bottom-margin'])? '': $args['portfolio-item-bottom-margin']
				);
				if( $args['portfolio-grid-style'] == 'with-frame' ){
					if( !empty($args['frame-shadow-size']['size']) && !empty($args['frame-shadow-color']) && !empty($args['frame-shadow-opacity']) ){
						$port_atts['background-shadow-size'] = $args['frame-shadow-size'];
						$port_atts['background-shadow-color'] = $args['frame-shadow-color'];
						$port_atts['background-shadow-opacity'] = $args['frame-shadow-opacity'];						
					}
				}else{
					$thumbnail_shadow = true;
				}

				
				$ret  = '<div class="gdlr-core-portfolio-grid ' . esc_attr($extra_class) . '" ' . gdlr_core_esc_style($port_atts) . ' >';
				$ret .= $port_style->get_thumbnail($args, true, $thumbnail_shadow);

				// portfolio-frame-opacity
				$ret .= '<div class="gdlr-core-portfolio-content-wrap gdlr-core-skin-divider gdlr-core-skin-e-background" ' . gdlr_core_esc_style(array(
					'margin' => empty($args['portfolio-grid-frame-margin'])? '': $args['portfolio-grid-frame-margin'],
					'background-shadow-size' => empty($args['portfolio-grid-frame-background-shadow-size'])? '': $args['portfolio-grid-frame-background-shadow-size'],
					'background-shadow-color' => empty($args['portfolio-grid-frame-background-shadow-color'])? '': $args['portfolio-grid-frame-background-shadow-color'],
					'background-shadow-opacity' => empty($args['portfolio-grid-frame-background-shadow-opacity'])? '': $args['portfolio-grid-frame-background-shadow-opacity'],
							
				)) . ' >';
				if( empty($args['enable-portfolio-title']) || $args['enable-portfolio-title'] == 'enable' ){
					$ret .= $port_style->portfolio_title($args);
				}
				if( empty($args['enable-portfolio-tag']) || $args['enable-portfolio-tag'] == 'enable' ){
					$ret .= $port_style->get_info('tag', $args);
				}
				if( !empty($args['enable-portfolio-date']) && $args['enable-portfolio-date'] == 'enable' ){
					$ret .= $port_style->get_info('date', $args);
				}
				
				if( $args['excerpt'] == 'specify-number' ){
					if( !empty($args['excerpt-number']) ){
						$ret .= '<div class="gdlr-core-portfolio-content" >' . $port_style->get_excerpt($args['excerpt-number']) . '</div>';
					}
				}else if( $args['excerpt'] != 'none' ){
					$ret .= '<div class="gdlr-core-portfolio-content" >' . gdlr_core_content_filter(get_the_content(), true) . '</div>';
				}

				if( !empty($args['read-more-button']) && $args['read-more-button'] == 'enable' ){
					$ret .= '<div class="gdlr-core-portfolio-read-more-wrap" >';
					$ret .= '<a class="gdlr-core-portfolio-read-more" href="' . get_permalink() . '" >' . esc_html__('Read More', 'logisco') . '</a>';
					$ret .= '</div>';
				}
				$ret .= '</div>'; // gdlr-core-portfolio-content-wrap
				$ret .= '</div>'; // gdlr-core-portfolio-modern
				
				return $ret;

			}

		}
	}