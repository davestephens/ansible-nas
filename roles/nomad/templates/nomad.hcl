# Full configuration options can be found at https://www.nomadproject.io/docs/configuration

data_dir  = "{{ nomad_data_home }}/data"
bind_addr = "0.0.0.0"

ports {
  http = {{ nomad_port_http }}
  rpc  = {{ nomad_port_rpc }}
  serf = {{ nomad_port_serf }}
}

server {
  # license_path is required as of Nomad v1.1.1+
  #license_path = "/opt/nomad/license.hclic"
  enabled          = true
  bootstrap_expect = 1
}

client {
  enabled = true
  servers = ["0.0.0.0"]
}
