<?php
/**
 * The template for displaying archive not found
 */

	echo '<div class="logisco-not-found-wrap" id="logisco-full-no-header-wrap" >';
	echo '<div class="logisco-not-found-background" ></div>';
	echo '<div class="logisco-not-found-container logisco-container">';
	echo '<div class="logisco-header-transparent-substitute" ></div>';
	
	echo '<div class="logisco-not-found-content logisco-item-pdlr">';
	echo '<h1 class="logisco-not-found-head" >' . esc_html__('Not Found', 'logisco') . '</h1>';
	echo '<div class="logisco-not-found-caption" >' . esc_html__('Nothing matched your search criteria. Please try again with different keywords.', 'logisco') . '</div>';

	echo '<form role="search" method="get" class="search-form" action="' . esc_url(home_url('/')) . '">';
	echo '<input type="text" class="search-field logisco-title-font" placeholder="' . esc_attr__('Type Keywords...', 'logisco') . '" value="" name="s">';
	echo '<div class="logisco-top-search-submit"><i class="fa fa-search" ></i></div>';
	echo '<input type="submit" class="search-submit" value="Search">';
	echo '</form>';
	echo '<div class="logisco-not-found-back-to-home" ><a href="' . esc_url(home_url('/')) . '" >' . esc_html__('Or Back To Homepage', 'logisco') . '</a></div>';
	echo '</div>'; // logisco-not-found-content

	echo '</div>'; // logisco-not-found-container
	echo '</div>'; // logisco-not-found-wrap