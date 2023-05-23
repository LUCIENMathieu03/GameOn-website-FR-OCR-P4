import input from "./constants.js";
import {
  toggleMenu,
  verifyInput,
  launchModal,
  closeModal,
} from "./functions.js";

export const listeners = () => {
  // Menu burger event
  input.menuBurger.addEventListener("click", toggleMenu);

  // launch modal event
  input.modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  // close modal event
  input.closeModalBtn.forEach((btn) =>
    btn.addEventListener("click", closeModal)
  );
  input.closeBtn.addEventListener("click", closeModal);

  // input event listener
  input.firstName.addEventListener("input", () => verifyInput(input.firstName));
  input.lastName.addEventListener("input", () => verifyInput(input.lastName));
  input.email.addEventListener("input", () => verifyInput(input.email));
  input.birthdate.addEventListener("input", () => verifyInput(input.birthdate));
  input.quantity.addEventListener("input", () => verifyInput(input.quantity));
  input.locations.forEach((location) => location.addEventListener("input", () => verifyInput(input.locations[0])));
  input.termsCondition.addEventListener("input", () => verifyInput(input.termsCondition));

  // we check all input before submit
  input.submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const allInput = [
      input.firstName,
      input.lastName,
      input.email,
      input.birthdate,
      input.quantity,
      input.locations[0], // We give the first child just to have a input to give to the function (we can give any child)
      input.termsCondition,
    ];

    let formIsGood = true;

    for (let inputs of allInput) {
      verifyInput(inputs);
      formIsGood = formIsGood && true && verifyInput(inputs);
    }

    if (formIsGood) {
      input.thanksModal.classList.remove("thanks--unvisible");
    } else {
      console.log("Boouuuuuuuuh");
    }
  });
};
