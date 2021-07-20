<?php
/**
 * The main template file
 */ 


	get_header();

	echo '<div class="logisco-content-container logisco-container">';
	echo '<div class="logisco-sidebar-style-none" >'; // for max width

	get_template_part('content/archive', 'default');

	echo '</div>'; // logisco-content-area
	echo '</div>'; // logisco-content-container

	get_footer(); 
