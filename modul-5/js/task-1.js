'use strict';
const Account = function(login, email) {
  // Аналог функции-конструктора

  this.login = login;
  this.email = email;

  // // Аналог Guest.prototype.getFullInfo
  // getInfo() {
  //   console.log(`
  //    Login ${this.login}, email${this.email}
  //   `);
  // }
};
Account.prototype.getInfo = function() {
  console.log(`
  //    Login: ${this.login}, email: ${this.email}
  //   `);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo();

const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo(); // Login: Poly, Email: poly@mail.com
