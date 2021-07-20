<?php
/**
 * Plugin Name: KT Table Switch
 * Description: Currency Table Shortcode
 * Version:     1.0.0
 * Author:      Khoi Tran
 * Author URI:  not yet
 * License:     GPL2+
 * Text Domain: Khoi-Tran-Custom
 */

class KT_Table_Switch {
	public function __construct() {
		add_action( 'wp_enqueue_scripts', 'essential_files' );
		function essential_files () {
			wp_enqueue_script('jquery');
			wp_enqueue_style("main-style",plugins_url("kt-table-switch") . '/asset/css/style.css' );
			wp_enqueue_script( 'main-js', plugins_url("kt-table-switch") . '/asset/js/main.js', array(), "1.0.0",true);
		}
	}
}

$kt_switch_table_instance = new KT_Table_Switch();