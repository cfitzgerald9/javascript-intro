// <!-- ## Lightning Exercise 1
// - In your HTML, create three header elements (and h1, an h2, and an h3) and give them each a unique id
// - In your JavaScript file, select each element by its id. 
// - Log each element to the console to make sure you selected it correctly. -->
const h1 = document.querySelector("#blah1")
const h2 = document.querySelector("#blah2")
const h3 = document.querySelector("#blah3")
// ## Lightning Exercise 2
// - Add a click event listener to each heading element you just created. 
// - Inside the event listener's callback function, you should log a string about which element they clicked on to the console
function sayThis(){
    console.log("This is the number 1")
}
function sayThose(){
    console.log("This is the number 2")
}
function sayThat(){
    console.log("This is the number 3")
}

document.querySelector("#blah1").addEventListener("click", event)
document.querySelector("#blah2").addEventListener("click", event)
document.querySelector("#blah3").addEventListener("click", event)

// ## Lightning Exercise 3
// - Create a CSS file and link it to your HTML file
// - Inside the event listener for your h1 element, add a line of code that will change the text color of the h1 element to red when you click on it 

h1.addEventListener("click", (event) => {
    console.log(event);
    event.target.classList.toggle("red-text")
})
h2.addEventListener("click", (event) => {
    console.log(event);
    event.target.classList.toggle("yellow-text")
})
h3.addEventListener("click", (event) => {
    console.log(event);
    event.target.classList.toggle("orange-text")
})

// ## Lightning Exercise 4
// - Add a textarea element and a button with the text "Submit" to your HTML file
// - Give the button an id
// - Add a click event listener to the submit button
// - When clicked, it should log the value of the textarea to the console


