function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
 const inputAmountText = inputField.value;
 const amountValue = parseFloat(inputAmountText);
 inputField.value = "";
 return amountValue;
};

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText)
    totalElement.innerText = previousTotal + amount;
};
 
function getCurrentBalance() {
    const totalBalance = document.getElementById('total-balance')
    const totalBalanceText = totalBalance.innerText;
    const previousBalanceTotal = parseFloat(totalBalanceText);
    return previousBalanceTotal;
};

function updateBalance(amount, isAdd) {
const totalBalance = document.getElementById('total-balance');
const previousBalanceTotal = getCurrentBalance();
if (isAdd == true) {
totalBalance.innerText = previousBalanceTotal + amount;
}

else {
    totalBalance.innerText = previousBalanceTotal - amount;
}
};


document.getElementById('deposit-btn').addEventListener('click', function(){
const depositAmount = getInputValue('deposit-amount');
if (depositAmount > 0){
    updateTotalField('total-deposit', depositAmount);
    updateBalance(depositAmount, true);
}
});


document.getElementById('withdraw-btn').addEventListener('click', function(){
const withdrawAmount =  getInputValue("withdraw-amount");
const currentBalance = getCurrentBalance();
if(withdrawAmount > 0 && withdrawAmount < currentBalance){
updateTotalField('total-withdraw', withdrawAmount);
updateBalance(withdrawAmount, false);
}
if( withdrawAmount > currentBalance) {
    alert("you have not enough money");
}
 
});