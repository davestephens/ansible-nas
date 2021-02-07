---
name: Bug Report
about: Help us to improve Ansible-NAS
title: ''
labels: bug
assignees: ''

---

If you're reporting an issue with execution of the Ansible-NAS playbook, please run the playbook with `-vvv`, and ideally isolate the problematic part with `--tags <ansible tag>` where possible.

**Describe the bug**
A clear and concise description of what the bug is.

**Environment**
- Ansible-NAS revision (`git rev-parse --short HEAD`):
- Ansible version (paste the entire output of `ansible --version` on the machine you run the playbook from):
- Ansible-NAS operating system (`cat /etc/lsb-release` on the Ansible-NAS box) - _Support won't be provided for non-LTS releases of Ubuntu_:
- Ansible-NAS kernel (`uname -a` on the Ansible-NAS box):
- Ansible-NAS Python version (`python --version` on the Ansible-NAS box):
- Ansible-NAS Docker version (`docker --version` on the Ansible-NAS box):
- Latest Docker logs (`journalctl -u docker.service` on the Ansible-NAS box):
- Are you running the playbook from a remote box or the Ansible-NAS box itself? 
- Vagrant version, if testing (`vagrant --version`):
- Ansible-NAS filesystems (`df -hT` on the Ansible-NAS box):
- Mounted filesystems (`mount` on the Ansible-NAS box)

**all.yml Variables**
- `docker_image_directory`:
- `docker_home`:
- `docker_storage_driver`:
- `samba_shares_root`:

**Expected behavior**
What should happen?

**Actual behavior**
What actually happens?

**Steps to reproduce**
What does someone need to do to reproduce this?

**Playbook Output**
Paste the output of the playbook at the problematic point. Surround it in triple backticks so that it's formatted correctly.

**Additional context**
Add any other context about the problem here.
