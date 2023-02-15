/*
Note: kono ekta value ke sum kore onno element a show korar jonne duita kaj korte hy. first sekhane show korabo take dhore ante hbe r je value ta add hobe take inner text hisebe set korte hbe.
*/
// common get input field value
function inputElementById(inputId) {
    const inputElement = document.getElementById(inputId);
    const getInputValue = inputElement.value;
    const getInputNumber = parseInt(getInputValue);
    inputElement.value = '';
    return getInputNumber;
}
// get the showing id
function currentElementById(currentElement) {
    const getCurrentElement = document.getElementById(currentElement).innerText;
    const currentElementNumber = parseInt(getCurrentElement);
    return currentElementNumber;
}
// add or set the total value
function setElementById(currentElement, newTotal) {
    const setElement = document.getElementById(currentElement);
    setElement.innerText = newTotal;
}
document.getElementById("calculate-btn").addEventListener('click', function () {
    // my total cash or income value
    const myTotalBudget = inputElementById("income");

    // my food cost
    const myFoodCost = inputElementById("food");

    // my rent cost
    const myRentCost = inputElementById("rent");

    // my clothes cost
    const myClothesCost = inputElementById("clothes");

    // my Total Expense
    const totalExpense = myFoodCost + myRentCost + myClothesCost;
        // validation if the user cost is over than budget
        if(myTotalBudget < totalExpense){
            alert("wrong");
            return;
        }
    // set the total expense
    setElementById("total-expense", totalExpense);

    // decrase the income value by daily cost and cut the total balance for cost
    const totalEx = currentElementById("total-expense");
    const totalBalance = myTotalBudget - totalEx;
    // set the total balance
    setElementById("balance", totalBalance);
});
// saving button click handler
document.getElementById("save-btn").addEventListener('click', function () {
    // find the saving value and set into saving, finally set remaining balance
    const mySaving = inputElementById("save");

    // my current total balance and find saving amount
    const totalCurrentBalance = currentElementById("balance");

    const savingPercentage = mySaving / 100;
    const savingAmount = totalCurrentBalance * savingPercentage;
    const remainingBalance = totalCurrentBalance - savingAmount;
    // set saving balance
    setElementById("saving-amount", savingAmount);
    // set remaining balance
    setElementById("remaining-balance", remainingBalance);
})