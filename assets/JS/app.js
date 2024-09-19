let alertBtn = document.getElementById('alertBtn');
let submitBtn = document.getElementById('submitBtn');
let emailInput = document.getElementById('email');

let innerAlertEmail = document.getElementById('innerAlertEmail');
let alertSpace = document.getElementById('alertSpace');
let mainContainer = document.getElementById('mainContainer');
let alertContainer = document.getElementById('alertContainer');



submitBtn.addEventListener('click', function (e) {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    e.preventDefault(emailInput);

    if (emailInput.value === '' || !emailRegex.test(emailInput.value)) {
        alertSpace.innerHTML = 'Please enter your email correctly';
    }else {
        innerAlertEmail.innerHTML = emailInput.value;
        mainContainer.style.display = 'none';
        alertContainer.style.display = 'flex';
    }

});

alertBtn.addEventListener('click', function () {
    alertContainer.style.display = 'none';
    mainContainer.style.display = 'flex';
    emailInput.value = '';
});