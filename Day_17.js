console.log(document);

// get element by id
let welcomeparagraph = document.getElementById("welcome");
//console.log(welcomeparagraph.textContent);

// get elements by class
let getclass = document.getElementsByClassName("infos");
console.log(getclass.length);
console.log(getclass[0].textContent);

// query selector (class)
let qr = document.querySelector(".parentDiv p");
console.log(qr.textContent, "with query selector");

// navigation
let pare = document.querySelector("#s2");
console.log(pare.parentNode);
console.log(pare.parentNode.children);
