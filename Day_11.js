let data = ["Maize",1000]
let[item,price]=data
console.log(item)
console.log(price)


//DESTRUCTING OBJECTS 
let location = {
    locationmade:"kampala",Staff:5,lauchdate:new Date("2026-01-01"),loca:{location:"Yei",category:"Groceries"}
}

let{
    locationmade,
    Staff,
    lauchdate,loca
} = location

console.log(Staff)
console.log(locationmade)
console.log(loca)

//THE SPREAD SYNTAX (...)

const original =["Beans","Maize","millet","Milk"]
const stock =["Bananas","Grapes","Mangoes","Orange"]
const copy = [...original,...stock]
copy.push("Rice")
console.log(...original)
console.log(copy)


let locations = [
    {locationmade:"kampala",Staff:5,lauchdate:new Date("2026-01-01")},
    {locationmade:"enttebe",Staff:7,lauchdate:new Date("2026-11-01")}
]

let locations2 = [
    {locationmade:"Mabara",Staff:5,lauchdate:new Date("2026-01-01")},
    {locationmade:"Wakiso",Staff:12,lauchdate:new Date("2026-11-11")}
]
let sales = [...locations,...locations2]

console.log(...locations,locations2)
console.log(sales)

//updating objects 
let update ={
    ...sales[0],
    lauchdate:new Date("2027-02-12")
}
console.log(update)

//EXTRACTING FIELDS

let CreditSales = {nameofbuyer:"Paul",Amountpaid:10000,amountDue:20000}
let {nameofbuyer,amountDue} = CreditSales
console.log(nameofbuyer)

//ADDING FIELDS USING SPREAD OPERATOR(...)
const procurement ={
    produce:"maize",
    tons: 500
}

const cop = {...procurement,amount:30000}
console.log(cop)

