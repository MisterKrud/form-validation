import { is } from "date-fns/locale";
import  "./styles.css"

const content = document.getElementById("content")

console.log('starting')

const form = document.querySelector("form");
const email = document.getElementById("email");
const state = document.getElementById("state");
const postcode = document.getElementById("postcode");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const ausStates = ['NSW', 'QLD', 'SA', 'VIC', 'WA', 'NT', 'ACT', 'TAS']

// const emailError = document.querySelector("#email + span.error")

const blankInputErrorMessage = "You didn't type anything!"


const inputs = document.querySelectorAll("input");

// const createInputErrorText = (currentInput, inputType) => {
//     const inputArea = currentInput.setAttribute("")
// }

// const isValidEmail = () =>{
//     const validity = email.value.length !== 0 && emailRegExp.test(email.value);
    
//     return validity
// };

const emailRule = "must be a valid email address"


inputs.forEach(inp => {
    inp.addEventListener("input", (event) => {
        inp.classList.remove("blank");
        const parent = inp.parentElement;
        const errorField = parent.querySelector("span");
        errorField.classList.add("active");
        if(inp.validity.valid) {
            errorField.textContent = "";
            errorField.className = "valid-field";
        } else {
            showError(inp, errorField)
        }
        
    })
})


// email.addEventListener("input", (event) =>{
//     email.classList.remove("blank");
//      emailError.classList.add("active");
//     if (email.validity.valid) {
//         console.log('email validity: '+isValidEmail.validity)
//         emailError.textContent = "";
//         emailError.className = "valid-field";
//     } else {
       
//        showError(email, emailError)
       
//     }
// })

const showError = (input, errorField, errorMessage) =>{
    console.log('error goes here');
    const inputParent = input.parentElement;
    const inputTitle = inputParent.querySelector("p");
    const inputName = input.getAttribute("name");
    errorField.classList.add("error");
    if (input.validity.valueMissing) {
        errorField.textContent = `This field cannot be empty`
    } else if (inputName === "password") {
        errorField.textContent = `Your password must be at least 8 characters`
    
       
    } else if (input.validity.typeMismatch) {
        errorField.textContent = `${inputTitle} must be a valid ${inputName}`     
    } else {
        errorField.textContent = `Problem with ${input.getAttribute("name")}`
    }
}

const isValidState = () => {
    const validity = state.value.length >=3;
   
     
    
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
    // password.classList.remove("blank");
    if (isValidPassword) {

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



