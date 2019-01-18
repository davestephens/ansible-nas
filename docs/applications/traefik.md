# Traefik

Homepage: [https://traefik.io](https://traefik.io)

Traefik is used to provide external access to your Ansible-NAS box. Additionally, Traefik will automatically request and renew SSL certificates for you.

You can configure which applications are available externally by enabling the `<application_name>_available_externally` setting
for each application in the Advanced Settings section of your `all.yml`.

See [External Access](configuration/external_access) for more info.

## Let's Encrypt (SSL), Staging and Production environments, and rate limits

A bit of background so that the usage section becomes easier to understand.

All secure websites on the internet have a certificate that is issued by a trusted certficate
issuer (eg/ GoDaddy, Verisign, etc). The website certificate is "signed" by what is called the "root" certificate of the issuer. Your computer and web browser has a list of these "trusted"
root certificates, so that when you visit a secure website, your browser can say "this website's
certificate was signed by a root certificate that I trust, therefore I trust the website".

Let's Encrypt, the service that Ansible-NAS uses to create certificates for the docker containers,
has two "root" certificates we can use.

### How it works

A detailed explanation can be found here: [How it works](https://letsencrypt.org/how-it-works/). A short summary is:

* Traefik on Ansible-NAS (agent) says to Let's Encrypt (CA) "I would like a cert. How can I prove I own this domain?"
* CA replies with some challenges
* Agent provides a way to meet those challenges:
  * Usually hosting a file on a HTTP server (port 80)
    * This means that the CA needs to be able to reach the agent's random HTTP server through your firewall. Hence the need to port forward 80 *and* 443 from your firewall to Ansible-NAS.
  * Once challenges are met, random HTTP server is deleted, and certificate can be issued.
  * Agent downloads the certificate from the CA, and places the files in the correct locations within the container.

### Understanding rate limits

In order to allow fair usage of their their service, Let's Encrypt use "rate limits".
The [Rate Limits](https://letsencrypt.org/docs/rate-limits/) page on the Let's Encrypt website
gives a detailed explanation.

For Ansible-NAS purposes, we do not want to hit the some of these limits whilst we are developing or testing our configuration.

For example, if you are doing many test runs on a virtual machine, reseting to a snapshot each time, you will very quickly run afoul of the "Duplicate Certificate" rate limit of 5 per week, because you will effectively be asking for the exact same certificate for each test run you do.

Also, if you have not configured your router correctly (forward ports 80 and 443 to your NAS), you will hit the "Failed Validation" rate limit of 5 per account, per hostname, per hour. So if you get it wrong in rapid succession, you will have to wait a minimum of an hour to try again.

### Staging Environment

The staging environment has a root certificate which is *NOT* trusted by your computer or your browser. This means you will not get a green padlock when you visit these pages. The bonus is that the service works the same as production, but with vastly increases rate limits.

For our examples above, the "Duplicate Certificate" limit is 30,000 per week, and the "Failed Validation" limit 60 per hour.

So using the Staging environment when you are building your Ansible-NAS is absolutely the right way to go for the build and testing phase.

### Production Environment

The production environment has a root certificate with *IS* trusted by your computer or browser. So you *will* get a green padlock when visiting the websites for the containers. As noted above in the rate limits section, you really should have everything correct before using this environment.

### Usage

Set `traefik_enabled: true` in your `group_vars/all.yml` file.

Once you are happy with the results of the playbook, set `traefik_production: true` in your `group_vars/all.yml` file, and run your playbook again. This will swap traefik to use the production environment for Let's Encrypt.

Traefik's web interface can be found at http://ansible_nas_host_or_ip:8083.

## Specific Configuration

You'll need to map port 80 and 443 from your router to your Ansible-NAS box. A quick search should reveal instruction for your model of router.
