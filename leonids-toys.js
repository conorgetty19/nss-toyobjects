//"helping customers find the right toy"
const toyToFind = 2

//practice 1st example
const stuffedBear = {
    id: 1,
    name: "Fuzzy",
    inStock: true,
    price: 10.99
}

const tinSoldier = {
    id: 2,
    name: "Jocko",
    inStock: false,
    price: 19.99
}

const paperBallerina = {
    id: 3,
    name: "Juliet",
    inStock: true,
    price: 0.99
}

//practice 2nd example w/ later modifications
const toys = [
    {
    id: 1,
    type: "stuffed bear",
    name: "Fuzzy",
    color: "brown",
    inStock: true,
    price: 10.99
    },
    {
    id: 2,
    type: "tin soldier",
    name: "Jocko",
    color: "gunmetal grey",
    inStock: false,
    price: 19.99
    },
    {
    id: 3,
    type: "paper ballerina",
    name: "Juliet",
    color: "pastel pink",
    inStock: true,
    price: 0.99
    }
]

const newCar = {
        id: 3,
        type: "toy car",
        name: "Wheels",
        color: "racing red",
        inStock: true,
        price: 5.99
    }

const newTrain = {
        id: 4,
        type: "train",
        name: "Thomas",
        color: "beyond blue",
        inStock: true,
        price: 5.99
    }

//add new toys to catalogue
toys.push(newCar)
toys.push(newTrain)

// change prices and display the whole catalogue
/*for (toy of toys){
    toy.price = 1.05 * toy.price;
    console.log(`The ${toy.color} ${toy.type} costs $${toy.price}.`)
}
*/

//change prices and display specific phone
for (toy of toys){
    if (toy.id === toyToFind) {
        toy.price = 1.05 * toy.price;
        console.log(`The ${toy.color} ${toy.type} named ${toy.name} costs ${toy.price}.`)
    }
}