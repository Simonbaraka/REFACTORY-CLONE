let price = 30000;
let name = "   Wayase";

console.log(price);
console.log(name);

if (price > 30000) {
  console.error("Price is too high");
} else {
  console.log("Price is affordable");
}

let locations = [
  { team: "Mancheser United", Manager: "Non", Year: "2013" },
  { team: "Arsenal", Manager: "Arteta", Year: "2004" },
  { team: "Chelsea", Manager: "Non", Year: "2021" },
  { team: "Liverpool", Manager: "Arne Slot", Year: "2025" },
];

console.table(locations);
console.table(locations[0]);

let salesObject = [
  { item: "Cereals", amount: 10000, buyerName: "Dada", AmountDue: 30000 },
  { item: "Millet", amount: 20000, buyerName: "Solomon", AmountDue: 40000 },
  { item: "Tomatoes", amount: 500, buyerName: "Jabbe", AmountDue: 50000 },
];

console.log(salesObject);
console.dir(salesObject);
