import csv

postcode_locations = {}
with open("postcodes.csv", "r") as postcode_file:
    reader = csv.reader(postcode_file, delimiter=",", quotechar='"')
    next(reader)
    
    for row in reader:
        postcode_locations[row[0]] = (row[1], row[2])
print("loaded postcodes")

output = ""
link_format = """        L.marker([{lat}, {lon}], {left}icon: icons["{colour}"]{right}).bindPopup("<b>{title}</b><br>{postcode}<br><a href=\\"{href}\\">{link_text}</a>"),\n"""

with open("marker-info.csv", "r") as info:
    reader = csv.reader(info, delimiter=",", quotechar='"')
    next(reader)
    line_number = 1
    
    for row in reader:
        line_number += 1
        if row[0] in postcode_locations:
            location = postcode_locations[row[0]]
            output += link_format.format(lat=location[0], lon=location[1], colour=row[1].lower(), title=row[2], postcode=row[0], href=row[3], link_text=row[4], left="{", right="}")
        else:
            print(f"postcode {row[0]} not found at line {line_number}")


with open("markers.js", "w") as js:
    js.write(open("markers-template.js", "r").read().replace("{markers}", output))
print("file written")
