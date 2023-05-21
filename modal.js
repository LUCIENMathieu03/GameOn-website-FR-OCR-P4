function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close");
const content = document.querySelector(".content");
const submitBtn = document.querySelector(".btn-submit");
// DOM Elements //form input element
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const locations = document.getElementsByName("location");
const termsCondition = document.querySelector("#checkbox1");
const closebtn = document.querySelector(".btn-close");
const thanksModal = document.querySelector(".thanks");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));
closebtn.addEventListener("click", closeModal);

// launch modal form function
function launchModal() {
  modalbg.classList.remove("bground--close");
  modalbg.classList.add("bground--open");

  content.classList.remove("content--close");
  content.classList.add("content--open");
}
// close modal form function
function closeModal() {
  content.classList.replace("content--open", "content--close");
  modalbg.classList.replace("bground--open", "bground--close");
}

// input event listener
firstName.addEventListener("blur", () => verifyInput(firstName));
lastName.addEventListener("blur", () => verifyInput(lastName));
email.addEventListener("blur", () => verifyInput(email));
birthdate.addEventListener("blur", () => verifyInput(birthdate));
quantity.addEventListener("blur", () => verifyInput(quantity));

// we check all input before submit
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const allInput = [
    firstName,
    lastName,
    email,
    birthdate,
    quantity,
    locations[0], // We give the first child just to have a input to give to the function (we can give any child)
    termsCondition,
  ];

  let formIsGood = true;

  for (input of allInput) {
    verifyInput(input);
    formIsGood = formIsGood && true && verifyInput(input);
  }

  if (formIsGood) {
    thanksModal.classList.remove("thanks--unvisible");
  } else {
    console.log("Boouuuuuuuuh");
  }
});

// Verify input validity
function verifyInput(input) {
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let dataErrorValue = "";
  const date = new Date();
  const todayDate =
    date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate();

  switch (input.name) {
    case "first":
      input.value = input.value.trim();
      dataErrorValue =
        "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
      break;

    case "last":
      input.value = input.value.trim();
      dataErrorValue =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom";
      break;

    case "email":
      input.value = input.value.trim();
      dataErrorValue = "Veuillez rentrer une adresse email valide";
      break;

    case "birthdate":
      dataErrorValue = "Vous devez rentrer une date de naissance valide";
      break;

    case "quantity":
      dataErrorValue = "Veuillez rentrer un nombre";
      break;

    case "location":
      dataErrorValue = "Veuillez choisir une ville";
      break;

    case "checkbox1":
      dataErrorValue = "Veuillez accepter les condition d'utilisation";
      break;

    default:
      dataErrorValue = "Il y a une erreur";
  }

  if (
    (input.value.length < 2 && (input.id == "first" || input.id == "last")) ||
    (input.id == "email" && !emailRegex.test(input.value)) ||
    (input.id == "birthdate" &&  compareDate(input.value, todayDate) ) ||
    (input.id == "quantity" && input.value == "") ||
    (input.name == "location" && locationChecked()) ||
    (input.id == "checkbox1" && !input.checked)
  ) {
    input.parentNode.setAttribute("data-error-visible", "true");
    input.parentNode.setAttribute("data-error", dataErrorValue);
    return false;
  } else {
    input.parentNode.setAttribute("data-error-visible", "false");
    return true;
  }
}

// check if the birth date is superior to the actual date 
function compareDate(d1, d2) {
  d1 = d1.split("-").join("/");
  if (d1) {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();
    return date1 > date2;
  }
  return true;
}

// search for checked location
function locationChecked() {
  let result = true;
  for (let location of locations) {
    if (location.checked) {
      result = false;
    }
  }
  return result;
}
