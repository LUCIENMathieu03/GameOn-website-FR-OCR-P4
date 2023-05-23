// DOM Elements
const menuBurger = document.querySelector(".icon");
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
const closeBtn = document.querySelector(".btn-close");
const thanksModal = document.querySelector(".thanks");

const input = {
  menuBurger,
  modalbg,
  modalBtn,
  formData,
  closeModalBtn,
  content,
  submitBtn,
  firstName,
  lastName,
  email,
  birthdate,
  quantity,
  locations,
  termsCondition,
  closeBtn,
  thanksModal,
};

export default input;
