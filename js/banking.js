// get the deposit and withdraw money
function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const convertInputValue = parseFloat(inputFieldValue);
    // clear the input 
    inputField.value = '';
    return convertInputValue;
};

// get and set the deposit and withdraw Money 
function updateAmount(amount, previousdollar) {
    const dollarElement = document.getElementById(amount);
    const dollarElementText = dollarElement.innerText;
    const converDollarElement = parseFloat(dollarElementText);
    // set updated amount
    const updatedDollar = previousdollar + converDollarElement;
    dollarElement.innerText = updatedDollar;
};

// get current Balance 
function getCurrentBalance() {
    const previousBalance = document.getElementById('account-balance');
    const previousBalanceText = previousBalance.innerText;
    const convertPreviousBalance = parseFloat(previousBalanceText);
    return convertPreviousBalance;
};

// get and update total balance 
function updateBalance(balance, isPositve) {
    // debugger;
    const previousBalance = document.getElementById('account-balance');
    /* const previousBalanceText = previousBalance.innerText;
    const convertPreviousBalance = parseFloat(previousBalanceText); */
    const convertPreviousBalance = getCurrentBalance();
    // set balance 
    if (isPositve == true) {
        const totalBalance = convertPreviousBalance + balance;
        previousBalance.innerText = totalBalance;
    } else {
        const totalBalance = convertPreviousBalance - balance;
        previousBalance.innerText = totalBalance;
    }
};

// error message 
function errorMessage(errorId) {
    // debugger;
    const errorElement = document.getElementById(errorId)
    errorElement.innerText = 'Error! Please give a Valid Amount'

};

function errorRemove(errorId) {
    const errorElement = document.getElementById(errorId)
    errorElement.innerText = ''

};

function balanceError(errorId) {
    const errorElement = document.getElementById(errorId)
    errorElement.innerText = "Oops! You can't withdraw Monay more than your total balance"
}

function balanceErrorRemove(errorId) {
    const errorElement = document.getElementById(errorId)
    errorElement.innerText = ""
}


// deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const inputAmount = getInput('deposit-input');
    if (inputAmount > 0) {
        updateAmount('diposit-total', inputAmount);
        updateBalance(inputAmount, true);
    };

    if (inputAmount < 0) {
        errorMessage('deposit-error')
    } else {
        errorRemove('deposit-error')
    }

});

// Withdraw 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const inputAmount = getInput('withdraw-input');
    const currentBalance = getCurrentBalance();
    if ((inputAmount > 0) && (inputAmount < currentBalance)) {
        updateAmount('withdraw-total', inputAmount);
        updateBalance(inputAmount, false);
    }
    debugger;

    if ((inputAmount > 0) && (inputAmount > currentBalance)) {
        balanceError('withdraw-balance-error');
    } else {
        balanceErrorRemove('withdraw-balance-error')
    }

    if (inputAmount < 0) {
        errorMessage('withdraw-error')
    } else {
        errorRemove('withdraw-error')
    }
});