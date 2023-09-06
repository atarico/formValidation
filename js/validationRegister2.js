const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordConfirmation");

const showPassword = document.getElementById("showPassword");
const hidePassword = document.getElementById("hidePassword");

showPassword.addEventListener("click", () => {
  showPassword.classList.add("none");
  hidePassword.classList.remove("none");

  password.type = "text";
});

hidePassword.addEventListener("click", () => {
  showPassword.classList.remove("none");
  hidePassword.classList.add("none");

  password.type = "password";
});

username.addEventListener("blur", () => {
  validateUsername();
});

email.addEventListener("blur", () => {
  validateEmail();
});

password.addEventListener("blur", () => {
  validatePassword();
});

passwordConfirmation.addEventListener("blur", () => {
  validatePasswordConfirmation();
});

form.addEventListener("submit", (event) => {
  /* event.preventDefault(); */
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("ok");
};

const isValidEmail = (email) => {
  const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return regExp.test(String(email).toLowerCase());
};

const setOk = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("ok");
  inputControl.classList.remove("error");
};

const validateUsername = () => {
  const usernameValue = username.value.trim();

  if (usernameValue === "") {
    setError(username, "Debe completar este campo");
  } else {
    setOk(username);
  }
};

const validateEmail = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Debe completar este campo");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Email inválido");
  } else {
    setOk(email);
  }
};

const validatePassword = () => {
  const passwordValue = password.value.trim();

  if (passwordValue === "") {
    setError(password, "Debe completar este campo");
  } else if (passwordValue.length < 8) {
    setError(password, "La contraseña debe tener al menos 8 caracteres");
  } else {
    setOk(password);
  }
};

const validatePasswordConfirmation = () => {
  const passwordValue = password.value.trim();
  const passwordConfirmationValue = passwordConfirmation.value.trim();

  if (passwordConfirmationValue === "") {
    setError(passwordConfirmation, "Debe completar este campo");
  } else if (passwordConfirmationValue !== passwordValue) {
    setError(passwordConfirmation, "La contraseña no coincide");
  } else {
    setOk(passwordConfirmation);
  }
};

const validateInputs = () => {
  validateUsername();
  validateEmail();
  validatePassword();
  validatePasswordConfirmation();

  if (
    username.parentElement.classList.contains("ok") &&
    email.parentElement.classList.contains("ok") &&
    password.parentElement.classList.contains("ok") &&
    passwordConfirmation.parentElement.classList.contains("ok")
  ) {
    // Envía la data del formulario o realiza alguna acción
    console.log(username, email, password, passwordConfirmation);
  }
};
