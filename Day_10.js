/* SETS AND ITS METHODS  ensure uniqueness no duplicatesare allowed when working with sets */

let users = ["Uwase",
    "Jolie","Hana","Odongo","Uwase"
]

const uniqueusers = new Set(users);

uniqueusers.add("Mark")
uniqueusers.delete("Uwase")
console.log(uniqueusers)

let sales =[
    {Customer:"Partel",amountPaid:100000,branch:"Kampala"},
    {Customer:"Mark",amountPaid:150000,branch:"Jinja"},
    {Customer:"Dada",amountPaid:200000,branch:"Hoima"},
    {Customer:"Nene",amountPaid:19000,branch:"Kampala"},
    {Customer:"Asu",amountPaid:250000,branch:"Kampala"}
]

let branches = sales.map((sales)=>sales.branch)
console.log(branches)
let uniqueBranches = new Set(branches)
console.log(uniqueBranches)
console.log(uniqueBranches.size)

let IsKampala = uniqueBranches.has("Kampala")
console.log(IsKampala)

// MAPS (KEY-VALUE PAIRS) key is any type
let pricelist = [["Beans",4500], ["Maize",3500],["Soya Beans",5000], ["Millet",2500]]
//creating a Map
const prices  = new Map(pricelist)
console.log(prices)

//adding another element
prices.set("Rice",6000)
console.log(prices)

//deleting elements from a map
prices.delete("Beans")
console.log(prices)

//accessing elements 
prices.get("Maize")
console.log(prices)


// Check existance of a value
console.log(prices.has("Matooke"))

//Returning  the key-value pairs
console.log(prices.entries())


let names =[
    {Customer:"Partel",amountPaid:100000,branch:"Kampala"},
    {Customer:"Mark",amountPaid:150000,branch:"Jinja"},
    {Customer:"Dada",amountPaid:200000,branch:"Hoima"},
    {Customer:"Dada",amountPaid:200000,branch:"Hoima"},
    {Customer:"Nene",amountPaid:19000,branch:"Kampala"},
    {Customer:"Asu",amountPaid:250000,branch:"Kampala"}
]

const NameSet = new Set(names)

let namesOfCustomer = names.map((names)=>names.Customer)
console.log(namesOfCustomer)

const Noduplicates = new Set(namesOfCustomer)
console.log(Noduplicates)

console.log(Noduplicates.size)

// EXERCISE TWO
let Produceprice = [["Mangoes",4500], ["Maize",3500],["Soya Beans",5000]]
const KglPrices = new Map(Produceprice)
console.log(KglPrices)

//Accessing 
let priceMangoes = KglPrices.get("Mangoes")

console.log(`The price of Mangoes is ${priceMangoes}`)