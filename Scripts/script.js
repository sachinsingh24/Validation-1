'use strict';
//variables
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const con_pass = document.getElementById('confirm-password');

// functions
const ShowError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
};
const ShowError_1 = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error-1';
  const small = formControl.querySelector('small');
  small.innerText = message;
};

const ShowSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control succuss';
};
const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function CheckPassword(inputtxt) {
  const paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if (inputtxt.match(paswd)) {
    return true;
  } else {
    return false;
  }
}

// Event-listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (username.value == '') {
    ShowError(username, 'Username is required');
  } else {
    ShowSuccess(username);
  }

  if (email.value == '') {
    ShowError(email, 'Email is required');
  } else if (!validateEmail(email.value)) {
    ShowError_1(email, 'Email is Not Valid');
  } else {
    ShowSuccess(email);
  }

  if (password.value == '') {
    ShowError(password, 'Password is required');
  } else if (CheckPassword(password.value) == false) {
    ShowError_1(password, `Provide Strong password`);
  } else {
    ShowSuccess(password);
  }

  if (con_pass.value == '') {
    ShowError(con_pass, 'Confirm Password is required');
  } else if (password.value !== con_pass.value) {
    ShowError_1(con_pass, `Confirm Password didn't Match`);
  } else {
    ShowSuccess(con_pass);
  }
});
