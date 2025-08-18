import yaml
def exploitable_yaml_load(**kwargs):
    yaml.unsafe_load("!!python/object/new:os.system [echo EXPLOIT!]", **kwargs)
