const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show error message when submit
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-data error";
  const errorMessage = formControl.querySelector("small");
  errorMessage.innerText = message;
};
//show success message when submit
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-data success";
};

// validate from email of user
const validateEmail = (input) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(email, "email is not valid");
  }
};
//get input name
const getinputname = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
//chcek each input empty or not
const checkEachInput = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `  ${getinputname(input)} is required`);
    } else {
      if (input === email) {
        validateEmail(email);
      } else {
        showSuccess(input);
      }
    }
  });
};
//check length of username and password
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getinputname(input)} must be at least ${min}`);
  } else if (input.value.length > max) {
    showError(input, `${getinputname(input)} must be less than ${max}`);
  } else {
    showSuccess(input);
  }
};
//check password match
const IsPasswordMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Password is not match");
  }
};
//eventlistener on submit to form
form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  checkEachInput([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  IsPasswordMatch(password, password2);
});
