import { MensajeError } from "../class/MensajeError.js";
import { Form } from "../class/Form.js";

const formulario = document.querySelector(".formcontato__form");
const inputs = document.querySelectorAll("[data-tipo]");
const mensajeError = document.querySelectorAll(
  ".formcontato__input__error__mensaje"
);

const formData = new Form();

const msjVacios = new MensajeError(
  "Por favor ingrese un nombre y apellido válidos",
  "Por favor ingrese una dirección de email válida",
  "Por favor ingrese un asunto válido",
  "Por favor ingrese un mensaje válido"
);

const msjErroneos = new MensajeError(
  "El nombre y apellido deben contener sólo letras y debe tratarse de al menos dos palabras separadas",
  "El mail debe contener sólo símbolos permitidos universalmente",
  "El asunto debe contener de 3 a 50 caracteres válidos",
  "El mensaje debe contener de 3 a 300 caracteres válidos"
);

const expresiones = {
  nombre: "^([a-zA-Z]+[',.-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[',.-]?[a-zA-Z ]+)+$",
  email: "^([a-z0-9]+)[._-]?([a-z0-9]?)+[@][a-z]+[.][a-z]+[.]?[a-z]+$",
  asunto: "[a-zA-Z\s\W]+",
  mensajes: "[a-zA-Z\s\W]+",
};

const showError = (input, index, element, msj, formulario) => {
  input.classList.remove("formcontato__form__border__green");
  input.classList.add("formcontato__form__border__red");
  element[index].textContent = msj[input.dataset.tipo];
  formulario[input.dataset.tipo] = "";
};

const hideError = (input, index, element, formulario) => {
  input.classList.remove("formcontato__form__border__red");
  input.classList.add("formcontato__form__border__green");
  element[index].textContent = "";
  formulario[input.dataset.tipo] = input.value;
};

inputs.forEach((input, index) => {
  input.addEventListener("blur", () => {
    validarExistencia(input, index);
  });
});

const validarExistencia = (input, index) => {
  if (input.value == "") {
    showError(input, index, mensajeError, msjVacios, formData);
  } else {
    hideError(input, index, mensajeError, formData);
    validarExpresion(input, index);
  }
};

const validarExpresion = (input, index) => {
  const expReg = new RegExp(expresiones[input.dataset.tipo]);
  if (!expReg.test(input.value)) {
    showError(input, index, mensajeError, msjErroneos, formData);
  } else {
    hideError(input, index, mensajeError, formData);
  }
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    formData.nombre !== "" &&
    formData.email !== "" &&
    formData.asunto !== "" &&
    formData.mensajes !== ""
  ) {
    window.open(`mailto:maxi.omr01@gmail.com?subject=${formData.asunto}&body=${formData.mensajes}`);
    inputs.forEach((input) => {
      input.classList.remove("formcontato__form__border__green");
    });
    formulario.reset();
  } else {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Ocurrió un error. Por favor revise los datos ingresados y vuelva a intentarlo.",
    });
  }
});
