const toys = [
    {
        id: 1,
        name: "sled",
        size: "large",
        color: "red",
        location: "Shelf 3",
        price: 40
    },

    {
        id: 2,
        name: "ball",
        size: "medium",
        color: "blue",
        location: "Shelf 2",
        price: 20
    },

    {
        id: 3,
        name: "top",
        size: "small",
        color: "black",
        location: "Shelf 1",
        price: 5
    }
]

const yoyo = {
    id: 4,
    name: "yoyo",
    size: "small",
    color: "white",
    location: "Shelf 1",
    price: 2
}

const nintendo = {
    id: 5,
    name: "Nintendo",
    size: "medium",
    color: "red",
    location: "Shelf 2",
    price: 300
}

toys.push(yoyo)
toys.push(nintendo)

  //  console.log(toys)

/* for (const item of toys) {
    console.log(item.name)
    } */
for (const item of toys) {
    item.price = item.price * 1.05
}
for ( const item of toys) {
    console.log(`The ${item.color} ${item.name} costs $${item.price}.`)
}