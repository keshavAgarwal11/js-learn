const accountId = 1443635;
let accountEmail = "keshav@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur";
let accountState;
// accountId = 2 not allowed
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional
scope

*/
 accountEmail = "rahul@gmail.com"
 accountPassword = "67891"
accountCity = "bokaro";
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])