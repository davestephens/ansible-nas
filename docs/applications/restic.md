# restic: Backups done right!

Homepage: [https://restic.net/](https://restic.net/)
GitHub: [https://github.com/restic/restic](https://github.com/restic/restic)
Docker: [https://github.com/lobaro/restic-backup-docker][1]

restic design goals are to make backups:
- Easy
- Fast
- Verifiable
- Secure
- Efficient
- Free

restic encrypts and deduplicates all backups, and supports numerous backends.

## Usage

Set `restic_enabled: true` in your `group_vars/all.yml` file, and make sure the
restic repository is mounted (default `/mnt/backup`).

## Specific Configuration

Adjust backup frequency, pruning frequency, and other options in `tasks/restic.yml`. [See the docker container][1] for more details.


  [1]: https://github.com/lobaro/restic-backup-docker
