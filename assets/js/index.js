const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
// strat test 

function convert() {
    var amount = document.getElementById("dollar").value,
        massege = document.getElementById("massege");

    if (amount === "") {
        massege.innerHTML = "The field must not be empty";
    } else if (Number(amount)) {
        massege.innerHTML = "The field must not contain numbers";
    }
}