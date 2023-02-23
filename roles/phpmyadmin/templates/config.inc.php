<?php
/* Override Servers array */
$cfg['blowfish_secret'] = '{{ lookup('password', '/dev/null length=32') }}"';
$cfg['AllowArbitraryServer'] = {{ phpmyadmin_arbitrary }};
$cfg['Servers'] = [
{% for item in outcome.results %}
{% if item.exists|d(False) == True %}
    {{ loop.index }} => [
        'auth_type' => 'cookie',
        'host' => '{{ item.container.NetworkSettings.IPAddress }}',
        // TODO: Update to extract actual port
        // 'port' => '{{ lookup('ansible.builtin.dict', item.container.NetworkSettings.Ports)[0].key | regex_search('.*\\d') }}',
        'port' => '3306',
        'username' => '',
        'password' => '',
        'verbose' => '{{ item.item }}',
    ],
{% endif %}
{% endfor %}
];
