# OpenNMS

Homepage: [https://www.opennms.com//](https://www.opennms.com//)

OpenNMS is an enterprise grade network management application platform developed under the open source model.

Learn more in the [OpenNMS gituhub repo](https://github.com/OpenNMS/opennms) and [OpenNMS Administrators Guide](https://docs.opennms.org/opennms/releases/27.1.1/guide-admin/guide-admin.html)

## Usage

Set `opennms_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The default username and password is `admin`. Login to the Web User Interface and change the default admin password.

## Ports

The OpenNMS web interface is available at port 8980. OpenNMS also uses these ports:

| Application          | Port    | Mode    | Notes          |
|----------------------|---------|---------|----------------|
| OpenNMS              | 8980    | Bridge  | HTTP           |
| OpenNMS Karaf Shell  | 8101    | Bridge  | HTTP           |
| OpenNMS ActiveMQ     | 61616   | Bridge  | HTTP           |