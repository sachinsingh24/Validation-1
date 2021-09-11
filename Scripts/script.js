'use strict';

//variables
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirm-password');
const UserArr = [username, email, password, confirmpassword];

// functions

// report messages as error or success
const ShowMsg = (input, message, error) => {
  let formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  if (error == 1) {
    formControl.className = 'form-control error-1';
  } else if (error == 2) {
    formControl.className = 'form-control error';
  } else {
    formControl.className = 'form-control succuss';
  }
};

// place first letter as caplital of id name
const message = (input) => {
  const errorMsg = input.id.replace(/-p/, 'P');
  return errorMsg.charAt(0).toUpperCase() + errorMsg.slice(1);
};

// check username value is satisfied or not
const checkUsername = (input, min, max) => {
  if (input.value.length < min) {
    ShowMsg(input, `${message(input)} Must be atleast ${min} Charecters`, 1);
  } else if (input.value.length > max) {
    ShowMsg(
      input,
      `${message(input)} should not be more then ${max} Charecters`,
      1
    );
  } else {
    ShowMsg(input, '✔', 0);
  }
};

// check user email is valid or not
const checkEmail = (input) => {
  const email_Id =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email_Id.test(String(input.value).toLowerCase().trim())) {
    ShowMsg(input, '✔', 0);
  } else {
    ShowMsg(input, `Email is not Valid`, 1);
  }
};

// check user password is satisfied or not
const checkPassword = (input) => {
  const check = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if (input.value.match(check)) {
    ShowMsg(input, '✔', 0);
  } else {
    ShowMsg(
      input,
      `${message(
        input
      )} must be 7 Charecters including atleast one numerical and one special charecters `,
      1
    );
  }
};

// check confirm password are matching with password or not
const checkConfirmPass = (pass, con) => {
  if (pass.value !== con.value) {
    ShowMsg(con, `${message(con)} didn't Match`, 1);
  } else {
    ShowMsg(con, '✔', 0);
  }
};

// check user input is given or not
const checkRequired = (inputArr) => {
  inputArr.forEach((Arr) => {
    if (Arr.value == '') {
      ShowMsg(Arr, `${message(Arr)} is required`, 2);
    }
  });
};

// Event-listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkUsername(username, 5, 11);
  checkEmail(email);
  checkPassword(password);
  checkConfirmPass(password, confirmpassword);
  checkRequired(UserArr);
});
