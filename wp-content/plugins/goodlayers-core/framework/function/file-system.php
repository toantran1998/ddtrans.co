<?php
	/*	
	*	Goodlayers File System
	*	---------------------------------------------------------------------
	*	This file handles the wordpress file system api
	*	---------------------------------------------------------------------
	*/
	
	if( !class_exists('gdlr_core_file_system') ){
		class gdlr_core_file_system{

			private static $alt_method = array(
				'read' => 'file_get_contents',
				'write' => array(
					'open' => 'fopen',
					'write' => 'fwrite',
					'close' => 'fclose',
				)
			);

			// init the filesystem api
			static function init($page_url){
				
				if( false === ($creds = request_filesystem_credentials($page_url, '', false, false, null)) ){
					return false;
				}
				
				if( !WP_Filesystem($creds) ){
					request_filesystem_credentials($page_url, '', true, false, null);
					return false;
				}
				return true;
			}
			
			// file writing
			static function write($file_url, $data, $page_url = ''){
				// error_reporting(E_ALL);
				// ini_set('display_errors',1);
				// ob_start();

				// alternate writing method
				if( empty($page_url) || !function_exists('request_filesystem_credentials') ){
					$method = self::$alt_method['write']['open'];
					$fs = @$method($file_url, 'w');
					
					//$debug = ob_get_contents();
					//ob_end_clean();

					if( !$fs ){
						return 	array(
							'status' => 'failed', 
							'head' =>  esc_html__('Cannot Generate Custom File', 'goodlayers-core'),
							'message' => esc_html__('Please try changing the style-custom.css file permission to 775 or 777 for this.' ,'goodlayers-core')
								// . gdlr_core_debug_object($debug)
						);
					}
					
					$method = self::$alt_method['write']['write'];
					$method($fs, $data);
					$method = self::$alt_method['write']['close'];
					$method($fs);
					
					return true;
				}
				
				// file system writing method
				if( !self::$init($page_url) ){
					return array(
						'success' => false,
						'head' => esc_html__('An error occurs', 'goodlayers-core'),
						'message' => esc_html__('Cannot obtain WP_Filesystem credentials, please contact the administrator.', 'goodlayers-core')
					);
				}
				
				global $wp_filesystem;
				if( !$wp_filesystem->put_contents($file_url, $data, FS_CHMOD_FILE) ){
					return array(
						'success' => false,
						'head' => esc_html__('An error occurs', 'goodlayers-core'),
						'message' => esc_html__('Cannot write file, please contact the administrator.', 'goodlayers-core')
					);
				}
				return true;
			}			
			
			// file reading
			static function read($file_url, $page_url = ''){
				
				// alternate reading method
				if( empty($page_url) || !function_exists('request_filesystem_credentials') ){
					$method = self::$alt_method['read'];
					return $method($file_url);
				}
				
				// file system reading method
				if( !self::$init($page_url) ){
					return array(
						'success' => false,
						'head' => esc_html__('An error occurs', 'goodlayers-core'),
						'message' => esc_html__('Cannot obtain WP_Filesystem credentials, please contact the administrator.', 'goodlayers-core')
					);
				}
				
				global $wp_filesystem;
				$content = $wp_filesystem->get_contents($file_url);
				if( $content === false ){
					return array(
						'success' => false,
						'head' => esc_html__('An error occurs', 'goodlayers-core'),
						'message' => esc_html__('Cannot read file, please contact the administrator.', 'goodlayers-core')
					);
				}else{
					return $content;
				}
			}
			
			// remote
			static function remote($url){
				$response = wp_remote_get($url);
				
				if( is_wp_error($response) ) {
					return array(
						'success'=>false, 
						'error'=>$response->get_error_message()
					);
				}else{
					return wp_remote_retrieve_body($response);
				}
			}
			
		} // gdlr_core_file_system
	} // class_exists