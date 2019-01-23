// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const artHead = document.querySelector(".article__header");
console.log(artHead);
artHead.textContent="Welcome to the Connor blog";
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
var x = document.querySelectorAll(".article__header")
console.log(x)
for (i = 0; i < x.length; i++) {
    x[i].classList="article__header_important";
}
// Obtain a reference the element with a class of dashed and remove it.
var deleteMe = document.querySelector(".dashed");
deleteMe.classList.remove;
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
var goldenGod =document.querySelector(".article__footer")
goldenGod.className="goldenrod"  



