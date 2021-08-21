export const items = {
    "items":  {
        "50" : {
            "name": "El Carmen",
            "id": 50,
            "description": "Grown in the Pitalito, Huila District, this astonishing singe origin bean has notes of caramel, chocolate and red fruits. The medium dark roast creates a strong but not overwhelming flavour great with and without milk.",
            "image": "Temp.png",
            "rating": 4.0,
            "comments": [],
            "location": "Colombia",
            "inStock": true,
            "notes": ["caramel", "chocolate", "red fruits"],
            "roast": "dark",
            "sizes": [
                {
                    "size": 150,
                    "inStock": true,
                    "price": 7.99
                },
                {
                    "size": 250,
                    "inStock": true,
                    "price": 11.99
                },
                {
                    "size": 500,
                    "inStock": true,
                    "price": 19.99
                }
            ]
        },
        "117" : {
            "name": "Hermosa",
            "id": 117,
            "description": "From the western province of Tarrazu, this single origin coffee has a thick body served best without milk. With subtle hints of malt and cocoa, the strong honeycomb makes the signature flavour. ",
            "image": "Temp.png",
            "rating": 4.2,
            "comments": [],
            "location": "Costa Rica",
            "inStock": true,
            "notes": ["malt", "cocoa", "honeycomb"],
            "roast": "light",
            "sizes": [
                {
                    "size": 150,
                    "inStock": true,
                    "price": 8.50
                },
                {
                    "size": 250,
                    "inStock": true,
                    "price": 12.99
                },
                {
                    "size": 500,
                    "inStock": true,
                    "price": 19.99
                }
            ]
            
        },
        "" : {
            "name": "",
            "id": 0,
            "description": "",
            "image": "Temp.png",
            "rating": 0,
            "comments": [],
            "location": "",
            "inStock": true,
            "notes": [],
            "roast": "",
            "sizes": []
        },
        "1" : {
            "name": "Blue Mountain",
            "id": 1,
            "description": "One of the world’s most reputed and rarest beans, this single origin boasts layers of tastes due to its light roast. Promoting a gentle base layer of herbs and spices with a stronger honeyed fruit body.",
            "image": "Temp.png",
            "rating": 4.9,
            "comments": [],
            "location": "Jamaica",
            "inStock": true,
            "notes": ["herbs", "spices", "honeyed fruit"],
            "roast": "medium",
            "sizes": [
                {
                    "size": 150,
                    "inStock": true,
                    "price": 14.99
                },
                {
                    "size": 250,
                    "inStock": true,
                    "price": 24.99
                },
                {
                    "size": 500,
                    "inStock": true,
                    "price": 49.99
                }
            ]
        }
    }
}

exports.handler = async function () {
    return {
        statusCode: 200,
        body: JSON.stringify(items)
    }
}