buildString = ""
fetch("http://localhost:8088/foods")
    .then(foods => foods.json())
    .then(parsedFoods => {
       
        parsedFoods.forEach(foods => {
          console.log(foods)
        })
        // document.querySelector("#foodList").innerHTML=buildString
    })

    fetch("http://localhost:8088/foods")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(foods => {
            console.log(foods) 
            fetch(`https://world.openfoodfacts.org/api/v0/product/${foods.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    foods.ingredients = productInfo.product.ingredients_text_en
                    console.log(foods.ingredients)
                        document.querySelector("#foodList").innerHTML=buildString
                        buildString += `<section> <div id="nameID">${foods.name}</div><div> ${foods.category}</div> <div>${foods.ethnicity}</div><div>${foods.ingredients}</div></section>`})
                    
                })
        })
