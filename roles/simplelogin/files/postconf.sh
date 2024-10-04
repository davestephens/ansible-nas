# After we modify the config explicitly, we can safely assume (reasonably)
# that the write stream has completed, and it is safe to read the config.
# https://github.com/docker-mailserver/docker-mailserver/issues/2985
function _adjust_mtime_for_postfix_maincf() {
  if [[ $(( $(date '+%s') - $(stat -c '%Y' '/etc/postfix/main.cf') )) -lt 2 ]]; then
    touch -d '2 seconds ago' /etc/postfix/main.cf
  fi
}

local OVERRIDE_CONFIG_POSTFIX_MAIN='/tmp/config/main.cf'
echo "Setting OVERRIDE_CONFIG_POSTFIX_MAIN to '${OVERRIDE_CONFIG_POSTFIX_MAIN}'"
if [[ -f ${OVERRIDE_CONFIG_POSTFIX_MAIN} ]]; then
    cat "${OVERRIDE_CONFIG_POSTFIX_MAIN}" >/etc/postfix/main.cf
    _adjust_mtime_for_postfix_maincf

    # Do not directly output to 'main.cf' as this causes a read-write-conflict.
    # `postconf` output is filtered to skip expected warnings regarding overrides:
    # https://github.com/docker-mailserver/docker-mailserver/pull/3880#discussion_r1510414576
    postconf -n >/tmp/postfix-main-new.cf 2> >(grep -v 'overriding earlier entry' >&2)

    mv /tmp/postfix-main-new.cf /etc/postfix/main.cf
    _adjust_mtime_for_postfix_maincf
    echo "Adjusted '/etc/postfix/main.cf' according to '${OVERRIDE_CONFIG_POSTFIX_MAIN}'"
else
    echo "No extra Postfix main settings loaded because optional '${OVERRIDE_CONFIG_POSTFIX_MAIN}' was not provided"
fi