//EVENT HANDLERS

let header = document.getElementById("header");
let header1 = document.querySelector("#header");
let paragraphs = document.getElementsByClassName("paragraph");
console.log(header);
console.log(header1);
//console.log(paragraphs);

for (let i = 0; i < paragraphs.length; i++) {
  let _element = paragraphs.item(i);
  //console.log(_element.textContent);
  // console.log(_element.innerHTML);
  _element.textContent = `This is how old Traffort used to be ${i + 1}`;
}

//Changing content
//using element.textContent

//setting values

//Chanaging appearance
input.value = "This is my new World";
let sub = document.querySelector("#submit");
let isdisabled = sub.getAttribute("disabled");
sub.setAttribute("disabled", false);
