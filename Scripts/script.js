'use strict';
//variables
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const con_pass = document.getElementById('confirm-password');
const UserArr = [username, email, password, con_pass];

// functions

// report message as error
const ShowError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
};

// report message as error-2
const ShowError_1 = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error-1';
  const small = formControl.querySelector('small');
  small.innerText = message;
};
// report message as successfull validation.
const ShowSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control succuss';
};

// place first letter as caplital of id name
const message = (input) => {
  const errorMsg = input.id.replace(/-p/, 'P');
  return errorMsg.charAt(0).toUpperCase() + errorMsg.slice(1);
};

// check username value is satisfied or not
const checkUsername = (input, min, max) => {
  if (input.value.length < min) {
    ShowError_1(input, `${message(input)} Must be atleast ${min} Charecters`);
  } else if (input.value.length > max) {
    ShowError_1(
      input,
      `${message(input)} should not be more then ${max} Charecters`
    );
  } else {
    ShowSuccess(input);
  }
};

// check user email is satisfied or not 
const checkEmail = (input) => {
  var validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase().trim());
  };
  if (!validateEmail(input.value)) {
    ShowError_1(input, `Email is not Valid`);
  } else {
    ShowSuccess(input);
  }
};

// check user password is satisfied or not
const checkPassword = (input) => {
  const check = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if (input.value.match(check)) {
    ShowSuccess(input);
  } else {
    ShowError_1(
      input,
      `${message(
        input
      )} must be 7 Charecters including atleast one numerical and one special charecters `
    );
  }
};

// check confirm password are matching with password or not
const checkConfirmPass = (pass, con) => {
  if (pass.value !== con.value) {
    ShowError_1(con, `${message(con)} didn't Match`);
  } else {
    ShowSuccess(con);
  }
};

// check user input is given or not
const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value == '') {
      ShowError(input, `${message(input)} is required`);
    }
  });
};

// Event-listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkUsername(username, 5, 11);
  checkEmail(email);
  checkPassword(password);
  checkConfirmPass(password, con_pass);
  checkRequired(UserArr);
});
