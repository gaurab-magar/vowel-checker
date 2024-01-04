let inputValue = document.getElementById('datetimeInput');
let outputElement = document.querySelector('.result');
let button = document.getElementById('Calculate');

button.addEventListener('click',function(){
    var birthdate = inputValue.value;
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();

    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }
    outputElement.innerHTML = `Your Age is ${age}`
})

