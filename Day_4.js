//CONDTIONAL AND CONTROL FLOWS

//THE IF-ELSE STATEMNT 
let validate = true
let message

if(!validate){
    console.log("Hello, Sorry you have come to the wrong place")

}else{
    console.log("Welcome Home Master")
}

let admin= "Admin"
let manager = "Manager"

if(admin=="Admin"){
     console.log("Welcome Back Admin sir")
     message = "Here is todays"
}else if(admin==manager){
     console.log("Welcome Back Manager of the branch")
    
}


//ADVANCED CONTROL FLOWS USING A SWITCH STATEMENT
let userRole = "Admin"

switch(userRole){
    case "Admin":
        message= "User is an Admin"
        break
    case "Manager":
        message="User is a Manager"
        break
    
    case "Cashier":
        message ="User is a product Manager"
        break
    default:
        message+"User not registered"
        break
}
console.log(message)
 