function getTextElemenById (elementId){

    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueByID(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText=value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElemenById("phone-total")
    const currentCaseTotal = getTextElemenById("case-total")
    const currentSubTotal = currentPhoneTotal+currentCaseTotal;

    setTextElementValueByID("sub-total", currentSubTotal)

    const taxAmountString  = (currentSubTotal*0.1).toFixed(2)
    const taxAmount = parseFloat(taxAmountString)
    setTextElementValueByID("tax-amount",taxAmount);

    const finalAmount = currentSubTotal+taxAmount;
    setTextElementValueByID("final-total",finalAmount);
}