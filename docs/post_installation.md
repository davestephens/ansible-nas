So you've installed Ansible-NAS. Now what?

The first thing to do is to configure [Heimdall](https://heimdall.site/) as the
dashboard of your new NAS, because most of the applications included come with a
web interface. Heimdall lets you create "apps" for them which appear as little
icons on the screen. 

To add applications to Heimdall, you'll need the IP address of your NAS.  If you
don't know it for some reason, you will have to look up using the console with
`ip a`. The entry "link/ether", usually the second one after the loopback
device, will show the address. Another alternative is to make sure
[Avahi](https://www.avahi.org/) is installed for zero-configuration networking
(mDNS). This will allow you to `ssh` into your NAS and with the extension
`.local` to your machines name, such as `ssh tardis.local`. Then you can use the
`ip a` command again.

Next, you need the application's port. You can test the combination of address
and port in your browser by typing them joined by a colon. For instance, for
Glances on a machine with the IPv4 address 192.168.1.2, the full address would
be `http://192.168.1.2:61208`. Once you are sure it works, use this address and
port combination when creating the Heimdall icon.

[Glances](https://nicolargo.github.io/glances/) and
[Portainer](https://www.portainer.io/) are probably the two applications you
want to add to Heimdall first, so you can see what is happening on the NAS.
Note that Portainer will ask for your admin password. After that, it depends on
what you have installed - see the listing for individual applications for more
information.
