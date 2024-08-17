---
title: "GitLab"
---

Homepage: [https://docs.gitlab.com/omnibus/docker/](https://docs.gitlab.com/omnibus/docker/)

If Gitea isn't powerful enough for you then consider GitLab. It's a much more powerful (and consequently bigger) Git repository solution that includes a suite of code analytics. On the other hand it requires more RAM.

## Usage

Set `gitlab_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

To make GitLab available externally via Traefik set `gitlab_available_externally: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The first time you run GitLab you'll be prompted for an account's password. The password is for GitLab's `root` administrator account. From there you can log in to create additional users and further configure the application.
