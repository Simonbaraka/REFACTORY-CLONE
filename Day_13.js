/**
 * ERROR HANDLING-- Helps a system from crashing
 * USE OF TRY-- CATCH BLOCK
 * error types
 * Syntax erros-- Incorrect use of the language
 * Reference errors--Comes from using a variable that has not yet been declared
 * Type error-Occurs when you use a method on a value with a different type
 * Range error-- Accessing an element with a non existant range
 *
 * BUSINESS AND TECHNICAL ERRORS
 *
 */

function login(user, password) {
  isDataBaseOpen = true;
  if (user.length < 6) {
    throw new Error("User name must be atleast 8 characters");
  }
  return user == password;
}
try {
  if (typeof username === "string") {
    if (true) {
      let username = 30;
      username.toUpperCase();
    }
  }
} catch (error) {
  console.log(error);
} finally {
  isDataBaseOpen = false;
}

//THE THROW STATEMENT
function canSeeTotalRevenue(userRole) {
  let decision = userRole == "Admin" || userRole == "Manager";

  if (decision === false) {
    throw new Error("You are not authorized to login in ");
  }
  return decision;
}

//console.log(canSeeTotalRevenue("Sales_Manager"));

function converter(inputter) {
  let numb = Number(inputter);
  if (isNaN(inputter)) {
    throw new Error("This is not a number");
  }
  return numb;
}

console.log(converter("500"));

function tonnageChecker(inputter) {
  if (inputter < 1000) {
    throw new Error("Explain why tonnage is low this year");
  }
  return inputter;
}

console.log(tonnageChecker(1000));
