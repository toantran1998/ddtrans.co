<?php
/**
 * Class: WPGMP_Model_Extentions
 *
 * @author Flipper Code <hello@flippercode.com>
 * @version 5.2.6
 * @package Maps
 */

if ( ! class_exists( 'WPGMP_Model_Extentions' ) ) {

	/**
	 * Display Extentions.
	 *
	 * @package Maps
	 * @author Flipper Code <hello@flippercode.com>
	 */
	class WPGMP_Model_Extentions extends FlipperCode_Model_Base {
		/**
		 * Intialize constructor
		 */
		function __construct() {}
		
		/**
		 * Admin menu for Extention Display
		 *
		 * @return array Admin menu navigation(s).
		 */
		function navigation() {		return array( 'wpgmp_manage_extentions' => esc_html__( 'Extentions', 'wpgmp-google-map' ));
			}
		/**
		 * Install table if required
		 *
		 * @return string SQL query to install map_locations table.
		 */
		function install() {}
		

	}
}
