<?php
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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'u64073_7c922e29ece5');

/** MySQL database username */
define('DB_USER', 'u64073_7c922e29ece5');

/** MySQL database password */
define('DB_PASSWORD', 'aa21cc497f1e');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'sJ/NVUHoiKuqel00FfKEZllTK5/e15Sl');
define('SECURE_AUTH_KEY',  'ht6rntXuiNlcGcyJfk+oX9Rt6B28tEFZ');
define('LOGGED_IN_KEY',    'yBQfbfqv2jwrtS1KcYvln2iYHI0eONf6');
define('NONCE_KEY',        'KiK0HlETAU99jmDtZKtl92vVKxNaCRlD');
define('AUTH_SALT',        'qdOAlGhqW47mRrIERFZdN75PEb/eO/yE');
define('SECURE_AUTH_SALT', '1R7Zf+ySB4f2JAIcWEndyuAlN1NHfspz');
define('LOGGED_IN_SALT',   'WPxcDs5E5z/eiSJQI41BzCHayatBSu1+');
define('NONCE_SALT',       '90WaU5myOIl30pSaukRcjeBIwF/bzgjk');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
