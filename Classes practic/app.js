class BankAccount {
    constructor(accountHolder, balance) {
      this.accountHolder = accountHolder; // Public property
      let _balance = balance; // Private property (using closure)
  
      // Getter
      this.getBalance = function () {
        return _balance;
      };
  
      // Setter
      this.deposit = function (amount) {
        if (amount > 0) {
          _balance += amount;
        } else {
          console.log("Invalid deposit amount");
        }
      };
    }
  }
  
  // Create an object
  const account = new BankAccount("Ali", 1000);
  console.log(account.getBalance()); // 1000
  account.deposit(500); // Adds 500 to balance
  console.log(account.getBalance()); // 1500
    