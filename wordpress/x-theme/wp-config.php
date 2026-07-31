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
define('DB_NAME', 'u64073_f07b3913750b');

/** MySQL database username */
define('DB_USER', 'u64073_f07b3913750b');

/** MySQL database password */
define('DB_PASSWORD', '900c5fe522bc');

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
define('AUTH_KEY',         'RfIle+VL0xjDbXViX+uaZBe1a06CudmF');
define('SECURE_AUTH_KEY',  'VK34D87ZyrhOYSxSec7prkYqQvd91c2v');
define('LOGGED_IN_KEY',    'HRRX5N4QMv6cCOhMrBz1cQzep3+X/sWB');
define('NONCE_KEY',        'J3rCyWiKezU/tKXKhAS9+EtYzpB9/pEP');
define('AUTH_SALT',        'fxx0YeDjJ7FipR436impT0mkWN2d3fFz');
define('SECURE_AUTH_SALT', '5xhHRupdZKrFbyFaLODMqhCC1DcvyfzZ');
define('LOGGED_IN_SALT',   'afL3E2+l+g6y/gNRY1E/OBhmOj6osFuz');
define('NONCE_SALT',       'm9vAtM60cDimzGf8KD2E0iKzLcLirhQa');
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
