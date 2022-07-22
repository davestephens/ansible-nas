# Cloudflared (Argo tunnel)

Homepage: [https://github.com/cloudflare/cloudflared](https://github.com/cloudflare/cloudflared)

Cloudflare Argo tunnel: [https://blog.cloudflare.com/argo-tunnel/](https://blog.cloudflare.com/argo-tunnel/)

Cloudflare: [https://www.cloudflare.com](https://www.cloudflare.com)

This service is very useful when your NAS doesn't have a static IP and it's situated a [Carrier Grade NAT](https://en.wikipedia.org/wiki/Carrier-grade_NAT). With this approach your NAS is connected directly to the Cloudflare servers, which allow public access to your externally available applications.

## Usage

Set `cloudflared_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Set `cloudflared_token` to the one you grab from the Cloudflare Zero Trust Dashboard (more below).

## Specific Configuration

Create a cloudflare account if you don't have one. You will need to purchase a domain name registered with Cloudflare, or migrate an existing one on the platform.

On your cloudflare account page, navigate to the Zero Trust dashboard, and create a Tunnel in the Access/Tunnels menu.

After choosing a name for your tunnel, in the environment section choose Docker, and take note of the token in the code section below (the long string after the `--token` command): this will be your `cloudflared_token`.

In the next page (public hostname) you will need to set some values, which we will delete later: set your domain as your cloudflare hostname, Service as `HTTPS` and `localhost`, then save the changes. Edit the Catch-all-rule to be `https://localhost:443`, then delete the entry you made one step before. Your Cloudflare tunnel will now redirect all incoming requests to your Traefik service runnin on port 443, which will route them accordingly.

Now your chosen services are exposed to the internet (the ones that have the `*_available_externally` variable set to `true`).
