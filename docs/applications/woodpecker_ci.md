# Woodpecker CI

Woodpecker is a simple CI engine with great extensibility.

Check it out at <https://woodpecker-ci.org/>.

## Usage

Set `woodpecker_ci_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Gitea (`gitea_enabled: true`) must be set up and running before attempting to set up Woodpecker CI. 

## Setup Tasks

An Oauth2 application must be set up in Gitea. Visit https://woodpecker-ci.org/docs/administration/forges/gitea for more info, then set `woodpecker_ci_gitea_client` and `woodpecker_ci_gitea_secret` accordingly.

Set `woodpecker_ci_admin_user` to the same username as your user in Gitea.
