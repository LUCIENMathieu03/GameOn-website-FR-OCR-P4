import input from "./constants.js";

// toggle the menu burger 
export const toggleMenu = () => {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

// launch modal form function
export const launchModal = () => {
  input.modalbg.classList.remove("bground--close");
  input.modalbg.classList.add("bground--open");

  input.content.classList.remove("content--close");
  input.content.classList.add("content--open");
};
// close modal form function
export function closeModal() {
  input.content.classList.replace("content--open", "content--close");
  input.modalbg.classList.replace("bground--open", "bground--close");
}

// verify input validity
export function verifyInput(input) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let dataErrorValue = "";
  const date = new Date();
  const todayDate =
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();

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
    (input.id == "birthdate" && compareDate(input.value, todayDate)) ||
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
const compareDate = (firstDate, secondDate) => {
  firstDate = firstDate.split("-").join("/");
  if (firstDate) {
    let date1 = new Date(firstDate).getTime();
    let date2 = new Date(secondDate).getTime();
    return date1 > date2;
  }
  return true;
};

// search for checked location
const locationChecked = () => {
  let result = true;
  for (let location of input.locations) {
    if (location.checked) {
      result = false;
    }
  }
  return result;
};
