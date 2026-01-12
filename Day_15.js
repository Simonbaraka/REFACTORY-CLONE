/**
 * Account Name -Green Elephant Backpackers
 * Account Number-62257439341
 * Account Type-Current Account
 * Banck Name-First National Bank
 * Branch Code-250655
 * Swift Code- FIRNZAJJXXX
 * Reference-15831
 * stay@greenelephant.co.za
 *
 * INHERITANCE IN JAVASCRIPT
 */

//PARENT CLASSS
class KGLSale {
  constructor(produceName, totalcost, AmountPaid, SaleDate) {
    this.AmountPaid = AmountPaid;
    this.SaleDate = new Date();
    this.totalcost = totalcost;
    this.produceName = produceName;
  }
  getDetails() {
    console.log(
      `Produce Name: ${this.produceName}, Amount Paid: ${this.AmountPaid},Amount Due: ${this.totalcost},Sale Date: ${this.SaleDate}`
    );
  }
}

// CHILD CLASS OF KGLSALES
class KGLCredit extends KGLSale {
  constructor(
    produceName,
    totalcost,
    AmountPaid,
    SaleDate,
    iscreditSale,
    DueDate
  ) {
    //Calls the parent constructor and initialise the data correctly
    super(produceName, totalcost, AmountPaid, SaleDate);
    this.iscreditSale = iscreditSale;
    this.DueDate = new Date();
  }

  calculateDueDateInDays() {
    let CurrentDate = new Date();
    let timediff = this.DueDate.getTime() - CurrentDate.getTime();
    let daysDue = timediff / 1000 / 60 / 60 / 24;
    return daysDue;
  }
}

let sale = new KGLSale("Maize", 60000, 30000, new Date("2026-04-04"));
let credit = new KGLCredit(
  "Maize",
  60000,
  30000,
  new Date("2026-04-04"),
  true,
  new Date("2026-05-05")
);

//console.log(credit.getDetails());
//console.log(`The sale is due in ${credit.calculateDueDateInDays()}`);

//EXERCISE ONE
class SalesAgent {
  constructor(id, name, email, tel) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.tel = tel;
    this.isActive = true;
  }

  getAgentDetails() {
    return `ID:${this.id}\nName: ${this.name}\nEmail: ${this.email}\nTelephone: ${this.tel}`;
  }
}

class Manager extends SalesAgent {
  constructor(id, name, email, tel, Access) {
    super(id, name, email, tel);
    this.Access = Access;
  }

  CnaRecordProcurement() {
    return true;
  }
}

let parent = new SalesAgent(20, "Richard", "richard@gmail.com", 769);
console.log(parent.getAgentDetails());

//EXERCISE TWO

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return `The price is :${this.price}`;
  }
}

class Perishable extends Item {
  constructor(name, price, daysUntilExpiry) {
    super(name, price);
    this.daysUntilExpiry = daysUntilExpiry;
  }

  getPrice() {
    if (typeof this.daysUntilExpiry === "number") {
      return 1 / this.daysUntilExpiry;
    }
  }
}
