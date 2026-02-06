/**Working with Node.js and MongoDB */

//exporting functions from one file top the other
class Sales {
  constructor(amount, item, currency, quality) {
    amount = amount;
    item = item;
    this.currency = currency;
    this.quality = quality;
  }

  getTotal() {
    return this.amount;
  }
  getUnitCost() {
    if (this.quality === 0) return 0;
    return this.amount / this.quality;
  }
}

class CreditSale extends Sales {
  constructor(amount, item, currency, quality, duedate) {
    super(amount, item, currency, quality);
    this.duedate = new Date("2026-12-12");
  }
  getAmountDue() {
    return 0;
  }
}

const sales = new Sales(20000, "Maize", "zar", 20);
//console.table(sales);

//FILE AND SYSTEM INTERACTION

//file system (fs)allows access to the server storage
/**
 * Method when working with fs
 * ReadFile
 */
