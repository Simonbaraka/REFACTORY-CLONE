/**
 * CLASSES AND OOP
 */

class Car {
  color = "Red";
  enginesize = "2000c";
  topspeed = 250;
}

// Sale Class creation
class Sale {
  id = 30;
  amountDue = 20000;
  purchaseDate = new Date().getFullYear;
  iscreditSale = true;

  //Creating a class constructor we use the keyword constructor
  constructor(id, amountDue, purchaseDate, iscreditSale) {
    this.id = id;
    this.amountDue = amountDue;
    this.purchaseDate = purchaseDate;
    this.iscreditSale = iscreditSale;
  }
}

//Creating an object of a car class
let car = new Car();
let sale = new Sale(9, 200, new Date("2026-09-09"), false);
let sale1 = new Sale(10, 4000, new Date("2026-10-09"), false);

//console.table(sale);
//console.table(sale1);

class ProcurementRecord {
  constructor(name, tonnage, totalcost) {
    this.name = name;
    this.tonnage = tonnage;
    this.totalcost = totalcost;
  }

  //Creating functions/method
  calculateUnitCost() {
    if (this.tonnage === 0) {
      throw new Error("Please provide tonnage above 0");
    }
    return this.totalcost / this.tonnage;
  }

  save() {
    function mockSave2Db(tableName, productName, totalcost) {
      console.log(
        `We are mocking the procurement ${productName} to the database`
      );
    }

    mockSave2Db("Mazie", "Banana", 30000);
  }
}

let procurement = new ProcurementRecord("Maize", 1500, 100000);

try {
  console.log(procurement.calculateUnitCost()); // using the method to get unit cost
  console.log(procurement.name);
  console.log(procurement.tonnage);
  console.log(procurement.totalcost);
  procurement.save();
} catch (error) {
  console.log(error);
}

//PRACTICAL EXERCISE

class KGLProcurement {
  nameOfProduct;
  tonnageInKgs;
  dealerName;

  constructor(nameOfProduct, tonnageInKgs, dealerName) {
    this.nameOfProduct = nameOfProduct;
    this.tonnageInKgs = tonnageInKgs;
    this.dealerName = dealerName;
  }

  isValid() {
    if (this.tonnageInKgs < 1000) {
      return false;
    } else {
      return true;
    }
  }
}

let kgl = new KGLProcurement("Bananas", 600, "Dada");
console.log(kgl.isValid());
