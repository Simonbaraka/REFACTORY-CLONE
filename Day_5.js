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

// REMOVING ELEMENTS AT THE BEGINNING AND AT THE END
//USING POP() AND SHIFT()
users.pop("Medina")
console.log(users)

users.shift("Doruba")
console.log(users)

//USING SPLICE() TO REMOVE OR REPLACE ELEMENTS
users.splice(2,1)
console.log(users)

//FINDING DATA
let indexOfWilla = users.indexOf("Willa")
console.log(indexOfWilla)