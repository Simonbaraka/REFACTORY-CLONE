// WORKING WITH ARRAYS AND INDEXED COLLECTIONS

//ARRAY DECLARATION
let users = ["Simon","James","Solomon","Willa"]
console.log(users[0])// first element
console.log(users[1]) //second element
console.log(users[2]) // third element

console.log(users.length) // length of an array

// REASSIGNING ELEMENTS

users[1]="Baraka"
console.log(users[1])

//ADDING NEW ELEMENTS
// Push() method adds elements to the end of an array unshift() 
// adds elements to the beginning of an array

users.push("Medina")
console.log(users)

users.unshift("Doruba")
console.log(users)