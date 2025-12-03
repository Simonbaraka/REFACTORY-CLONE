// BOOLEAN, OPERATORS AND DATA OBJECTS 

//Working wuith Loose Equality( == ) Operator
// The == only checks for the value and not its data type(Loose operator)
let answer = 43
let answer1=45
let answer2 = answer==answer1
//console.log(answer2)

// The Straight Equality === ochecks for both the  value and  its data type(Strict operator)
let answer3 = "Simon"
let answer4="simon"
let answer5 = answer3===answer4
//console.log(answer2)

//Loose inequality... Only checks for the value and not data type
let ans = 43
let ans1=45
let ans2 = answer!=answer1
//console.log(answer2)

//Strict inequality... Checks for both value and Data types
let ans3 = "Simon"
let ans4="simon"
let ans5 = ans3!==ans4
//console.log(answer2)

// WORKING WITH RELATIONAL OPERATORS (>, <, >=, <=)s
//WORKIGN WITH >= operator
let costOfRice = 3000
let customerMoney = 2000

let CanPayPrice = customerMoney>=costOfRice
console.log(CanPayPrice)

// WORKING WITH >
let costOfRice1 = 3000
let customerMoney1 = 2000
let CanPayPrice1 = customerMoney1 > costOfRice1
console.log(CanPayPrice1)

// WORKING WITH <
let costOfRice2 = 30000
let customerMoney2= 20000
let CanPayPrice2 = customerMoney2 < costOfRice2
console.log(CanPayPrice2)

// WORKING WITH <=
let costOfRice3 = 30000
let customerMoney3= 20000
let CanPayPrice3 = customerMoney3 <= costOfRice3
//console.log(CanPayPrice3)


/*
LOGICAL OPERATORS AND DATA OBJECTS (AND(&&), OR(||), NOT(!))
 And both or all conditions have to be true for it to be true 
 OR one condition has to be true for it to be true 
Not is the opposite of a condition

*/

//CREATING INSTANCE OF CLASSES 
//create a date instance
let date = new Date();
console.log(date)
console.log(date.getDate())
console.log(date.getMonth())
console.log(date.getFullYear())
console.log(date.getTime())
