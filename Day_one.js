
//DAY TWO OF JAVA SCRIPT CODING
// normal concatenation
let firstname ="Simon"
let secondname="Baraka"
let user = (firstname + secondname)

//formating it well

let user1 = `${firstname} ${secondname}`
console.log(user)
console.log(user1)

//Length of a string 
let password = "qwerty"
let num = password.length
console.log(password.length, num>8)
console.log(num)// this also works

//Indexing or accessing individual characters ina word 
let words = "H E L L O"
console.log(words[0],words[1], words[2],words[3],words[4])
let initial = `${words[1]}.${words[4]}`
console.log(initial)
//methods for string 
// toUpperCase,
console.log(password.toUpperCase())
let ans = `${password[0].toUpperCase()}${password.slice(1).toLowerCase()}` // converting the first letter to upperCase
console.log(ans)

// toLowerCae,
console.log(password.toLowerCase())
// Trim,
console.log(password.trim())
// Split,
console.log(words.split(" "))
// replace
console.log(password.replace(password[2],"h"))





