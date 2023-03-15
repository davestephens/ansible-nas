<?php

/**
 * Configuration
 *
 * Usually, the wishthis installer will create the config.php for you.
 */

/**
 * Database
 *
 * Used to connect to your MySQL database.
 */
define('DATABASE_HOST', 'localhost');
define('DATABASE_NAME', 'wishthis');
define('DATABASE_USER', 'root');
define('DATABASE_PASSWORD', '');

/**
 * Development
 *
 * Keep this disabled for production sites.
 */
define('ENV_IS_DEV', false);

/**
 * Channels
 *
 * It's save to delete this if you are self-hosting. Alternatively you can
 * replace these branches and domains with your own.
 */
define(
    'CHANNELS',
    array(
        array(
            'branch' => 'stable',
            'host'   => 'wishthis.online',
            'label'  => __('Stable'),
        ),
        array(
            'branch' => 'release-candidate',
            'host'   => 'rc.wishthis.online',
            'label'  => __('Release candidate'),
        ),
    )
);

/**
 * plausible
 *
 * Whether to make calls to plausible.io.
 */
define('PLAUSIBLE', false);
