function updateCaseNumber(isIncrease) {
    const inputField = document.getElementById("case-input-field");
    const inputFieldValueString = inputField.value;
    const previousCaseNumber = parseInt(inputFieldValueString);


    let newCaseNumber;

    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    inputField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("case-total");
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(true);

   updateCaseTotalPrice(newCaseNumber)

   calculateSubTotal()
})
document.getElementById("btn-case-minus").addEventListener("click", function () {
    const newCaseNumber= updateCaseNumber(false);
    
    updateCaseTotalPrice(newCaseNumber)

    calculateSubTotal()
})

