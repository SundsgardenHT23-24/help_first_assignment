// THE ACCOUNT OBJECT SHOULD HAVE THE FOLLWOING PROPERTIES:
// expenses: an array that should hold all of your expenses, can be empty from start
// income: an array that should hold all of your income, can be empty from start
// addExpenses: a function that vill add an expense to the expenses array
// addIncome: a function that vill add an income to the income array
// listAllExpenses: a function that should list all the expenses in the expenses array
// getSummary: a function that should summarize your total balances. It should show your total
// income, your total expenses and also calculate your current balances (income - expenses).

// TODO
// 1. put the name property in the object as the datatype string DONE
// 2. create the menu and the different choices for the user DONE
// 3. take the input from the user and store it (save it) in a variable DONE
// 4. use the stored/saved variable to display the correct menu choice

// OBJECT
const account = {
  // name: the account holders name, should be a string
  name: "Helena",
};

/* console.log(
  "Please select from the menu:\n1) Add income\n2) Add expense\n3)List all expenses\n4) See total balance"
); */

// FUNCTION
function menu() {
  // the function menu() should only be responsible to show the different choices
  // for the user.
  const choice = parseFloat(
    prompt(
      "Please select from the menu:\n1) Add income\n2) Add expense\n3)List all expenses\n4) See total balance"
    )
  );

  console.log("Choice: " + choice);
}

menu();
