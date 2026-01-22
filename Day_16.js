// console.log("This is a json file");

// let sales = {
//   id: 1,
//   title: "Maize",
//   price: 4000,
//   supplierDetails: {
//     name: "Moses Ali",
//     telephone: 7896534217,
//   },
// };

// console.log(sales);
// let stringSale = JSON.stringify(sales); // converted to string
// console.log(stringSale);

//storing data in a broswer for future use
// localStorage.setItem("Sales", stringSale);

// //converting strings to objects
// let sotredsales = localStorage.getItem("Sales");
// let salesObject = JSON.parse(sotredsales);
// console.log(salesObject);

// let cart = [
//   { produceName: "Maize", amount: 3000 },
//   { produceName: "Bananas", amount: 2000 },
// ];

// let stringcart = JSON.stringify("cart");
// localStorage.setItem("cart", stringcart);
alert("Ensure amount due is not greater than 500000"); // prints out an error messsage
console.log("This is my JSON file ");

let creditsale = { customer: "Daniel", amount: 3000 };
let stringcreditsale = JSON.stringify(creditsale);
console.log(stringcreditsale);

let dealers = ["Panom", "Daniel", "Simons"];
let stringDealers = JSON.stringify(dealers);

try {
  let Dealers = '["Panom", "Daniel", "Simons"]';
  let parseDealers = JSON.parse(Dealers); // converst
  console.log(Dealers);
} catch (error) {
  throw new error("Invalid JSON");
}

//PROMISES AND ASYNC -- Non-blocking basically lets code another run in background as
//Promise is an object representing the eventual completion or failure of an asynchronous operation
//Promise state -Pending, Failure , Resolve

let loadReport = new Promise((resolve, reject) => {
  //code to open a file or code to save a large report or any code
  let successfullyLoaded = true;
  if (successfullyLoaded) {
    setTimeout(() => {
      resolve("Report Loaded successfully");
    }, 2000);
  } else {
    setTimeout(() => {
      resolve("Report Loaded successfully");
    }, 2000);
  }
});

//this one prints out the message in the promise method
loadReport
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//THE FETCH API-provides an interface for fetching
// the fetch takes in 2 parameters second one is optional
fetch("https://fakestoreapi.com/products")
  .then((res) => {
    if (!res.ok) {
      console.log("Failed to fetch results");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

//MAKING POST REQUESTS
