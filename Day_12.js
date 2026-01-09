//cONSOLE OBJECT METHODS
/**
 * console.warn()
 * console.error()
 * console.info()-- checks if input is very large
 * console.assert()-- Mainly used in testing business rules without stopping the program/used to throw an error when a condition is met
 * console.table() -- Shows organised data in table form
 * console.dir(object) --focuses the ooutput to be recognised as js
 *
 *
 */
let input;

if (input == undefined) {
  console.error("User didnt provide input ");
}

console.info("User is wise");

//console.assert()
let total = 13_000_000;
console.assert(total < 10_000_000, "We have hit our limit today");

//console.table()
let locations2 = [
  {
    locationmade: "Mabara",
    Staff: 150,
    lauchdate: new Date("2026-01-01"),
    credit: true,
  },
  {
    locationmade: "Wakiso",
    Staff: 120,
    lauchdate: new Date("2026-11-11"),
    credit: false,
  },
  {
    locationmade: "Mabara",
    Staff: 150,
    lauchdate: new Date("2026-01-01"),
    credit: true,
  },
  {
    locationmade: "Wakiso",
    Staff: 1200,
    lauchdate: new Date("2026-11-11"),
    credit: false,
  },
  {
    locationmade: "Mabara",
    Staff: 1100,
    lauchdate: new Date("2026-01-01"),
    credit: true,
  },
  {
    locationmade: "Wakiso",
    Staff: 1200,
    lauchdate: new Date("2026-11-11"),
    credit: false,
  },
  {
    locationmade: "Mabara",
    Staff: 150,
    lauchdate: new Date("2026-01-01"),
    credit: true,
  },
  {
    locationmade: "Wakiso",
    Staff: 1000,
    lauchdate: new Date("2026-11-11"),
    credit: false,
  },
  {
    locationmade: "Mabara",
    Staff: 150,
    lauchdate: new Date("2026-01-01"),
    credit: true,
  },
  {
    locationmade: "Wakiso",
    Staff: 120,
    lauchdate: new Date("2026-11-11"),
    credit: false,
  },
  {
    locationmade: "Mabara",
    Staff: 1600,
    lauchdate: new Date("2026-01-01"),
    credit: true,
  },
  {
    locationmade: "Wakiso",
    Staff: 120,
    lauchdate: new Date("2026-11-11"),
    credit: false,
  },
  {
    locationmade: "Mabara",
    Staff: 150,
    lauchdate: new Date("2026-01-01"),
    credit: true,
  },
  {
    locationmade: "Wakiso",
    Staff: 120,
    lauchdate: new Date("2026-11-11"),
    credit: false,
  },
];

console.table(locations2);
console.table(locations2[2]);

let branch = {
  locationmade: "Wakiso",
  Staff: 120,
  lauchdate: new Date("2026-11-11"),
  credit: false,
  payment: { target: "MOMO", status: "Pending" },
};
console.dir(branch);

//console.count(label)

/**
 * PERFORMANACE TIMING
 * .time()
 * .timeEnd()
 */

console.time("Reduce Method");
let sumofstaff = locations2.reduce((curr, obj) => curr + obj.Staff, 0);
console.timeEnd("Reduce Method");

console.time("Loop Method");
let totalStaff = 0;
for (let i = 0; i < locations2.length; i++) {
  totalStaff += locations2[i].Staff;
}
console.timeEnd("Loop Method");

/**
 * EXERCISE TIME
 */

let salesObject = [
  { item: "Cereals", amount: 10000, buyerName: "Dada", AmountDue: 30000 },
  { item: "Millet", amount: 20000, buyerName: "Solomon", AmountDue: 40000 },
  { item: "Tomatoes", amount: 500, buyerName: "Jabbe", AmountDue: 50000 },
];

console.table(salesObject);
console.log(salesObject);

//GETTING SUM OF NUMBERS FROM 1-10000
console.time("LoopTime");
let ArrayNum = [];
let num = 0;
for (let i = 0; i <= 10000; i++) {
  num += i;
  ArrayNum.push[i];
}
console.log(num);
console.timeEnd("LoopTime");

let reduceMethod = ArrayNum.reduce((curr, next) => curr + next, 0);
console.log(reduceMethod);
