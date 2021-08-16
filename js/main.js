function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmount = parseFloat(inputText)
    // clear the input field 
    inputField.value = '';
    return inputAmount;

}

function updateTotal(totalField, amount) {

    const previousTotal = document.getElementById(totalField);
    const previousTotalText = previousTotal.innerText
    const previousAmount = parseFloat(previousTotalText);

    const totalAmount = previousAmount + amount;
    previousTotal.innerText = totalAmount;
}

// diposit 

document.getElementById('deposit-button').addEventListener('click', function () {



    // get the diposit amount 

    /*     const currentDiposit = document.getElementById('deposit-input');
        const currentDipositText = currentDiposit.value;
        const currentDipositAmount = parseFloat(currentDipositText) */
    const currentDipositAmount = getInputValue('deposit-input')

    // get and update diposit amount 
    /* 
        const previousDiposit = document.getElementById('diposit-total');
        const previousDipositText = previousDiposit.innerText
        const previousDipositAmount = parseFloat(previousDipositText);

        const dipositTotalAmount = previousDipositAmount + currentDipositAmount;
        previousDiposit.innerText = dipositTotalAmount; */

    updateTotal('diposit-total', currentDipositAmount);


    // update Total Balance 

    const previousTotal = document.getElementById('account-balance');
    const previousTotalText = previousTotal.innerText;
    const previousTotalAmount = parseFloat(previousTotalText);

    const currentTotalBalance = previousTotalAmount + currentDipositAmount;

    previousTotal.innerText = currentTotalBalance;


});

// withdraw 

document.getElementById('withdraw-button').addEventListener('click', function () {
    /*
    // get withdraw amount 
    const currentWithdraw = document.getElementById('withdraw-input')
    const currentWithdrawText = currentWithdraw.value;
    const currentWithdrawAmount = parseFloat(currentWithdrawText); 
    */
    const currentWithdrawAmount = getInputValue('withdraw-input')

    // get and update withdraw amount 
    /*  
    const previousWithdraw = document.getElementById('withdraw-total')
    const previousWithdrawText = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText)
    const totalWithdrawAmount = previousWithdrawAmount + currentWithdrawAmount;
    previousWithdraw.innerText = totalWithdrawAmount; 
     */

    updateTotal('withdraw-total', currentWithdrawAmount)

    // reduce the total balance 
    const previousTotal = document.getElementById('account-balance');
    const previousTotalText = previousTotal.innerText;
    const previousTotalAmount = parseFloat(previousTotalText);

    const currentTotalBalance = previousTotalAmount - currentWithdrawAmount;

    previousTotal.innerText = currentTotalBalance;

})