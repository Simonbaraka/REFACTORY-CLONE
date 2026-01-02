// HIGHER ORDER FUNCTIONS

//ordinary function
function greet(){
    console.log("Good morning")
}

//HOF

function execute(action){
    (action())
}

execute(greet)

//FOR EACH METHOD
// Used for iterating through elements of an array

const produce =["Maize","Beans","Oranges","Rice"]

produce.forEach((product,index)=>{
    console.log(`${product} is index number ${index}`)

})

//MAP METHOD HELPS CREATE NEW ARRAYS FROM EXISTING ARRAYS
let email = ["si@gmail.com","bi@gmail.com","ti@gmail.com","bi@gmail.com","da@gmail.com"]

email.map((email)=>{
    return email.toUpperCase()
})


let cap = email.map((email)=>{
    return email.toUpperCase()
})
console.log(cap)

//THE FILTER METHOD

let ages =[2,20,15,30,15,25,2,18]

let filteredAges = ages.filter((ages)=>ages<=25)
console.log(ages)
console.log(filteredAges)

let sales =[
        {names:"simon",credit:true,amount:1000},
        {names:"bara",credit:false,amount:5000},
        {names:"Hana",credit:true,amount:10000}
]

let filsales = sales.filter((sales)=>sales.amount>2000)
console.log(filsales)

//REDUCE METHOD, takes two argurements, the reducer and the intial value
let nums =[2,20,15,30,15,25,2,18]

// Adding all nums 
let sum = nums.reduce((sum,sizes)=> {
    return sum + sizes
},0)

console.log(sum)

// Exercise 1, Creating a sales Object and adding the amountPaid to get the amount for the day
let salesObject = [
    {item:"Shoes",amountPaid:10000},
    {item:"Shirts",amountPaid:5000},
    {item:"Skirts",amountPaid:6000}
]

let sumSales = salesObject.reduce((totalRevenue,currentAmount)=>{
        return  totalRevenue + currentAmount.amountPaid
},0)

console.log(sumSales)
