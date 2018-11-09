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
define('DB_NAME', 'mrinal_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'empire');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

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
define('AUTH_KEY',         'Gr_kE<.O|51kY-JDU&;=E6_&pmjh<<>HQn@B|YEjukV4$,^6dt_[Nmh_-8$jrZ#T');
define('SECURE_AUTH_KEY',  '@]Tl1[4aZK?`S~~p4YJU78Qms@yxznQpc`Jc=8lW(m}R{s{W,_Vi*a9@? (8&Q62');
define('LOGGED_IN_KEY',    'rI@+;n()<hzjLfZ !u-Hdy4a8,}}SZ1E2fNQ3n?o +x@<!fK@lGpG3ovx3QZ#>,d');
define('NONCE_KEY',        '|Gn>ISzYN:]0a+^>??q5[Y5Wz{dZ! @<l=$Ni;GQS]R{sX.8x3OKu5j.=X^!DK!^');
define('AUTH_SALT',        '66q>|mm.V|1,_)(CpwpfcG%m(ddpz>izFWS.nkJR%]pW&y#@{[V+A.L3O71-uFPT');
define('SECURE_AUTH_SALT', 'cFy)`+%s`3_+xQ=zQx$/U5O<WMb#c6a:0lr)R{bwpr/4iA#(TP+1my+PIKO9:aCX');
define('LOGGED_IN_SALT',   'n)3+@6d;T0w?,!{jv$y3bPS`7)6(:[Coz<^UVuzcji!b,P3W(<~Oe2}J?Ar_MwU#');
define('NONCE_SALT',       'X`:R5jVHldlD#wfomh s/|uW&;e,5==ZCtEu.EHsyvgxMiB;kPNcHQKiq!dW])~>');

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
