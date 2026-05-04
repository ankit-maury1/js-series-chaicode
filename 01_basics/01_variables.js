const accountId = "92832";
let accountEmail = "ankit@google.com";
var accountPassword = "12345";
accountCity = "Delhi"; //Not good
let accountState; //Declared only but not defined (undefined)

// accountId=12 //Changes Not allowed in const. TypeError: Assignment to constant variable.

accountEmail = "ankit@gc.com";
accountPassword = "54321";
accountCity = "Mumbai";
/* console.log(accountId)
 console.log(accountEmail)
 console.log(accountPassword)
 console.log(accountCity)
*/
/* var is not used widely nowdays because it has a problem of scope when changing in another file like accountId then it changes all the accountId in any files that is a problem.
don't use var because of block and functional scope */
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
