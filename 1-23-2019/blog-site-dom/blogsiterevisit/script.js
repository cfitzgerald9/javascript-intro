// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const wooHoo = document.querySelector(".article__header")
console.log(wooHoo)
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
const allHead = document.querySelectorAll(".article__header")
console.log(allHead)
for(let i = 0; i< allHead.length; i++){
    allHead[i].classList = "article__header important"
}

// Obtain a reference the element with a class of dashed and remove it.
const baleetThis = document.querySelector(".dashed")
baleetThis.classList.remove("dashed")
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const addThis = document.querySelector(".article__footer")
addThis.classList.add("goldenrod")