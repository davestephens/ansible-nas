<?php
/* Override Servers array */
$cfg['blowfish_secret'] = '{{ lookup('password', '/dev/null length=32') }}"';
$cfg['AllowArbitraryServer'] = {{ phpmyadmin_arbitrary }};
$cfg['Servers'] = [
{% for item in outcome.results %}
{% if item.exists|d(False) == True %}
    {{ loop.index }} => [
        'auth_type' => 'cookie',
        'host' => '{{ lookup('ansible.builtin.dict', item.container.NetworkSettings.Networks).value.IPAddress }}',
        // TODO: Update to extract actual port
        'port' => '3306',
        'username' => '',
        'password' => '',
        'verbose' => '{{ item.item }}',
    ],
{% endif %}
{% endfor %}
];
