class User {
  constructor(userPic, name, email, password, balance, transactionHistory) {
    this.userPic = userPic;
    this.name = name;
    this.email = email;
    this.password = password;
    this.balance = balance;
    this.transactionHistory = transactionHistory;
  }
}

export default User;
