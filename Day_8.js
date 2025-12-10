
/*
 * OBJECTS IN JAVA SCRIPT 
 * Objects store data in key-value pairs
 * Keys are typically strings
 * Create Objects using {}
 */

let products = {
    "name": "Milk",
    "Type": "Fresh",
    "Weight": 60,
    "price": 6000,
    "BuyDate": new Date("2025-12-11"),
    "IsSold": true
}

/*
*Accessing Elements in an Object sing keys objectName.key
*/

console.log(products.IsSold)
console.log(products.Type)
console.log(products.name)

/*
    *OBJECT OPERATIONS
*/
 products.name = "Meat"
 products.price = 500
products.BuyDate = new Date("2026-12-22")

 console.log(products.name)
 console.log(products.price)
 console.log(products.BuyDate)
 console.log(products)

 //deleting a key
 delete products.BuyDate 
 console.log(products)

 /*
    *LOOPING THROUGH OBJECT 
*/

for (const product in products){
    // accesses values 
    console.log(products[product])
}

//Helps access keys 
console.log(Object.keys(products))

//Accessing the entries or Key-value Pairs
console.log(Object.entries(products))


let SalesRecord = {
    "produceName": "Frozen Meat",
    "tonnageinkg":1000,
    "amountPaid":200000,
    "buyerName":"Baraka"
}

console.log(Object.entries(SalesRecord))

for(const sales in SalesRecord){
    console.log(SalesRecord[sales])
}

for(const val in SalesRecord){
    console.log(Object.values(SalesRecord))
}


// Adding new Key-Value pairs to the object
SalesRecord.isCreditsale=true
SalesRecord.dueDate = new Date("2025-12-30")

console.log((SalesRecord))