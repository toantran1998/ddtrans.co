<?php
	/*	
	*	Goodlayers Option
	*	---------------------------------------------------------------------
	*	This file store an array of theme options
	*	---------------------------------------------------------------------
	*/	

	// add custom css for theme option
	add_filter('gdlr_core_theme_option_top_file_write', 'logisco_gdlr_core_theme_option_top_file_write', 10, 2);
	if( !function_exists('logisco_gdlr_core_theme_option_top_file_write') ){
		function logisco_gdlr_core_theme_option_top_file_write( $css, $option_slug ){
			if( $option_slug != 'goodlayers_main_menu' ) return;

			ob_start();
?>
.logisco-body h1, .logisco-body h2, .logisco-body h3, .logisco-body h4, .logisco-body h5, .logisco-body h6{ margin-top: 0px; margin-bottom: 20px; line-height: 1.2; font-weight: 700; }
#poststuff .gdlr-core-page-builder-body h2{ padding: 0px; margin-bottom: 20px; line-height: 1.2; font-weight: 700; }
#poststuff .gdlr-core-page-builder-body h1{ padding: 0px; font-weight: 700; }

.gdlr-core-accordion-style-icon .gdlr-core-accordion-item-tab{ border-bottom-width: 1px; border-bottom-style: solid; margin-bottom: 18px; }

.gdlr-core-column-service-item .gdlr-core-column-service-read-more{ text-transform: uppercase; font-weight: bold; letter-spacing: 1px; }

.gdlr-core-testimonial-item .gdlr-core-testimonial-author-content{ padding-top: 0px; }
.gdlr-core-testimonial-item .gdlr-core-testimonial-author-image{ width: 66px; }
.gdlr-core-testimonial-item .gdlr-core-testimonial-content{ font-style: normal; }
.gdlr-core-testimonial-item .gdlr-core-testimonial-title{ letter-spacing: 0px; text-transform: none; }
.gdlr-core-testimonial-item .gdlr-core-testimonial-position{ font-style: normal; }
.gdlr-core-testimonial-item .gdlr-core-testimonial-frame{ padding: 55px 42px 60px; }
.gdlr-core-testimonial-style-left .gdlr-core-testimonial-quote{ font-size: 190px; height: 80px; margin-right: 28px; margin-top: -9px; }
.gdlr-core-testimonial-style-right .gdlr-core-testimonial-quote{ font-size: 190px; height: 80px; margin-left: 28px; margin-top: -20px; }

.gdlr-core-flexslider.gdlr-core-bullet-style-cylinder .flex-control-nav li a{ width: 26px; height: 5px; }

.gdlr-core-personnel-style-grid .gdlr-core-personnel-list-divider{ display: none; }
.gdlr-core-personnel-style-grid.gdlr-core-with-divider .gdlr-core-personnel-list-content-wrap{ border-bottom-width: 3px; border-bottom-style: solid; padding-bottom: 16px; }

ul.gdlr-core-custom-menu-widget.gdlr-core-menu-style-half li:nth-child(2n-1){ width: 46%; margin-right: 4%; }
ul.gdlr-core-custom-menu-widget.gdlr-core-menu-style-half li:nth-child(2n){ width: 46%; margin-left: 4%; }
ul.gdlr-core-custom-menu-widget.gdlr-core-menu-style-half li{ border-bottom-width: 1px; border-bottom-style: solid; padding-bottom: 12px; margin-bottom: 12px; }

.gdlr-core-dropdown-tab .gdlr-core-dropdown-tab-title{ font-size: inherit; padding: 0px; font-weight: normal; }

.gdlr-core-dropdown-tab .gdlr-core-dropdown-tab-title:after{ content: "\f0d7"; }
.gdlr-core-dropdown-tab .gdlr-core-dropdown-tab-title{ margin-right: 25px; }
.gdlr-core-dropdown-tab .gdlr-core-dropdown-tab-content-wrap{ display: inline; }
.gdlr-core-dropdown-tab .gdlr-core-dropdown-tab-head-wrap{ background: #000; color: #fff; border-radius: 0px; margin-top: 9px; padding-top: 7px; padding-bottom: 7px; }

.gdlr-core-portfolio-grid .gdlr-core-portfolio-content-wrap .gdlr-core-portfolio-info-tag:before{ content: " "; display: inline-block; width: 12px; border-bottom-width: 2px; border-bottom-style: solid; margin-bottom: 0.2em; margin-right: 10px; }

.gdlr-core-blog-info-wrapper .gdlr-core-blog-info{ font-size: 12px; font-weight: 600; letter-spacing: 0.52px; }
.gdlr-core-blog-widget .gdlr-core-blog-info-wrapper:before{ content: "//"; margin-right: 10px; vertical-align: middle; }
.gdlr-core-blog-widget .gdlr-core-blog-info:first-child .gdlr-core-head { display: none; }
.gdlr-core-blog-widget .gdlr-core-blog-thumbnail{ border-radius: 3px; -moz-border-radius: 3px; -webkit-border-radius: 3px; margin-bottom: 0px; }
.gdlr-core-blog-widget.gdlr-core-style-small{ padding-top: 0px; border: none; margin-bottom: 30px; }
.gdlr-core-blog-widget.gdlr-core-style-small .gdlr-core-blog-title{ margin-bottom: 0px; margin-top: 8px; }
.gdlr-core-blog-widget.gdlr-core-style-large{ padding-top: 0px; border: none; margin-bottom: 30px; }
.gdlr-core-blog-widget.gdlr-core-style-large .gdlr-core-blog-title{ margin-bottom: 0px; margin-top: 8px; }
.gdlr-core-blog-widget.gdlr-core-style-large .gdlr-core-blog-widget-content{ padding-top: 4px; }

.logisco-custom-tracking-form-input input[type="text"]{ height: 57px; background: #f6f6f6; margin: 0px; border: none; float: left; width: 65%; font-size: 16px; font-style: italic; padding: 13px 20px 18px; }
.logisco-custom-tracking-form-submit input[type="submit"]{ height: 57px; width: 33%; font-size: 14px; font-weight: 600; background: #e53d34; }

.gdlr-core-input-wrap input, .gdlr-core-input-wrap textarea{ border-bottom-width: 1px; }
.gdlr-core-input-wrap input[type="button"], 
.gdlr-core-input-wrap input[type="submit"], 
.gdlr-core-input-wrap input[type="reset"]{ padding-top: 18px; padding-bottom: 20px; }

.gdlr-core-flexslider-nav.gdlr-core-plain-style li a.flex-next i:before{ content: "\f178"; margin-left: 10px; font-family: fontAwesome; }
.gdlr-core-flexslider-nav.gdlr-core-plain-style li a.flex-prev i:before{ content: "\f177"; margin-right: 10px; font-family: fontAwesome; }

/* extra */
.logisco-breadcrumbs-item span.post.current-item, .gdlr-core-breadcrumbs-item span.post.current-item{ margin-left: 14px; }
.logisco-breadcrumbs-item span[property="itemListElement"], .gdlr-core-breadcrumbs-item span[property="itemListElement"]{ margin: 0px 14px; }
.gdlr-core-blog-grid-with-frame .gdlr-core-blog-grid-frame{ padding: 29px 35px 20px; }
.gdlr-core-blog-quote-format.gdlr-core-large .gdlr-core-blog-content{ padding: 70px 50px 45px; }
.comment-form-cookies-consent label{ font-size: 15px; }
.gdlr-core-recent-post-widget-wrap.gdlr-core-style-1 .gdlr-core-recent-post-widget-title{ font-size: 15px; font-weight: 600; margin-bottom: 5px; margin-top: -3px; line-height: 1.4; }
.gdlr-core-recent-post-widget-wrap.gdlr-core-style-1 .gdlr-core-recent-post-widget{ margin-bottom: 30px; }
.gdlr-core-recent-post-widget-wrap.gdlr-core-style-1 .gdlr-core-blog-info{ font-size: 12px; }
.gdlr-core-blog-info-wrapper .gdlr-core-head{ margin-right: 9px; }
.gdlr-core-blog-info-wrapper .gdlr-core-head i{ font-size: 14px; }
.gdlr-core-blog-full .gdlr-core-excerpt-read-more{ border-radius: 3px; padding: 13px 21px 15px 24px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; }
.gdlr-core-blog-full.gdlr-core-style-2 .gdlr-core-blog-info-wrapper .gdlr-core-blog-info{ font-size: 15px; letter-spacing: 0px; font-weight: 400; }
.gdlr-core-blog-full.gdlr-core-style-2 .gdlr-core-blog-thumbnail .gdlr-core-blog-thumbnail-content{ right: 30px; bottom: 36px; }
.gdlr-core-blog-full.gdlr-core-style-2 .gdlr-core-blog-thumbnail .gdlr-core-blog-info-comment-number{ margin-left: 20px; }
.gdlr-core-blog-full.gdlr-core-style-2 .gdlr-core-blog-thumbnail .gdlr-core-sticky-banner{ bottom: 30px; left: 30px; padding: 11px 15px 13px; font-weight: 700; font-size: 12px; }
.gdlr-core-blog-full.gdlr-core-style-2 .gdlr-core-blog-thumbnail .gdlr-core-blog-info-category{ font-size: 11px; line-height: 1; padding: 7px 15px 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
.gdlr-core-blog-full.gdlr-core-style-2 .gdlr-core-blog-thumbnail .gdlr-core-blog-info-comment-number i{ margin-right: 8px; font-size: 12px; }
.gdlr-core-blog-thumbnail{ margin-bottom: 35px; }
.gdlr-core-port-info-item .gdlr-core-port-info{ font-size: 17px; }
.gdlr-core-filterer-wrap.gdlr-core-style-text .gdlr-core-filterer{ margin: 0px 16px; }
.gdlr-core-portfolio-grid .gdlr-core-portfolio-content-wrap .gdlr-core-portfolio-info{ font-size: 14px; }
.gdlr-core-portfolio-thumbnail .gdlr-core-portfolio-info{ font-size: 14px; }
.gdlr-core-portfolio-thumbnail.gdlr-core-style-title-tag .gdlr-core-portfolio-info{ margin-top: 13px; }
.gdlr-core-portfolio-medium .gdlr-core-portfolio-content-wrap .gdlr-core-portfolio-info{ font-size: 16px; }
.gdlr-core-flipbox-item .gdlr-core-flipbox-item-title, .gdlr-core-feature-box-item .gdlr-core-feature-box-item-title{ text-transform: uppercase; letter-spacing: 3px; }
.gdlr-core-flipbox-item .gdlr-core-flipbox-item-content{ margin-top: 12px; }
.gdlr-core-input-wrap input, .gdlr-core-input-wrap textarea{ border-width: 1px 1px 1px 1px; }
.gdlr-core-input-wrap.gdlr-core-large input:not([type="button"]):not([type="submit"]):not([type="file"]){ padding: 19px 22px; }
.gdlr-core-input-wrap.gdlr-core-full-width input:not([type="button"]):not([type="reset"]):not([type="submit"]):not([type="file"]):not([type="checkbox"]):not([type="radio"]), .gdlr-core-input-wrap.gdlr-core-full-width textarea,  .gdlr-core-input-wrap input[type="submit"].gdlr-core-full{ border-radius: 2px; -moz-border-radius: 2px; -webkit-border-radius: 2px; }
.gdlr-core-accordion-style-icon .gdlr-core-accordion-item-title{ font-size: 14px; font-weight: 700; margin-top: 1px; }
.gdlr-core-accordion-style-icon .gdlr-core-accordion-item-icon{ margin-right: 13px; }
.textwidget, .gdlr-core-recent-portfolio-widget-wrap.clearfix{ margin-top: -9px; }
.gdlr-core-widget-box-shortcode{ font-size: 15px; }
.gdlr-core-tab-style1-horizontal .gdlr-core-tab-item-content{ padding: 33px 0px 5px; }
.gdlr-core-tab-item .gdlr-core-tab-item-title{ font-size: 13px; letter-spacing: 2px; }
.gdlr-core-breadcrumbs-item{ font-size: 15px; }
.gdlr-core-accordion-style-icon .gdlr-core-accordion-item-title{ margin-bottom: 22px; }
.gdlr-core-accordion-style-icon .gdlr-core-accordion-item-tab{ margin-bottom: 15px; }
ul.gdlr-core-custom-menu-widget.gdlr-core-menu-style-box li a{ padding: 14px 19px 16px 25px; }
.gdlr-core-dropdown-tab .gdlr-core-dropdown-tab-head-wrap{ background: #3c1717; padding-top: 10px; padding-bottom: 10px; padding-left: 3px; }
.gdlr-core-personnel-style-modern .gdlr-core-personnel-list-content-wrap{ bottom: 23px; }
.gdlr-core-personnel-item .gdlr-core-personnel-list-title{ margin-bottom: 3px; }
.gdlr-core-personnel-item .gdlr-core-personnel-list-position{ margin-bottom: 0px; }
.gdlr-core-personnel-style-grid.gdlr-core-with-background .gdlr-core-personnel-list-content-wrap{ padding: 33px 32px 28px; }
.gdlr-core-counter-item .gdlr-core-counter-item-number{ margin-bottom: 7px; }
.gdlr-core-accordion-style-background-title-icon .gdlr-core-accordion-item-title { font-weight: 700; letter-spacing: 1px; }
.gdlr-core-block-item-title-wrap.gdlr-core-left-align .gdlr-core-separator{ height: 14px; margin: 0px 19px -1px 17px; transform: rotate(20deg); -moz-transform: rotate(20deg); -webkit-transform: rotate(20deg); }
.gdlr-core-flexslider-nav .flex-direction-nav{ margin-top: 28px; }
.gdlr-core-flexslider-nav.gdlr-core-plain-style li a{ font-size: 21px; }
.gdlr-core-flexslider-nav.gdlr-core-plain-style li a.flex-prev i:before{ margin-right: 8px; }
.gdlr-core-flexslider-nav.gdlr-core-plain-style li a.flex-next i:before{ margin-left: 8px; }
.gdlr-core-blog-widget.gdlr-core-style-large .gdlr-core-blog-thumbnail{ max-width: 92px; }
.gdlr-core-blog-widget.gdlr-core-style-large .gdlr-core-blog-widget-content{ padding-top: 0; }
.gdlr-core-blog-info-wrapper .gdlr-core-blog-info{ font-size: 14px; }
.gdlr-core-blog-widget .gdlr-core-blog-thumbnail{ margin-right: 25px; }
.gdlr-core-blog-widget.gdlr-core-style-large .gdlr-core-blog-title{ margin-top: 6px; line-height: 1.5; }
.gdlr-core-input-wrap input[type="button"], .gdlr-core-input-wrap input[type="submit"], .gdlr-core-input-wrap input[type="reset"] { padding-top: 21px; padding-bottom: 22px; }
.gdlr-core-blog-quote-format.gdlr-core-large .gdlr-core-blog-quote{ margin-top: -4px; margin-right: 31px; }
.gdlr-core-blog-quote-format.gdlr-core-small .gdlr-core-blog-content{ padding: 30px 50px 30px; }
.gdlr-core-blog-quote-format.gdlr-core-small .gdlr-core-blog-quote{ font-size: 96px; margin-bottom: -36px; }
.single blockquote.wp-block-quote{ padding: 35px 40px 25px; }
.gdlr-core-text-box-item img.alignleft{ margin-right: 40px; margin-bottom: 30px; }
.gdlr-core-recent-post-widget-wrap.gdlr-core-style-1{ margin-bottom: 65px; }

@media only screen and (max-width: 999px){
	.gdlr-core-testimonial-style-left .gdlr-core-testimonial-quote{ float: none; margin-bottom: 15px; text-align: center; }

	.gdlr-core-portfolio-grid.gdlr-core-style-with-frame .gdlr-core-portfolio-content-wrap{ margin: 0px !important; }

	.logisco-custom-tracking-form-submit input[type="submit"]{ float: none; width: 100%; }
	.logisco-custom-tracking-form-input input[type="text"]{ float: none; width: 100%; }

	.gdlr-core-blog-widget.gdlr-core-style-large .gdlr-core-blog-thumbnail{ max-width: 60px; margin-right: 15px; }
}
/*--- override mobile landscape style ---*/
@media only screen and (max-width: 850px){

	.gdlr-core-hide-in-desktop-tablet{ display: block; }

	.gdlr-core-hide-in-mobile,
	.gdlr-core-hide-in-tablet-mobile{ display: none; }
	.gdlr-core-hide-in-tablet{ display: block; }

	body .gdlr-core-container{ max-width: 700px; padding-left: 15px; padding-right: 15px; }
	body .gdlr-core-container-custom{ max-width: 700px !important; padding-left: 15px; padding-right: 15px; }
	.gdlr-core-pbf-wrapper{ padding-left: 0px !important; padding-right: 0px !important; }
	.gdlr-core-pbf-wrapper-full{ max-width: 700px; padding-left: 15px; padding-right: 15px; }
	.gdlr-core-pbf-column-content-margin{ padding-left: 0px !important; padding-right: 0px !important; margin-left: 0px !important; margin-right: 0px !important; }
	.gdlr-core-pbf-wrapper-full-no-space{ max-width: 700px; }
	.gdlr-core-pbf-wrapper-full-no-space .gdlr-core-pbf-column-content-margin{ padding-left: 30px !important; padding-right: 30px !important; }
	.gdlr-core-pbf-background-frame{ display: none; }
	.gdlr-core-pbf-background{ background-attachment: inherit !important; } /* fix safari problem */
	.gdlr-core-pbf-sidebar-wrapper{ margin: 0px !important; }

	.gdlr-core-column-extend-left > .gdlr-core-pbf-background-wrap{ margin-left: -30px; margin-right: -30px; } 
	.gdlr-core-column-extend-right > .gdlr-core-pbf-background-wrap{ margin-left: -30px; margin-right: -30px; }

	.gdlr-core-column-10, .gdlr-core-column-12, .gdlr-core-column-15, .gdlr-core-column-20,
	.gdlr-core-column-24, .gdlr-core-column-30, .gdlr-core-column-36, .gdlr-core-column-40,
	.gdlr-core-column-45, .gdlr-core-column-48, .gdlr-core-column-50, .gdlr-core-column-60{ width: 100%; }
	.gdlr-core-pbf-column-content{ min-height: 0px; }

	.gdlr-core-pbf-sidebar-content,
	.gdlr-core-pbf-sidebar-right,
	.gdlr-core-pbf-sidebar-left{ height: auto !important; padding-left: 0px !important; padding-right: 0px !important; }

	.gdlr-core-audio{ padding: 13px 3px 7px; }

	/* elements */
	.gdlr-core-call-to-action-item.gdlr-core-style-left-align-right-button .gdlr-core-call-to-action-item-inner{ padding-right: 0px; }
	.gdlr-core-call-to-action-item.gdlr-core-style-left-align-right-button .gdlr-core-call-to-action-item-button{ position: static; margin-top: 45px; }
	.gdlr-core-call-to-action-item.gdlr-core-style-right-align-left-button .gdlr-core-call-to-action-item-inner{ padding-left: 0px; }
	.gdlr-core-call-to-action-item.gdlr-core-style-right-align-left-button .gdlr-core-call-to-action-item-button{ position: static; margin-top: 45px; }
	
	.gdlr-core-block-item-title-wrap.gdlr-core-left-align .gdlr-core-block-item-title{ display: block; }
	.gdlr-core-block-item-title-wrap.gdlr-core-left-align .gdlr-core-separator{ display: none; }
	.gdlr-core-block-item-title-wrap .gdlr-core-block-item-read-more{ margin-top: 14px; display: inline-block; }
	.gdlr-core-pbf-wrapper-full-no-space .gdlr-core-block-item-title-wrap{ margin-left: 0px; margin-right: 0px; }
	.gdlr-core-pbf-wrapper-full-no-space .gdlr-core-pagination{ padding-left: 0px; padding-right: 0px; }

	.gdlr-core-social-share-left-text .gdlr-core-social-share-count{ display: block; margin-bottom: 10px; }
	.gdlr-core-social-share-left-text .gdlr-core-divider{ display: none; }
	.gdlr-core-social-share-left-text{ text-align: center; }
	.gdlr-core-social-share-right-text .gdlr-core-social-share-count{ display: block; margin-top: 10px; }
	.gdlr-core-social-share-right-text .gdlr-core-divider{ display: none; }
	.gdlr-core-social-share-right-text{ text-align: center; }

	.gdlr-core-blog-date-wrapper{ display: none; }
	.gdlr-core-blog-medium,
	.gdlr-core-blog-medium > div{ display: block; }
	.gdlr-core-blog-left-thumbnail .gdlr-core-blog-thumbnail-wrap{ width: auto; padding-right: 0px; margin-bottom: 25px; }
	.gdlr-core-blog-right-thumbnail .gdlr-core-blog-thumbnail-wrap{ width: auto; padding-left: 0px; margin-bottom: 25px; }
	.gdlr-core-blog-left-thumbnail.gdlr-core-large .gdlr-core-blog-thumbnail-wrap,
	.gdlr-core-blog-right-thumbnail.gdlr-core-large .gdlr-core-blog-thumbnail-wrap{ width: 100%; }
	.gdlr-core-blog-medium.gdlr-core-blog-right-thumbnail{ display: flex; flex-direction: column; width: 100% }
	.gdlr-core-blog-medium.gdlr-core-blog-right-thumbnail .gdlr-core-blog-thumbnail-wrap{ order: 1; width: 100% } 
	.gdlr-core-blog-medium.gdlr-core-blog-right-thumbnail .gdlr-core-blog-medium-content-wrapper{ order: 2; width: 100% }
	.gdlr-core-portfolio-medium{ display: flex; flex-flow: column; }
	.gdlr-core-portfolio-medium .gdlr-core-portfolio-thumbnail-wrap{ order: 1; -ms-order: 1; }
	.gdlr-core-portfolio-medium .gdlr-core-portfolio-content-wrap{ order: 2; -ms-order: 1;  }
	.gdlr-core-portfolio-medium.gdlr-core-size-large .gdlr-core-portfolio-thumbnail-wrap,
	.gdlr-core-portfolio-medium.gdlr-core-size-small .gdlr-core-portfolio-thumbnail-wrap{ display: block; width: auto; margin-bottom: 35px; }
	.gdlr-core-portfolio-medium.gdlr-core-style-left .gdlr-core-portfolio-content-wrap{ padding-left: 0px; display: block; }

	.gdlr-core-tab-item .gdlr-core-tab-item-content{ padding: 35px 0px 0px; }
	.gdlr-core-tab-style1-vertical.gdlr-core-left-align .gdlr-core-tab-item-title-wrap{ float: none; border-right: 0px; max-width: none; }
	.gdlr-core-tab-style1-vertical.gdlr-core-left-align .gdlr-core-tab-item-title{ float: left; height: 52px; padding-left: 25px; padding-right: 25px; border-top-width: 1px; }
	.gdlr-core-tab-style1-vertical.gdlr-core-left-align .gdlr-core-tab-item-title.gdlr-core-active{ padding-right: 25px; }
	.gdlr-core-tab-style1-vertical.gdlr-core-left-align .gdlr-core-tab-item-title:last-child{ border-right-width: 1px; }
	.gdlr-core-tab-style1-vertical.gdlr-core-left-align .gdlr-core-tab-item-content-wrap{ border: none; }
	.gdlr-core-tab-style1-vertical.gdlr-core-right-align .gdlr-core-tab-item-title-wrap{ float: none; border-left: 0px; max-width: none; }
	.gdlr-core-tab-style1-vertical.gdlr-core-right-align .gdlr-core-tab-item-title{ float: right; height: 52px; padding-left: 25px; padding-right: 25px; border-top-width: 1px; }
	.gdlr-core-tab-style1-vertical.gdlr-core-right-align .gdlr-core-tab-item-title.gdlr-core-active{ padding-right: 25px; }
	.gdlr-core-tab-style1-vertical.gdlr-core-right-align .gdlr-core-tab-item-title:last-child{ border-left-width: 1px; }
	.gdlr-core-tab-style1-vertical.gdlr-core-right-align .gdlr-core-tab-item-content-wrap{ border: none; }

	.gdlr-core-tab-style2-vertical.gdlr-core-left-align .gdlr-core-tab-item-title-wrap{ float: none; margin-right: 0px; border: none; max-width: none; }
	.gdlr-core-tab-style2-vertical.gdlr-core-left-align .gdlr-core-tab-item-title-line{  display: none; }
	.gdlr-core-tab-style2-vertical.gdlr-core-left-align .gdlr-core-tab-item-title{ padding: 12px 20px 0px 0px; float: left; }
	.gdlr-core-tab-style2-vertical.gdlr-core-left-align .gdlr-core-tab-item-content-wrap{ border: none; }
	.gdlr-core-tab-style2-vertical.gdlr-core-right-align .gdlr-core-tab-item-title-wrap{ float: none; margin-left: 0px; border: none; max-width: none; }
	.gdlr-core-tab-style2-vertical.gdlr-core-right-align .gdlr-core-tab-item-title-line{  display: none; }
	.gdlr-core-tab-style2-vertical.gdlr-core-right-align .gdlr-core-tab-item-title{ padding: 12px 0px 0px 20px; float: right; }
	.gdlr-core-tab-style2-vertical.gdlr-core-right-align .gdlr-core-tab-item-content-wrap{ border: none; }

	.gdlr-core-gallery-item-style-scroll .gdlr-core-media-image{ max-height: 200px; }
	.gdlr-core-gallery-with-thumbnail-wrap.gdlr-core-inside-slider .gdlr-core-image-overlay-content{ bottom: 35px; }
	.gdlr-core-gallery-with-thumbnail-wrap.gdlr-core-inside-slider .gdlr-core-sly-slider{ display: none; }

	.gdlr-core-price-table-item .gdlr-core-price-table{ margin-top: 0px; margin-bottom: 30px; }
	.gdlr-core-price-table-item .gdlr-core-price-table-column:last-child .gdlr-core-price-table{ margin-bottom: 0px; }

	.gdlr-core-title-item.gdlr-core-left-align .gdlr-core-title-item-link{ position: static; margin-top: 12px; }
	.gdlr-core-title-item-caption-right .gdlr-core-title-item-title-wrap{ float: none; margin-bottom: 13px; margin-right: 0px; width: auto !important; }

	.gdlr-core-newsletter-item.gdlr-core-style-round .gdlr-core-newsletter-email{ width: 100%; float: none; }
	.gdlr-core-newsletter-item.gdlr-core-style-round .gdlr-core-newsletter-submit{ width: 100%; float: none; margin-top: 17px; }
	.gdlr-core-newsletter-item.gdlr-core-style-rectangle .gdlr-core-newsletter-email{ float: none; width: 100%; margin-bottom: 10px; }

	.gdlr-core-timeline-item .gdlr-core-timeline-item-bullet{ display: none;}
	.gdlr-core-timeline-item .gdlr-core-timeline-item-date{ width: auto !important; padding-right: 0px; float: none; text-align: left; }

	.gdlr-core-roadmap-item{ margin-right: -20px; margin-left: -20px; }
	.gdlr-core-roadmap-item .gdlr-core-roadmap-item-head-content{ margin-right: 20px; }
	.gdlr-core-roadmap-item .gdlr-core-roadmap-item-head-count{ display: none; }
	.gdlr-core-roadmap-item .gdlr-core-roadmap-item-head-divider{ display: none; }
	.gdlr-core-roadmap-item .gdlr-core-roadmap-item-head-title{ font-size: 11px; text-transform: none; letter-spacing: 0; }
	.gdlr-core-roadmap-item .gdlr-core-roadmap-item-head-caption{ font-size: 11px; }
	.gdlr-core-roadmap-item .gdlr-core-roadmap-item-head-wrap{ width: 37%; }
	.gdlr-core-roadmap-item .gdlr-core-roadmap-item-content-area{ margin-left: 0px; }
	.gdlr-core-roadmap-item .gdlr-core-roadmap-item-head{ padding-bottom: 16px; }
	.gdlr-core-roadmap-item .gdlr-core-roadmap-item-content{ font-size: 15px; }
	.gdlr-core-roadmap-item .gdlr-core-roadmap-item-content-title{ font-size: 15px; margin-bottom: 29px; }

	.gdlr-core-personnel-style-medium .gdlr-core-personnel-list-image{ float: none; margin-right: 0px; max-width: 100%; }

	.gdlr-core-instagram-widget > div{ float: left; width: auto; max-width: 120px; clear: none; }
	.gdlr-core-tab-feature-item .gdlr-core-tab-feature-size-2,
	.gdlr-core-tab-feature-item .gdlr-core-tab-feature-size-3,
	.gdlr-core-tab-feature-item .gdlr-core-tab-feature-size-4{ float: none; width: auto; padding: 20px 0px; }
	.gdlr-core-tab-feature-item .gdlr-core-tab-feature-content-wrap{ padding: 40px 30px; }
	.gdlr-core-tab-feature-item .gdlr-core-tab-feature-content-left{ float: none; width: auto; margin-bottom: 30px; }
	.gdlr-core-tab-feature-item .gdlr-core-tab-feature-title-image{ display: none; }
	.gdlr-core-tab-feature-item .gdlr-core-tab-feature-button{ margin-bottom: 15px; }

	.gdlr-core-tab-featurev-item .gdlr-core-tab-featurev-title-wrap{ padding-left: 0px; }
	.gdlr-core-tab-featurev-item .gdlr-core-tab-featurev-title-item-wrap{ width: auto; float: none; }
	.gdlr-core-tab-featurev-item .gdlr-core-tab-featurev-title-item-title-wrap{ padding-top: 30px; padding-left: 0px; text-align: center; }
	.gdlr-core-tab-featurev-item .gdlr-core-tab-featurev-title-divider{ display: none; }
	.gdlr-core-tab-featurev-item .gdlr-core-tab-featurev-content-wrap{ padding: 50px 30px; }
	
	.logisco-page-title-wrap .logisco-page-title-content{ padding-top: 60px !important; padding-bottom: 60px !important; }

	.gdlr-core-blog-widget.gdlr-core-style-large .gdlr-core-blog-thumbnail{ max-width: 92px; margin-right: 25px; }
}
<?php
			$css .= ob_get_contents();
			ob_end_clean(); 

			return $css;
		}
	}
	add_filter('gdlr_core_theme_option_bottom_file_write', 'logisco_gdlr_core_theme_option_bottom_file_write', 10, 2);
	if( !function_exists('logisco_gdlr_core_theme_option_bottom_file_write') ){
		function logisco_gdlr_core_theme_option_bottom_file_write( $css, $option_slug ){
			if( $option_slug != 'goodlayers_main_menu' ) return;

			$general = get_option('logisco_general');

			if( !empty($general['item-padding']) ){
				$margin = 2 * intval(str_replace('px', '', $general['item-padding']));
				if( !empty($margin) && is_numeric($margin) ){
					$css .= '.logisco-item-mgb, .gdlr-core-item-mgb{ margin-bottom: ' . $margin . 'px; }';
				}
			}

			if( !empty($general['mobile-logo-position']) && $general['mobile-logo-position'] == 'logo-right' ){
				$css .= '.logisco-mobile-header .logisco-logo-inner{ margin-right: 0px; margin-left: 80px; float: right; }';	
				$css .= '.logisco-mobile-header .logisco-mobile-menu-right{ left: 30px; right: auto; }';	
				$css .= '.logisco-mobile-header .logisco-main-menu-search{ float: right; margin-left: 0px; margin-right: 25px; }';	
				$css .= '.logisco-mobile-header .logisco-mobile-menu{ float: right; margin-left: 0px; margin-right: 30px; }';	
				$css .= '.logisco-mobile-header .logisco-main-menu-cart{ float: right; margin-left: 0px; margin-right: 20px; padding-left: 0px; padding-right: 5px; }';	
				$css .= '.logisco-mobile-header .logisco-top-cart-content-wrap{ left: 0px; }';
			}

			return $css;
		}
	}

	$logisco_admin_option->add_element(array(
	
		// general head section
		'title' => esc_html__('General', 'logisco'),
		'slug' => 'logisco_general',
		'icon' => get_template_directory_uri() . '/include/options/images/general.png',
		'options' => array(
		
			'layout' => array(
				'title' => esc_html__('Layout', 'logisco'),
				'options' => array(
					
					'layout' => array(
						'title' => esc_html__('Layout', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'full' => esc_html__('Full', 'logisco'),
							'boxed' => esc_html__('Boxed', 'logisco'),
						)
					),
					'boxed-layout-top-margin' => array(
						'title' => esc_html__('Box Layout Top/Bottom Margin', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '150',
						'data-type' => 'pixel',
						'default' => '0px',
						'selector' => 'body.logisco-boxed .logisco-body-wrapper{ margin-top: #gdlr#; margin-bottom: #gdlr#; }',
						'condition' => array( 'layout' => 'boxed' ) 
					),
					'body-margin' => array(
						'title' => esc_html__('Body Magin ( Frame Spaces )', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '100',
						'data-type' => 'pixel',
						'default' => '0px',
						'selector' => '.logisco-body-wrapper.logisco-with-frame, body.logisco-full .logisco-fixed-footer{ margin: #gdlr#; }',
						'condition' => array( 'layout' => 'full' ),
						'description' => esc_html__('This value will be automatically omitted for side header style.', 'logisco'),
					),
					'background-type' => array(
						'title' => esc_html__('Background Type', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'color' => esc_html__('Color', 'logisco'),
							'image' => esc_html__('Image', 'logisco'),
							'pattern' => esc_html__('Pattern', 'logisco'),
						),
						'condition' => array( 'layout' => 'boxed' )
					),
					'background-image' => array(
						'title' => esc_html__('Background Image', 'logisco'),
						'type' => 'upload',
						'data-type' => 'file', 
						'selector' => '.logisco-body-background{ background-image: url(#gdlr#); }',
						'condition' => array( 'layout' => 'boxed', 'background-type' => 'image' )
					),
					'background-image-opacity' => array(
						'title' => esc_html__('Background Image Opacity', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'opacity',
						'default' => '100',
						'condition' => array( 'layout' => 'boxed', 'background-type' => 'image' ),
						'selector' => '.logisco-body-background{ opacity: #gdlr#; }'
					),
					'background-pattern' => array(
						'title' => esc_html__('Background Type', 'logisco'),
						'type' => 'radioimage',
						'data-type' => 'text',
						'options' => 'pattern', 
						'selector' => '.logisco-background-pattern .logisco-body-outer-wrapper{ background-image: url(' . GDLR_CORE_URL . '/include/images/pattern/#gdlr#.png); }',
						'condition' => array( 'layout' => 'boxed', 'background-type' => 'pattern' ),
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					'enable-boxed-border' => array(
						'title' => esc_html__('Enable Boxed Border', 'logisco'),
						'type' => 'checkbox',
						'default' => 'disable',
						'condition' => array( 'layout' => 'boxed', 'background-type' => 'pattern' ),
					),
					'item-padding' => array(
						'title' => esc_html__('Item Left/Right Spaces', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '40',
						'data-type' => 'pixel',
						'default' => '15px',
						'description' => 'Space between each page items',
						'selector' => '.logisco-item-pdlr, .gdlr-core-item-pdlr{ padding-left: #gdlr#; padding-right: #gdlr#; }' . 
							'.logisco-item-rvpdlr, .gdlr-core-item-rvpdlr{ margin-left: -#gdlr#; margin-right: -#gdlr#; }' .
							'.gdlr-core-metro-rvpdlr{ margin-top: -#gdlr#; margin-right: -#gdlr#; margin-bottom: -#gdlr#; margin-left: -#gdlr#; }' .
							'.logisco-item-mglr, .gdlr-core-item-mglr, .logisco-navigation .sf-menu > .logisco-mega-menu .sf-mega,' . 
							'.sf-menu.logisco-top-bar-menu > .logisco-mega-menu .sf-mega{ margin-left: #gdlr#; margin-right: #gdlr#; }' .
							'.logisco-body .gdlr-core-personnel-item .gdlr-core-flexslider.gdlr-core-with-outer-frame-element .flex-viewport, ' . 
							'.logisco-body .gdlr-core-hover-box-item .gdlr-core-flexslider.gdlr-core-with-outer-frame-element .flex-viewport,' . 
							'.logisco-body .gdlr-core-blog-item .gdlr-core-flexslider.gdlr-core-with-outer-frame-element .flex-viewport{ padding-top: #gdlr#; margin-top: -#gdlr#; padding-right: #gdlr#; margin-right: -#gdlr#; padding-left: #gdlr#; margin-left: -#gdlr#; padding-bottom: #gdlr#; margin-bottom: -#gdlr#; }' . 
							'.gdlr-core-pbf-wrapper-container-inner{ width: calc(100% - #gdlr# - #gdlr#); }'
					
					),
					'container-width' => array(
						'title' => esc_html__('Container Width', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'default' => '1180px',
						'selector' => '.logisco-container, .gdlr-core-container, body.logisco-boxed .logisco-body-wrapper, ' . 
							'body.logisco-boxed .logisco-fixed-footer .logisco-footer-wrapper, body.logisco-boxed .logisco-fixed-footer .logisco-copyright-wrapper{ max-width: #gdlr#; }' 
					),
					'container-padding' => array(
						'title' => esc_html__('Container Padding', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '100',
						'data-type' => 'pixel',
						'default' => '15px',
						'selector' => '.logisco-body-front .gdlr-core-container, .logisco-body-front .logisco-container{ padding-left: #gdlr#; padding-right: #gdlr#; }'  . 
							'.logisco-body-front .logisco-container .logisco-container, .logisco-body-front .logisco-container .gdlr-core-container, '.
							'.logisco-body-front .gdlr-core-container .gdlr-core-container{ padding-left: 0px; padding-right: 0px; }'
					),
					'sidebar-title-divider' => array(
						'title' => esc_html__('Sidebar Title Divider', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable',
					),
					'sidebar-width' => array(
						'title' => esc_html__('Sidebar Width', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'30' => '50%', '20' => '33.33%', '15' => '25%', '12' => '20%', '10' => '16.67%'
						),
						'default' => 20,
					),
					'both-sidebar-width' => array(
						'title' => esc_html__('Both Sidebar Width', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'30' => '50%', '20' => '33.33%', '15' => '25%', '12' => '20%', '10' => '16.67%'
						),
						'default' => 15,
					),
					
				) // header-options
			), // header-nav	
			
			'top-bar' => array(
				'title' => esc_html__('Top Bar', 'logisco'),
				'options' => array(

					'enable-top-bar' => array(
						'title' => esc_html__('Enable Top Bar', 'logisco'),
						'type' => 'checkbox',
					),
					'enable-top-bar-on-mobile' => array(
						'title' => esc_html__('Enable Top Bar On Mobile', 'logisco'),
						'type' => 'checkbox',
						'default' => 'disable'
					),
					'top-bar-width' => array(
						'title' => esc_html__('Top Bar Width', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'boxed' => esc_html__('Boxed ( Within Container )', 'logisco'),
							'full' => esc_html__('Full', 'logisco'),
							'custom' => esc_html__('Custom', 'logisco'),
						),
						'condition' => array( 'enable-top-bar' => 'enable' )
					),
					'top-bar-width-pixel' => array(
						'title' => esc_html__('Top Bar Width Pixel', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'default' => '1140px',
						'condition' => array( 'enable-top-bar' => 'enable', 'top-bar-width' => 'custom' ),
						'selector' => '.logisco-top-bar-container.logisco-top-bar-custom-container{ max-width: #gdlr#; }'
					),
					'top-bar-full-left-padding' => array(
						'title' => esc_html__('Top Bar Full Left Padding', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '100',
						'data-type' => 'pixel',
						'default' => '15px',
						'selector' => '.logisco-top-bar-container.logisco-top-bar-full{ padding-left: #gdlr#; }',
						'condition' => array( 'enable-top-bar' => 'enable', 'top-bar-width' => 'full' )
					),
					'top-bar-full-right-padding' => array(
						'title' => esc_html__('Top Bar Full Right Padding', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '100',
						'data-type' => 'pixel',
						'default' => '15px',
						'selector' => '.logisco-top-bar-container.logisco-top-bar-full{ padding-right: #gdlr#; }',
						'condition' => array( 'enable-top-bar' => 'enable', 'top-bar-width' => 'full' )
					),
					'top-bar-menu-position' => array(
						'title' => esc_html__('Top Bar Menu Position', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'none' => esc_html__('None', 'logisco'),
							'left' => esc_html__('Left', 'logisco'),
							'right' => esc_html__('Right', 'logisco'),
						),
						'condition' => array( 'enable-top-bar' => 'enable' )
					),
					'top-bar-left-text' => array(
						'title' => esc_html__('Top Bar Left Text', 'logisco'),
						'type' => 'textarea',
						'condition' => array( 'enable-top-bar' => 'enable' )
					),
					'top-bar-right-text' => array(
						'title' => esc_html__('Top Bar Right Text', 'logisco'),
						'type' => 'textarea',
						'condition' => array( 'enable-top-bar' => 'enable' )
					),
					'top-bar-right-button-text' => array(
						'title' => esc_html__('Top Bar Right Button Text', 'logisco'),
						'type' => 'text',
						'default' => esc_html__('Get A Quote', 'logisco'),
						'condition' => array( 'enable-top-bar' => 'enable' )
					),	
					'top-bar-right-button-link' => array(
						'title' => esc_html__('Top Bar Right Button Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar' => 'enable' )
					),	
					'top-bar-right-button-link-target' => array(
						'title' => esc_html__('Top Bar Right Button Text', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'_self' => esc_html__('Current Screen', 'logisco'),
							'_blank' => esc_html__('New Window', 'logisco'),
						),
						'condition' => array( 'enable-top-bar' => 'enable' )
					),	
					'top-bar-top-padding' => array(
						'title' => esc_html__('Top Bar Top Padding', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '200',
 						'default' => '10px',
						'selector' => '.logisco-top-bar{ padding-top: #gdlr#; }' . 
							'.logisco-top-bar-right-button{ padding-top: #gdlr#; margin-top: -#gdlr#; }',
						'condition' => array( 'enable-top-bar' => 'enable' )
					),
					'top-bar-bottom-padding' => array(
						'title' => esc_html__('Top Bar Bottom Padding', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '200',
						'default' => '10px',
						'selector' => '.logisco-top-bar{ padding-bottom: #gdlr#; }' .
							'.logisco-top-bar .logisco-top-bar-menu > li > a{ padding-bottom: #gdlr#; }' .  
							'.sf-menu.logisco-top-bar-menu > .logisco-mega-menu .sf-mega, .sf-menu.logisco-top-bar-menu > .logisco-normal-menu ul{ margin-top: #gdlr#; }' . 
							'.logisco-top-bar-right-button{ padding-bottom: #gdlr#; margin-bottom: -#gdlr#; }',
						'condition' => array( 'enable-top-bar' => 'enable' )
					),
					'top-bar-text-size' => array(
						'title' => esc_html__('Top Bar Text Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '15px',
						'selector' => '.logisco-top-bar{ font-size: #gdlr#; }',
						'condition' => array( 'enable-top-bar' => 'enable' )
					),
					'top-bar-bottom-border' => array(
						'title' => esc_html__('Top Bar Bottom Border', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '10',
						'default' => '0',
						'selector' => '.logisco-top-bar{ border-bottom-width: #gdlr#; }',
						'condition' => array( 'enable-top-bar' => 'enable' )
					),

				)
			), // top bar

			'top-bar-social' => array(
				'title' => esc_html__('Top Bar Social', 'logisco'),
				'options' => array(
					'enable-top-bar-social' => array(
						'title' => esc_html__('Enable Top Bar Social', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable'
					),
					'top-bar-social-delicious' => array(
						'title' => esc_html__('Top Bar Social Delicious Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-email' => array(
						'title' => esc_html__('Top Bar Social Email Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-deviantart' => array(
						'title' => esc_html__('Top Bar Social Deviantart Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-digg' => array(
						'title' => esc_html__('Top Bar Social Digg Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-facebook' => array(
						'title' => esc_html__('Top Bar Social Facebook Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-flickr' => array(
						'title' => esc_html__('Top Bar Social Flickr Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-google-plus' => array(
						'title' => esc_html__('Top Bar Social Google Plus Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-lastfm' => array(
						'title' => esc_html__('Top Bar Social Lastfm Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-linkedin' => array(
						'title' => esc_html__('Top Bar Social Linkedin Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-pinterest' => array(
						'title' => esc_html__('Top Bar Social Pinterest Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-rss' => array(
						'title' => esc_html__('Top Bar Social RSS Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-skype' => array(
						'title' => esc_html__('Top Bar Social Skype Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-stumbleupon' => array(
						'title' => esc_html__('Top Bar Social Stumbleupon Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-tumblr' => array(
						'title' => esc_html__('Top Bar Social Tumblr Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-twitter' => array(
						'title' => esc_html__('Top Bar Social Twitter Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-vimeo' => array(
						'title' => esc_html__('Top Bar Social Vimeo Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-youtube' => array(
						'title' => esc_html__('Top Bar Social Youtube Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-instagram' => array(
						'title' => esc_html__('Top Bar Social Instagram Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),
					'top-bar-social-snapchat' => array(
						'title' => esc_html__('Top Bar Social Snapchat Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-top-bar-social' => 'enable' )
					),

				)
			),			

			'header' => array(
				'title' => esc_html__('Header', 'logisco'),
				'options' => array(

					'header-style' => array(
						'title' => esc_html__('Header Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'plain' => esc_html__('Plain', 'logisco'),
							'bar' => esc_html__('Bar', 'logisco'),
							'boxed' => esc_html__('Boxed', 'logisco'),
							'side' => esc_html__('Side Menu', 'logisco'),
							'side-toggle' => esc_html__('Side Menu Toggle', 'logisco'),
						),
						'default' => 'plain',
					),
					'header-plain-style' => array(
						'title' => esc_html__('Header Plain Style', 'logisco'),
						'type' => 'radioimage',
						'options' => array(
							'menu-right' => get_template_directory_uri() . '/images/header/plain-menu-right.jpg',
							'center-logo' => get_template_directory_uri() . '/images/header/plain-center-logo.jpg',
							'center-menu' => get_template_directory_uri() . '/images/header/plain-center-menu.jpg',
							'splitted-menu' => get_template_directory_uri() . '/images/header/plain-splitted-menu.jpg',
						),
						'default' => 'menu-right',
						'condition' => array( 'header-style' => 'plain' ),
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					'header-plain-bottom-border' => array(
						'title' => esc_html__('Plain Header Bottom Border', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '10',
						'default' => '0',
						'selector' => '.logisco-header-style-plain{ border-bottom-width: #gdlr#; }',
						'condition' => array( 'header-style' => array('plain') )
					),
					'header-bar-navigation-align' => array(
						'title' => esc_html__('Header Bar Style', 'logisco'),
						'type' => 'radioimage',
						'options' => array(
							'left' => get_template_directory_uri() . '/images/header/bar-left.jpg',
							'center' => get_template_directory_uri() . '/images/header/bar-center.jpg',
							'center-logo' => get_template_directory_uri() . '/images/header/bar-center-logo.jpg',
						),
						'default' => 'center',
						'condition' => array( 'header-style' => 'bar' ),
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					'header-background-style' => array(
						'title' => esc_html__('Header/Navigation Background Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'solid' => esc_html__('Solid', 'logisco'),
							'transparent' => esc_html__('Transparent', 'logisco'),
						),
						'default' => 'solid',
						'condition' => array( 'header-style' => array('plain', 'bar') )
					),
					'top-bar-background-opacity' => array(
						'title' => esc_html__('Top Bar Background Opacity', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'opacity',
						'default' => '50',
						'condition' => array( 'header-style' => 'plain', 'header-background-style' => 'transparent' ),
						'selector' => '.logisco-header-background-transparent .logisco-top-bar-background{ opacity: #gdlr#; }'
					),
					'header-background-opacity' => array(
						'title' => esc_html__('Header Background Opacity', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'opacity',
						'default' => '50',
						'condition' => array( 'header-style' => 'plain', 'header-background-style' => 'transparent' ),
						'selector' => '.logisco-header-background-transparent .logisco-header-background{ opacity: #gdlr#; }'
					),
					'navigation-background-opacity' => array(
						'title' => esc_html__('Navigation Background Opacity', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'opacity',
						'default' => '50',
						'condition' => array( 'header-style' => 'bar', 'header-background-style' => 'transparent' ),
						'selector' => '.logisco-navigation-bar-wrap.logisco-style-transparent .logisco-navigation-background{ opacity: #gdlr#; }'
					),
					'header-boxed-style' => array(
						'title' => esc_html__('Header Boxed Style', 'logisco'),
						'type' => 'radioimage',
						'options' => array(
							'menu-right' => get_template_directory_uri() . '/images/header/boxed-menu-right.jpg',
							'center-menu' => get_template_directory_uri() . '/images/header/boxed-center-menu.jpg',
							'splitted-menu' => get_template_directory_uri() . '/images/header/boxed-splitted-menu.jpg',
						),
						'default' => 'menu-right',
						'condition' => array( 'header-style' => 'boxed' ),
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					'boxed-top-bar-background-opacity' => array(
						'title' => esc_html__('Top Bar Background Opacity', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'opacity',
						'default' => '0',
						'condition' => array( 'header-style' => 'boxed' ),
						'selector' => '.logisco-header-boxed-wrap .logisco-top-bar-background{ opacity: #gdlr#; }'
					),
					'boxed-top-bar-background-extend' => array(
						'title' => esc_html__('Top Bar Background Extend ( Bottom )', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0px',
						'data-max' => '200px',
						'default' => '0px',
						'condition' => array( 'header-style' => 'boxed' ),
						'selector' => '.logisco-header-boxed-wrap .logisco-top-bar-background{ margin-bottom: -#gdlr#; }'
					),
					'boxed-header-top-margin' => array(
						'title' => esc_html__('Header Top Margin', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0px',
						'data-max' => '200px',
						'default' => '0px',
						'condition' => array( 'header-style' => 'boxed' ),
						'selector' => '.logisco-header-style-boxed{ margin-top: #gdlr#; }'
					),
					'header-side-style' => array(
						'title' => esc_html__('Header Side Style', 'logisco'),
						'type' => 'radioimage',
						'options' => array(
							'top-left' => get_template_directory_uri() . '/images/header/side-top-left.jpg',
							'middle-left' => get_template_directory_uri() . '/images/header/side-middle-left.jpg',
							'middle-left-2' => get_template_directory_uri() . '/images/header/side-middle-left-2.jpg',
							'top-right' => get_template_directory_uri() . '/images/header/side-top-right.jpg',
							'middle-right' => get_template_directory_uri() . '/images/header/side-middle-right.jpg',
							'middle-right-2' => get_template_directory_uri() . '/images/header/side-middle-right-2.jpg',
						),
						'default' => 'top-left',
						'condition' => array( 'header-style' => 'side' ),
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					'header-side-align' => array(
						'title' => esc_html__('Header Side Text Align', 'logisco'),
						'type' => 'radioimage',
						'options' => 'text-align',
						'default' => 'left',
						'condition' => array( 'header-style' => 'side' )
					),
					'header-side-toggle-style' => array(
						'title' => esc_html__('Header Side Toggle Style', 'logisco'),
						'type' => 'radioimage',
						'options' => array(
							'left' => get_template_directory_uri() . '/images/header/side-toggle-left.jpg',
							'right' => get_template_directory_uri() . '/images/header/side-toggle-right.jpg',
						),
						'default' => 'left',
						'condition' => array( 'header-style' => 'side-toggle' ),
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					'header-side-toggle-menu-type' => array(
						'title' => esc_html__('Header Side Toggle Menu Type', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'left' => esc_html__('Left Slide Menu', 'logisco'),
							'right' => esc_html__('Right Slide Menu', 'logisco'),
							'overlay' => esc_html__('Overlay Menu', 'logisco'),
						),
						'default' => 'overlay',
						'condition' => array( 'header-style' => 'side-toggle' )
					),
					'header-side-toggle-display-logo' => array(
						'title' => esc_html__('Display Logo', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable',
						'condition' => array( 'header-style' => 'side-toggle' )
					),
					'header-width' => array(
						'title' => esc_html__('Header Width', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'boxed' => esc_html__('Boxed ( Within Container )', 'logisco'),
							'full' => esc_html__('Full', 'logisco'),
							'custom' => esc_html__('Custom', 'logisco'),
						),
						'condition' => array('header-style'=> array('plain', 'bar', 'boxed'))
					),
					'header-width-pixel' => array(
						'title' => esc_html__('Header Width Pixel', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'default' => '1140px',
						'condition' => array('header-style'=> array('plain', 'bar', 'boxed'), 'header-width' => 'custom'),
						'selector' => '.logisco-header-container.logisco-header-custom-container{ max-width: #gdlr#; }'
					),
					'header-full-side-padding' => array(
						'title' => esc_html__('Header Full ( Left/Right ) Padding', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '100',
						'data-type' => 'pixel',
						'default' => '15px',
						'selector' => '.logisco-header-container.logisco-header-full{ padding-right: #gdlr#; padding-left: #gdlr#; }',
						'condition' => array('header-style'=> array('plain', 'bar', 'boxed'), 'header-width'=>'full')
					),
					'boxed-header-frame-radius' => array(
						'title' => esc_html__('Header Frame Radius', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'default' => '3px',
						'condition' => array( 'header-style' => 'boxed' ),
						'selector' => '.logisco-header-boxed-wrap .logisco-header-background{ border-radius: #gdlr#; -moz-border-radius: #gdlr#; -webkit-border-radius: #gdlr#; }'
					),
					'boxed-header-content-padding' => array(
						'title' => esc_html__('Header Content ( Left/Right ) Padding', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '100',
						'data-type' => 'pixel',
						'default' => '30px',
						'selector' => '.logisco-header-style-boxed .logisco-header-container-item{ padding-left: #gdlr#; padding-right: #gdlr#; }' . 
							'.logisco-navigation-right{ right: #gdlr#; } .logisco-navigation-left{ left: #gdlr#; }',
						'condition' => array( 'header-style' => 'boxed' )
					),
					'navigation-text-top-margin' => array(
						'title' => esc_html__('Navigation Text Top Padding', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '200',
						'default' => '0px',
						'condition' => array( 'header-style' => 'plain', 'header-plain-style' => 'splitted-menu' ),
						'selector' => '.logisco-header-style-plain.logisco-style-splitted-menu .logisco-navigation .sf-menu > li > a{ padding-top: #gdlr#; } ' .
							'.logisco-header-style-plain.logisco-style-splitted-menu .logisco-main-menu-left-wrap,' .
							'.logisco-header-style-plain.logisco-style-splitted-menu .logisco-main-menu-right-wrap{ padding-top: #gdlr#; }'
					),
					'navigation-text-top-margin-boxed' => array(
						'title' => esc_html__('Navigation Text Top Padding', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '200',
						'default' => '0px',
						'condition' => array( 'header-style' => 'boxed', 'header-boxed-style' => 'splitted-menu' ),
						'selector' => '.logisco-header-style-boxed.logisco-style-splitted-menu .logisco-navigation .sf-menu > li > a{ padding-top: #gdlr#; } ' .
							'.logisco-header-style-boxed.logisco-style-splitted-menu .logisco-main-menu-left-wrap,' .
							'.logisco-header-style-boxed.logisco-style-splitted-menu .logisco-main-menu-right-wrap{ padding-top: #gdlr#; }'
					),
					'navigation-text-side-spacing' => array(
						'title' => esc_html__('Navigation Text Side ( Left / Right ) Spaces', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '30',
						'data-type' => 'pixel',
						'default' => '13px',
						'selector' => '.logisco-navigation .sf-menu > li{ padding-left: #gdlr#; padding-right: #gdlr#; }',
						'condition' => array( 'header-style' => array('plain', 'bar', 'boxed') )
					),
					'navigation-left-offset' => array(
						'title' => esc_html__('Navigation Left Offset Spaces', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'default' => '0',
						'selector' => '.logisco-navigation .logisco-main-menu{ margin-left: #gdlr#; }'
					),
					'navigation-slide-bar' => array(
						'title' => esc_html__('Navigation Slide Bar', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable',
						'condition' => array( 'header-style' => array('plain', 'bar', 'boxed') )
					),
					'navigation-slide-bar-top-margin' => array(
						'title' => esc_html__('Navigation Slide Bar Top Margin', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'default' => '0px',
						'selector' => '.logisco-navigation .logisco-navigation-slide-bar{ margin-top: #gdlr#; }',
						'condition' => array( 'header-style' => array('plain', 'bar', 'boxed'), 'navigation-slide-bar' => 'enable' )
					),
					'side-header-width-pixel' => array(
						'title' => esc_html__('Header Width Pixel', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '600',
						'default' => '340px',
						'condition' => array('header-style' => array('side', 'side-toggle')),
						'selector' => '.logisco-header-side-nav{ width: #gdlr#; }' . 
							'.logisco-header-side-content.logisco-style-left{ margin-left: #gdlr#; }' .
							'.logisco-header-side-content.logisco-style-right{ margin-right: #gdlr#; }'
					),
					'side-header-side-padding' => array(
						'title' => esc_html__('Header Side Padding', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '200',
						'default' => '70px',
						'condition' => array('header-style' => 'side'),
						'selector' => '.logisco-header-side-nav.logisco-style-side{ padding-left: #gdlr#; padding-right: #gdlr#; }' . 
							'.logisco-header-side-nav.logisco-style-left .sf-vertical > li > ul.sub-menu{ padding-left: #gdlr#; }' .
							'.logisco-header-side-nav.logisco-style-right .sf-vertical > li > ul.sub-menu{ padding-right: #gdlr#; }'
					),
					'navigation-text-top-spacing' => array(
						'title' => esc_html__('Navigation Text Top / Bottom Spaces', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '40',
						'data-type' => 'pixel',
						'default' => '16px',
						'selector' => ' .logisco-navigation .sf-vertical > li{ padding-top: #gdlr#; padding-bottom: #gdlr#; }',
						'condition' => array( 'header-style' => array('side') )
					),
					'logo-right-text' => array(
						'title' => esc_html__('Header Right Text', 'logisco'),
						'type' => 'textarea',
						'condition' => array('header-style' => 'bar'),
					),
					'logo-right-text-top-padding' => array(
						'title' => esc_html__('Header Right Text Top Padding', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '200',
						'default' => '30px',
						'condition' => array('header-style' => 'bar'),
						'selector' => '.logisco-header-style-bar .logisco-logo-right-text{ padding-top: #gdlr#; }'
					),

				)
			), // header
			
			'logo' => array(
				'title' => esc_html__('Logo', 'logisco'),
				'options' => array(
					'logo' => array(
						'title' => esc_html__('Logo', 'logisco'),
						'type' => 'upload'
					),
					'logo-top-padding' => array(
						'title' => esc_html__('Logo Top Padding', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '200',
						'data-type' => 'pixel',
						'default' => '20px',
						'selector' => '.logisco-logo{ padding-top: #gdlr#; }',
						'description' => esc_html__('This option will be omitted on splitted menu option.', 'logisco'),
					),
					'logo-bottom-padding' => array(
						'title' => esc_html__('Logo Bottom Padding', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '200',
						'data-type' => 'pixel',
						'default' => '20px',
						'selector' => '.logisco-logo{ padding-bottom: #gdlr#; }',
						'description' => esc_html__('This option will be omitted on splitted menu option.', 'logisco'),
					),
					'logo-left-padding' => array(
						'title' => esc_html__('Logo Left Padding', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '.logisco-logo.logisco-item-pdlr{ padding-left: #gdlr#; }',
						'description' => esc_html__('Leave this field blank for default value.', 'logisco'),
					),
					'max-logo-width' => array(
						'title' => esc_html__('Max Logo Width', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'default' => '200px',
						'selector' => '.logisco-logo-inner{ max-width: #gdlr#; }'
					),

					'mobile-logo' => array(
						'title' => esc_html__('Mobile/Tablet Logo', 'logisco'),
						'type' => 'upload',
						'description' => esc_html__('Leave this option blank to use the same logo.', 'logisco'),
					),
					'max-tablet-logo-width' => array(
						'title' => esc_html__('Max Tablet Logo Width', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '@media only screen and (max-width: 999px){ .logisco-mobile-header .logisco-logo-inner{ max-width: #gdlr#; } }'
					),
					'max-mobile-logo-width' => array(
						'title' => esc_html__('Max Mobile Logo Width', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '@media only screen and (max-width: 767px){ .logisco-mobile-header .logisco-logo-inner{ max-width: #gdlr#; } }'
					),
					'mobile-logo-position' => array(
						'title' => esc_html__('Mobile Logo Position', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'logo-left' => esc_html__('Logo Left', 'logisco'),
							'logo-center' => esc_html__('Logo Center', 'logisco'),
							'logo-right' => esc_html__('Logo Right', 'logisco'),
						)
					),
				
				)
			),
			'navigation' => array(
				'title' => esc_html__('Navigation', 'logisco'),
				'options' => array(
					'main-navigation-top-padding' => array(
						'title' => esc_html__('Main Navigation Top Padding', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '200',
						'data-type' => 'pixel',
						'default' => '25px',
						'selector' => '.logisco-navigation{ padding-top: #gdlr#; }' . 
							'.logisco-navigation-top{ top: #gdlr#; }'
					),
					'main-navigation-bottom-padding' => array(
						'title' => esc_html__('Main Navigation Bottom Padding', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '200',
						'data-type' => 'pixel',
						'default' => '20px',
						'selector' => '.logisco-navigation .sf-menu > li > a{ padding-bottom: #gdlr#; }'
					),
					'main-navigation-item-right-padding' => array(
						'title' => esc_html__('Main Navigation Item Right Padding', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '200',
						'data-type' => 'pixel',
						'default' => '0px',
						'selector' => '.logisco-navigation .logisco-main-menu{ padding-right: #gdlr#; }'
					),
					'main-navigation-right-padding' => array(
						'title' => esc_html__('Main Navigation Wrap Right Padding', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'selector' => '.logisco-navigation.logisco-item-pdlr{ padding-right: #gdlr#; }',
						'description' => esc_html__('Leave this field blank for default value.', 'logisco'),
					),
					'enable-main-navigation-submenu-indicator' => array(
						'title' => esc_html__('Enable Main Navigation Submenu Indicator', 'logisco'),
						'type' => 'checkbox',
						'default' => 'disable',
					),
					'navigation-right-top-margin' => array(
						'title' => esc_html__('Navigation Right ( search/cart/button ) Top Margin ', 'logisco'),
						'type' => 'text',
						'data-input-type' => 'pixel',
						'data-type' => 'pixel',
						'selector' => '.logisco-main-menu-right-wrap{ margin-top: #gdlr#; }'
					),
					'enable-main-navigation-search' => array(
						'title' => esc_html__('Enable Main Navigation Search', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable',
					),
					'enable-main-navigation-cart' => array(
						'title' => esc_html__('Enable Main Navigation Cart ( Woocommerce )', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable',
						'description' => esc_html__('The icon only shows if the woocommerce plugin is activated', 'logisco')
					),
					'enable-main-navigation-right-button' => array(
						'title' => esc_html__('Enable Main Navigation Right Button', 'logisco'),
						'type' => 'checkbox',
						'default' => 'disable',
						'description' => esc_html__('This option will be ignored on header side style', 'logisco')
					),
					'main-navigation-right-button-style' => array(
						'title' => esc_html__('Main Navigation Right Button Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'default' => esc_html__('Default', 'logisco'),
							'round' => esc_html__('Round', 'logisco'),
							'round-with-shadow' => esc_html__('Round With Shadow', 'logisco'),
						),
						'condition' => array( 'enable-main-navigation-right-button' => 'enable' ) 
					),
					'main-navigation-right-button-text' => array(
						'title' => esc_html__('Main Navigation Right Button Text', 'logisco'),
						'type' => 'text',
						'default' => esc_html__('Buy Now', 'logisco'),
						'condition' => array( 'enable-main-navigation-right-button' => 'enable' ) 
					),
					'main-navigation-right-button-link' => array(
						'title' => esc_html__('Main Navigation Right Button Link', 'logisco'),
						'type' => 'text',
						'condition' => array( 'enable-main-navigation-right-button' => 'enable' ) 
					),
					'main-navigation-right-button-link-target' => array(
						'title' => esc_html__('Main Navigation Right Button Link Target', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'_self' => esc_html__('Current Screen', 'logisco'),
							'_blank' => esc_html__('New Window', 'logisco'),
						),
						'condition' => array( 'enable-main-navigation-right-button' => 'enable' ) 
					),
					'right-menu-type' => array(
						'title' => esc_html__('Secondary/Mobile Menu Type', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'left' => esc_html__('Left Slide Menu', 'logisco'),
							'right' => esc_html__('Right Slide Menu', 'logisco'),
							'overlay' => esc_html__('Overlay Menu', 'logisco'),
						),
						'default' => 'right'
					),
					'right-menu-style' => array(
						'title' => esc_html__('Secondary/Mobile Menu Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'hamburger-with-border' => esc_html__('Hamburger With Border', 'logisco'),
							'hamburger' => esc_html__('Hamburger', 'logisco'),
						),
						'default' => 'hamburger-with-border'
					),
					
				) // logo-options
			), // logo-navigation			
			
			'fixed-navigation' => array(
				'title' => esc_html__('Fixed Navigation', 'logisco'),
				'options' => array(

					'enable-main-navigation-sticky' => array(
						'title' => esc_html__('Enable Fixed Navigation Bar', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable',
					),
					'enable-logo-on-main-navigation-sticky' => array(
						'title' => esc_html__('Enable Logo on Fixed Navigation Bar', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable',
						'condition' => array( 'enable-main-navigation-sticky' => 'enable' )
					),
					'fixed-navigation-bar-logo' => array(
						'title' => esc_html__('Fixed Navigation Bar Logo', 'logisco'),
						'type' => 'upload',
						'description' => esc_html__('Leave blank to show default logo', 'logisco'),
						'condition' => array( 'enable-main-navigation-sticky' => 'enable', 'enable-logo-on-main-navigation-sticky' => 'enable' )
					),
					'fixed-navigation-max-logo-width' => array(
						'title' => esc_html__('Fixed Navigation Max Logo Width', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'default' => '',
						'condition' => array( 'enable-main-navigation-sticky' => 'enable' ),
						'selector' => '.logisco-fixed-navigation.logisco-style-slide .logisco-logo-inner img{ max-height: none !important; }' .
							'.logisco-animate-fixed-navigation.logisco-header-style-plain .logisco-logo-inner, ' . 
							'.logisco-animate-fixed-navigation.logisco-header-style-boxed .logisco-logo-inner{ max-width: #gdlr#; }'
					),
					'fixed-navigation-logo-top-padding' => array(
						'title' => esc_html__('Fixed Navigation Logo Top Padding', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'default' => '20px',
						'condition' => array( 'enable-main-navigation-sticky' => 'enable' ),
						'selector' => '.logisco-animate-fixed-navigation.logisco-header-style-plain .logisco-logo, ' . 
							'.logisco-animate-fixed-navigation.logisco-header-style-boxed .logisco-logo{ padding-top: #gdlr#; }'
					),
					'fixed-navigation-logo-bottom-padding' => array(
						'title' => esc_html__('Fixed Navigation Logo Bottom Padding', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'default' => '20px',
						'condition' => array( 'enable-main-navigation-sticky' => 'enable' ),
						'selector' => '.logisco-animate-fixed-navigation.logisco-header-style-plain .logisco-logo, ' . 
							'.logisco-animate-fixed-navigation.logisco-header-style-boxed .logisco-logo{ padding-bottom: #gdlr#; }'
					),
					'fixed-navigation-top-padding' => array(
						'title' => esc_html__('Fixed Navigation Top Padding', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'default' => '30px',
						'condition' => array( 'enable-main-navigation-sticky' => 'enable' ),
						'selector' => '.logisco-animate-fixed-navigation.logisco-header-style-plain .logisco-navigation, ' . 
							'.logisco-animate-fixed-navigation.logisco-header-style-boxed .logisco-navigation{ padding-top: #gdlr#; }' . 
							'.logisco-animate-fixed-navigation.logisco-header-style-plain .logisco-navigation-top, ' . 
							'.logisco-animate-fixed-navigation.logisco-header-style-boxed .logisco-navigation-top{ top: #gdlr#; }'
					),
					'fixed-navigation-bottom-padding' => array(
						'title' => esc_html__('Fixed Navigation Bottom Padding', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'default' => '25px',
						'condition' => array( 'enable-main-navigation-sticky' => 'enable' ),
						'selector' => '.logisco-animate-fixed-navigation.logisco-header-style-plain .logisco-navigation .sf-menu > li > a, ' . 
							'.logisco-animate-fixed-navigation.logisco-header-style-boxed .logisco-navigation .sf-menu > li > a{ padding-bottom: #gdlr#; }'
					),
					'fixed-navigation-anchor-offset' => array(
						'title' => esc_html__('Fixed Navigation Anchor Offset ( Fixed Navigation Height )', 'logisco'),
						'type' => 'text',
						'data-type' => 'pixel',
						'data-input-type' => 'pixel',
						'default' => '75px',
						'condition' => array( 'enable-main-navigation-sticky' => 'enable' ),
					),
					'enable-mobile-navigation-sticky' => array(
						'title' => esc_html__('Enable Mobile Fixed Navigation Bar', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable',
					),

				)
			),

			'title-style' => array(
				'title' => esc_html__('Page Title Style', 'logisco'),
				'options' => array(

					'default-title-style' => array(
						'title' => esc_html__('Default Page Title Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'small' => esc_html__('Small', 'logisco'),
							'medium' => esc_html__('Medium', 'logisco'),
							'large' => esc_html__('Large', 'logisco'),
							'custom' => esc_html__('Custom', 'logisco'),
						),
						'default' => 'small'
					),
					'default-title-align' => array(
						'title' => esc_html__('Default Page Title Alignment', 'logisco'),
						'type' => 'radioimage',
						'options' => 'text-align',
						'default' => 'left'
					),
					'default-title-top-padding' => array(
						'title' => esc_html__('Default Page Title Top Padding', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '350',
						'default' => '93px',
						'selector' => '.logisco-page-title-wrap.logisco-style-custom .logisco-page-title-content{ padding-top: #gdlr#; }',
						'condition' => array( 'default-title-style' => 'custom' )
					),
					'default-title-bottom-padding' => array(
						'title' => esc_html__('Default Page Title Bottom Padding', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '350',
						'default' => '87px',
						'selector' => '.logisco-page-title-wrap.logisco-style-custom .logisco-page-title-content{ padding-bottom: #gdlr#; }',
						'condition' => array( 'default-title-style' => 'custom' )
					),
					'default-page-caption-top-margin' => array(
						'title' => esc_html__('Default Page Caption Top Margin', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '200',
						'default' => '13px',						
						'selector' => '.logisco-page-title-wrap.logisco-style-custom .logisco-page-caption{ margin-top: #gdlr#; }',
						'condition' => array( 'default-title-style' => 'custom' )
					),
					'default-title-font-transform' => array(
						'title' => esc_html__('Default Page Title Font Transform', 'logisco'),
						'type' => 'combobox',
						'data-type' => 'text',
						'options' => array(
							'' => esc_html__('Default', 'logisco'),
							'none' => esc_html__('None', 'logisco'),
							'uppercase' => esc_html__('Uppercase', 'logisco'),
							'lowercase' => esc_html__('Lowercase', 'logisco'),
							'capitalize' => esc_html__('Capitalize', 'logisco'),
						),
						'default' => 'default',
						'selector' => '.logisco-page-title-wrap .logisco-page-title{ text-transform: #gdlr#; }'
					),
					'default-title-font-size' => array(
						'title' => esc_html__('Default Page Title Font Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '37px',
						'selector' => '.logisco-page-title-wrap.logisco-style-custom .logisco-page-title{ font-size: #gdlr#; }',
						'condition' => array( 'default-title-style' => 'custom' )
					),
					'default-title-font-weight' => array(
						'title' => esc_html__('Default Page Title Font Weight', 'logisco'),
						'type' => 'text',
						'data-type' => 'text',
						'selector' => '.logisco-page-title-wrap .logisco-page-title{ font-weight: #gdlr#; }',
						'description' => esc_html__('Eg. lighter, bold, normal, 300, 400, 600, 700, 800. Leave this field blank for default value (700).', 'logisco')					
					),
					'default-title-letter-spacing' => array(
						'title' => esc_html__('Default Page Title Letter Spacing', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '20',
						'default' => '0px',
						'selector' => '.logisco-page-title-wrap.logisco-style-custom .logisco-page-title{ letter-spacing: #gdlr#; }',
						'condition' => array( 'default-title-style' => 'custom' )
					),
					'default-caption-font-transform' => array(
						'title' => esc_html__('Default Page Caption Font Transform', 'logisco'),
						'type' => 'combobox',
						'data-type' => 'text',
						'options' => array(
							'' => esc_html__('Default', 'logisco'),
							'none' => esc_html__('None', 'logisco'),
							'uppercase' => esc_html__('Uppercase', 'logisco'),
							'lowercase' => esc_html__('Lowercase', 'logisco'),
							'capitalize' => esc_html__('Capitalize', 'logisco'),
						),
						'default' => 'default',
						'selector' => '.logisco-page-title-wrap .logisco-page-caption{ text-transform: #gdlr#; }'
					),
					'default-caption-font-size' => array(
						'title' => esc_html__('Default Page Caption Font Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '16px',
						'selector' => '.logisco-page-title-wrap.logisco-style-custom .logisco-page-caption{ font-size: #gdlr#; }',
						'condition' => array( 'default-title-style' => 'custom' )
					),
					'default-caption-font-weight' => array(
						'title' => esc_html__('Default Page Caption Font Weight', 'logisco'),
						'type' => 'text',
						'data-type' => 'text',
						'selector' => '.logisco-page-title-wrap .logisco-page-caption{ font-weight: #gdlr#; }',
						'description' => esc_html__('Eg. lighter, bold, normal, 300, 400, 600, 700, 800. Leave this field blank for default value (400).', 'logisco')					
					),
					'default-caption-letter-spacing' => array(
						'title' => esc_html__('Default Page Caption Letter Spacing', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '20',
						'default' => '0px',
						'selector' => '.logisco-page-title-wrap.logisco-style-custom .logisco-page-caption{ letter-spacing: #gdlr#; }',
						'condition' => array( 'default-title-style' => 'custom' )
					),
					'page-title-top-bottom-gradient' => array(
						'title' => esc_html__('Default Page Title Top/Bottom Gradient', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'both' => esc_html__('Both', 'logisco'),
							'top' => esc_html__('Top', 'logisco'),
							'bottom' => esc_html__('Bottom', 'logisco'),
							'none' => esc_html__('None', 'logisco'),
						),
						'default' => 'none',
					),
					'page-title-top-gradient-size' => array(
						'title' => esc_html__('Default Page Title Top Gradient Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '1000',
 						'default' => '413px',
						'selector' => '.logisco-page-title-wrap .logisco-page-title-top-gradient{ height: #gdlr#; }',
					),
					'page-title-bottom-gradient-size' => array(
						'title' => esc_html__('Default Page Title Bottom Gradient Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '1000',
 						'default' => '413px',
						'selector' => '.logisco-page-title-wrap .logisco-page-title-bottom-gradient{ height: #gdlr#; }',
					),
					'default-title-background-overlay-opacity' => array(
						'title' => esc_html__('Default Page Title Background Overlay Opacity', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'opacity',
						'default' => '80',
						'selector' => '.logisco-page-title-wrap .logisco-page-title-overlay{ opacity: #gdlr#; }'
					),
				) 
			), // title style

			'title-background' => array(
				'title' => esc_html__('Page Title Background', 'logisco'),
				'options' => array(

					'default-title-background' => array(
						'title' => esc_html__('Default Page Title Background', 'logisco'),
						'type' => 'upload',
						'data-type' => 'file',
						'selector' => '.logisco-page-title-wrap{ background-image: url(#gdlr#); }'
					),
					'default-portfolio-title-background' => array(
						'title' => esc_html__('Default Portfolio Title Background', 'logisco'),
						'type' => 'upload',
						'data-type' => 'file',
						'selector' => 'body.single-portfolio .logisco-page-title-wrap{ background-image: url(#gdlr#); }'
					),
					'default-personnel-title-background' => array(
						'title' => esc_html__('Default Personnel Title Background', 'logisco'),
						'type' => 'upload',
						'data-type' => 'file',
						'selector' => 'body.single-personnel .logisco-page-title-wrap{ background-image: url(#gdlr#); }'
					),
					'default-search-title-background' => array(
						'title' => esc_html__('Default Search Title Background', 'logisco'),
						'type' => 'upload',
						'data-type' => 'file',
						'selector' => 'body.search .logisco-page-title-wrap{ background-image: url(#gdlr#); }'
					),
					'default-archive-title-background' => array(
						'title' => esc_html__('Default Archive Title Background', 'logisco'),
						'type' => 'upload',
						'data-type' => 'file',
						'selector' => 'body.archive .logisco-page-title-wrap{ background-image: url(#gdlr#); }'
					),
					'default-404-background' => array(
						'title' => esc_html__('Default 404 Background', 'logisco'),
						'type' => 'upload',
						'data-type' => 'file',
						'selector' => '.logisco-not-found-wrap .logisco-not-found-background{ background-image: url(#gdlr#); }'
					),
					'default-404-background-opacity' => array(
						'title' => esc_html__('Default 404 Background Opacity', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'opacity',
						'default' => '27',
						'selector' => '.logisco-not-found-wrap .logisco-not-found-background{ opacity: #gdlr#; }'
					),

				) 
			), // title background

			'blog-title-style' => array(
				'title' => esc_html__('Blog Title Style', 'logisco'),
				'options' => array(

					'default-blog-title-style' => array(
						'title' => esc_html__('Default Blog Title Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'small' => esc_html__('Small', 'logisco'),
							'large' => esc_html__('Large', 'logisco'),
							'custom' => esc_html__('Custom', 'logisco'),
							'inside-content' => esc_html__('Inside Content', 'logisco'),
							'none' => esc_html__('None', 'logisco'),
						),
						'default' => 'small'
					),
					'default-blog-title-top-padding' => array(
						'title' => esc_html__('Default Blog Title Top Padding', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '400',
						'default' => '93px',
						'selector' => '.logisco-blog-title-wrap.logisco-style-custom .logisco-blog-title-content{ padding-top: #gdlr#; }',
						'condition' => array( 'default-blog-title-style' => 'custom' )
					),
					'default-blog-title-bottom-padding' => array(
						'title' => esc_html__('Default Blog Title Bottom Padding', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '400',
						'default' => '87px',
						'selector' => '.logisco-blog-title-wrap.logisco-style-custom .logisco-blog-title-content{ padding-bottom: #gdlr#; }',
						'condition' => array( 'default-blog-title-style' => 'custom' )
					),
					'default-blog-feature-image' => array(
						'title' => esc_html__('Default Blog Feature Image Location', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'content' => esc_html__('Inside Content', 'logisco'),
							'title-background' => esc_html__('Title Background', 'logisco'),
							'none' => esc_html__('None', 'logisco'),
						),
						'default' => 'content',
						'condition' => array( 'default-blog-title-style' => array('small', 'large', 'custom') )
					),
					'default-blog-title-background-image' => array(
						'title' => esc_html__('Default Blog Title Background Image', 'logisco'),
						'type' => 'upload',
						'data-type' => 'file',
						'selector' => '.logisco-blog-title-wrap{ background-image: url(#gdlr#); }',
						'condition' => array( 'default-blog-title-style' => array('small', 'large', 'custom') )
					),
					'default-blog-top-bottom-gradient' => array(
						'title' => esc_html__('Default Blog ( Feature Image ) Title Top/Bottom Gradient', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'enable' => esc_html__('Both', 'logisco'),
							'top' => esc_html__('Top', 'logisco'),
							'bottom' => esc_html__('Bottom', 'logisco'),
							'disable' => esc_html__('None', 'logisco'),
						),
						'default' => 'enable',
					),
					'single-blog-title-top-gradient-size' => array(
						'title' => esc_html__('Single Blog Title Top Gradient Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '1000',
 						'default' => '413px',
						'selector' => '.logisco-blog-title-wrap.logisco-feature-image .logisco-blog-title-top-overlay{ height: #gdlr#; }',
					),
					'single-blog-title-bottom-gradient-size' => array(
						'title' => esc_html__('Single Blog Title Bottom Gradient Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'data-min' => '0',
						'data-max' => '1000',
 						'default' => '413px',
						'selector' => '.logisco-blog-title-wrap.logisco-feature-image .logisco-blog-title-bottom-overlay{ height: #gdlr#; }',
					),
					'default-blog-title-background-overlay-opacity' => array(
						'title' => esc_html__('Default Blog Title Background Overlay Opacity', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'opacity',
						'default' => '80',
						'selector' => '.logisco-blog-title-wrap .logisco-blog-title-overlay{ opacity: #gdlr#; }',
						'condition' => array( 'default-blog-title-style' => array('small', 'large', 'custom') )
					),

				) 
			), // post title style			

			'blog-style' => array(
				'title' => esc_html__('Blog Style', 'logisco'),
				'options' => array(
					'blog-style' => array(
						'title' => esc_html__('Single Blog Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'style-1' => esc_html__('Style 1', 'logisco'),
							'style-2' => esc_html__('Style 2', 'logisco'),
							'style-3' => esc_html__('Style 3', 'logisco'),
							'magazine' => esc_html__('Magazine', 'logisco')
						),
						'default' => 'style-1'
					),
					'blockquote-style' => array(
						'title' => esc_html__('Blockquote Style ( <blockquote> tag )', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'style-1' => esc_html__('Style 1', 'logisco'),
							'style-2' => esc_html__('Style 2', 'logisco')
						),
						'default' => 'style-1'
					),
					'blog-sidebar' => array(
						'title' => esc_html__('Single Blog Sidebar ( Default )', 'logisco'),
						'type' => 'radioimage',
						'options' => 'sidebar',
						'default' => 'none',
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					'blog-sidebar-left' => array(
						'title' => esc_html__('Single Blog Sidebar Left ( Default )', 'logisco'),
						'type' => 'combobox',
						'options' => 'sidebar',
						'default' => 'none',
						'condition' => array( 'blog-sidebar'=>array('left', 'both') )
					),
					'blog-sidebar-right' => array(
						'title' => esc_html__('Single Blog Sidebar Right ( Default )', 'logisco'),
						'type' => 'combobox',
						'options' => 'sidebar',
						'default' => 'none',
						'condition' => array( 'blog-sidebar'=>array('right', 'both') )
					),
					'blog-max-content-width' => array(
						'title' => esc_html__('Single Blog Max Content Width ( No sidebar layout )', 'logisco'),
						'type' => 'text',
						'data-type' => 'text',
						'data-input-type' => 'pixel',
						'default' => '900px',
						'selector' => 'body.single-post .logisco-sidebar-style-none, body.blog .logisco-sidebar-style-none, ' . 
							'.logisco-blog-style-2 .logisco-comment-content{ max-width: #gdlr#; }'
					),
					'blog-thumbnail-size' => array(
						'title' => esc_html__('Single Blog Thumbnail Size', 'logisco'),
						'type' => 'combobox',
						'options' => 'thumbnail-size',
						'default' => 'full'
					),
					'blog-date-feature' => array(
						'title' => esc_html__('Enable Blog Date Feature', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable',
						'condition' => array( 'blog-style' => 'style-1' )
					),
					'blog-date-feature-year' => array(
						'title' => esc_html__('Enable Year on Blog Date Feature', 'logisco'),
						'type' => 'checkbox',
						'default' => 'disable',
						'condition' => array( 'blog-style' => 'style-1', 'blog-date-feature' => 'enable' )
					),
					'meta-option' => array(
						'title' => esc_html__('Meta Option', 'logisco'),
						'type' => 'multi-combobox',
						'options' => array( 
							'date' => esc_html__('Date', 'logisco'),
							'author' => esc_html__('Author', 'logisco'),
							'category' => esc_html__('Category', 'logisco'),
							'tag' => esc_html__('Tag', 'logisco'),
							'comment' => esc_html__('Comment', 'logisco'),
							'comment-number' => esc_html__('Comment Number', 'logisco'),
						),
						'default' => array('author', 'category', 'tag', 'comment-number')
					),
					'blog-author' => array(
						'title' => esc_html__('Enable Single Blog Author', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable'
					),
					'blog-navigation' => array(
						'title' => esc_html__('Enable Single Blog Navigation', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable'
					),
					'pagination-style' => array(
						'title' => esc_html__('Pagination Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'plain' => esc_html__('Plain', 'logisco'),
							'rectangle' => esc_html__('Rectangle', 'logisco'),
							'rectangle-border' => esc_html__('Rectangle Border', 'logisco'),
							'round' => esc_html__('Round', 'logisco'),
							'round-border' => esc_html__('Round Border', 'logisco'),
							'circle' => esc_html__('Circle', 'logisco'),
							'circle-border' => esc_html__('Circle Border', 'logisco'),
						),
						'default' => 'round'
					),
					'pagination-align' => array(
						'title' => esc_html__('Pagination Alignment', 'logisco'),
						'type' => 'radioimage',
						'options' => 'text-align',
						'default' => 'right'
					),
					'enable-related-post' => array(
						'title' => esc_html__('Enable Related Post', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable',
						'condition' => array('blog-style' => array('style-2', 'style-3', 'magazine'))
					),
					'related-post-blog-style' => array(
						'title' => esc_html__('Related Post Blog Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'blog-column' => esc_html__('Blog Column', 'logisco'), 
							'blog-column-with-frame' => esc_html__('Blog Column With Frame', 'logisco'), 
						),
						'default' => 'blog-column-with-frame',
						'condition' => array('blog-style' => array('style-2', 'style-3', 'magazine'), 'enable-related-post'=>'enable')
					),
					'related-post-blog-column-style' => array(
						'title' => esc_html__('Related Post Blog Column Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'style-1' => esc_html__('Style 1', 'logisco'), 
							'style-2' => esc_html__('Style 2', 'logisco'), 
						),
						'default' => 'blog-column-with-frame',
						'condition' => array('blog-style' => array('style-2', 'style-3', 'magazine'), 'enable-related-post'=>'enable')
					),
					'related-post-column-size' => array(
						'title' => esc_html__('Related Post Column Size', 'logisco'),
						'type' => 'combobox',
						'options' => array( 60 => 1, 30 => 2, 20 => 3, 15 => 4, 12 => 5 ),
						'default' => '20',
						'condition' => array('blog-style' => array('style-2', 'style-3', 'magazine'), 'enable-related-post'=>'enable')
					),
					'related-post-meta-option' => array(
						'title' => esc_html__('Related Post Meta Option', 'logisco'),
						'type' => 'multi-combobox',
						'options' => array(
							'date' => esc_html__('Date', 'logisco'),
							'author' => esc_html__('Author', 'logisco'),
							'category' => esc_html__('Category', 'logisco'),
							'tag' => esc_html__('Tag', 'logisco'),
							'comment' => esc_html__('Comment', 'logisco'),
							'comment-number' => esc_html__('Comment Number', 'logisco'),
						),
						'default' => array('date', 'author', 'category', 'comment-number'),
						'condition' => array('blog-style' => array('style-2', 'style-3', 'magazine'), 'enable-related-post'=>'enable')
					),
					'related-post-thumbnail-size' => array(
						'title' => esc_html__('Related Post Blog Thumbnail Size', 'logisco'),
						'type' => 'combobox',
						'options' => 'thumbnail-size',
						'default' => 'full',
						'condition' => array('blog-style' => array('style-2', 'style-3', 'magazine'), 'enable-related-post'=>'enable')
					),
					'related-post-num-fetch' => array(
						'title' => esc_html__('Related Post Num Fetch', 'logisco'),
						'type' => 'text',
						'default' => '3',
						'condition' => array('blog-style' => array('style-2', 'style-3', 'magazine'), 'enable-related-post'=>'enable')
					),
					'related-post-excerpt-number' => array(
						'title' => esc_html__('Related Post Excerpt Number', 'logisco'),
						'type' => 'text',
						'default' => '0',
						'condition' => array('blog-style' => array('style-2', 'style-3', 'magazine'), 'enable-related-post'=>'enable')
					),
				) // blog-style-options
			), // blog-style-nav

			'blog-social-share' => array(
				'title' => esc_html__('Blog Social Share', 'logisco'),
				'options' => array(
					'blog-social-share' => array(
						'title' => esc_html__('Enable Single Blog Share', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable'
					),
					'blog-social-share-count' => array(
						'title' => esc_html__('Enable Single Blog Share Count', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable'
					),
					'blog-social-facebook' => array(
						'title' => esc_html__('Facebook', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable'
					),		
					'blog-facebook-access-token' => array(
						'title' => esc_html__('Facebook Access Token', 'logisco'),
						'type' => 'text',
					),		
					'blog-social-linkedin' => array(
						'title' => esc_html__('Linkedin', 'logisco'),
						'type' => 'checkbox',
						'default' => 'disable'
					),			
					'blog-social-google-plus' => array(
						'title' => esc_html__('Google Plus', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable'
					),			
					'blog-social-pinterest' => array(
						'title' => esc_html__('Pinterest', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable'
					),			
					'blog-social-stumbleupon' => array(
						'title' => esc_html__('Stumbleupon', 'logisco'),
						'type' => 'checkbox',
						'default' => 'disable'
					),			
					'blog-social-twitter' => array(
						'title' => esc_html__('Twitter', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable'
					),			
					'blog-social-email' => array(
						'title' => esc_html__('Email', 'logisco'),
						'type' => 'checkbox',
						'default' => 'disable'
					),
				) // blog-style-options
			), // blog-style-nav
			
			'search-archive' => array(
				'title' => esc_html__('Search/Archive', 'logisco'),
				'options' => array(
					'archive-blog-sidebar' => array(
						'title' => esc_html__('Archive Blog Sidebar', 'logisco'),
						'type' => 'radioimage',
						'options' => 'sidebar',
						'default' => 'right',
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					'archive-blog-sidebar-left' => array(
						'title' => esc_html__('Archive Blog Sidebar Left', 'logisco'),
						'type' => 'combobox',
						'options' => 'sidebar',
						'default' => 'none',
						'condition' => array( 'archive-blog-sidebar'=>array('left', 'both') )
					),
					'archive-blog-sidebar-right' => array(
						'title' => esc_html__('Archive Blog Sidebar Right', 'logisco'),
						'type' => 'combobox',
						'options' => 'sidebar',
						'default' => 'none',
						'condition' => array( 'archive-blog-sidebar'=>array('right', 'both') )
					),
					'archive-blog-style' => array(
						'title' => esc_html__('Archive Blog Style', 'logisco'),
						'type' => 'radioimage',
						'options' => array(
							'blog-full' => GDLR_CORE_URL . '/include/images/blog-style/blog-full.png',
							'blog-full-with-frame' => GDLR_CORE_URL . '/include/images/blog-style/blog-full-with-frame.png',
							'blog-column' => GDLR_CORE_URL . '/include/images/blog-style/blog-column.png',
							'blog-column-with-frame' => GDLR_CORE_URL . '/include/images/blog-style/blog-column-with-frame.png',
							'blog-column-no-space' => GDLR_CORE_URL . '/include/images/blog-style/blog-column-no-space.png',
							'blog-image' => GDLR_CORE_URL . '/include/images/blog-style/blog-image.png',
							'blog-image-no-space' => GDLR_CORE_URL . '/include/images/blog-style/blog-image-no-space.png',
							'blog-left-thumbnail' => GDLR_CORE_URL . '/include/images/blog-style/blog-left-thumbnail.png',
							'blog-right-thumbnail' => GDLR_CORE_URL . '/include/images/blog-style/blog-right-thumbnail.png',
						),
						'default' => 'blog-full',
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					'archive-blog-full-style' => array(
						'title' => esc_html__('Blog Full Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'style-1' => esc_html__('Style 1', 'logisco'),
							'style-2' => esc_html__('Style 2', 'logisco'),
						),
						'condition' => array( 'archive-blog-style'=>array('blog-full', 'blog-full-with-frame') )
					),
					'archive-blog-side-thumbnail-style' => array(
						'title' => esc_html__('Blog Side Thumbnail Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'style-1' => esc_html__('Style 1', 'logisco'),
							'style-1-large' => esc_html__('Style 1 Large Thumbnail', 'logisco'),
							'style-2' => esc_html__('Style 2', 'logisco'),
							'style-2-large' => esc_html__('Style 2 Large Thumbnail', 'logisco'),
						),
						'condition' => array( 'archive-blog-style'=>array('blog-left-thumbnail', 'blog-right-thumbnail') )
					),
					'archive-blog-column-style' => array(
						'title' => esc_html__('Blog Column Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'style-1' => esc_html__('Style 1', 'logisco'),
							'style-2' => esc_html__('Style 2', 'logisco'),
						),
						'condition' => array( 'archive-blog-style'=>array('blog-column', 'blog-column-with-frame', 'blog-column-no-space') )
					),
					'archive-blog-image-style' => array(
						'title' => esc_html__('Blog Image Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'style-1' => esc_html__('Style 1', 'logisco'),
							'style-2' => esc_html__('Style 2', 'logisco'),
						),
						'condition' => array( 'archive-blog-style'=>array('blog-image', 'blog-image-no-space') )
					),
					'archive-blog-full-alignment' => array(
						'title' => esc_html__('Archive Blog Full Alignment', 'logisco'),
						'type' => 'combobox',
						'default' => 'enable',
						'options' => array(
							'left' => esc_html__('Left', 'logisco'),
							'center' => esc_html__('Center', 'logisco'),
						),
						'condition' => array( 'archive-blog-style' => array('blog-full', 'blog-full-with-frame') )
					),
					'archive-thumbnail-size' => array(
						'title' => esc_html__('Archive Thumbnail Size', 'logisco'),
						'type' => 'combobox',
						'options' => 'thumbnail-size'
					),
					'archive-show-thumbnail' => array(
						'title' => esc_html__('Archive Show Thumbnail', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable',
						'condition' => array( 'archive-blog-style' => array('blog-full', 'blog-full-with-frame', 'blog-column', 'blog-column-with-frame', 'blog-column-no-space', 'blog-left-thumbnail', 'blog-right-thumbnail') )
					),
					'archive-column-size' => array(
						'title' => esc_html__('Archive Column Size', 'logisco'),
						'type' => 'combobox',
						'options' => array( 60 => 1, 30 => 2, 20 => 3, 15 => 4, 12 => 5 ),
						'default' => 20,
						'condition' => array( 'archive-blog-style' => array('blog-column', 'blog-column-with-frame', 'blog-column-no-space', 'blog-image', 'blog-image-no-space') )
					),
					'archive-excerpt' => array(
						'title' => esc_html__('Archive Excerpt Type', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'specify-number' => esc_html__('Specify Number', 'logisco'),
							'show-all' => esc_html__('Show All ( use <!--more--> tag to cut the content )', 'logisco'),
						),
						'default' => 'specify-number',
						'condition' => array('archive-blog-style' => array('blog-full', 'blog-full-with-frame', 'blog-column', 'blog-column-with-frame', 'blog-column-no-space', 'blog-left-thumbnail', 'blog-right-thumbnail'))
					),
					'archive-excerpt-number' => array(
						'title' => esc_html__('Archive Excerpt Number', 'logisco'),
						'type' => 'text',
						'default' => 55,
						'data-input-type' => 'number',
						'condition' => array('archive-blog-style' => array('blog-full', 'blog-full-with-frame', 'blog-column', 'blog-column-with-frame', 'blog-column-no-space', 'blog-left-thumbnail', 'blog-right-thumbnail'), 'archive-excerpt' => 'specify-number')
					),
					'archive-date-feature' => array(
						'title' => esc_html__('Enable Blog Date Feature', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable',
						'condition' => array( 'archive-blog-style' => array('blog-full', 'blog-full-with-frame', 'blog-left-thumbnail', 'blog-right-thumbnail') )
					),
					'archive-meta-option' => array(
						'title' => esc_html__('Archive Meta Option', 'logisco'),
						'type' => 'multi-combobox',
						'options' => array( 
							'date' => esc_html__('Date', 'logisco'),
							'author' => esc_html__('Author', 'logisco'),
							'category' => esc_html__('Category', 'logisco'),
							'tag' => esc_html__('Tag', 'logisco'),
							'comment' => esc_html__('Comment', 'logisco'),
							'comment-number' => esc_html__('Comment Number', 'logisco'),
						),
						'default' => array('date', 'author', 'category')
					),
					'archive-show-read-more' => array(
						'title' => esc_html__('Archive Show Read More Button', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable',
						'condition' => array('archive-blog-style' => array('blog-full', 'blog-full-with-frame', 'blog-left-thumbnail', 'blog-right-thumbnail'),)
					),
					'archive-blog-title-font-size' => array(
						'title' => esc_html__('Blog Title Font Size', 'logisco'),
						'type' => 'text',
						'data-input-type' => 'pixel',
					),
					'archive-blog-title-font-weight' => array(
						'title' => esc_html__('Blog Title Font Weight', 'logisco'),
						'type' => 'text',
						'description' => esc_html__('Eg. lighter, bold, normal, 300, 400, 600, 700, 800', 'logisco')
					),
					'archive-blog-title-letter-spacing' => array(
						'title' => esc_html__('Blog Title Letter Spacing', 'logisco'),
						'type' => 'text',
						'data-input-type' => 'pixel',
					),
					'archive-blog-title-text-transform' => array(
						'title' => esc_html__('Blog Title Text Transform', 'logisco'),
						'type' => 'combobox',
						'data-type' => 'text',
						'options' => array(
							'none' => esc_html__('None', 'logisco'),
							'uppercase' => esc_html__('Uppercase', 'logisco'),
							'lowercase' => esc_html__('Lowercase', 'logisco'),
							'capitalize' => esc_html__('Capitalize', 'logisco'),
						),
						'default' => 'none'
					),
				)
			),

			'woocommerce-style' => array(
				'title' => esc_html__('Woocommerce Style', 'logisco'),
				'options' => array(

					'woocommerce-archive-sidebar' => array(
						'title' => esc_html__('Woocommerce Archive Sidebar', 'logisco'),
						'type' => 'radioimage',
						'options' => 'sidebar',
						'default' => 'right',
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					'woocommerce-archive-sidebar-left' => array(
						'title' => esc_html__('Woocommerce Archive Sidebar Left', 'logisco'),
						'type' => 'combobox',
						'options' => 'sidebar',
						'default' => 'none',
						'condition' => array( 'woocommerce-archive-sidebar'=>array('left', 'both') )
					),
					'woocommerce-archive-sidebar-right' => array(
						'title' => esc_html__('Woocommerce Archive Sidebar Right', 'logisco'),
						'type' => 'combobox',
						'options' => 'sidebar',
						'default' => 'none',
						'condition' => array( 'woocommerce-archive-sidebar'=>array('right', 'both') )
					),
					'woocommerce-archive-product-style' => array(
						'title' => esc_html__('Woocommerce Archive Product Style', 'logisco'),
						'type' => 'combobox',
						'options' => array( 
							'grid' => esc_html__('Grid', 'logisco'),
							'grid-2' => esc_html__('Grid 2', 'logisco'),
						),
						'default' => 'grid'
					),
					'woocommerce-archive-column-size' => array(
						'title' => esc_html__('Woocommerce Archive Column Size', 'logisco'),
						'type' => 'combobox',
						'options' => array( 60 => 1, 30 => 2, 20 => 3, 15 => 4, 12 => 5, 10 => 6, ),
						'default' => 15
					),
					'woocommerce-archive-thumbnail' => array(
						'title' => esc_html__('Woocommerce Archive Thumbnail Size', 'logisco'),
						'type' => 'combobox',
						'options' => 'thumbnail-size',
						'default' => 'full'
					),
					'woocommerce-related-product-column-size' => array(
						'title' => esc_html__('Woocommerce Related Product Column Size', 'logisco'),
						'type' => 'combobox',
						'options' => array( 60 => 1, 30 => 2, 20 => 3, 15 => 4, 12 => 5, 10 => 6, ),
						'default' => 15
					),
					'woocommerce-related-product-num-fetch' => array(
						'title' => esc_html__('Woocommerce Related Product Num Fetch', 'logisco'),
						'type' => 'text',
						'default' => 4,
						'data-input-type' => 'number'
					),
					'woocommerce-related-product-thumbnail' => array(
						'title' => esc_html__('Woocommerce Related Product Thumbnail Size', 'logisco'),
						'type' => 'combobox',
						'options' => 'thumbnail-size',
						'default' => 'full'
					),
				)
			),

			'portfolio-style' => array(
				'title' => esc_html__('Portfolio Style', 'logisco'),
				'options' => array(
					'portfolio-slug' => array(
						'title' => esc_html__('Portfolio Slug (Permalink)', 'logisco'),
						'type' => 'text',
						'default' => 'portfolio',
						'description' => esc_html__('Please save the "Settings > Permalink" area once after made a changes to this field.', 'logisco')
					),
					'portfolio-category-slug' => array(
						'title' => esc_html__('Portfolio Category Slug (Permalink)', 'logisco'),
						'type' => 'text',
						'default' => 'portfolio_category',
						'description' => esc_html__('Please save the "Settings > Permalink" area once after made a changes to this field.', 'logisco')
					),
					'portfolio-tag-slug' => array(
						'title' => esc_html__('Portfolio Tag Slug (Permalink)', 'logisco'),
						'type' => 'text',
						'default' => 'portfolio_tag',
						'description' => esc_html__('Please save the "Settings > Permalink" area once after made a changes to this field.', 'logisco')
					),
					'enable-single-portfolio-navigation' => array(
						'title' => esc_html__('Enable Single Portfolio Navigation', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable'
					),
					'enable-single-portfolio-navigation-in-same-tag' => array(
						'title' => esc_html__('Enable Single Portfolio Navigation Within Same Tag', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable',
						'condition' => array( 'enable-single-portfolio-navigation' => 'enable' )
					),
					'portfolio-icon-hover-link' => array(
						'title' => esc_html__('Portfolio Hover Icon (Link)', 'logisco'),
						'type' => 'radioimage',
						'options' => 'hover-icon-link',
						'default' => 'icon_link_alt'
					),
					'portfolio-icon-hover-video' => array(
						'title' => esc_html__('Portfolio Hover Icon (Video)', 'logisco'),
						'type' => 'radioimage',
						'options' => 'hover-icon-video',
						'default' => 'icon_film'
					),
					'portfolio-icon-hover-image' => array(
						'title' => esc_html__('Portfolio Hover Icon (Image)', 'logisco'),
						'type' => 'radioimage',
						'options' => 'hover-icon-image',
						'default' => 'icon_zoom-in_alt'
					),
					'portfolio-icon-hover-size' => array(
						'title' => esc_html__('Portfolio Hover Icon Size', 'logisco'),
						'type' => 'fontslider',
						'data-type' => 'pixel',
						'default' => '22px',
						'selector' => '.gdlr-core-portfolio-thumbnail .gdlr-core-portfolio-icon{ font-size: #gdlr#; }' 
					),
					'enable-related-portfolio' => array(
						'title' => esc_html__('Enable Related Portfolio', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable'
					),
					'related-portfolio-style' => array(
						'title' => esc_html__('Related Portfolio Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'grid' => esc_html__('Grid', 'logisco'),
							'modern' => esc_html__('Modern', 'logisco'),
						),
						'condition' => array('enable-related-portfolio'=>'enable')
					),
					'related-portfolio-column-size' => array(
						'title' => esc_html__('Related Portfolio Column Size', 'logisco'),
						'type' => 'combobox',
						'options' => array( 60 => 1, 30 => 2, 20 => 3, 15 => 4, 12 => 5, 10 => 6, ),
						'default' => 15,
						'condition' => array('enable-related-portfolio'=>'enable')
					),
					'related-portfolio-num-fetch' => array(
						'title' => esc_html__('Related Portfolio Num Fetch', 'logisco'),
						'type' => 'text',
						'default' => 4,
						'data-input-type' => 'number',
						'condition' => array('enable-related-portfolio'=>'enable')
					),
					'related-portfolio-thumbnail-size' => array(
						'title' => esc_html__('Related Portfolio Thumbnail Size', 'logisco'),
						'type' => 'combobox',
						'options' => 'thumbnail-size',
						'condition' => array('enable-related-portfolio'=>'enable'),
						'default' => 'medium'
					),
					'related-portfolio-num-excerpt' => array(
						'title' => esc_html__('Related Portfolio Num Excerpt', 'logisco'),
						'type' => 'text',
						'default' => 20,
						'data-input-type' => 'number',
						'condition' => array('enable-related-portfolio'=>'enable', 'related-portfolio-style'=>'grid')
					),
				)
			),

			'portfolio-archive' => array(
				'title' => esc_html__('Portfolio Archive', 'logisco'),
				'options' => array(
					'archive-portfolio-sidebar' => array(
						'title' => esc_html__('Archive Portfolio Sidebar', 'logisco'),
						'type' => 'radioimage',
						'options' => 'sidebar',
						'default' => 'none',
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					'archive-portfolio-sidebar-left' => array(
						'title' => esc_html__('Archive Portfolio Sidebar Left', 'logisco'),
						'type' => 'combobox',
						'options' => 'sidebar',
						'default' => 'none',
						'condition' => array( 'archive-portfolio-sidebar'=>array('left', 'both') )
					),
					'archive-portfolio-sidebar-right' => array(
						'title' => esc_html__('Archive Portfolio Sidebar Right', 'logisco'),
						'type' => 'combobox',
						'options' => 'sidebar',
						'default' => 'none',
						'condition' => array( 'archive-portfolio-sidebar'=>array('right', 'both') )
					),
					'archive-portfolio-style' => array(
						'title' => esc_html__('Archive Portfolio Style', 'logisco'),
						'type' => 'radioimage',
						'options' => array(
							'modern' => get_template_directory_uri() . '/include/options/images/portfolio/modern.png',
							'modern-no-space' => get_template_directory_uri() . '/include/options/images/portfolio/modern-no-space.png',
							'grid' => get_template_directory_uri() . '/include/options/images/portfolio/grid.png',
							'grid-no-space' => get_template_directory_uri() . '/include/options/images/portfolio/grid-no-space.png',
							'modern-desc' => get_template_directory_uri() . '/include/options/images/portfolio/modern-desc.png',
							'modern-desc-no-space' => get_template_directory_uri() . '/include/options/images/portfolio/modern-desc-no-space.png',
							'medium' => get_template_directory_uri() . '/include/options/images/portfolio/medium.png',
						),
						'default' => 'medium',
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					'archive-portfolio-thumbnail-size' => array(
						'title' => esc_html__('Archive Portfolio Thumbnail Size', 'logisco'),
						'type' => 'combobox',
						'options' => 'thumbnail-size'
					),
					'archive-portfolio-grid-text-align' => array(
						'title' => esc_html__('Archive Portfolio Grid Text Align', 'logisco'),
						'type' => 'radioimage',
						'options' => 'text-align',
						'default' => 'left',
						'condition' => array( 'archive-portfolio-style' => array( 'grid', 'grid-no-space' ) )
					),
					'archive-portfolio-grid-style' => array(
						'title' => esc_html__('Archive Portfolio Grid Content Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'normal' => esc_html__('Normal', 'logisco'),
							'with-frame' => esc_html__('With Frame', 'logisco'),
							'with-bottom-border' => esc_html__('With Bottom Border', 'logisco'),
						),
						'default' => 'normal',
						'condition' => array( 'archive-portfolio-style' => array( 'grid', 'grid-no-space' ) )
					),
					'archive-enable-portfolio-tag' => array(
						'title' => esc_html__('Archive Enable Portfolio Tag', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable',
						'condition' => array( 'archive-portfolio-style' => array( 'grid', 'grid-no-space', 'modern-desc', 'modern-desc-no-space', 'medium' ) )
					),
					'archive-portfolio-medium-size' => array(
						'title' => esc_html__('Archive Portfolio Medium Thumbnail Size', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'small' => esc_html__('Small', 'logisco'),
							'large' => esc_html__('Large', 'logisco'),
						),
						'condition' => array( 'archive-portfolio-style' => 'medium' )
					),
					'archive-portfolio-medium-style' => array(
						'title' => esc_html__('Archive Portfolio Medium Thumbnail Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'left' => esc_html__('Left', 'logisco'),
							'right' => esc_html__('Right', 'logisco'),
							'switch' => esc_html__('Switch ( Between Left and Right )', 'logisco'),
						),
						'default' => 'switch',
						'condition' => array( 'archive-portfolio-style' => 'medium' )
					),
					'archive-portfolio-hover' => array(
						'title' => esc_html__('Archive Portfolio Hover Style', 'logisco'),
						'type' => 'radioimage',
						'options' => array(
							'title' => get_template_directory_uri() . '/include/options/images/portfolio/hover/title.png',
							'title-icon' => get_template_directory_uri() . '/include/options/images/portfolio/hover/title-icon.png',
							'title-tag' => get_template_directory_uri() . '/include/options/images/portfolio/hover/title-tag.png',
							'icon-title-tag' => get_template_directory_uri() . '/include/options/images/portfolio/hover/icon-title-tag.png',
							'icon' => get_template_directory_uri() . '/include/options/images/portfolio/hover/icon.png',
							'margin-title' => get_template_directory_uri() . '/include/options/images/portfolio/hover/margin-title.png',
							'margin-title-icon' => get_template_directory_uri() . '/include/options/images/portfolio/hover/margin-title-icon.png',
							'margin-title-tag' => get_template_directory_uri() . '/include/options/images/portfolio/hover/margin-title-tag.png',
							'margin-icon-title-tag' => get_template_directory_uri() . '/include/options/images/portfolio/hover/margin-icon-title-tag.png',
							'margin-icon' => get_template_directory_uri() . '/include/options/images/portfolio/hover/margin-icon.png',
							'none' => get_template_directory_uri() . '/include/options/images/portfolio/hover/none.png',
						),
						'default' => 'icon',
						'max-width' => '100px',
						'condition' => array( 'archive-portfolio-style' => array('modern', 'modern-no-space', 'grid', 'grid-no-space', 'medium') ),
						'wrapper-class' => 'gdlr-core-fullsize'
					),
					'archive-portfolio-column-size' => array(
						'title' => esc_html__('Archive Portfolio Column Size', 'logisco'),
						'type' => 'combobox',
						'options' => array( 60=>1, 30=>2, 20=>3, 15=>4, 12=>5 ),
						'default' => 20,
						'condition' => array( 'archive-portfolio-style' => array('modern', 'modern-no-space', 'grid', 'grid-no-space', 'modern-desc', 'modern-desc-no-space') )
					),
					'archive-portfolio-excerpt' => array(
						'title' => esc_html__('Archive Portfolio Excerpt Type', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'specify-number' => esc_html__('Specify Number', 'logisco'),
							'show-all' => esc_html__('Show All ( use <!--more--> tag to cut the content )', 'logisco'),
							'none' => esc_html__('Disable Exceprt', 'logisco'),
						),
						'default' => 'specify-number',
						'condition' => array( 'archive-portfolio-style' => array( 'grid', 'grid-no-space', 'modern-desc', 'modern-desc-no-space', 'medium' ) )
					),
					'archive-portfolio-excerpt-number' => array(
						'title' => esc_html__('Archive Portfolio Excerpt Number', 'logisco'),
						'type' => 'text',
						'default' => 55,
						'data-input-type' => 'number',
						'condition' => array( 'archive-portfolio-style' => array( 'grid', 'grid-no-space', 'modern-desc', 'modern-desc-no-space', 'medium' ), 'archive-portfolio-excerpt' => 'specify-number' )
					),

				)
			),

			'personnel-style' => array(
				'title' => esc_html__('Personnel Style', 'logisco'),
				'options' => array(
					'personnel-slug' => array(
						'title' => esc_html__('Personnel Slug (Permalink)', 'logisco'),
						'type' => 'text',
						'default' => 'personnel',
						'description' => esc_html__('Please save the "Settings > Permalink" area once after made a changes to this field.', 'logisco')
					),
					'personnel-category-slug' => array(
						'title' => esc_html__('Personnel Category Slug (Permalink)', 'logisco'),
						'type' => 'text',
						'default' => 'personnel_category',
						'description' => esc_html__('Please save the "Settings > Permalink" area once after made a changes to this field.', 'logisco')
					),
				)
			),

			'footer' => array(
				'title' => esc_html__('Footer/Copyright', 'logisco'),
				'options' => array(

					'fixed-footer' => array(
						'title' => esc_html__('Fixed Footer', 'logisco'),
						'type' => 'checkbox',
						'default' => 'disable'
					),
					'enable-footer' => array(
						'title' => esc_html__('Enable Footer', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable'
					),
					'footer-background' => array(
						'title' => esc_html__('Footer Background', 'logisco'),
						'type' => 'upload',
						'data-type' => 'file',
						'selector' => '.logisco-footer-wrapper{ background-image: url(#gdlr#); background-size: cover; }',
						'condition' => array( 'enable-footer' => 'enable' )
					),
					'enable-footer-column-divider' => array(
						'title' => esc_html__('Enable Footer Column Divider', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable',
						'condition' => array( 'enable-footer' => 'enable' )
					),
					'footer-top-padding' => array(
						'title' => esc_html__('Footer Top Padding', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '300',
						'data-type' => 'pixel',
						'default' => '70px',
						'selector' => '.logisco-footer-wrapper{ padding-top: #gdlr#; }',
						'condition' => array( 'enable-footer' => 'enable' )
					),
					'footer-bottom-padding' => array(
						'title' => esc_html__('Footer Bottom Padding', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '300',
						'data-type' => 'pixel',
						'default' => '50px',
						'selector' => '.logisco-footer-wrapper{ padding-bottom: #gdlr#; }',
						'condition' => array( 'enable-footer' => 'enable' )
					),
					'footer-style' => array(
						'title' => esc_html__('Footer Style', 'logisco'),
						'type' => 'radioimage',
						'wrapper-class' => 'gdlr-core-fullsize',
						'options' => array(
							'footer-1' => get_template_directory_uri() . '/include/options/images/footer-style1.png',
							'footer-2' => get_template_directory_uri() . '/include/options/images/footer-style2.png',
							'footer-3' => get_template_directory_uri() . '/include/options/images/footer-style3.png',
							'footer-4' => get_template_directory_uri() . '/include/options/images/footer-style4.png',
							'footer-5' => get_template_directory_uri() . '/include/options/images/footer-style5.png',
							'footer-6' => get_template_directory_uri() . '/include/options/images/footer-style6.png',
						),
						'default' => 'footer-2',
						'condition' => array( 'enable-footer' => 'enable' )
					),
					'enable-copyright' => array(
						'title' => esc_html__('Enable Copyright', 'logisco'),
						'type' => 'checkbox',
						'default' => 'enable'
					),
					'copyright-style' => array(
						'title' => esc_html__('Copyright Style', 'logisco'),
						'type' => 'combobox',
						'options' => array(
							'center' => esc_html__('Center', 'logisco'),
							'left-right' => esc_html__('Left & Right', 'logisco'),
						),
						'condition' => array( 'enable-copyright' => 'enable' )
					),
					'copyright-top-padding' => array(
						'title' => esc_html__('Copyright Top Padding', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '300',
						'data-type' => 'pixel',
						'default' => '38px',
						'selector' => '.logisco-copyright-container{ padding-top: #gdlr#; }',
						'condition' => array( 'enable-copyright' => 'enable' )
					),
					'copyright-bottom-padding' => array(
						'title' => esc_html__('Copyright Bottom Padding', 'logisco'),
						'type' => 'fontslider',
						'data-min' => '0',
						'data-max' => '300',
						'data-type' => 'pixel',
						'default' => '38px',
						'selector' => '.logisco-copyright-container{ padding-bottom: #gdlr#; }',
						'condition' => array( 'enable-copyright' => 'enable' )
					),	
					'copyright-text' => array(
						'title' => esc_html__('Copyright Text', 'logisco'),
						'type' => 'textarea',
						'wrapper-class' => 'gdlr-core-fullsize',
						'condition' => array( 'enable-copyright' => 'enable' )
					),
					'copyright-left' => array(
						'title' => esc_html__('Copyright Left', 'logisco'),
						'type' => 'textarea',
						'wrapper-class' => 'gdlr-core-fullsize',
						'condition' => array( 'enable-copyright' => 'enable', 'copyright-style' => 'left-right' )
					),
					'copyright-right' => array(
						'title' => esc_html__('Copyright Right', 'logisco'),
						'type' => 'textarea',
						'wrapper-class' => 'gdlr-core-fullsize',
						'condition' => array( 'enable-copyright' => 'enable', 'copyright-style' => 'left-right' )
					),
					'enable-back-to-top' => array(
						'title' => esc_html__('Enable Back To Top Button', 'logisco'),
						'type' => 'checkbox',
						'default' => 'disable'
					),
				) // footer-options
			), // footer-nav	
		
		) // general-options
		
	), 2);