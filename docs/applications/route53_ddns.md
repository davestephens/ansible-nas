# AWS Route53 Dynamic DNS Updater

ddns-route53: <https://crazymax.dev/ddns-route53/>

AWS Route53: <https://aws.amazon.com/route53/>

If you want your Ansible-NAS accessible externally then you need a domain name. You will also need to set a wildcard host `A` record to point to your static IP, or enable this container to automatically update AWS Route53 with your dynamic IP address.

## Usage

Set `route53_ddns_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Set required AWS access credentials from the AWS Console. (See below.)

## Specific Configuration

Make sure you set your domain (if different than the `ansible-nas` default) and access details within your `inventories/<your_inventory>/nas.yml` file.

To set up Route53 to work with the service, please review the [Prerequisites](https://crazymax.dev/ddns-route53/usage/prerequisites/) page. In short, you will need to set up a Route53 [Hosted Zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-working-with.html), an [IAM Policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html), and an [IAM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html) with API credentials.

### AWS Access Credentials

| Parameter          | Description       | Status    |
|--------------------|-------------------|-----------|
| route53_key_id     | AWS access key ID | mandatory |
| route53_secret_key | AWS secret key    | mandatory |

### Networking

| Parameter              | Description                    | Status    |
|------------------------|--------------------------------|-----------|
| route53_hosted_zone_id | Route53 hosted zone ID         | mandatory |
| route53_ttl            | Time-to-live for the DNS entry |           |
| route53_host           | Wildcard domain to update      |           |

### Application

| Parameter        | Description                                         | Status    |
|------------------|-----------------------------------------------------|-----------|
| route53_schedule | [CRON](https://pkg.go.dev/github.com/robfig/cron?utm_source=godoc#hdr-CRON_Expression_Format) schedule for checking and updating DNS entry |           |
