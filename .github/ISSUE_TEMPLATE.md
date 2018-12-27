For :bug: bug reports, please fill out the information below plus any additional relevant information. For feature requests, feel free to clear the form.

If you're reporting an issue with execution of the Ansible-NAS playbook, please run the playbook with `-vvv`, and ideally isolate the problematic part with `--tags <ansible tag>` where possible.

**Short problem description**

Enter a couple of lines about the issue.

**Environment**
- Ansible-NAS revision (`git rev-parse --short HEAD`):
- Ansible version (paste the entire output of `ansible --version` on the machine you run the playbook from):
- Ansible-NAS operating system (`uname -a` on the Ansible-NAS box):
- Ansible-NAS Python version (`python --version` on the Ansible-NAS box):
- Vagrant version, if testing (`vagrant --version`)

**Expected behavior**

What should happen?

**Actual behavior**

What actually happens?

**Steps to reproduce**

What does someone need to do to reproduce this?

**Playbook Output**

Paste the output of the playbook at the problematic point.
