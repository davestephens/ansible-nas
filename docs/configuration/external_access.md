# External Access

There are a number of steps required to enable external access to the applications running on your NAS:

- Enable Traefik
- Domain name and DNS configuration
- Router configuration
- Enable specific applications for external access

## :skull: :skull: :skull: Warning! :skull: :skull: :skull:

Enabling access to applications externally **does not** automatically secure them. If you can access an application from within your own network without a username and password, this will also be the case externally.

It is your responsibility to ensure that applications you enable external access to are secured appropriately!

## Enable Traefik

Traefik routes traffic from ports 80 (HTTP) and 443 (HTTPS) on your Ansible-NAS box to the relevant application, based on hostname.

Simply set `traefik_enabled: true` in your `all.yml`. By default it listens on ports 80 and 443, but doesn't route any traffic.

## Domain Name and DNS Configuration

Set `ansible_nas_domain` to the domain name you want to use for your Ansible-NAS. You'll need somewhere to host the DNS for that domain - Cloudflare is a good free solution. Once you have an account and Cloudflare is hosting the DNS for your domain, create a wildcard DNS entry (`*.myawesomedomain.com`) and set it to your current IP address.

You then need to enable the Cloudflare Dynamic DNS container (`cloudflare_ddns_enabled: true`) so the wildcard DNS entry for your
domain name is updated if/when your ISP issues you a new IP address.

## Router Configuration

You need to map ports 80 and 443 from your router to your Ansible-NAS box.

How to do this is entirely dependent on your router (and out of scope of these docs), but if you're using Ansible-NAS then this should be within your skillset. :)

## Enable Specific Applications

Every application has a `<application_name>_available_externally` setting in the Advanced Settings section of `all.yml`. Setting this to `true` will configure Traefik to route `<application>.yourdomain.com` to the application, making it available externally. There is also an option to set `<application>_custom_domain` in the Advanced Settings sections. This will change the default subdomain name for external access by a name that you wish to use. Note the section below for potential issues with this approach.

## Custom subdomains

If you are going to edit the subdomain variables you need to be aware of some potential limitations. Letsencrypt will only allow a total of 50 certificate requests to be issued in a rolling 7 day period per DNS. It is highly recommended that if you wish to edit the subdomains for your installed services you do so either in a single batch before running the playbook again or before running the playbook for the first time. If you edit too many subdomains and run the playbook between each edit, you will hit the letsencrypt rate limiter and be unable to use SSL for up to a week. If you would still like to test your changes without hitting the limitations of the Letsencrypt API, you may set `traefik_acme_staging` to true, this will change the production server of LetsEncrypt to the staging server. Note that the certificate you will receive is NOT contained in the browsers certificate chain, so the https connection will be marked as potentially insecure.

Visit [https://letsencrypt.org/docs/rate-limits/](https://letsencrypt.org/docs/rate-limits/) to learn more about the rate limits for requesting Letsencrypt certificates