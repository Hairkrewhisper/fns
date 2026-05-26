<?php
/**
 * Main template — отображает React-лендинг
 *
 * @package FNS_Expert
 */

if (!defined('ABSPATH')) { exit; }
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <?php wp_head(); ?>
</head>
<body <?php body_class('fns-expert-landing'); ?>>
<?php wp_body_open(); ?>

<noscript>
    <div style="padding:40px;text-align:center;font-family:system-ui,sans-serif;">
        <h1>fns.expert — Ответы на требования ИФНС</h1>
        <p>Для работы сайта необходимо включить JavaScript в вашем браузере.</p>
        <p>
            <strong>Телефон:</strong> +7 985 488-38-89<br/>
            <strong>Email:</strong> info@fns.expert<br/>
            <strong>Telegram:</strong> @FNS_Expert_bot
        </p>
    </div>
</noscript>

<!-- React-приложение монтируется в этот контейнер -->
<div id="root"></div>

<?php wp_footer(); ?>
</body>
</html>
