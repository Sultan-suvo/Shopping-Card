function updatePhoneNumber(inCrease) {
    const phoneNumebrField = document.getElementById("phone-input-field");
    const phoneNumberString = phoneNumebrField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if (inCrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumebrField.value = newPhoneNumber;
    return newPhoneNumber;
}


function updatePhoneTotalPrice(newPhoneNumber){
    
    const phoneTotalPrice = newPhoneNumber*1219;
    const phoneTotalElement = document.getElementById("phone-total")
    phoneTotalElement.innerText=phoneTotalPrice;
}



document.getElementById("btn-phone-plus").addEventListener("click", function () {

    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal()
})

document.getElementById("btn-phone-minus").addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber)

    calculateSubTotal()
})
