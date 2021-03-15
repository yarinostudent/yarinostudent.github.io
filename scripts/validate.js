const form = document.querySelector('.contact-form');
const fname = document.querySelector('#fname');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const comment = document.querySelector('#comment');

function showError(input, msg) {
    const formControl = input.parentElement;
    formControl.className = "form-group error";
    const small = formControl.querySelector('small');
    small.innerText = msg;
    console.log(formControl);
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-group success";
}


form.addEventListener('submit', function (e) {
    console.log('clucked');
    e.preventDefault();
    if (fname.value === "") {
        showError(fname, "Please enter your name");
    } else {
        showSuccess(fname);
    }
    if (phone.value === "") {
        showError(phone, "Please enter your phone number");
    } else {
        showSuccess(phone);
    }
    if (email.value === "") {
        showError(email, "Please enter a email");
    } else {
        showSuccess(email);
    }
    if (comment.value === "") {
        showError(comment, "Please write a message");
        comment.style.borderColor = "crimson";
    } else {
        showSuccess(comment);
    }
});