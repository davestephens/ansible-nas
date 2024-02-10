---
title: "Minio"
---

Homepage: [https://min.io/](https://min.io/)

Docker Container: [Minio](https://hub.docker.com/r/minio/minio)

MinIO is a High Performance Object Storage released under GNU Affero General Public License v3.0. It is API compatible with Amazon S3 cloud storage service. Use MinIO to build high performance infrastructure for machine learning, analytics and application data workloads.

## Usage

Set `minio_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The Minio web interface can be found at [http://ansible_nas_host_or_ip:9009](http://ansible_nas_host_or_ip:9009).
