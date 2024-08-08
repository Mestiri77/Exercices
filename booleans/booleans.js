//ESSENTIAL
// 1.Write a function called returnTrue that takes no parameters and returns true when invoked.

//3.Write a function called isEven that takes a number as a parameter and returns true if the number is even and false if it is odd.

const isEven = number => {
  if (number % 2 === 0) return true;
  else return false;
};

//5.Write a function called isGreaterThan10 that takes a number as a parameter and returns true if the number is greater than 10 and false if it is not.
let isGreaterThan10 = function(number) {
  if (number > 10) return true;
  else return false;
};
//6.Write a function called isLessThan30 that takes a number as a parameter and returns true if the number is less than 30 and false if it is not.

let isGreaterThan10TWO = number => (number > 10 ? true : false);

//4.Write a function called isValidPassword that takes a password as a parameter and returns true if that password is equal to or longer than 8 characters and false if the password is less than 8. HINT: Use “.length”.
let isValidPassword = password => {
  if (password.length >= 8) return true;
  else return false;
};

let isValidPasswordTWO= password => password.length >= 8? true : false
