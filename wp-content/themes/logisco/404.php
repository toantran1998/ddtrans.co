<?php
/**
 * The template for displaying 404 pages (not found)
 */

	get_header();

	?>
	<div class="logisco-not-found-wrap" id="logisco-full-no-header-wrap" >
		<div class="logisco-not-found-background" ></div>
		<div class="logisco-not-found-container logisco-container">
			<div class="logisco-header-transparent-substitute" ></div>
	
			<div class="logisco-not-found-content logisco-item-pdlr">
			<?php
				echo '<h1 class="logisco-not-found-head" >' . esc_html__('404', 'logisco') . '</h1>';
				echo '<h3 class="logisco-not-found-title logisco-content-font" >' . esc_html__('Page Not Found', 'logisco') . '</h3>';
				echo '<div class="logisco-not-found-caption" >' . esc_html__('Sorry, we couldn\'t find the page you\'re looking for.', 'logisco') . '</div>';

				echo '<form role="search" method="get" class="search-form" action="' . esc_url(home_url('/')) . '">';
				echo '<input type="text" class="search-field logisco-title-font" placeholder="' . esc_attr__('Type Keywords...', 'logisco') . '" value="" name="s">';
				echo '<div class="logisco-top-search-submit"><i class="fa fa-search" ></i></div>';
				echo '<input type="submit" class="search-submit" value="Search">';
				echo '</form>';
				echo '<div class="logisco-not-found-back-to-home" ><a href="' . esc_url(home_url('/')) . '" >' . esc_html__('Or Back To Homepage', 'logisco') . '</a></div>';
			?>
			</div>
		</div>
	</div>

	<?php
	get_footer(); 
