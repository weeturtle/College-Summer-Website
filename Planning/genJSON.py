from json import dumps

while True:
    name = input("Name: ")
    location = input("Location: ")
    id = int(input("ID: "))
    description = input("Description: ")
    rating = input("Rating: ")
    notes = []
    notes.append(input("Note 1: "))
    notes.append(input("Note 2: "))
    notes.append(input("Note 3: "))
    roast = input("Roast: ")
    price2 = float(input("Price 2: "))
    price1 = float(input("Price 1: "))
    price3 = float(input("Price 3: "))

    obj = {
        "name": name,
        "id": id,
        "description": description,
        "image": "Temp.png",
        "rating": rating,
        "comments": [],
        "location": location,
        "inStock": True,
        "notes": notes,
        "roast": roast,
        "sizes": [
            {
                "size": 150,
                "inStock": True,
                "price": price1
            },
            {
                "size": 250,
                "inStock": True,
                "price": price2
            },
            {
                "size": 500,
                "inStock": True,
                "price": price3
            }
        ]
    }

    print(f'"{id}":{dumps(obj)}')