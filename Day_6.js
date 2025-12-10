//FUNCTIONS 

function SumOfNumbers(nukmber1, nukmber2){
    let sum =nukmber1+nukmber2
    return sum;
}
console.log(SumOfNumbers(20,40))


function CalculateTax(amount, taxRate){
    let tax = amount*taxRate
    return tax
}

console.log(CalculateTax(3000,0.25))

// NO ARGUREMENT FUNCTION
 function Welcome(){
    console.log("Welcome To The Traditional Six")
 }
 console.log(Welcome());

 //FUNCTION EXPRESSIONS
 let  CalculateTax1 = function(amount, taxRate){
    let tax = amount*taxRate
    return tax
}

let isValid = (name)=> name.length > 2
console.log(isValid("Simon"))

//
let names = ["Simin","Baraka","Baraka","Titi","Dada"]
let filterNames = names.filter((name)=>"Baraka")
console.log(filterNames)


//INTRODUCTION OF SCOPE

function Tonage(ton){
    if(ton>1000){
        return true
    }
    else{
        return false
    }
}

console.log(Tonage(100))