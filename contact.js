const form = document.getElementById("contactForm");
const nameInput = document.getElementById("contactName");
const emailInput = document.getElementById("contactEmail");
const subjectInput = document.getElementById("contactSubject");
const messageInput = document.getElementById("contactMessage");
const successMessage = document.getElementById("successMessage");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clearErrors() {
  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";

  nameInput.classList.remove("error");
  emailInput.classList.remove("error");
  subjectInput.classList.remove("error");
  messageInput.classList.remove("error");
}

function validateField(input, errorElement, validationFn) {
  const errorMessage = validationFn(input.value);

  if (errorMessage) {
    errorElement.textContent = errorMessage;
    input.classList.add("error");
    return false;
  } else {
    errorElement.textContent = "";
    input.classList.remove("error");
    return true;
  }
}

const validateName = (value) => {
  if (!value.trim()) {
    return "Full name is required";
  }
  return "";
};

const validateEmail = (value) => {
  if (!value.trim()) {
    return "Email address is required";
  }
  if (!emailRegex.test(value)) {
    return "Please enter a valid email address (e.g., name@example.com)";
  }
  return "";
};

const validateSubject = (value) => {
  if (!value.trim()) {
    return "Subject is required";
  }
  return "";
};

const validateMessage = (value) => {
  if (!value.trim()) {
    return "Message is required";
  }
  if (value.trim().length < 10) {
    return "Message must be at least 10 characters long";
  }
  return "";
};

nameInput.addEventListener("blur", () => {
  validateField(nameInput, nameError, validateName);
});

emailInput.addEventListener("blur", () => {
  validateField(emailInput, emailError, validateEmail);
});

subjectInput.addEventListener("blur", () => {
  validateField(subjectInput, subjectError, validateSubject);
});

messageInput.addEventListener("blur", () => {
  validateField(messageInput, messageError, validateMessage);
});

nameInput.addEventListener("input", () => {
  if (nameError.textContent) {
    nameError.textContent = "";
    nameInput.classList.remove("error");
  }
});

emailInput.addEventListener("input", () => {
  if (emailError.textContent) {
    emailError.textContent = "";
    emailInput.classList.remove("error");
  }
});

subjectInput.addEventListener("input", () => {
  if (subjectError.textContent) {
    subjectError.textContent = "";
    subjectInput.classList.remove("error");
  }
});

messageInput.addEventListener("input", () => {
  if (messageError.textContent) {
    messageError.textContent = "";
    messageInput.classList.remove("error");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  successMessage.style.display = "none";

  clearErrors();

  const isNameValid = validateField(nameInput, nameError, validateName);
  const isEmailValid = validateField(emailInput, emailError, validateEmail);
  const isSubjectValid = validateField(
    subjectInput,
    subjectError,
    validateSubject
  );
  const isMessageValid = validateField(
    messageInput,
    messageError,
    validateMessage
  );

  if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
    successMessage.style.display = "block";

    form.reset();

    successMessage.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  } else {
    if (!isNameValid) {
      nameInput.focus();
    } else if (!isEmailValid) {
      emailInput.focus();
    } else if (!isSubjectValid) {
      subjectInput.focus();
    } else if (!isMessageValid) {
      messageInput.focus();
    }
  }
});
