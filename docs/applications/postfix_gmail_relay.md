# Postfix Gmail relay

Homepage: [Postfix](https://www.postfix.org/)

Make your NAS able to send emails using your email, by setting up Postfix with Gmail. Particularly useful if you also want to set up alerts for zpool scrubs, SMART error monitoring, or backup issues. The emails sent from your NAS will use the address specified `postfix_gmail_relay_email`, which by default is equal to `ansible_nas_email`. Make sure `postfix_gmail_relay_email` is a Gmail account, which you need to have access to.

## Usage

Update your inventory in `inventories/<your_inventory>/group_vars/nas.yml` with the following:

- `postfix_gmail_relay_enabled: true`
- `postfix_gmail_relay_email` if different from `ansible_nas_email`
- `postfix_gmail_relay_app_password`: create an app password in your Google account, by opening the Security tab followed by App passwords. In `Select app` choose `Other (Custom name)` and set any name you want, like `Postfix Ansible NAS`. Set the variable to the password shown

Run the ansible playbook task for postfix (`ansible-playbook -i inventories/<your_inventory>/inventory nas.yml -b -K -t postfix`), then try to send yourself an email using `echo "Test mail from Ansible NAS" | mail -s "Test Postfix" your_email`
