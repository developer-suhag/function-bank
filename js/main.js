// get the deposit and withdraw amount 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmount = parseFloat(inputText)
    // clear the input field 
    inputField.value = '';
    return inputAmount;

};
// get and set the deposit and withdraw amount
function updateTotal(totalField, amount) {

    const previousTotal = document.getElementById(totalField);
    const previousTotalText = previousTotal.innerText
    const previousAmount = parseFloat(previousTotalText);

    const totalAmount = previousAmount + amount;
    previousTotal.innerText = totalAmount;
};

// cureent balance 
function getCurrentBalance() {
    debugger;
    const previousTotal = document.getElementById('account-balance');
    const previousTotalText = previousTotal.innerText;
    const previousTotalAmount = parseFloat(previousTotalText);
    return previousTotalAmount;
}

// update total balance 

function updateBalance(amount, isAdd) {
    const previousTotal = document.getElementById('account-balance');
    /* const previousTotalText = previousTotal.innerText;
    const previousTotalAmount = parseFloat(previousTotalText); */
    const previousTotalAmount = getCurrentBalance();

    if (isAdd == true) {
        // const currentTotalBalance = previousTotalAmount + amount;
        // previousTotal.innerText = currentTotalBalance;
        previousTotal.innerText = previousTotalAmount + amount;

    } else {
        // const currentTotalBalance = previousTotalAmount - amount;
        // previousTotal.innerText = currentTotalBalance;
        previousTotal.innerText = previousTotalAmount - amount;
    }

    // previousTotal.innerText = previousTotalAmount + amount;



};

// diposit 

document.getElementById('deposit-button').addEventListener('click', function () {



    // get the diposit amount 

    /*     const currentDiposit = document.getElementById('deposit-input');
        const currentDipositText = currentDiposit.value;
        const currentDipositAmount = parseFloat(currentDipositText) */

    // get and update diposit amount 
    /* 
        const previousDiposit = document.getElementById('diposit-total');
        const previousDipositText = previousDiposit.innerText
        const previousDipositAmount = parseFloat(previousDipositText);

        const dipositTotalAmount = previousDipositAmount + currentDipositAmount;
        previousDiposit.innerText = dipositTotalAmount; */



    // update Total Balance 

    /*  const previousTotal = document.getElementById('account-balance');
    const previousTotalText = previousTotal.innerText;
    const previousTotalAmount = parseFloat(previousTotalText);

    const currentTotalBalance = previousTotalAmount + currentDipositAmount;

    previousTotal.innerText = currentTotalBalance; */
    const currentDipositAmount = getInputValue('deposit-input')


    if (currentDipositAmount > 0) {
        updateTotal('diposit-total', currentDipositAmount);
        updateBalance(currentDipositAmount, true)
    }


});

// withdraw 

document.getElementById('withdraw-button').addEventListener('click', function () {
    /*
    // get withdraw amount 
    const currentWithdraw = document.getElementById('withdraw-input')
    const currentWithdrawText = currentWithdraw.value;
    const currentWithdrawAmount = parseFloat(currentWithdrawText); 
    */

    // get and update withdraw amount 
    /*  
    const previousWithdraw = document.getElementById('withdraw-total')
    const previousWithdrawText = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText)
    const totalWithdrawAmount = previousWithdrawAmount + currentWithdrawAmount;
    previousWithdraw.innerText = totalWithdrawAmount; 
     */


    // reduce the total balance 
    /* const previousTotal = document.getElementById('account-balance');
    const previousTotalText = previousTotal.innerText;
    const previousTotalAmount = parseFloat(previousTotalText);

    const currentTotalBalance = previousTotalAmount - currentWithdrawAmount;

    previousTotal.innerText = currentTotalBalance; */
    const currentWithdrawAmount = getInputValue('withdraw-input');

    const currentBalance = getCurrentBalance();

    if (currentWithdrawAmount > 0 && currentWithdrawAmount < currentBalance) {
        updateTotal('withdraw-total', currentWithdrawAmount);
        updateBalance(currentWithdrawAmount, false);
    }

})