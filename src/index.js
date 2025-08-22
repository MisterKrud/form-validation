import { is } from "date-fns/locale";
import  "./styles.css"

const content = document.getElementById("content")

console.log('starting')

const form = document.querySelector("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const postcode = document.getElementById("postcode");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const emailRegExp = "/^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;";
const passwordRegExp = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

const emailError = document.querySelector("#email + span.error")

const blankInputErrorMessage = "You didn't type anything!"

// const createInputErrorText = (currentInput, inputType) => {
//     const inputArea = currentInput.setAttribute("")
// }

const isValidEmail = () =>{
    const validity = email.ariaValueMax.length !== 0 && emailRegExp.test(email.value);
    
    return validity
};


email.addEventListener("input", (event) =>{
    email.classList.remove("blank");
    if (!isValidEmail) {
        console.log('email validity: '+isValidEmail.validity)
        emailError.textContent = "valid";
        emailError.className = "error";
    } else {
       showEmailError()
       
    }
})

const showEmailError = () =>{
    console.log('error goes here');
   
    if (email.validity.valueMissing) {
        emailError.textContent = blankInputErrorMessage
       
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Umm. That's not an email. Ok?"     
    } 
}

const isValidCountry = () => {
    const validity = country.value.length >=3;
    if (validity) {
        country.classList.add("validated");
    }
    return validity;
}

const isValidPostcode = () =>{
    const validity = postcode.length === 4;
    return validity;
}

const isValidPassword = () => {
    const validity = password.value.length >= 8 && passwordRegExp.test(password.value);
    return validity;
}

password.addEventListener("input", (event) => {
    password.classList.remove("blank");
    if (!isValidPassword) {

    }
})

const passwordsMatch = () => {
    const validity = confirmPassword.value === password.value;
    return validity;
}

form.addEventListener("submit" , (event) => {
    isValidPassword();
    if (!email.validity.valid || !password.classList.contains("validated")) {
      
        event.preventDefault();
    }
})



