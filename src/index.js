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

const isValidEmail = () =>{
    const validity = email.value.length !== 0 && emailRegExp.test(email.value);
    return validity
};

const isValidState = () => {
    const validity = ausStates.includes(state.value);
    return validity;
}

const isValidPostcode = () =>{
    const validity = postcode.value.length === 4;
    return validity;
}

const isValidPassword = () => {
    const validity = password.value.length >= 8 && passwordRegExp.test(password.value);
    return validity;
}


const passwordsMatch = () => {
    const validity = confirmPassword.value === password.value;
    return validity;
}


const validators = new Map([
    [email, {validate: isValidEmail, errorMsg: "Please enter a valid email"}],
    // [state, {validate: isValidState, errorMsg: "Please type"}],
    [postcode, {validate: isValidPostcode, errorMsg: "postcode error"}],
    [password, {validate: isValidPassword, errorMsg: "Password error"}],
    [confirmPassword, {validate: passwordsMatch, errorMsg: "Passwords match error"}],
])




validators.forEach((validation, inp) =>{
    const inputElement = document.getElementById(inp.getAttribute("id"));
    inputElement.addEventListener("input", (event) =>{
        inputElement.classList.remove("blank");
        const spanElement = inputElement.parentElement.querySelector("span");
        spanElement.classList.add("active");
       

        if(validation.validate(inp.value)) {
            setValidConditions(spanElement, inputElement)
        }
        else {
            showError(inputElement, spanElement);
        }
    })
})



const setValidConditions = (field, inp) => {
     field.textContent = "";
     field.classList.remove("active");
     inp.className = "valid-field";
}



const showError = (input, errorField) =>{
    errorField.className = "error active";
    input.className = "invalid-field";

    if(input.validity.valueMissing){
        errorField.textContent = "This field cannot be blank"
    } else {
        const inputField = validators.get(input);
        errorField.textContent = inputField.errorMsg
    }
}


const setToInvalid = (element) => {
    element.classList.add("invalid-field");
    element.classList.remove("valid-field");
}

const setToValid = (element) => {
    element.classList.remove("valid-field");
    element.classList.add("valid-field")
}








form.addEventListener("submit" , (event) => {
    isValidPassword();
    if (!email.validity.valid || !password.classList.contains("validated")) {
      
        event.preventDefault();
    }
})



