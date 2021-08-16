function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
 const inputAmountText = inputField.value;
 const amountValue = parseFloat(inputAmountText);
 inputField.value = "";
 return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText)
    totalElement.innerText = previousTotal + amount;
}

function updateBalance(amount,isAdd) {
    const totalBalance = document.getElementById('total-balance')
const totalBalanceText = totalBalance.innerText;

if (isAdd == true) {
    const previousBalanceTotal = parseFloat(totalBalanceText)
totalBalance.innerText = previousBalanceTotal + amount;
}

else {
    const previousBalanceTotal = parseFloat(totalBalanceText)
    totalBalance.innerText = previousBalanceTotal - amount;
}
}


document.getElementById('deposit-btn').addEventListener('click', function(){
const depositAmount = getInputValue('deposit-amount')
updateTotalField('total-deposit', depositAmount)
updateBalance(depositAmount, true);
});


document.getElementById('withdraw-btn').addEventListener('click', function(){
const withdrawAmount =  getInputValue("withdraw-amount")
 updateTotalField('total-withdraw', withdrawAmount)
updateBalance(withdrawAmount, false);
});