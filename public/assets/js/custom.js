
function validateForm(event) {
    "use strict";
    event.preventDefault();
    const form = document.getElementById("create-page");
    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add("was-validated");
        return false;
    }

    return submitForm();
}

function submitForm() {
    const nameField = document.getElementById("name");
    const nameValue = nameField.value;
    console.log("nameValue :>> ", nameValue);
    clearForm();
    return;
}


function clearForm() {
    /**
     * reset inputs
     */

    const nameField = document.getElementById("name");
    nameField.value = ""
}