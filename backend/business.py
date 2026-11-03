from pathlib import Path

def get_data():
    file_path = Path(__file__).parent / "names.txt"

    with open(file_path, "r") as f:
        names = f.read().split()

    return names