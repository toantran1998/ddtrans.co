<?php

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
define( 'DISALLOW_FILE_EDIT', true ); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
// END iThemes Security - Do not modify or remove this line

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_db' );

/** MySQL database username */
define( 'DB_USER', 'wp_user' );

/** MySQL database password */
define( 'DB_PASSWORD', '123456c@' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'gQ@EUK@8n.OK48a;5=4O[^@Qfd->Is=p<w%w@D+D1*cuZO~6jb&nVC_y7ZhR244u' );
define( 'SECURE_AUTH_KEY',  '.VB.%e=TVA@#AT4d5m!f7N3/G^SqY.62*)8be^vu4-*DI*N${U3Y=!46gQ4schpZ' );
define( 'LOGGED_IN_KEY',    'f}Ex|i]*(!6fK:~orF&LW>SbfYeBl&*c[C.^rvyWx^I0:c;$><o$a5p0EK2t90&W' );
define( 'NONCE_KEY',        'vh:1gk(Z!=/}G/Y;82TDT.}nkY?|QhuwNu?{a:IKYwmXfCyiW|6ZPL <OWVhey0P' );
define( 'AUTH_SALT',        '}X c5$K8b>B]hEygP[PWpr|.|+W*+otJw&g+wR4PZeIG4/]F>[ke,bieP}a;Z.fd' );
define( 'SECURE_AUTH_SALT', 'bReQX<]C<x0<tl8g[=9}>OGuD<u/_(4*,Qvjca7?44CC?_Cvp)<&Mxhcyk68PM~d' );
define( 'LOGGED_IN_SALT',   '*`Hw|DZiMj1-G2i]K&8X#gHn*{otKNh=PL+DVa/7_#,Zzn< CX8Z,vL^N%@j,NGf' );
define( 'NONCE_SALT',       '=4!TLiR<@(P!EOwl`T2 $CX<z|uo>f{hOWd/U@tf{t*GdfCN2f~5Ovd5.r8i&+O_' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
