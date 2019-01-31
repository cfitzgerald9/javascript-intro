const oscarKitty = {
    name: "Oscar",             
    species: "cat",   
    nicknames: ["fatty", "dude", "big guy"],
    age: 8
    }
console.log(oscarKitty)

const restaurant = {
    orders:[],
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        restaurant.orders.push(meal)
    }
}

const chickenComboMeal = {
sandwichType: "chicken",
fries:  true,
drinkSize: "large"
}

const burgerComboMeal = {
    sandwichType: "beef",
    fries:  true,
    drinkSize: "small"
    }
const dollarMeal = {
        sandwichType: "beef",
        fries:  false,
        drinkSize: "small"
     }
// Place an order
restaurant.placeOrder(chickenComboMeal)
function orderList(){
    console.log(restaurant.orders)
}
// Invoke the function to return the list of all orders
orderList()
restaurant.placeOrder(dollarMeal)
orderList()
console.table(orders)
// Output all orders to the console using console.table()