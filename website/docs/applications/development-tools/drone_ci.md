---
title: "Drone CI"
---

Drone is a self-service Continuous Integration platform for busy development teams.

Check it out at <https://drone.io>.

## Usage

Set `drone_ci_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Gitea (`gitea_enabled: true`) must be set up and running before attempting to set up Drone CI.

## Setup Tasks

An Oauth2 application must be set up in Gitea. Visit <https://docs.drone.io/server/provider/gitea/> for more info, then set `drone_ci_gitea_client_id` and `drone_ci_gitea_client_secret` accordingly. The Gitea Redirect URL will be `http://<ansible_nas_ip>:{{ drone_ci_port_http }}/login`

Set `drone_ci_admin_user` to the same username as your user in Gitea.
