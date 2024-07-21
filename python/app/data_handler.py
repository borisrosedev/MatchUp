import json
import os

def read_json_file(file_path):
    abs_path = os.path.abspath(file_path)
    if not os.path.exists(abs_path):
        raise FileNotFoundError(f"No such file or directory: '{abs_path}'")
    with open(abs_path, 'r') as f:
        return json.load(f)
