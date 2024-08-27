const accountId = 12345;
let accountEmail = "ankit@gmail.com";
var accountPassword = "12345";
accountCity = "Bijnor";
let accountState;

//accountId = 2// not allowed

accountEmail = "ankit@gmail.com";
accountPassword = "34343434";
accountCity = "Bengaluru";

console.log(accountId);


/*
Prefer  not to use var
because  of issue in block scop and functional
*/
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
