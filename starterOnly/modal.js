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
const closeModalBtn = document.querySelector(".close");
const content = document.querySelector(".content");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.classList.remove("bground--close");
  modalbg.classList.add("bground--open");

  content.classList.remove("content--close");
  content.classList.add("content--open");
}

// close modal form
function closeModal() {
  content.classList.replace("content--open" , "content--close");
  modalbg.classList.replace("bground--open", "bground--close");
  
}
