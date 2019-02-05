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
                    buildString += `<section> <div id="nameID">${foods.name}</div><div id= "catFood"> ${foods.category}</div> <div id ="ethFood">${foods.ethnicity}</div><div id ="idFood">${foods.ingredients}</div></section>`
                        document.querySelector("#foodList").innerHTML=buildString
                    })
                        
                    
                })
        })
