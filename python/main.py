from read_parse_files import (
    parse_text,
    parse_xml,
    parse_yaml,
    parse_json,
    parse_csv
)

def main():
    print("Set 2:")
    print("Text:")
    print(parse_text("../dataFiles/set2/intro.txt"))
    print("\nXML:")
    print(parse_xml("../dataFiles/set2/skill.xml"))
    print("\nYAML:")
    print(parse_yaml("../dataFiles/set2/gear.yaml"))
    print("\nJSON:")
    print(parse_json("../dataFiles/set2/char.json"))
    print("\nCSV:")
    print(parse_csv("../dataFiles/set2/class.csv"))