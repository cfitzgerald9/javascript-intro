// ## 1.
// 1. Write a function called `addToCart` that takes one argument of `itemName`
// 2. The function should log the sentence "The [itemName] has been added to your cart!" to the console.
// 3. Call the function

function addToCart(itemName){
const addedItem = `The ${itemName} has been added to your cart.`
console.log(addedItem)
}
addToCart("t-shirt")

// ## 2.
// 1. Copy and paste the following array into your JavaScript file
// ```const inventory = ["Coats", "Gloves", "Hats", "Scarves"]```
// 2. Write a function that loops through the `inventory` array and prints each item to the console.
// 3. Call the function



const inventory = ["Coats", "Gloves", "Hats", "Scarves"]
function logClothes(){
    for(let i=0; i < inventory.length; i++){
        console.log(inventory[i])
    }
}
logClothes()

// ## 3. 
//  1. Copy and paste the following array into your JavaScript file:
//  ```
 const detailedInventory = [
   {
     name: "Coat",
     quantity: 9,
     price: 79.99
   },
   {
     name: "Gloves",
     quantity: 24,
     price: 12.99
   },
   {
     name: "Hats",
     quantity: 16,
     price: 9.99
   },
   {
     name: "Scarves",
     quantity: 6,
     price: 14.99,
   }
 ]

//  2. Write a function that loops through the `detailedInventoryArray` and prints the name of each item to the console.
//  3. Refactor the function so that it only prints the name of the item if it's under $20.00. 
//  4. Call the function
function printInventory(inventoryArray){
    for(let i = 0; i < inventoryArray.length; i++){
        if(inventoryArray[i].price<20){
        console.log(inventoryArray[i].name)
        }
    }
}
printInventory(detailedInventory);


// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.


 for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
     if(currentNumber % 5 === 0 && currentNumber % 7 === 0){
        console.log("chickenmonkey")
        }
        else if (currentNumber % 5 === 0){
        console.log("chicken")
        }
        else if(currentNumber % 7 === 0){
        console.log("monkey")
        }
        else{
            console.log(currentNumber)
        }
    }

//     A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNumber = 1

const takeNumber = function(bandName){
const blah= `${bandNumber++}. ${bandName}`
return blah
}
const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

const test = takeNumber("The Tests")
console.log(test)

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

const cookedFood = [];

function grill (currentObject) {
    currentObject.cooked = true;
    cookedFood.push(currentObject);
};
// Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.
grill(foods)
console.log(cookedFood)